# Search, Social, Analytics and Legal Decisions

## URL Resolution

The code does not hard-code an unverified Accomp domain.

1. `NEXT_PUBLIC_SITE_URL` is used when a verified production origin is supplied.
2. Otherwise metadata uses the forwarded host or request host.
3. Local execution safely resolves to the local origin.

This keeps canonical, Open Graph, sitemap and robots destinations internally
consistent while preventing an example domain from leaking into a release.

## Search Metadata

The homepage includes:

- `Adventure Together · Accomp` title
- A product-specific description
- Canonical URL
- Index/follow rules and large-image Google preview permission
- Four relevant, non-spammy keywords
- English language and `en_US` Open Graph locale
- WebSite JSON-LD

SoftwareApplication rich data is intentionally omitted because platform,
pricing, download URLs and release status are not confirmed.

## Social Preview

`public/og.png` is an original 1200 × 630 Accomp social card. It carries the
approved palette, abstract contour/path language, companion points and the exact
text:

- `Accomp`
- `Adventure Together.`

The asset was generated once with the built-in ImageGen path, inspected at
native output, resized into the social-card contract and inspected again. It has
no store badge, rating, testimonial, launch date, third-party logo or copied
Phantom asset.

Prompt summary:

> Create a premium landscape Accomp social card using the approved sage, sand,
> cream and dark palette; place exact Accomp brand copy beside an original
> shared-route and trip-planning composition; avoid unverified claims,
> third-party branding and invented text.

Phase 2.1 adds `public/og-th.png`, a 1200 × 630 localized derivative for Thai
routes. It was produced with the built-in ImageGen text-localization edit path,
then resized and inspected in the project. The exact Thai subtitle is:

- `ผจญภัยไปด้วยกัน`

## Crawl Routes

- `/robots.txt` allows the public site and points to the current-origin sitemap.
- `/sitemap.xml` lists EN/TH homepage, Roadmap, Privacy and Terms routes with
  alternate language links.
- Each sitemap URL uses the verified configured origin or request origin.
- Missing routes return HTTP 404 and include `noindex`.

## Analytics and Cookies

Phase 7 integrates no analytics provider because none has been approved.

- No analytics package is installed.
- No tracking script, pixel or event endpoint is present.
- No optional cookie is created.
- No cookie banner is shown because there is nothing optional to consent to.

When a provider and consent approach are approved, both the implementation and
privacy policy must be updated before data collection begins.

## Legal Links

The footer links to locale-matching Privacy and Terms routes. These pages document the
current, factual pre-launch state:

- no data submissions;
- no accounts, payments or service relationship;
- app visuals and product states are illustrative;
- final legal entity, contact and agreements are still required.

They are not represented as final mobile-app policies.
