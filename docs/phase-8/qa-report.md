# Phase 8 QA Report

> QA date: 2026-07-28
> Candidate: Accomp marketing website, Phase 8
> Runtime: local Vinext development and production builds

## Result

No critical visual, accessibility, link, form or runtime defect remains in the
tested local candidate. Three accessibility hardening changes were made during
the pass:

1. Header brand, desktop navigation and footer link targets now provide a
   minimum 44 × 44 CSS-pixel target.
2. Legal-page CTA text, legal eyebrows and FAQ hover text use foreground pairs
   that meet the required contrast.
3. The skip-link destination is programmatically focusable.

Public launch remains blocked by the business and legal inputs recorded in the
[known limitations](./known-limitations.md).

## Browser and Responsive Matrix

| Environment | Viewport | Navigation mode | Horizontal overflow | Result |
|---|---:|---|---|---|
| In-app Chromium | 320 × 800 | Mobile menu | None | Pass |
| In-app Chromium | 390 × 844 | Mobile menu | None | Pass |
| In-app Chromium | 768 × 900 | Mobile menu | None | Pass |
| In-app Chromium | 1024 × 900 | Desktop navigation | None | Pass |
| In-app Chromium | 1440 × 900 | Desktop navigation | None | Pass |
| In-app Chromium | 1920 × 1080 | Desktop navigation | None | Pass |
| Google Chrome | 1265px content width | Desktop navigation | None | Pass |

Every target contained one H1, one main landmark and one footer. The 320px pass
also serves as a narrow-reflow proxy for 200% desktop zoom. Native 200% zoom and
non-Chromium hardware checks remain manual launch follow-ups.

## Interaction and Accessibility

| Check | Evidence | Result |
|---|---|---|
| Mobile menu | Opens as a modal dialog, locks page scroll, closes with Escape and returns focus to Menu | Pass |
| Menu focus order | First control receives focus; focus trap and return behavior are implemented | Pass |
| Feature rails | End reaches card 3 of 3; Home returns to card 1 of 3 | Pass |
| FAQ | Seven native `details`/`summary` disclosures open and close | Pass |
| Skip navigation | Skip link targets focusable `#main` | Pass |
| Landmarks | Header, navigation, main and footer appear in the accessibility tree | Pass |
| Reduced motion | Motion has a no-animation final-state path | Pass |
| Touch targets | Primary controls and navigation links have a 44px minimum target | Pass |
| Contrast | Critical normal-text pairs meet at least 4.5:1 | Pass |

Verified contrast pairs include:

- Night on Trail Sage: 4.74:1
- Muted text on Warm Cream: 5.42:1
- Trail Sand on Night: 11.72:1
- Sage Ink on Trail Sand: 8.28:1

## Routes, Links and Runtime

- Homepage hash links resolve to existing section IDs.
- `/privacy` and `/terms` render without horizontal overflow.
- A missing route returns the branded not-found experience with `noindex`.
- The waitlist field is disabled and no `form`, submit handler or collection
  endpoint is present.
- No analytics, advertising tracker or optional cookie is active.
- Browser console inspection found no warning or error in either tested browser.
- Markdown documentation links and production runtime URLs pass the reusable
  release audit.

## Content and Asset Review

- Visible copy was reviewed for consistent English capitalization, punctuation
  and pre-launch wording.
- Platform, price, launch-date, review and usage claims remain absent.
- Offline behavior is explicitly subject to validation.
- App UI, dates, progress values and maps are marked illustrative.
- The pine icon and runtime illustrations are original Accomp work.
- `public/og.png` is the original Accomp social card documented in Phase 7.
- No Phantom, app-store, photography or third-party illustration asset ships in
  `public/`.
- Every public asset is within the 1.5 MB release-audit budget.

## Automated and Production Verification

| Check | Command or profile | Result |
|---|---|---|
| Formatting | `npm run format:check` | Pass |
| Lint | `npm run lint` | Pass |
| TypeScript | `npm run typecheck` | Pass |
| Source tests | `npm run test:source` | Pass |
| Production build | `npm run build` | Pass |
| Rendered route tests | `npm run test:render` | Pass |
| Release audit | `npm run audit:release` | Pass |
| Diff hygiene | `git diff --check` | Pass |
| Slow-network audit | Lighthouse default mobile simulation | 90 / 100 / 100 / 100 |

The final local production audit recorded FCP 2.9s, LCP 2.9s, Speed Index 3.0s,
Total Blocking Time 10ms and Cumulative Layout Shift 0. The deployed-origin
audit remains separate because CDN behavior, the final domain and production
response headers do not exist yet.
