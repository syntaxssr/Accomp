import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("keeps marketing content in one typed source", async () => {
  const content = await source("content/site-content.ts");

  assert.match(content, /export interface NavigationItem/);
  assert.match(content, /export interface FeatureCardContent/);
  assert.match(content, /export interface FAQItem/);
  assert.match(content, /export const navigation/);
  assert.match(content, /export const planningFeatures/);
  assert.match(content, /export const packingFeatures/);
  assert.match(content, /export const faqItems/);
});

test("implements the complete Phase 5 page structure", async () => {
  const page = await source("components/marketing/MarketingPage.tsx");

  for (const id of [
    "top",
    "features",
    "offline",
    "how-it-works",
    "faq",
    "waitlist",
  ]) {
    assert.match(page, new RegExp(`id="${id}"`));
  }

  assert.match(page, /data-phase="5"/);
  assert.match(page, /<SiteHeader/);
  assert.match(page, /<FeatureRail/);
  assert.match(page, /<FAQList/);
  assert.match(page, /No information is collected or submitted yet/);
  assert.doesNotMatch(page, /<form|action=|onSubmit=/);
});

test("keeps advanced motion and unverified integrations out of Phase 5", async () => {
  const packageJson = JSON.parse(await source("package.json"));
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  for (const dependency of [
    "framer-motion",
    "gsap",
    "drizzle-orm",
    "posthog-js",
    "@vercel/analytics",
  ]) {
    assert.equal(dependency in dependencies, false);
  }

  const hosting = JSON.parse(await source(".openai/hosting.json"));
  assert.deepEqual(hosting, { d1: null, r2: null });
});

test("uses native disclosures and explicit client boundaries", async () => {
  const [faq, header, rail] = await Promise.all([
    source("components/marketing/FAQList.tsx"),
    source("components/marketing/SiteHeader.tsx"),
    source("components/marketing/FeatureRail.tsx"),
  ]);

  assert.match(faq, /<details/);
  assert.match(faq, /<summary/);
  assert.doesNotMatch(faq, /"use client"/);
  assert.match(header, /^"use client";/);
  assert.match(rail, /^"use client";/);
  assert.match(header, /event\.key === "Escape"/);
  assert.match(header, /event\.key !== "Tab"/);
  assert.match(rail, /aria-live="polite"/);
});

test("declares compact, tablet and desktop layout behavior", async () => {
  const [pageStyles, headerStyles, railStyles, globalStyles] = await Promise.all([
    source("components/marketing/marketing-page.module.css"),
    source("components/marketing/site-header.module.css"),
    source("components/marketing/feature-rail.module.css"),
    source("app/globals.css"),
  ]);

  assert.match(pageStyles, /@media \(max-width: 30rem\)/);
  assert.match(pageStyles, /@media \(min-width: 48rem\)/);
  assert.match(pageStyles, /@media \(min-width: 56\.25rem\)/);
  assert.match(headerStyles, /@media \(max-width: 26\.25rem\)/);
  assert.match(headerStyles, /@media \(min-width: 56\.25rem\)/);
  assert.match(railStyles, /overflow-x: auto/);
  assert.match(railStyles, /scroll-snap-type: inline mandatory/);
  assert.match(globalStyles, /prefers-reduced-motion: reduce/);
});
