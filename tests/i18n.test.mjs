import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

function placeholders(value) {
  return [...value.matchAll(/\{([A-Za-z][A-Za-z0-9]*)\}/g)]
    .map((match) => match[1])
    .sort();
}

function compareCatalogs(english, thai, path = "messages") {
  assert.equal(
    Array.isArray(thai),
    Array.isArray(english),
    `${path} array shape differs`,
  );
  assert.equal(typeof thai, typeof english, `${path} type differs`);

  if (typeof english === "string") {
    assert.notEqual(english.trim(), "", `${path} is empty in English`);
    assert.notEqual(thai.trim(), "", `${path} is empty in Thai`);
    assert.deepEqual(
      placeholders(thai),
      placeholders(english),
      `${path} placeholders differ`,
    );
    return;
  }

  if (Array.isArray(english)) {
    assert.equal(thai.length, english.length, `${path} length differs`);
    english.forEach((value, index) =>
      compareCatalogs(value, thai[index], `${path}[${index}]`),
    );
    return;
  }

  if (english && typeof english === "object") {
    assert.deepEqual(
      Object.keys(thai).sort(),
      Object.keys(english).sort(),
      `${path} keys differ`,
    );
    Object.keys(english).forEach((key) =>
      compareCatalogs(english[key], thai[key], `${path}.${key}`),
    );
  }
}

test("keeps complete TH/EN catalogs with identical keys and placeholders", async () => {
  const [english, thai] = await Promise.all([
    source("messages/en.json").then(JSON.parse),
    source("messages/th.json").then(JSON.parse),
  ]);

  compareCatalogs(english, thai);
  assert.match(thai.marketing.hero.title, /[\u0E00-\u0E7F]/);
  assert.match(thai.privacy.title, /[\u0E00-\u0E7F]/);
  assert.match(thai.terms.title, /[\u0E00-\u0E7F]/);
  assert.equal(english.marketing.faq.items.length, 7);
  assert.equal(
    english.marketing.promise.title,
    "Get every trip ready together.",
  );
  assert.equal(thai.marketing.promise.title, "เตรียมทุกทริปไปด้วยกัน");
  assert.deepEqual(english.marketing.promise.items, [
    "Plan the trip",
    "Prepare the gear",
    "Offline maps & trip data",
  ]);
  assert.deepEqual(thai.marketing.promise.items, [
    "วางแผน",
    "เตรียมอุปกรณ์",
    "แผนที่และข้อมูลออฟไลน์",
  ]);
});

