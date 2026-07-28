import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "https://accomp.test"), {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "accomp.test",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Phase 10 marketing page", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();

  assert.match(html, /<html[^>]*lang="en"/i);
  assert.match(html, /<title>Adventure Together · Accomp<\/title>/i);
  assert.match(html, /data-phase="10"/);
  assert.match(html, /Adventure together\./i);
  assert.match(html, /Make one plan\. Bring everyone in\./);
  assert.match(html, /Pack once\. Know who/);
  assert.match(html, /Ready when the signal isn/);
  assert.match(html, /Make room for the adventure\./);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/terms"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders semantic landmarks, complete anchors and native FAQ items", async () => {
  const response = await render();
  const html = await response.text();
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  const targets = [
    ...html.matchAll(/href="#([^"]+)"/g),
  ].map((match) => match[1]);

  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((html.match(/<details\b/g) ?? []).length, 7);
  assert.match(html, /<header\b/);
  assert.match(html, /<main\b[^>]*id="main"/);
  assert.match(html, /<footer\b/);
  assert.equal(targets.every((target) => ids.has(target)), true);
});

test("keeps the waitlist honest and non-submitting", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /<form\b/i);
  assert.match(html, /Waitlist signup is not active yet/);
  assert.match(html, /No information is collected or submitted yet/);
  assert.match(html, /<input[^>]*disabled/i);
});

test("renders complete search and social metadata from the request origin", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/accomp\.test\/?"/,
  );
  assert.match(html, /property="og:image"/);
  assert.match(html, /content="https:\/\/accomp\.test\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /"@type":"WebSite"/);
});

test("serves legal notices, robots, sitemap and a real 404", async () => {
  const [privacy, terms, robots, sitemap, missing] = await Promise.all([
    render("/privacy"),
    render("/terms"),
    render("/robots.txt"),
    render("/sitemap.xml"),
    render("/not-a-real-page"),
  ]);

  assert.equal(privacy.status, 200);
  assert.match(await privacy.text(), /does not accept waitlist submissions/);
  assert.equal(terms.status, 200);
  assert.match(await terms.text(), /Not a service agreement/);

  assert.equal(robots.status, 200);
  assert.match(
    await robots.text(),
    /Sitemap: https:\/\/accomp\.test\/sitemap\.xml/,
  );

  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /https:\/\/accomp\.test\/privacy/);
  assert.match(sitemapXml, /https:\/\/accomp\.test\/terms/);

  assert.equal(missing.status, 404);
  const missingHtml = await missing.text();
  assert.match(missingHtml, /This path isn/);
  assert.match(missingHtml, /content="noindex"/);
  assert.doesNotMatch(missingHtml, /content="index, follow"/);
});

test("serves a health check with production security headers", async () => {
  const [homepage, health] = await Promise.all([render(), render("/health")]);

  for (const response of [homepage, health]) {
    assert.equal(
      response.headers.get("x-content-type-options"),
      "nosniff",
    );
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(
      response.headers.get("referrer-policy"),
      "strict-origin-when-cross-origin",
    );
    assert.match(
      response.headers.get("content-security-policy") ?? "",
      /default-src 'self'/,
    );
    assert.equal(
      response.headers.get("strict-transport-security"),
      "max-age=31536000",
    );
  }

  assert.equal(health.status, 200);
  assert.equal(health.headers.get("cache-control"), "no-store");
  assert.deepEqual(await health.json(), {
    service: "accomp",
    status: "ok",
  });
});
