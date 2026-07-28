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
    english.marketing.promise.body,
    "One core feature: Shared Trip Planning.",
  );
  assert.equal(
    thai.marketing.promise.body,
    "หนึ่งฟีเจอร์หลัก: วางแผนทริปร่วมกัน",
  );
  assert.deepEqual(english.marketing.promise.items, [
    "Plan the trip",
    "Prepare the gear",
    "Ready offline",
  ]);
  assert.deepEqual(thai.marketing.promise.items, [
    "วางแผน",
    "เตรียมอุปกรณ์",
    "พร้อมใช้งานออฟไลน์",
  ]);
});

test("defines a two-locale, URL-driven i18n foundation", async () => {
  const [config, messages, worker] = await Promise.all([
    source("lib/i18n/config.ts"),
    source("lib/i18n/messages.ts"),
    source("worker/index.ts"),
  ]);

  assert.match(config, /SUPPORTED_LOCALES = \["en", "th"\]/);
  assert.match(config, /DEFAULT_LOCALE: Locale = "en"/);
  assert.match(config, /localizedPath/);
  assert.match(messages, /messages\/en\.json/);
  assert.match(messages, /messages\/th\.json/);
  assert.match(messages, /Record<Locale, Messages>/);
  assert.match(worker, /LOCALE_HEADER/);
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
  assert.match(switcherStyles, /min-height: 2\.75rem/);
  assert.match(header, /desktopLanguage/);
  assert.match(header, /mobileLanguage/);
});

test("keeps user-visible copy in message catalogs", async () => {
  const files = [
    "components/marketing/MarketingPage.tsx",
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
    "Adventure together.",
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
