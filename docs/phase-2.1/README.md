# Accomp Phase 2.1 — TH/EN Internationalization Foundation

> Status: **Implementation complete — Thai copy awaits owner language review**
> Date completed: 2026-07-28
> Scope: File-based bilingual routes, user-visible copy, metadata and QA

## Objective

Make every user-visible and assistive-technology-facing message available in
Thai and English without adding a translation service, tracking preference,
CMS or backend.

## Delivered

- Typed `messages/en.json` and `messages/th.json` catalogs
- Exact catalog key, array-shape and placeholder parity validation
- English routes under `/en` and Thai routes under `/th`
- Default `/` redirect to `/en`
- Locale-aware homepage, Privacy, Terms and 404 experiences
- Accessible desktop and mobile TH/EN language switcher
- Hash-preserving language links with a no-JavaScript fallback
- Localized title, description, canonical, `hreflang`, Open Graph and JSON-LD
- Bilingual sitemap entries and locale-specific social preview metadata
- Thai typography fallback, line-height and heading-spacing treatment
- Twelve-route production smoke matrix

## Locale Behavior

The URL is the source of truth:

```text
/en
/th
/en/privacy
/th/privacy
/en/terms
/th/terms
```

No cookie, local storage, IP lookup or account preference is used. Unsupported
locale values return a real 404 rather than silently falling back.

## Translation Boundary

All marketing, navigation, artwork-label, legal, not-found, metadata, alt,
ARIA and live-region copy is catalog-backed. Brand and machine identifiers
such as `Accomp`, locale codes, anchor IDs, percentages and the `/health`
payload remain language-neutral.

See the [translation key map](./translation-key-map.md) for ownership and
coverage.

## Social Preview

English continues to use `public/og.png`. Thai uses `public/og-th.png`, a
localized derivative created with the built-in ImageGen edit path. The exact
Thai subtitle is `ผจญภัยไปด้วยกัน`. The exported file is 1200 × 630 and stays
below the repository asset budget.

## Validation

```bash
npm run check:release
```

The release suite covers catalog parity, localized source contracts, both
rendered languages, metadata, legal routes, not-found behavior, the production
build, release audit and managed HTTP smoke test.

## Phase Boundary

Phase 2.1 does not add another language, automatic translation, language
tracking, a CMS, a live waitlist, analytics, final legal approval or public
deployment. Thai copy is implementation-complete but remains subject to the
owner's language review before public launch.
