import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/en") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "https://accomp.test"), {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "accomp.test",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("redirects the unprefixed homepage to English", async () => {
  const [response, roadmap] = await Promise.all([
    render("/"),
    render("/roadmap"),
  ]);

  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "https://accomp.test/en");
  assert.equal(roadmap.status, 307);
  assert.equal(
    roadmap.headers.get("location"),
    "https://accomp.test/en/roadmap",
  );
});

test("server-renders complete and distinct Phase 2.2 EN/TH pages", async () => {
  const [englishResponse, thaiResponse] = await Promise.all([
    render("/en"),
    render("/th"),
  ]);

  assert.equal(englishResponse.status, 200);
  assert.equal(thaiResponse.status, 200);
  const english = await englishResponse.text();
  const thai = await thaiResponse.text();

  assert.match(english, /<html[^>]*lang="en"/i);
  assert.match(thai, /<html[^>]*lang="th"/i);
  assert.match(english, /<title>Adventure Together · Accomp<\/title>/i);
  assert.match(thai, /<title>ผจญภัยไปด้วยกัน · Accomp<\/title>/i);
  assert.match(english, /data-phase="2\.2"/);
  assert.match(thai, /data-phase="2\.2"/);
  assert.match(english, /Adventure together\./i);
  assert.match(thai, /ผจญภัยไปด้วยกัน/);
  assert.match(english, /href="\/th"/);
  assert.match(thai, /href="\/en"/);
  assert.match(english, /href="\/en\/privacy"/);
  assert.match(thai, /href="\/th\/privacy"/);
  assert.doesNotMatch(thai, /Make one plan\. Bring everyone in\./);
});

