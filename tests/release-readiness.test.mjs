import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

function relativeLuminance(hex) {
  const channels = [1, 3, 5]
    .map((index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255)
    .map((value) =>
      value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4,
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(foreground, background) {
  const first = relativeLuminance(foreground);
  const second = relativeLuminance(background);

  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

test("marks the reviewed experience as Phase 9 and keeps the skip target focusable", async () => {
  const page = await source("components/marketing/MarketingPage.tsx");

  assert.match(page, /data-phase="9"/);
  assert.match(page, /<main id="main" tabIndex=\{-1\}>/);
});

test("keeps primary interactive targets at least 44 CSS pixels", async () => {
  const [headerStyles, pageStyles, legalStyles] = await Promise.all([
    source("components/marketing/site-header.module.css"),
    source("components/marketing/marketing-page.module.css"),
    source("app/legal-pages.module.css"),
  ]);

  for (const styles of [headerStyles, pageStyles, legalStyles]) {
    assert.match(styles, /min-height: 2\.75rem/);
  }

  assert.match(headerStyles, /\.brand \{[\s\S]*min-width: 2\.75rem/);
  assert.match(headerStyles, /\.desktopNav a \{[\s\S]*min-width: 2\.75rem/);
  assert.match(pageStyles, /\.footerLinks a \{[\s\S]*min-width: 2\.75rem/);
});

test("uses accessible foreground pairs for release-critical controls", () => {
  assert.ok(contrast("#171717", "#778873") >= 4.5);
  assert.ok(contrast("#5d685f", "#fdf6ed") >= 4.5);
  assert.ok(contrast("#dccfc0", "#171717") >= 4.5);
  assert.ok(contrast("#2c352f", "#dccfc0") >= 4.5);
});

test("keeps release-blocked integrations honest and inactive", async () => {
  const [page, privacy, terms, packageJsonSource] = await Promise.all([
    source("components/marketing/MarketingPage.tsx"),
    source("app/privacy/page.tsx"),
    source("app/terms/page.tsx"),
    source("package.json"),
  ]);
  const packageJson = JSON.parse(packageJsonSource);
  const packageNames = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  });

  assert.doesNotMatch(page, /<form\b|onSubmit=|action=/i);
  assert.match(page, /No information is collected or submitted yet/);
  assert.match(privacy, /has not enabled analytics/);
  assert.match(terms, /waitlist control is disabled/i);
  assert.equal(
    packageNames.some((name) =>
      /analytics|posthog|segment|plausible|hotjar/i.test(name),
    ),
    false,
  );
});
