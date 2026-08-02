import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const assetNames = [
  "countdown-calm.webp",
  "countdown-smile.webp",
  "countdown-excited.webp",
  "countdown-eager.webp",
  "countdown-today.webp",
];

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("keeps widgets inside the single shared trip-planning feature", async () => {
  const [page, navigation, footer, definition] = await Promise.all([
    source("components/marketing/MarketingPage.tsx"),
    source("content/site-content.ts"),
    source("components/marketing/SiteFooter.tsx"),
    source("brand/product-definition.md"),
  ]);
  const featuresStart = page.indexOf('id="features"');
  const widgetPosition = page.indexOf("<WidgetSpotlight");
  const howItWorksPosition = page.indexOf('id="how-it-works"');

  assert.ok(featuresStart >= 0);
  assert.ok(widgetPosition > featuresStart);
  assert.ok(howItWorksPosition > widgetPosition);
  assert.match(definition, /not a new core feature/);
  assert.match(definition, /do not add a fourth capability/);
  assert.doesNotMatch(navigation, /widgets|companion-surfaces/i);
  assert.doesNotMatch(footer, /widgets|companion-surfaces/i);
});

test("defines five ordered mascot states and clamps countdowns at today", async () => {
  const widgets = await source("content/widgets.ts");
  const ids = [...widgets.matchAll(/\bid: "([^"]+)"/g)].map(
    (match) => match[1],
  );

  assert.deepEqual(ids, ["calm", "smile", "excited", "eager", "today"]);
  assert.match(widgets, /Math\.max\(0, Math\.floor\(daysRemaining\)\)/);
  assert.match(widgets, /minimumDays: 31/);
  assert.match(widgets, /maximumDays: 0/);
  assert.equal(
    (widgets.match(/assetPath: "\/brand\/widget-mascot\//g) ?? []).length,
    5,
  );
});

test("keeps both widget previews static, honest, and accessible", async () => {
  const [component, styles, english, thai] = await Promise.all([
    source("components/marketing/WidgetSpotlight.tsx"),
    source("components/marketing/widget-spotlight.module.css"),
    source("messages/en.json").then(JSON.parse),
    source("messages/th.json").then(JSON.parse),
  ]);

  assert.match(component, /aria-labelledby="companion-surfaces-heading"/);
  assert.match(component, /role="progressbar"/);
  assert.match(component, /aria-valuenow=\{8\}/);
  assert.match(component, /alt=""/);
  assert.match(component, /aria-hidden="true"/);
  assert.equal((component.match(/\bunoptimized\b/g) ?? []).length, 2);
  assert.doesNotMatch(component, /<button|<input|<form|onClick=/);
  assert.match(styles, /@media \(max-width: 30rem\)/);
  assert.match(styles, /@media \(min-width: 48rem\)/);
  assert.match(styles, /@media \(min-width: 56\.25rem\)/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(
    styles,
    /:global\(html\[lang="th"\]\) \.heading h2\s*\{[\s\S]*max-width: none[\s\S]*font-size: clamp\(1\.6rem, 3\.8vw, 3\.35rem\)[\s\S]*white-space: nowrap/,
  );
  assert.equal(thai.marketing.widgets.eyebrow, "วิดเจ็ต Accomp");
  assert.equal(thai.marketing.widgets.title, "ทุกทริปในมุมมองเดียว");
  assert.equal(
    thai.marketing.widgets.body,
    "เช็กวันเดินทางและอุปกรณ์ที่ยังต้องเตรียมได้โดยไม่ต้องเปิดแอป",
  );

  for (const catalog of [english, thai]) {
    assert.equal(catalog.marketing.widgets.countdown.states.length, 5);
    assert.equal(catalog.marketing.widgets.gear.items.length, 2);
    assert.ok(catalog.marketing.widgets.conceptNote.trim());
    assert.ok(catalog.marketing.widgets.countdown.previewAriaLabel.trim());
    assert.ok(catalog.marketing.widgets.gear.progressAriaLabel.trim());
  }

  assert.match(english.marketing.widgets.conceptNote, /not confirmed/);
  assert.match(thai.marketing.widgets.conceptNote, /ยังไม่ยืนยัน/);
  assert.equal(
    english.marketing.widgets.countdown.states.at(-1).range,
    "Today",
  );
  assert.equal(
    thai.marketing.widgets.countdown.states.at(-1).range,
    "วันนี้",
  );
});

test("keeps provisional transparent WebP mascot assets within budget", async () => {
  let totalSize = 0;

  for (const assetName of assetNames) {
    const assetUrl = new URL(
      `public/brand/widget-mascot/${assetName}`,
      root,
    );
    const [buffer, metadata] = await Promise.all([
      readFile(assetUrl),
      stat(assetUrl),
    ]);

    totalSize += metadata.size;
    assert.equal(buffer.toString("ascii", 0, 4), "RIFF");
    assert.equal(buffer.toString("ascii", 8, 12), "WEBP");
    assert.notEqual(buffer.indexOf(Buffer.from("ALPH")), -1);
    assert.ok(metadata.size <= 60 * 1024, `${assetName} exceeds 60 KB`);

    const extendedHeader = buffer.indexOf(Buffer.from("VP8X"));
    assert.notEqual(extendedHeader, -1);
    assert.equal(buffer.readUIntLE(extendedHeader + 12, 3) + 1, 512);
    assert.equal(buffer.readUIntLE(extendedHeader + 15, 3) + 1, 512);
  }

  assert.ok(totalSize <= 300 * 1024, "Mascot assets exceed 300 KB");
});
