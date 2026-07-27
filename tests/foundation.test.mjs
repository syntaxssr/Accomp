import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("locks the approved Accomp palette into semantic tokens", async () => {
  const css = await source("app/globals.css");
  const expectedTokens = {
    "--color-brand": "#778873",
    "--color-meadow": "#a1bc98",
    "--color-sand": "#dccfc0",
    "--color-cream": "#fdf6ed",
    "--color-ink": "#1f1f1f",
    "--color-night": "#171717",
  };

  for (const [token, value] of Object.entries(expectedTokens)) {
    assert.match(css, new RegExp(`${token}:\\s*${value}`, "i"));
  }
});

test("keeps Phase 4 static-first and dependency-light", async () => {
  const packageJson = JSON.parse(await source("package.json"));
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  assert.equal(packageJson.scripts.typecheck, "tsc --noEmit");
  assert.equal(packageJson.scripts.lint.includes("eslint"), true);
  assert.equal(packageJson.scripts.test.includes("test:render"), true);

  for (const dependency of [
    "drizzle-orm",
    "framer-motion",
    "react-loading-skeleton",
    "tailwindcss",
  ]) {
    assert.equal(dependency in dependencies, false);
  }
});

test("exports the complete Phase 4 primitive surface", async () => {
  const index = await source("components/index.ts");

  for (const primitive of [
    "Container",
    "Stack",
    "Button",
    "ButtonLink",
    "TextLink",
    "Card",
    "Icon",
    "Heading",
    "Text",
  ]) {
    assert.match(index, new RegExp(`\\b${primitive}\\b`));
  }
});

test("uses one matching pine asset for source and public output", async () => {
  const [sourceAsset, publicAsset] = await Promise.all([
    source("brand/accomp-pine-icon.svg"),
    source("public/brand/accomp-pine-icon.svg"),
  ]);

  assert.equal(publicAsset, sourceAsset);
  assert.match(publicAsset, /color="#778873"/i);
  assert.doesNotMatch(publicAsset, /phantom/i);
});

test("keeps the root route inside the Phase 4 boundary", async () => {
  const page = await source("app/page.tsx");

  assert.match(page, /data-phase="4"/);
  assert.match(page, /foundation preview/i);
  assert.doesNotMatch(
    page,
    /<FeatureCarousel|<SiteHeader|<MobileMenu|<FAQ|<FinalCTA/,
  );
});

test("declares no persistence binding", async () => {
  const hosting = JSON.parse(await source(".openai/hosting.json"));

  assert.deepEqual(hosting, { d1: null, r2: null });
});