test("gives multiline Thai accent headings enough vertical space", async () => {
  const globalStyles = await source("app/globals.css");

  assert.match(
    globalStyles,
    /html\[lang="th"\] :is\(h1, h2, h3\) \{[\s\S]*line-height: 1\.3/,
  );
});

test("defines a two-locale, URL-driven i18n foundation", async () => {
  const [config, messages, worker, layout, documentSync] = await Promise.all([
    source("lib/i18n/config.ts"),
    source("lib/i18n/messages.ts"),
    source("worker/index.ts"),
    source("app/layout.tsx"),
    source("components/i18n/LocaleDocumentSync.tsx"),
  ]);

  assert.match(config, /SUPPORTED_LOCALES = \["en", "th"\]/);
  assert.match(config, /DEFAULT_LOCALE: Locale = "en"/);
  assert.match(config, /localizedPath/);
  assert.match(messages, /messages\/en\.json/);
  assert.match(messages, /messages\/th\.json/);
  assert.match(messages, /Record<Locale, Messages>/);
  assert.match(worker, /LOCALE_HEADER/);
  assert.match(layout, /<LocaleDocumentSync \/>/);
  assert.match(documentSync, /usePathname\(\)/);
  assert.match(documentSync, /getLocaleFromPathname\(pathname\)/);
  assert.match(documentSync, /useLayoutEffect/);
  assert.match(
    documentSync,
    /document\.documentElement\.lang = locale/,
  );
  assert.doesNotMatch(`${config}\n${messages}`, /cookie|localStorage/i);
});

test("provides accessible desktop and mobile language switching", async () => {
  const [switcher, switcherStyles, header] = await Promise.all([
    source("components/i18n/LanguageSwitcher.tsx"),
    source("components/i18n/language-switcher.module.css"),
    source("components/marketing/SiteHeader.tsx"),
  ]);

  assert.match(switcher, /aria-current=/);
  assert.match(switcher, /hrefLang=/);
  assert.match(switcher, /window\.location\.hash/);
  assert.match(switcher, /data-display-locale=\{displayedLocale\}/);
  assert.match(switcher, /data-variant=\{variant\}/);
  assert.match(switcher, /aria-expanded=\{open\}/);
  assert.match(switcher, /aria-haspopup="menu"/);
  assert.match(switcher, /role="menu"/);
  assert.match(switcher, /role="menuitem"/);
  assert.match(switcher, /en: "\/brand\/flag-en\.svg"/);
  assert.match(switcher, /th: "\/brand\/flag-th\.svg"/);
  assert.match(switcher, /className=\{styles\.currentFlag\}/);
  assert.match(switcher, /className=\{styles\.menuFlag\}/);
  assert.match(switcher, /pointerdown/);
  assert.match(switcher, /event\.key === "Escape"/);
  assert.match(switcher, /setPendingLocale\(targetLocale\)/);
  assert.match(
    switcher,
    /onClick=\{\(event\) => changeLanguage\(event, targetLocale\)\}/,
  );
  assert.match(switcher, /useRouter\(\)/);
  assert.match(
    switcher,
    /router\.push\(destination, \{ scroll: false \}\)/,
  );
  assert.doesNotMatch(switcher, /window\.location\.assign/);
  assert.doesNotMatch(
    switcher,
    /onMouseEnter|onMouseLeave|onFocus|onBlur/,
  );
  assert.match(switcherStyles, /min-height: 2\.75rem/);
  assert.match(switcherStyles, /border-radius: 50%/);
  assert.match(switcherStyles, /@keyframes language-menu-in/);
  assert.match(switcherStyles, /@keyframes language-flag-settle/);
  assert.match(
    switcherStyles,
    /\.switcher\[data-variant="header"\]\s*\{[\s\S]*width: 56px[\s\S]*height: 56px/,
  );
  assert.match(switcherStyles, /prefers-reduced-motion: reduce/);
  assert.match(header, /desktopLanguage/);
  assert.match(header, /variant="header"/);
  assert.match(header, /mobileLanguage/);
});

test("ships the owner-provided SVG flag assets", async () => {
  const [englishFlag, thaiFlag] = await Promise.all([
    source("public/brand/flag-en.svg"),
    source("public/brand/flag-th.svg"),
  ]);

  assert.match(englishFlag, /<svg[\s\S]*viewBox="0 0 512 512"/);
  assert.match(thaiFlag, /<svg[\s\S]*viewBox="0 0 512 512"/);
});

test("keeps localized navigation and button geometry stable", async () => {
  const [
    header,
    headerStyles,
    marketingPage,
    roadmapPage,
    supportPage,
    buttonStyles,
    legalStyles,
  ] = await Promise.all([
    source("components/marketing/SiteHeader.tsx"),
    source("components/marketing/site-header.module.css"),
    source("components/marketing/MarketingPage.tsx"),
    source("components/roadmap/RoadmapPage.tsx"),
    source("components/support/SupportPage.tsx"),
    source("components/ui/ui.module.css"),
    source("app/legal-pages.module.css"),
  ]);

  assert.match(header, /data-nav-slot=\{index\}/);
  assert.match(header, /data-size-lock="waitlist"/);
  assert.match(headerStyles, /\[data-nav-slot="0"\]/);
  assert.match(headerStyles, /inline-size: 7\.75rem/);
  assert.match(headerStyles, /91\.5rem/);
  assert.match(headerStyles, /width: 9\.5rem/);
  assert.match(headerStyles, /height: 1\.875rem/);
  assert.match(headerStyles, /width: 136\.703125px/);
  assert.match(headerStyles, /height: 52px/);
  assert.match(
    headerStyles,
    /\.desktopNav a \{[\s\S]*font-size: 1rem/,
  );
  assert.match(
    headerStyles,
    /\.groupTrigger \{[\s\S]*font-size: 1rem/,
  );
  assert.match(
    headerStyles,
    /\.actions \.headerCta\[data-size-lock="waitlist"\] \{[\s\S]*font-size: 0\.9375rem/,
  );
  assert.match(headerStyles, /width: 14\.5rem/);
  assert.match(marketingPage, /data-size-lock="compact"/);
  assert.match(roadmapPage, /data-size-lock="return-home"/);
  assert.match(supportPage, /data-size-lock="return-home"/);
  assert.match(
    buttonStyles,
    /\.button\[data-size-lock="waitlist"\]/,
  );
  assert.match(
    buttonStyles,
    /\.button\[data-size-lock="waitlist"\]\s*\{\s*min-inline-size: 10\.25rem/,
  );
  assert.match(buttonStyles, /min-inline-size: 10\.5rem/);
  assert.match(legalStyles, /min-inline-size: 10\.5rem/);
});

test("keeps user-visible copy in message catalogs", async () => {
  const files = [
    "components/marketing/MarketingPage.tsx",
    "components/marketing/WidgetSpotlight.tsx",
    "components/marketing/SiteHeader.tsx",
    "components/marketing/FeatureRail.tsx",
    "components/legal/LegalNoticePage.tsx",
    "components/legal/LocalizedNotFound.tsx",
    "components/marketing/SiteFooter.tsx",
    "components/roadmap/RoadmapPage.tsx",
    "components/support/SupportPage.tsx",
  ];
  const runtime = (
    await Promise.all(files.map((file) => source(file)))
  ).join("\n");

  for (const formerHardCodedCopy of [
    "Better together.",
    "Join the waitlist",
    "No information is collected or submitted yet.",
    "Navigate Accomp",
    "Previous ${label",
    "Not a service agreement",
    "This path isn't on the map.",
  ]) {
    assert.doesNotMatch(runtime, new RegExp(formerHardCodedCopy));
  }
});

test("localizes homepage, roadmap, support, legal and not-found route sources", async () => {
  const [home, roadmap, support, privacy, terms, missing, sitemap] =
    await Promise.all([
    source("app/[locale]/page.tsx"),
    source("app/[locale]/roadmap/page.tsx"),
    source("app/[locale]/support/page.tsx"),
    source("app/[locale]/privacy/page.tsx"),
    source("app/[locale]/terms/page.tsx"),
    source("app/[locale]/[...missing]/page.tsx"),
    source("app/sitemap.xml/route.ts"),
  ]);

  assert.match(home, /MarketingPage locale=\{locale\} messages=\{messages\}/);
  assert.match(roadmap, /RoadmapPage locale=\{locale\} messages=\{messages\}/);
  assert.match(roadmap, /localizedPath\(locale, "\/roadmap"\)/);
  assert.match(support, /SupportPage locale=\{locale\} messages=\{messages\}/);
  assert.match(support, /localizedPath\(locale, "\/support"\)/);
  assert.match(privacy, /localizedPath\(locale, "\/privacy"\)/);
  assert.match(terms, /localizedPath\(locale, "\/terms"\)/);
  assert.match(missing, /notFound\(\)/);
  assert.match(sitemap, /hreflang/);
  assert.match(sitemap, /SUPPORTED_LOCALES/);
});