test("renders a complete semantic TH/EN project roadmap", async () => {
  const [englishResponse, thaiResponse] = await Promise.all([
    render("/en/roadmap"),
    render("/th/roadmap"),
  ]);

  assert.equal(englishResponse.status, 200);
  assert.equal(thaiResponse.status, 200);
  const english = await englishResponse.text();
  const thai = await thaiResponse.text();

  assert.match(english, /<html[^>]*lang="en"/i);
  assert.match(thai, /<html[^>]*lang="th"/i);
  assert.match(english, /<title>Project roadmap · Accomp<\/title>/i);
  assert.match(thai, /<title>โรดแมปโปรเจกต์ · Accomp<\/title>/i);
  assert.match(english, /content="https:\/\/accomp\.test\/og\.png"/);
  assert.match(thai, /content="https:\/\/accomp\.test\/og-th\.png"/);
  assert.match(english, /data-phase="2\.2"/);
  assert.match(thai, /data-phase="2\.2"/);
  assert.equal((english.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((thai.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((english.match(/<article\b/g) ?? []).length, 13);
  assert.equal((thai.match(/<article\b/g) ?? []).length, 13);
  assert.match(english, /<ol\b[^>]*aria-label=/i);
  assert.match(thai, /<ol\b[^>]*aria-label=/i);
  assert.match(english, /aria-current="step"/);
  assert.match(thai, /aria-current="step"/);
  assert.match(english, /href="\/th\/roadmap"/);
  assert.match(thai, /href="\/en\/roadmap"/);
  assert.match(
    english,
    /<a[^>]*aria-current="page"[^>]*href="\/en\/roadmap"/,
  );
  assert.match(
    thai,
    /<a[^>]*aria-current="page"[^>]*href="\/th\/roadmap"/,
  );
  assert.match(english, /Setting the trailhead/);
  assert.match(thai, /กำหนดจุดเริ่มต้นของเส้นทาง/);
});

test("renders semantic landmarks, complete anchors and native FAQ items in both languages", async () => {
  for (const locale of ["en", "th"]) {
    const response = await render(`/${locale}`);
    const html = await response.text();
    const ids = new Set(
      [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
    );
    const targets = [...html.matchAll(/href="#([^"]+)"/g)].map(
      (match) => match[1],
    );

    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.equal((html.match(/<details\b/g) ?? []).length, 7);
    assert.match(html, /<header\b/);
    assert.match(html, /<main\b[^>]*id="main"/);
    assert.match(html, /<footer\b/);
    assert.equal(targets.every((target) => ids.has(target)), true);
  }
});

test("keeps the localized waitlist honest and non-submitting", async () => {
  const [englishResponse, thaiResponse] = await Promise.all([
    render("/en"),
    render("/th"),
  ]);
  const english = await englishResponse.text();
  const thai = await thaiResponse.text();

  assert.doesNotMatch(`${english}${thai}`, /<form\b/i);
  assert.match(english, /Waitlist signup is not active yet/);
  assert.match(english, /No information is collected or submitted yet/);
  assert.match(thai, /ระบบลงชื่อผู้สนใจยังไม่เปิดใช้งาน/);
  assert.match(thai, /ขณะนี้ยังไม่มีการเก็บหรือส่งข้อมูลใด ๆ/);
  assert.match(english, /<input[^>]*disabled/i);
  assert.match(thai, /<input[^>]*disabled/i);
});

test("renders localized canonical, alternate, social and structured metadata", async () => {
  const [englishResponse, thaiResponse] = await Promise.all([
    render("/en"),
    render("/th"),
  ]);
  const english = await englishResponse.text();
  const thai = await thaiResponse.text();

  assert.match(
    english,
    /<link rel="canonical" href="https:\/\/accomp\.test\/en"/,
  );
  assert.match(
    thai,
    /<link rel="canonical" href="https:\/\/accomp\.test\/th"/,
  );
  assert.match(english, /hrefLang="th"|hreflang="th"/i);
  assert.match(thai, /hrefLang="en"|hreflang="en"/i);
  assert.match(english, /content="https:\/\/accomp\.test\/og\.png"/);
  assert.match(thai, /content="https:\/\/accomp\.test\/og-th\.png"/);
  assert.match(english, /name="twitter:card" content="summary_large_image"/);
  assert.match(thai, /type="application\/ld\+json"/);
  assert.match(english, /"inLanguage":"en"/);
  assert.match(thai, /"inLanguage":"th"/);
});

test("serves localized legal notices, sitemap and real EN/TH 404 pages", async () => {
  const [privacyEn, privacyTh, termsEn, termsTh, robots, sitemap, missingEn, missingTh] =
    await Promise.all([
      render("/en/privacy"),
      render("/th/privacy"),
      render("/en/terms"),
      render("/th/terms"),
      render("/robots.txt"),
      render("/sitemap.xml"),
      render("/en/not-a-real-page"),
      render("/th/not-a-real-page"),
    ]);

  assert.equal(privacyEn.status, 200);
  assert.match(await privacyEn.text(), /does not accept waitlist submissions/);
  assert.equal(privacyTh.status, 200);
  assert.match(await privacyTh.text(), /เว็บไซต์ปัจจุบันไม่รับข้อมูล/);
  assert.equal(termsEn.status, 200);
  assert.match(await termsEn.text(), /Not a service agreement/);
  assert.equal(termsTh.status, 200);
  assert.match(await termsTh.text(), /ไม่ใช่ข้อตกลงการให้บริการ/);

  assert.equal(robots.status, 200);
  assert.match(
    await robots.text(),
    /Sitemap: https:\/\/accomp\.test\/sitemap\.xml/,
  );

  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();

  for (const pathname of [
    "/en",
    "/th",
    "/en/privacy",
    "/th/privacy",
    "/en/terms",
    "/th/terms",
    "/en/roadmap",
    "/th/roadmap",
  ]) {
    assert.match(sitemapXml, new RegExp(`https://accomp\\.test${pathname}`));
  }
  assert.match(sitemapXml, /hreflang="en"/);
  assert.match(sitemapXml, /hreflang="th"/);

  assert.equal(missingEn.status, 404);
  assert.equal(missingTh.status, 404);
  const missingEnglish = await missingEn.text();
  const missingThai = await missingTh.text();
  assert.match(missingEnglish, /This path isn/);
  assert.match(missingThai, /เส้นทางนี้ไม่ได้อยู่บนแผนที่/);
  assert.match(missingEnglish, /content="noindex"/);
  assert.match(missingThai, /content="noindex"/);
  assert.doesNotMatch(missingEnglish, /content="index, follow"/);
  assert.doesNotMatch(missingThai, /content="index, follow"/);
});

test("serves localized pages and health with production security headers", async () => {
  const [english, thai, health] = await Promise.all([
    render("/en"),
    render("/th"),
    render("/health"),
  ]);

  for (const response of [english, thai, health]) {
    assert.equal(
      response.headers.get("x-content-type-options"),
      "nosniff",
    );
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(
      response.headers.get("referrer-policy"),
      "strict-origin-when-cross-origin",
    );
    assert.match(
      response.headers.get("content-security-policy") ?? "",
      /default-src 'self'/,
    );
    assert.equal(
      response.headers.get("strict-transport-security"),
      "max-age=31536000",
    );
  }

  assert.equal(health.status, 200);
  assert.equal(health.headers.get("cache-control"), "no-store");
  assert.deepEqual(await health.json(), {
    service: "accomp",
    status: "ok",
  });
});
