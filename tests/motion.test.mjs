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
  assert.match(page, /data-phase="2\.4"/);
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

test("spreads the three core-feature cards with scroll progress", async () => {
  const [stack, page, styles] = await Promise.all([
    source("components/marketing/PromiseCardStack.tsx"),
    source("components/marketing/MarketingPage.tsx"),
    source("components/marketing/marketing-page.module.css"),
  ]);

  assert.match(stack, /^"use client";/);
  assert.match(stack, /window\.addEventListener\("scroll", scheduleUpdate/);
  assert.match(stack, /window\.requestAnimationFrame\(updateStack\)/);
  assert.match(stack, /prefers-reduced-motion: reduce/);
  assert.match(stack, /data\.stackState|dataset\.stackState/);
  assert.match(stack, /--promise-stack-x/);
  assert.match(page, /<PromiseCardStack/);
  assert.match(
    styles,
    /\.promisePath\[data-stack-enabled="true"\][\s\S]*translate3d\(var\(--promise-stack-x, 0\)/,
  );
  assert.match(
    styles,
    /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.promiseStep/,
  );
  assert.match(
    styles,
    /@media \(hover: hover\) and \(pointer: fine\)[\s\S]*\.promiseStep:hover[\s\S]*translate: 0 -0\.4rem/,
  );
  assert.match(
    styles,
    /translate 0\.4s cubic-bezier\(0\.22, 1, 0\.36, 1\)/,
  );
  assert.doesNotMatch(styles, /\.promiseStep:hover \.promiseCardVisual/);
  assert.doesNotMatch(styles, /@keyframes promise-(?:route|checklist|offline)-hover/);
  assert.match(
    styles,
    /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.promiseStep[\s\S]*translate: none/,
  );
});

test("matches the planning cards to the core-feature stack motion", async () => {
  const [rail, page, styles] = await Promise.all([
    source("components/marketing/FeatureRail.tsx"),
    source("components/marketing/MarketingPage.tsx"),
    source("components/marketing/feature-rail.module.css"),
  ]);

  assert.match(page, /presentation="stack"/);
  assert.match(rail, /data-feature-stack/);
  assert.match(rail, /--feature-stack-x/);
  assert.match(rail, /window\.addEventListener\("scroll", scheduleUpdate/);
  assert.match(rail, /const stackStart = window\.innerHeight \* 0\.82/);
  assert.match(rail, /const stackEnd = window\.innerHeight \* 0\.28/);
  assert.match(rail, /const stackedCenter = railCenter \+ \(cardIndex - middle\) \* 18/);
  assert.match(
    styles,
    /\.rail\[data-presentation="stack"\][\s\S]*aspect-ratio: 3 \/ 4/,
  );
  assert.match(
    styles,
    /\.rail\[data-presentation="stack"\]\[data-stack-enabled="true"\] \.card[\s\S]*translate3d\(var\(--feature-stack-x, 0\)/,
  );
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

test("matches the reference Download hover on waitlist CTAs", async () => {
  const [page, header, buttonStyles] = await Promise.all([
    source("components/marketing/MarketingPage.tsx"),
    source("components/marketing/SiteHeader.tsx"),
    source("components/ui/ui.module.css"),
  ]);

  assert.match(
    page,
    /data-motion="download"\s+data-size-lock="waitlist"\s+href="#waitlist"/,
  );
  assert.match(header, /data-motion="download"/);
  assert.match(
    buttonStyles,
    /transform 400ms cubic-bezier\(0\.22, 1, 0\.36, 1\)/,
  );
  assert.match(buttonStyles, /transform: scale\(0\.985\)/);
  assert.match(buttonStyles, /transform: scale\(0\.97\)/);
  assert.match(buttonStyles, /@media \(hover: hover\)/);
});
