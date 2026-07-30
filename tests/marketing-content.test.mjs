import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("builds typed marketing content from localized messages", async () => {
  const content = await source("content/site-content.ts");

  assert.match(content, /export interface NavigationGroup/);
  assert.match(content, /export type NavigationItem/);
  assert.match(content, /export interface FeatureCardContent/);
  assert.match(content, /export interface FAQItem/);
  assert.match(content, /export function createSiteContent/);
  assert.match(content, /messages\.marketing\.plan\.cards/);
  assert.match(content, /messages\.marketing\.pack\.cards/);
  assert.match(content, /messages\.marketing\.faq\.items/);
  assert.doesNotMatch(content, /Adventure together|Join the waitlist/);
});

test("locks one core feature with three capabilities as product truth", async () => {
  const [definition, agents, page, english, thai] = await Promise.all([
    source("brand/product-definition.md"),
    source("AGENTS.md"),
    source("components/marketing/MarketingPage.tsx"),
    source("messages/en.json").then(JSON.parse),
    source("messages/th.json").then(JSON.parse),
  ]);

  assert.match(
    definition,
    /single\s+core feature is \*\*Shared Trip Planning\*\*/,
  );
  assert.match(definition, /Capability 1 — Plan the trip/);
  assert.match(definition, /Capability 2 — Prepare the gear/);
  assert.match(definition, /Capability 3 — Offline maps & trip data/);
  assert.match(agents, /Do not present gear preparation, offline maps/);
  assert.match(page, /data-core-feature="shared-trip-planning"/);
  assert.equal(english.marketing.plan.eyebrow, "01 · Plan");
  assert.match(english.marketing.pack.eyebrow, /Capability 02/);
  assert.match(english.marketing.offline.eyebrow, /Capability 03/);
  assert.equal(thai.marketing.plan.eyebrow, "01 · วางแผน");
  assert.equal(thai.marketing.plan.title, "ทุกคน ทุกแผน\nในที่เดียว");
  assert.equal(
    thai.marketing.plan.body,
    "สร้างทริป ชวนเพื่อน และรวมกำหนดการ เส้นทาง จุดนัดพบ\nพร้อมรายละเอียดสำคัญทั้งหมดไว้ในพื้นที่เดียว\nเพื่อให้ทุกคนเห็นแผนเดียวกัน ตั้งแต่เริ่มวางแผนจนจบทริป",
  );
  assert.match(thai.marketing.pack.eyebrow, /ความสามารถ 02/);
  assert.match(thai.marketing.offline.eyebrow, /ความสามารถ 03/);
});

test("preserves the complete marketing structure through Phase 2.4", async () => {
  const [page, english, promiseStack] = await Promise.all([
    source("components/marketing/MarketingPage.tsx"),
    source("messages/en.json"),
    source("components/marketing/PromiseCardStack.tsx"),
  ]);

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

  assert.match(page, /data-phase="2\.4"/);
  assert.match(page, /data-motion-root/);
  assert.match(
    page,
    /<Container className=\{styles\.promiseContainer\}>/,
  );
  assert.match(page, /className=\{styles\.promisePanel\}/);
  assert.match(page, /<PromiseCardStack/);
  assert.match(promiseStack, /className=\{styles\.promisePath\}/);
  assert.match(promiseStack, /className=\{styles\.promiseStep\}/);
  assert.match(promiseStack, /data-promise-stack/);
  assert.match(promiseStack, /data-promise-card/);
  assert.match(page, /<MotionController/);
  assert.match(page, /<SiteHeader/);
  assert.doesNotMatch(page, /previewNote/);
  assert.match(page, /<FeatureRail/);
  assert.match(page, /<WidgetSpotlight/);
  assert.match(page, /<FAQList/);
  assert.match(page, /copy\.waitlist\.notice/);
  assert.match(english, /No information is collected or submitted yet/);
  assert.doesNotMatch(page, /<form|action=|onSubmit=/);
});

