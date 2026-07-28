import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
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

test("uses the owner-provided temporary mascot for brand-logo placements", async () => {
  const [icon, header, footer, legal, notFound, layout, logo] =
    await Promise.all([
      source("components/ui/Icon.tsx"),
      source("components/marketing/SiteHeader.tsx"),
      source("components/marketing/SiteFooter.tsx"),
      source("components/legal/LegalNoticePage.tsx"),
      source("components/legal/LocalizedNotFound.tsx"),
      source("app/layout.tsx"),
      stat(new URL("public/brand/accomp-logo-temporary.webp", root)),
    ]);

  assert.match(icon, /logo: "\/brand\/accomp-logo-temporary\.webp"/);
  assert.match(header, /<Icon name="logo" size="md" decorative \/>/);
  assert.match(footer, /<Icon name="logo" size="md" decorative \/>/);
  assert.match(legal, /<Icon name="logo" size="md" decorative \/>/);
  assert.match(notFound, /<Icon name="logo" size="md" decorative \/>/);
  assert.match(layout, /icon: "\/brand\/accomp-logo-temporary\.webp"/);
  assert.ok(logo.size > 0);
  assert.ok(logo.size < 100_000);
});

test("declares no persistence binding", async () => {
  const hosting = JSON.parse(await source(".openai/hosting.json"));

  assert.deepEqual(hosting, { d1: null, r2: null });
});
