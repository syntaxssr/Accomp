import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("keeps a unique ordered mobile app roadmap", async () => {
  const roadmap = await source("content/roadmap.ts");
  const ids = [...roadmap.matchAll(/\bid: "([^"]+)"/g)].map(
    (match) => match[1],
  );
  const horizons = [...roadmap.matchAll(/\bhorizon: "([^"]+)"/g)].map(
    (match) => match[1],
  );
  const copyKeys = [...roadmap.matchAll(/\bcopyKey: "([^"]+)"/g)].map(
    (match) => match[1],
  );

  assert.equal(ids.length, 6);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(ids[0], "product-discovery");
  assert.equal(ids.at(-1), "launch-readiness");
  assert.deepEqual(horizons, [
    "now",
    "next",
    "next",
    "later",
    "later",
    "later",
  ]);
  assert.equal(copyKeys.length, ids.length);
  assert.equal(new Set(copyKeys).size, copyKeys.length);
  assert.equal(
    (roadmap.match(/status: "current"/g) ?? []).length,
    1,
  );
  assert.equal(
    (roadmap.match(/status: "planned"/g) ?? []).length,
    5,
  );
  assert.doesNotMatch(roadmap, /\bdate:|2026-/);
});

test("connects every roadmap entry to complete TH/EN copy", async () => {
  const [roadmap, english, thai] = await Promise.all([
    source("content/roadmap.ts"),
    source("messages/en.json").then(JSON.parse),
    source("messages/th.json").then(JSON.parse),
  ]);
  const copyKeys = [...roadmap.matchAll(/\bcopyKey: "([^"]+)"/g)].map(
    (match) => match[1],
  );

  for (const key of copyKeys) {
    for (const catalog of [english, thai]) {
      const item = catalog.roadmap.items[key];

      assert.ok(item, `Missing roadmap copy for ${key}`);
      assert.ok(item.title.trim());
      assert.ok(item.summary.trim());
      assert.equal(item.highlights.length, 2);
      assert.equal(item.highlights.every((value) => value.trim()), true);
    }
  }

  assert.deepEqual(
    Object.keys(english.roadmap.items),
    Object.keys(thai.roadmap.items),
  );
});

test("renders a semantic, responsive, locale-aware roadmap experience", async () => {
  const [page, styles, localizedRoute, switcher, navigation] =
    await Promise.all([
      source("components/roadmap/RoadmapPage.tsx"),
      source("components/roadmap/roadmap-page.module.css"),
      source("app/[locale]/roadmap/page.tsx"),
      source("components/i18n/LanguageSwitcher.tsx"),
      source("content/site-content.ts"),
    ]);

  assert.match(page, /<main id="main"/);
  assert.match(page, /<ol/);
  assert.match(page, /aria-current=/);
  assert.match(page, /"step"/);
  assert.match(page, /copy\.horizon\[entry\.horizon\]/);
  assert.match(page, /copy\.stageLabel/);
  assert.match(page, /data-phase="2\.3"/);
  assert.match(styles, /@media \(min-width: 48rem\)/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /min-height: 2\.75rem/);
  assert.match(localizedRoute, /hreflang|languages/);
  assert.match(localizedRoute, /localizedPath\("en", "\/roadmap"\)/);
  assert.match(switcher, /pathname\?: LocalizedPathname/);
  assert.match(navigation, /createRoadmapNavigation/);
  assert.match(navigation, /\{ key: "roadmap", pathname: "\/roadmap" \}/);
  assert.doesNotMatch(`${page}\n${localizedRoute}`, /node:fs|git log|\.md"/);
});
