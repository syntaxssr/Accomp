import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("keeps supporter recognition consent-driven and empty by default", async () => {
  const supporters = await source("content/supporters.ts");

  assert.match(supporters, /export interface Supporter/);
  assert.match(supporters, /displayName: string/);
  assert.match(supporters, /imagePath:/);
  assert.match(supporters, /sortOrder: number/);
  assert.match(supporters, /publication permission/);
  assert.match(supporters, /export function validateSupporters/);
  assert.match(supporters, /Duplicate supporter/);
  assert.match(supporters, /validateSupporters\(\[\] satisfies Supporter\[\]\)/);
  assert.doesNotMatch(
    supporters,
    /email|phone|payment|amount|transaction|address/i,
  );
});

test("renders a semantic bilingual support page without payment collection", async () => {
  const [page, route, navigation] = await Promise.all([
    source("components/support/SupportPage.tsx"),
    source("app/[locale]/support/page.tsx"),
    source("content/site-content.ts"),
  ]);

  assert.match(page, /data-phase="2\.3"/);
  assert.match(page, /<main id="main" tabIndex=\{-1\}>/);
  assert.match(page, /<h1>/);
  assert.match(page, /supporters\.length > 0/);
  assert.match(page, /copy\.supporters\.emptyTitle/);
  assert.match(page, /formatMessage\(copy\.supporters\.imageAlt/);
  assert.match(page, /loading="lazy"/);
  assert.match(page, /decoding="async"/);
  assert.match(page, /height=\{320\}/);
  assert.match(page, /width=\{320\}/);
  assert.match(page, /role="status"/);
  assert.doesNotMatch(page, /<form\b|onSubmit=|action=|checkout|stripe/i);
  assert.match(route, /localizedPath\("en", "\/support"\)/);
  assert.match(route, /localizedPath\("th", "\/support"\)/);
  assert.match(navigation, /createSupportNavigation/);
  assert.match(navigation, /messages\.navigation\[key\]/);
});

test("keeps the support layout responsive and motion-safe", async () => {
  const styles = await source("components/support/support-page.module.css");

  assert.match(styles, /@media \(min-width: 48rem\)/);
  assert.match(styles, /@media \(min-width: 72rem\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /min-height: 2\.75rem/);
  assert.match(styles, /aspect-ratio: 1/);
});

test("documents the safe publication workflow without private evidence", async () => {
  const register = await source(
    "docs/phase-2.3/supporter-publication-register.md",
  );

  assert.match(register, /No approved public supporter entries yet/);
  assert.match(register, /display name/i);
  assert.match(register, /portrait/i);
  assert.match(register, /consent/i);
  assert.match(register, /Do not store/i);
});
