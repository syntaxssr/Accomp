import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("defines request-aware canonical and social metadata", async () => {
  const [layout, site] = await Promise.all([
    source("app/layout.tsx"),
    source("lib/site.ts"),
  ]);

  assert.match(layout, /generateMetadata/);
  assert.match(layout, /alternates:[\s\S]*canonical: "\/"/);
  assert.match(layout, /openGraph:[\s\S]*\/og\.png/);
  assert.match(layout, /twitter:[\s\S]*summary_large_image/);
  assert.match(layout, /max-image-preview/);
  assert.match(site, /NEXT_PUBLIC_SITE_URL/);
  assert.match(site, /x-forwarded-host/);
  assert.doesNotMatch(layout, /example\\.com|your-domain|TODO/i);
});

test("ships an optimized, correctly sized social card", async () => {
  const image = await readFile(new URL("public/og.png", root));

  assert.equal(image.subarray(1, 4).toString("ascii"), "PNG");
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  assert.ok(image.byteLength < 1_500_000);
});

test("publishes crawl routes without hard-coded deployment placeholders", async () => {
  const [robots, sitemap] = await Promise.all([
    source("app/robots.txt/route.ts"),
    source("app/sitemap.xml/route.ts"),
  ]);

  assert.match(robots, /User-agent: \\*/);
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /\/privacy/);
  assert.match(sitemap, /\/terms/);
  assert.doesNotMatch(`${robots}\\n${sitemap}`, /example\\.com|your-domain/i);
});

test("keeps analytics and cookie tracking disabled until approval", async () => {
  const packageJson = JSON.parse(await source("package.json"));
  const packageNames = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  });
  const privacy = await source("app/privacy/page.tsx");

  assert.equal(
    packageNames.some((name) =>
      /analytics|posthog|segment|plausible|hotjar/i.test(name),
    ),
    false,
  );
  assert.match(privacy, /has not enabled analytics/);
  assert.match(privacy, /no consent banner is shown/);
});
