# Accomp Phase 7 — SEO, Legal and Performance

> Status: **Draft complete — waiting for review and approval**
> Date started: 2026-07-28
> Scope: Search, sharing, legal readiness, analytics decision and performance

## Objective

Make the Phase 6 marketing experience ready to discover, share and evaluate
without inventing a production domain, legal entity, launch status or analytics
policy.

## Delivered

- Request-aware canonical metadata using the configured site URL or current host
- Complete title, description, Open Graph and X/Twitter metadata
- Original 1200 × 630 Accomp social card at `public/og.png`
- WebSite structured data without unverified app platform or pricing claims
- Dynamic `robots.txt` and `sitemap.xml`
- Linked Privacy and Terms status pages
- A branded 404 route with automatic `noindex`
- Explicit no-analytics and no-cookie decision
- Icon runtime optimization and production bundle review
- Lighthouse production audit and performance report

## Provisional Inputs

The owner has not supplied a production domain, legal entity/contact, final
privacy policy, final terms, analytics provider, consent requirements or live
store/waitlist URLs. Phase 7 therefore uses reversible behavior:

- Canonical, Open Graph, robots and sitemap URLs resolve from
  `NEXT_PUBLIC_SITE_URL` when configured, then fall back to the request host.
- Privacy and Terms pages state the current pre-launch facts; they do not
  pretend to be final mobile-app agreements.
- No analytics, advertising tracker, optional cookie or live form is enabled.
- No store badge, release date, pricing, review or platform claim is added.

These items remain release gates for Phase 8.

## Quality Result

- Production Lighthouse: Performance 90, Accessibility 100,
  Best Practices 100, SEO 100
- Cumulative Layout Shift: 0
- Total Blocking Time: 20 ms
- Social image dimensions and file-size contract: pass
- Production-compatible Vinext build: pass
- Search, legal and crawl route tests: pass

See [search, social and legal decisions](./search-social-and-legal.md) and the
[performance report](./performance-report.md).

## Phase Boundary

Phase 7 does not deploy the site, activate a waitlist, add analytics, publish
final legal agreements, perform the full Phase 8 browser/device matrix or create
store destinations.

## Next Gate

After implementation and owner review:

`เริ่ม Phase 8`
