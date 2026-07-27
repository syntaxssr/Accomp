# Phase 7 Performance Report

> Audit date: 2026-07-28
> Runtime: local Vinext production server
> Lighthouse: 12.8.2, default mobile profile

## Lighthouse Result

| Category | Score |
|---|---:|
| Performance | 90 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

| Metric | Result |
|---|---:|
| First Contentful Paint | 2.9 s |
| Largest Contentful Paint | 2.9 s |
| Speed Index | 3.0 s |
| Total Blocking Time | 20 ms |
| Cumulative Layout Shift | 0 |

The audit found one low-contrast illustrative status label on the first pass.
Its color was corrected and the final accessibility score reached 100.

## Client Asset Review

Final local production build:

| Asset group | Approximate gzip size |
|---|---:|
| Framework and app entry JavaScript | 83.6 KiB |
| Accomp interactive JavaScript | 4.1 KiB |
| CSS | 9.4 KiB |
| Social card, not loaded by the page | 1,101,675 bytes |
| Pine SVG | 1,286 bytes |

The Accomp interaction total includes the header, feature rail and motion
controller. The social card is metadata-only and does not enter the homepage
render path.

## Optimization Work

- Replaced the framework image runtime for the fixed 1.3 kB pine SVG with a
  native, dimensioned image element.
- Removed a 43,711-byte raw / 13,937-byte gzip client chunk from the build.
- Kept system font fallbacks, so no webfont request or font-driven layout shift
  is introduced.
- Kept motion to transforms, opacity and SVG stroke properties.
- Preserved passive scroll listeners and requestAnimationFrame scheduling.
- Kept the social card within a 1.5 MB test budget.
- Retained immutable caching for content-hashed production assets.

## Targets

Phase 7 uses the following local production targets:

- Lighthouse Performance at least 90
- Accessibility, Best Practices and SEO at 100
- Total Blocking Time below 200 ms
- Cumulative Layout Shift at 0
- No critical audit issue

All Phase 7 targets pass.

## Release Follow-up

Phase 8 should repeat Lighthouse on the real deployed origin because CDN
compression, cache policy, network latency and the final domain are
infrastructure-dependent. It should also cover the full browser, viewport,
keyboard, screen-reader, zoom and slow-network matrix.
