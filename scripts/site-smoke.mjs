import { pathToFileURL } from "node:url";

const REQUIRED_SECURITY_HEADERS = {
  "content-security-policy": /default-src 'self'/,
  "referrer-policy": /^strict-origin-when-cross-origin$/,
  "x-content-type-options": /^nosniff$/,
  "x-frame-options": /^DENY$/,
};

export function normalizeSmokeOrigin(value) {
  if (!value?.trim()) {
    throw new Error("A site origin is required.");
  }

  let url;

  try {
    url = new URL(value.trim());
  } catch {
    throw new Error("The site origin must be a valid absolute URL.");
  }

  const local =
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname === "::1";

  if (url.protocol !== "https:" && !(local && url.protocol === "http:")) {
    throw new Error("Use HTTPS, except for a local smoke-test origin.");
  }

  if (
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("The site origin must not include credentials or a path.");
  }

  return url.origin;
}

async function request(origin, pathname, expectedStatus) {
  const response = await fetch(new URL(pathname, origin), {
    headers: {
      accept: "text/html,application/json",
      "user-agent": "Accomp release smoke test",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(5_000),
  });

  if (response.status !== expectedStatus) {
    throw new Error(
      `${pathname} returned ${response.status}; expected ${expectedStatus}.`,
    );
  }

  return response;
}

export async function waitForHealth(origin, attempts = 40) {
  let lastError = new Error("The health endpoint did not become ready.");

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await request(origin, "/health", 200);
      const payload = await response.json();

      if (payload.status === "ok" && payload.service === "accomp") {
        return;
      }

      lastError = new Error("The health endpoint returned an unexpected body.");
    } catch (error) {
      lastError = error;
    }

    if (attempt < attempts) {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw lastError;
}

function verifySecurityHeaders(response, pathname) {
  for (const [name, pattern] of Object.entries(REQUIRED_SECURITY_HEADERS)) {
    const value = response.headers.get(name) ?? "";

    if (!pattern.test(value)) {
      throw new Error(`${pathname} is missing a valid ${name} header.`);
    }
  }
}

function verifyHomepage(html) {
  if (!/data-phase="10"/.test(html)) {
    throw new Error("Homepage does not identify the Phase 10 candidate.");
  }

  if ((html.match(/<h1\b/g) ?? []).length !== 1) {
    throw new Error("Homepage must render exactly one H1.");
  }

  if (/<form\b/i.test(html)) {
    throw new Error("Homepage unexpectedly contains a live form.");
  }

  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  const targets = [...html.matchAll(/href="#([^"]+)"/g)].map(
    (match) => match[1],
  );

  if (!targets.every((target) => ids.has(target))) {
    throw new Error("Homepage contains a broken hash destination.");
  }
}

export async function smokeSite(value) {
  const origin = normalizeSmokeOrigin(value);
  await waitForHealth(origin);

  const homepage = await request(origin, "/", 200);
  verifySecurityHeaders(homepage, "/");
  verifyHomepage(await homepage.text());

  for (const pathname of ["/privacy", "/terms"]) {
    const response = await request(origin, pathname, 200);
    verifySecurityHeaders(response, pathname);
    const html = await response.text();

    if (!/<h1\b/.test(html)) {
      throw new Error(`${pathname} does not render an H1.`);
    }
  }

  const health = await request(origin, "/health", 200);
  verifySecurityHeaders(health, "/health");

  if (health.headers.get("cache-control") !== "no-store") {
    throw new Error("/health must use Cache-Control: no-store.");
  }

  const robots = await request(origin, "/robots.txt", 200);
  const robotsText = await robots.text();

  if (!/^Sitemap: https?:\/\/.+\/sitemap\.xml$/m.test(robotsText)) {
    throw new Error("robots.txt is missing an absolute sitemap URL.");
  }

  const sitemap = await request(origin, "/sitemap.xml", 200);
  const sitemapText = await sitemap.text();

  for (const pathname of ["/privacy", "/terms"]) {
    if (!sitemapText.includes(pathname)) {
      throw new Error(`sitemap.xml is missing ${pathname}.`);
    }
  }

  const missing = await request(origin, "/phase-10-missing-route", 404);
  const missingHtml = await missing.text();

  if (
    !/<meta\b[^>]*(?:name="robots"[^>]*content="noindex"|content="noindex"[^>]*name="robots")[^>]*>/i.test(
      missingHtml,
    )
  ) {
    throw new Error("The not-found response is missing noindex.");
  }

  if (
    /<meta\b[^>]*(?:name="robots"[^>]*content="index, follow"|content="index, follow"[^>]*name="robots")[^>]*>/i.test(
      missingHtml,
    )
  ) {
    throw new Error("The not-found response has conflicting index metadata.");
  }

  return {
    origin,
    routes: 7,
  };
}

async function main() {
  const value = process.argv[2] ?? process.env.SMOKE_BASE_URL;
  const result = await smokeSite(value);

  console.log(
    `Production smoke passed for ${result.origin}: ${result.routes} routes checked.`,
  );
}

const entryUrl = process.argv[1] ? pathToFileURL(process.argv[1]).href : null;

if (entryUrl === import.meta.url) {
  await main();
}
