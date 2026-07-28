import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("uses progressive reveal enhancement without hiding server content", async () => {
  const [controller, page, styles] = await Promise.all([
    source("components/marketing/MotionController.tsx"),
    source("components/marketing/MarketingPage.tsx"),
    source("components/marketing/marketing-page.module.css"),
  ]);

  assert.match(controller, /^"use client";/);
  assert.match(controller, /IntersectionObserver/);
  assert.match(controller, /prefers-reduced-motion: reduce/);
  assert.match(controller, /root\.dataset\.motion|motionRoot\.dataset\.motion/);
  assert.match(controller, /showEverything/);
  assert.doesNotMatch(controller, /setInterval|requestAnimationFrame\([^)]*=>\s*requestAnimationFrame/);
  assert.match(controller, /\[data-motion-root\]/);
  assert.match(page, /data-motion-root/);
  assert.match(page, /data-phase="2\.3"/);
  assert.match(page, /data-reveal/);
  assert.match(styles, /\.site\[data-motion="enhanced"\] \[data-reveal\]/);
  assert.doesNotMatch(styles, /^\.site \[data-reveal\]\s*\{[^}]*opacity:\s*0/ms);
});

test("implements the approved hero, route and final CTA motion language", async () => {
  const [globalStyles, page, styles] = await Promise.all([
    source("app/globals.css"),
    source("components/marketing/MarketingPage.tsx"),
    source("components/marketing/marketing-page.module.css"),
  ]);

  for (const token of [
    "--motion-reveal: 420ms",
    "--motion-route: 640ms",
    "--motion-hero: 900ms",
    "--ease-enter: cubic-bezier(0.16, 1, 0.3, 1)",
  ]) {
    assert.match(globalStyles, new RegExp(token.replace(/[().]/g, "\\$&")));
  }

  assert.match(styles, /@keyframes hero-path-one/);
  assert.match(styles, /@keyframes phone-in/);
  assert.match(styles, /stroke-dashoffset/);
  assert.match(styles, /\.waitlistCompanions/);
  assert.match(page, /pathLength="1"/);
  assert.match(page, /className=\{styles\.waitlistCompanions\}/);
});

test("adds calm header state and touch-keyboard rail progression", async () => {
  const [header, headerStyles, rail, railStyles] = await Promise.all([
    source("components/marketing/SiteHeader.tsx"),
    source("components/marketing/site-header.module.css"),
    source("components/marketing/FeatureRail.tsx"),
    source("components/marketing/feature-rail.module.css"),
  ]);

  assert.match(header, /requestAnimationFrame/);
  assert.match(header, /data-theme=/);
  assert.match(header, /data-scrolled=/);
  assert.match(header, /aria-current=/);
  assert.match(headerStyles, /\.header\[data-theme="dark"\]/);
  assert.match(headerStyles, /a\[data-active="true"\]/);
  assert.match(headerStyles, /dropdown-expand/);
  assert.match(header, /onMouseEnter/);

  for (const key of ["ArrowLeft", "ArrowRight", "Home", "End"]) {
    assert.match(rail, new RegExp(`event\\.key === "${key}"`));
  }

  assert.match(rail, /behavior: reducedMotion \? "auto" : "smooth"/);
  assert.match(rail, /requestAnimationFrame/);
  assert.match(rail, /data-active=/);
  assert.match(railStyles, /\.card\[data-active="true"\]/);
  assert.doesNotMatch(rail, /autoplay|setInterval/i);
});

test("keeps a complete reduced-motion alternative", async () => {
  const [globalStyles, pageStyles, headerStyles, railStyles, uiStyles] =
    await Promise.all([
      source("app/globals.css"),
      source("components/marketing/marketing-page.module.css"),
      source("components/marketing/site-header.module.css"),
      source("components/marketing/feature-rail.module.css"),
      source("components/ui/ui.module.css"),
    ]);
  const styles = [
    globalStyles,
    pageStyles,
    headerStyles,
    railStyles,
    uiStyles,
  ].join("\n");

  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(globalStyles, /scroll-behavior: auto !important/);
  assert.match(pageStyles, /stroke-dashoffset: 0/);
  assert.match(pageStyles, /\.site \[data-reveal\][\s\S]*opacity: 1/);
  assert.match(railStyles, /animation: none/);
  assert.match(uiStyles, /\.button:hover:not\(:disabled\)[\s\S]*transform: none/);
});
