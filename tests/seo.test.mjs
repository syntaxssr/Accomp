import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("defines request-aware canonical and social metadata", async () => {
  const [layout, page, site] = await Promise.all([
    source("app/layout.tsx"),
    source("app/[locale]/page.tsx"),
    source("lib/site.ts"),
  ]);

  assert.match(layout, /generateMetadata/);
  assert.match(layout, /alternates:[\s\S]*canonical/);
  assert.match(layout, /languages:[\s\S]*localizedPath\("en"\)/);
  assert.match(layout, /og-th\.png/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /twitter:[\s\S]*summary_large_image/);
  assert.match(page, /max-image-preview/);
  assert.match(site, /NEXT_PUBLIC_SITE_URL/);
  assert.match(site, /x-forwarded-host/);
  assert.doesNotMatch(layout, /example\\.com|your-domain|TODO/i);
});

test("ships optimized, correctly sized EN/TH social cards", async () => {
  const images = await Promise.all([
    readFile(new URL("public/og.png", root)),
    readFile(new URL("public/og-th.png", root)),
  ]);

  for (const image of images) {
    assert.equal(image.subarray(1, 4).toString("ascii"), "PNG");
    assert.equal(image.readUInt32BE(16), 1200);
    assert.equal(image.readUInt32BE(20), 630);
    assert.ok(image.byteLength < 1_500_000);
  }
});

test("publishes crawl routes without hard-coded deployment placeholders", async () => {
  const [robots, sitemap] = await Promise.all([
    source("app/robots.txt/route.ts"),
    source("app/sitemap.xml/route.ts"),
  ]);

  assert.match(robots, /User-agent: \\*/);
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /SUPPORTED_LOCALES/);
  assert.match(sitemap, /localizedPath/);
  assert.match(sitemap, /path: "\/roadmap"/);
  assert.match(sitemap, /path: "\/support"/);
  assert.match(sitemap, /hreflang/);
  assert.doesNotMatch(`${robots}\\n${sitemap}`, /example\\.com|your-domain/i);
});

test("keeps analytics and cookie tracking disabled until approval", async () => {
  const packageJson = JSON.parse(await source("package.json"));
  const packageNames = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  });
  const english = await source("messages/en.json");

  assert.equal(
    packageNames.some((name) =>
      /analytics|posthog|segment|plausible|hotjar/i.test(name),
    ),
    false,
  );
  assert.match(english, /has not enabled analytics/);
  assert.match(english, /no consent banner is shown/);
});
