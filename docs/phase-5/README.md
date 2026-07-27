# Accomp Phase 5 — Core Marketing Page

> Status: **Complete — carried into Phase 6**
> Date started: 2026-07-28
> Scope: Complete static marketing story and essential page interactions

## Objective

Implement the approved Phase 3 visual direction as a responsive, semantic
marketing homepage without bringing advanced motion, live services or release
work forward.

## Working Assumptions

| Topic | Phase 5 implementation | Status |
|---|---|---|
| Brand mark | Pine symbol v1 with text wordmark | Provisional |
| Language | English-first | Provisional |
| Product status | Pre-launch concept | Explicit on page |
| CTA | Scrolls to the waitlist preview | No submission |
| App UI | Original HTML/CSS compositions | Illustrative only |
| Offline behavior | Carefully qualified copy | Requires validation |
| Photography | Original abstract composition | No approved source |
| Store availability | Not claimed | Unconfirmed |

## Implemented Page Structure

1. Sticky header and mobile navigation
2. Hero with value proposition and illustrative trip UI
3. Product-promise strip
4. Plan Together chapter and feature rail
5. Pack Together chapter and feature rail
6. Ready Anywhere dark chapter
7. How It Works
8. Editorial shared-adventure moment
9. Native FAQ disclosures
10. Honest waitlist preview
11. Footer with working in-page navigation

## Phase Boundary

Phase 5 intentionally excludes:

- Scroll-linked reveals and path animation
- Advanced header theme transitions
- Live waitlist submission
- Analytics or consent tooling
- Store badges and launch claims
- SEO launch metadata and social imagery
- Legal destinations
- Backend, database, authentication or CMS
- Deployment

## Acceptance Review

### Complete marketing story

- Hero communicates the product concept and primary promise.
- Plan, Pack, Offline, How It Works, editorial, FAQ and final CTA sections follow
  the approved reading order.
- Product behavior that remains unconfirmed is qualified in copy.
- Result: Pass.

### Functional navigation

- Header, mobile menu, hero CTA and footer links resolve to rendered page IDs.
- Server-rendered output contains no missing hash destination.
- Mobile menu implements Escape, focus containment, scroll lock and focus return.
- Result: Pass at implementation level.

### Responsive and accessible content

- Semantic source order follows the compact layout.
- Card rails preserve native scrolling and keyboard focus.
- Desktop controls disable when all cards fit.
- FAQ uses native disclosures.
- Content does not depend on animation.
- Result: Pass at source and rendered-output level.

### Honest CTA state

- The waitlist destination exists.
- No form, submit handler or backend is present.
- Controls are disabled and the page states that no information is collected.
- Result: Pass with the documented pre-launch limitation.

## Quality Verification

- Formatting baseline: pass
- ESLint: pass without warnings
- Strict TypeScript: pass
- Source-contract tests: 10 pass
- Rendered-output tests: 3 pass
- Production-compatible Vinext build: pass
- Local development response: HTTP 200

## Next Gate

Phase 6 was authorized on 2026-07-28 after the Phase 3 typography and offline
map treatment were restored in the production page.