test("keeps Phase 7 dependency-light and unverified integrations out", async () => {
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

test("links the factual pre-launch legal notices", async () => {
  const page = await source("components/marketing/SiteFooter.tsx");

  assert.match(page, /localizedPath\(locale, "\/privacy"\)/);
  assert.match(page, /localizedPath\(locale, "\/terms"\)/);
  assert.match(page, /\$\{home\}#faq/);
  assert.doesNotMatch(page, /Privacy · pending|Terms · pending/);
});

test("keeps FAQ in the footer and makes Support a direct link", async () => {
  const navigation = await source("content/site-content.ts");

  assert.doesNotMatch(navigation, /anchorHref\("#faq"\)/);
  assert.match(navigation, /href: localizedPath\(locale, "\/support"\)/);
  assert.match(navigation, /label: messages\.navigation\.support/);
});

test("keeps Offline Maps inside Features instead of a navigation destination", async () => {
  const [navigation, footer] = await Promise.all([
    source("content/site-content.ts"),
    source("components/marketing/SiteFooter.tsx"),
  ]);

  assert.doesNotMatch(
    navigation,
    /\{ href: "#offline", key: "offline" \}/,
  );
  assert.doesNotMatch(footer, /href=\{`\$\{home\}#offline`\}/);
  assert.match(navigation, /\{ href: "#features", key: "features" \}/);
  assert.match(
    navigation,
    /\{ href: "#how-it-works", key: "howItWorks" \}/,
  );
  assert.match(footer, /href=\{`\$\{home\}#features`\}/);
  assert.match(footer, /href=\{`\$\{home\}#how-it-works`\}/);
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
  assert.match(header, /aria-expanded=/);
  assert.match(header, /isNavigationGroup/);
  assert.match(header, /onMouseEnter=/);
  assert.match(header, /onMouseLeave=/);
  assert.match(rail, /aria-live="polite"/);
});

test("centers the hero copy over one full-width artwork stage", async () => {
  const [page, styles] = await Promise.all([
    source("components/marketing/MarketingPage.tsx"),
    source("components/marketing/marketing-page.module.css"),
  ]);

  assert.match(
    page,
    /<Container className=\{styles\.heroContainer\}>/,
  );
  assert.match(page, /className=\{styles\.heroStage\}/);
  assert.doesNotMatch(
    page,
    /secondaryCta|heroSecondary|data-size-lock="hero-secondary"/,
  );
  assert.match(
    page,
    /className=\{styles\.heroVisual\}[\s\S]*className=\{styles\.heroCopy\}/,
  );
  assert.doesNotMatch(page, /styles\.heroGrid/);
  assert.match(
    styles,
    /\.heroStage\s*\{[\s\S]*position: relative[\s\S]*border-radius: 1\.5rem[\s\S]*place-items: center/,
  );
  assert.match(
    styles,
    /\.heroCopy\s*\{[\s\S]*align-items: center[\s\S]*text-align: center/,
  );
  assert.match(
    styles,
    /\.heroCopy h1 \{[\s\S]*line-height: 1\.3/,
  );
  assert.match(
    styles,
    /:global\(html\[lang="th"\]\) \.heroCopy h1 \{[\s\S]*line-height: 1\.3/,
  );
  assert.match(
    styles,
    /\.heroVisual\s*\{[\s\S]*position: absolute[\s\S]*inset: 0/,
  );
  assert.match(styles, /\.heroVisual::after/);
  assert.match(
    styles,
    /\.hero > \.heroContainer,\s*\.promise > \.promiseContainer,\s*\.chapter > \.planContainer\s*\{[\s\S]*91\.5rem/,
  );
  assert.doesNotMatch(styles, /\.promisePanel::(?:before|after)/);
  assert.match(
    styles,
    /\.promiseStep\s*\{[\s\S]*aspect-ratio: 3 \/ 4/,
  );
  assert.match(
    styles,
    /:global\(html\[lang="th"\]\) \.promiseStep strong \{[\s\S]*line-height: 1\.3/,
  );
  assert.match(styles, /min-height: clamp\(42rem, 60vw, 50rem\)/);
  assert.match(
    styles,
    /@media \(min-width: 68rem\)\s*\{[\s\S]*\.hero\s*\{[\s\S]*padding-block: 1\.75rem 2\.375rem/,
  );
  assert.match(
    styles,
    /\.promise\s*\{[\s\S]*clamp\(2rem, 4vw, 3\.5rem\)[\s\S]*clamp\(2rem, 4vw, 3\.5rem\)/,
  );
  assert.match(
    styles,
    /:global\(html\[lang="th"\]\) \.promiseTitle\s*\{[\s\S]*max-width: none[\s\S]*font-size: clamp\(1\.75rem, 7vw, 6\.25rem\)[\s\S]*white-space: nowrap/,
  );
  assert.match(
    page,
    /className=\{`\$\{styles\.chapter\} \$\{styles\.planChapter\}`\}/,
  );
  assert.match(
    styles,
    /\.planChapter\s*\{[\s\S]*clamp\(2\.75rem, 5vw, 5rem\)[\s\S]*var\(--space-section\)/,
  );
  assert.match(
    styles,
    /:global\(html\[lang="th"\]\) \.planChapter \.chapterHeading h2\s*\{[\s\S]*line-height: 1\.45[\s\S]*white-space: pre-line/,
  );
  assert.match(
    styles,
    /:global\(html\[lang="th"\]\) \.planChapter \.chapterHeading > p\s*\{[\s\S]*white-space: pre-line/,
  );
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
  assert.match(headerStyles, /@media \(min-width: 68rem\)/);
  assert.match(headerStyles, /\.dropdown/);
  assert.match(headerStyles, /@keyframes dropdown-expand/);
  assert.match(
    headerStyles,
    /cubic-bezier\(0\.22, 1, 0\.36, 1\)/,
  );
  assert.match(railStyles, /overflow-x: auto/);
  assert.match(railStyles, /scroll-snap-type: inline mandatory/);
  assert.match(globalStyles, /prefers-reduced-motion: reduce/);
});

test("serves bilingual typography assets and preserves the offline map artwork", async () => {
  const [
    layout,
    globalStyles,
    brandIdentity,
    typographyStyles,
    page,
    pageStyles,
    siteHeaderStyles,
    faqStyles,
    featureRailStyles,
    widgetStyles,
    roadmapStyles,
    supportStyles,
    legalStyles,
    thaiRegular,
    thaiBold,
    thaiExtraBold,
    originalThaiAccent,
    adjustedThaiAccent,
    accentReadme,
  ] =
    await Promise.all([
      source("app/layout.tsx"),
      source("app/globals.css"),
      source("brand/brand-identity.md"),
      source("components/ui/ui.module.css"),
      source("components/marketing/MarketingPage.tsx"),
      source("components/marketing/marketing-page.module.css"),
      source("components/marketing/site-header.module.css"),
      source("components/marketing/faq-list.module.css"),
      source("components/marketing/feature-rail.module.css"),
      source("components/marketing/widget-spotlight.module.css"),
      source("components/roadmap/roadmap-page.module.css"),
      source("components/support/support-page.module.css"),
      source("app/legal-pages.module.css"),
      stat(
        new URL(
          "public/fonts/line-seed-sans-th/LINESeedSansTH_W_Rg.woff2",
          root,
        ),
      ),
      stat(
        new URL(
          "public/fonts/line-seed-sans-th/LINESeedSansTH_W_Bd.woff2",
          root,
        ),
      ),
      stat(
        new URL(
          "public/fonts/line-seed-sans-th/LINESeedSansTH_W_XBd.woff2",
          root,
        ),
      ),
      stat(new URL("public/fonts/pg-miss-half/PGMissHalf.ttf", root)),
      stat(
        new URL(
          "public/fonts/pg-miss-half/AccompThaiAccent-v5.ttf",
          root,
        ),
      ),
      source("public/fonts/pg-miss-half/README.md"),
    ]);

  assert.doesNotMatch(layout, /next\/font/);
  assert.match(layout, /@fontsource-variable\/nunito\/wght\.css/);
  assert.doesNotMatch(
    layout,
    /@fontsource-variable\/(?:inter|plus-jakarta-sans)/,
  );
  assert.match(
    globalStyles,
    /--font-family-display:\s*"Nunito Variable", Nunito, ui-sans-serif/,
  );
  assert.match(
    globalStyles,
    /--font-family-accent:\s*"Accomp Thai Accent", "PG Miss Half", "Nunito Variable", Nunito/,
  );
  assert.match(
    globalStyles,
    /--font-family-body:[\s\S]*"Nunito Variable", Nunito, ui-sans-serif, system-ui/,
  );
  assert.match(
    globalStyles,
    /--font-letter-spacing-accent:\s*0\.02em/,
  );
  assert.match(
    globalStyles,
    /@font-face \{[\s\S]*font-family: "LINE Seed Sans TH";[\s\S]*font-weight: 400/,
  );
  assert.match(
    globalStyles,
    /@font-face \{[\s\S]*font-family: "Accomp Thai Accent";[\s\S]*AccompThaiAccent-v5\.ttf[\s\S]*font-weight: 400/,
  );
  assert.match(
    globalStyles,
    /html\[lang="th"\] \{[\s\S]*--font-family-display:\s*"LINE Seed Sans TH"/,
  );
  assert.match(
    globalStyles,
    /html\[lang="th"\] \{[\s\S]*--font-family-accent:\s*"Accomp Thai Accent", "PG Miss Half", "LINE Seed Sans TH"/,
  );
  assert.match(
    globalStyles,
    /html\[lang="th"\] \{[\s\S]*--font-family-body:\s*"LINE Seed Sans TH"/,
  );
  assert.match(
    globalStyles,
    /html\[lang="th"\] \{[\s\S]*font-feature-settings:\s*"liga" 1/,
  );
  assert.match(
    globalStyles,
    /html\[lang="th"\] \{[\s\S]*font-variant-ligatures:\s*common-ligatures/,
  );
  assert.match(
    brandIdentity,
    /Thai body and UI typeface: LINE Seed Sans TH/,
  );
  assert.match(brandIdentity, /Accent typeface: PG Miss Half/);
  assert.match(brandIdentity, /Regular 400, Bold 700, ExtraBold 800/);
  assert.ok(thaiRegular.size > 0);
  assert.ok(thaiBold.size > 0);
  assert.ok(thaiExtraBold.size > 0);
  assert.ok(originalThaiAccent.size > 0);
  assert.ok(adjustedThaiAccent.size > 0);
  assert.match(accentReadme, /uniF70A`–`uniF70D/);
  assert.match(accentReadme, /uniF705`–`uniF708/);
  assert.match(accentReadme, /all eight contextual tone-mark glyphs down by 20/);
  assert.match(accentReadme, /uniF70B[\s\S]*767 font units/);
  assert.match(accentReadme, /uni0E31[\s\S]*ไม้หันอากาศ/);
  assert.match(accentReadme, /58–112 px[\s\S]*within 2 pixels/);
  assert.match(accentReadme, /uni0E48`–`uni0E4B[\s\S]*are\s+unchanged/);
  assert.match(accentReadme, /original `liga`, GSUB, and GPOS tables are preserved/);
  assert.match(globalStyles, /clamp\(3\.65rem, 9\.2vw, 7rem\)/);
  assert.match(globalStyles, /clamp\(2\.7rem, 6\.5vw, 4\.8rem\)/);
  assert.match(
    typographyStyles,
    /\.heading\[data-size="display"\] \{[\s\S]*font-weight: 800/,
  );
  assert.match(
    typographyStyles,
    /\.heading\[data-size="section"\] \{[\s\S]*font-weight: 800/,
  );
  assert.match(
    typographyStyles,
    /\.heading\[data-size="card"\] \{[\s\S]*font-weight: 700/,
  );
  assert.match(
    typographyStyles,
    /\.heading \{[\s\S]*font-family: var\(--font-family-accent\)/,
  );
  assert.match(
    typographyStyles,
    /\.heading \{[\s\S]*letter-spacing: var\(--font-letter-spacing-accent\)/,
  );
  assert.match(
    typographyStyles,
    /\.heading\[data-size="display"\] \{[\s\S]*max-width: 8ch/,
  );
  assert.match(
    page,
    /<Text as="p" variant="lead" tone="sand">\s*\{copy\.hero\.eyebrow\}\s*<\/Text>/,
  );
  assert.doesNotMatch(page, /styles\.heroTagline/);
  assert.match(
    pageStyles,
    /\.heroCopy h1 \{[\s\S]*font-family: var\(--font-family-accent\);[\s\S]*letter-spacing: var\(--font-letter-spacing-accent\)/,
  );
  assert.match(
    pageStyles,
    /\.heroCopy h1 \{[\s\S]*line-height: 1\.3/,
  );
  assert.match(page, /className=\{styles\.heroBody\}/);
  assert.match(
    pageStyles,
    /\.heroCopy > \.heroBody \{[\s\S]*margin-top: var\(--space-5\)/,
  );
  assert.doesNotMatch(pageStyles, /\.heroTagline/);
  assert.match(
    featureRailStyles,
    /\.card h3 \{[\s\S]*font-family: var\(--font-family-accent\)/,
  );
  assert.match(
    widgetStyles,
    /\.cardCopy h3 \{[\s\S]*font-family: var\(--font-family-accent\)/,
  );
  assert.match(
    roadmapStyles,
    /\.sectionHeading h2,[\s\S]*font-family: var\(--font-family-accent\)/,
  );
  assert.match(
    supportStyles,
    /\.impactCard h3,[\s\S]*font-family: var\(--font-family-accent\)/,
  );
  assert.match(
    legalStyles,
    /\.content h2 \{[\s\S]*font-family: var\(--font-family-accent\)/,
  );
  assert.match(
    siteHeaderStyles,
    /\.brand \{[\s\S]*font-family: var\(--font-family-accent\)/,
  );
  assert.match(
    siteHeaderStyles,
    /\.brand \{[\s\S]*font-family: var\(--font-family-accent\);[\s\S]*font-size: 2rem;[\s\S]*line-height: 1;[\s\S]*letter-spacing: var\(--font-letter-spacing-accent\)/,
  );
  assert.match(
    siteHeaderStyles,
    /\.brand span \{[\s\S]*transform: translateY\(-0\.12em\)/,
  );
  assert.match(
    faqStyles,
    /\.list summary \{[\s\S]*font-family: var\(--font-family-display\)/,
  );
  assert.match(
    typographyStyles,
    /\.heading\[data-size="section"\] \{[\s\S]*max-width: 15ch/,
  );
  assert.match(page, /viewBox="0 0 800 760"/);
  assert.match(page, /M-30 570C130 410 230 652 390 486S650 250 850 368/);
  assert.match(page, /M-20 298C120 392 246 218 390 342S626 590 840 470/);
  assert.match(pageStyles, /\.mapRouteSecondary/);
  assert.match(pageStyles, /\.mapPin/);
});
