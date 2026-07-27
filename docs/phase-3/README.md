# Accomp Phase 3 — High-Fidelity Design

> Status: **Carried into Phase 4 with provisional assumptions**
> Date started: 2026-07-27
> Scope: Final visual direction and implementation reference only
> No production framework scaffold, backend, analytics or deployment

## Phase 3 Objective

Turn the Phase 2 structure into a high-fidelity responsive design that can be implemented without guessing visual relationships, component states or motion behavior.

## Working Assumptions

The user command `เริ่มทำ Phase 3` authorizes high-fidelity design to proceed with reversible assumptions:

| Topic | Phase 3 decision | Status |
|---|---|---|
| Logo | Pine symbol exploration v1 + text wordmark | Provisional |
| Language | English-first | Provisional |
| CTA | `Join the waitlist` | Placeholder only |
| App screens | Original static marketing mockups | Illustrative, not product screenshots |
| Photography | Not used in this phase | Source not approved |
| Product claims | Plan, invite, itinerary, shared gear, offline readiness | Requires validation |
| Platform/store badges | Not shown | Availability unconfirmed |
| Social proof | Not shown | No verified source |

## Deliverables

- [High-fidelity design specification](./design-specification.md)
- [High-fidelity responsive prototype](./high-fidelity-prototype.html)
- [Desktop key screen — 1440 × 1000](./desktop-key-screen.png)
- [Tablet key screen — 768 × 1024](./tablet-key-screen.png)
- [Mobile key screen — 390 × 844](./mobile-key-screen.png)
- [Component state sheet SVG](./component-state-sheet.svg)
- [Component state sheet PNG](./component-state-sheet.png)
- [Asset export list](./asset-export-list.md)
- [Motion specification](./motion-specification.md)

## Acceptance Review

### Brand and visual system

- The full page uses the approved working palette and the Phase 1 pine symbol consistently.
- Shared paths, topographic lines, trip cards and calm editorial spacing create a recognisable Accomp identity.
- No Phantom logo, copy, image, illustration, source code or proprietary visual asset is used.
- Result: Pass at high-fidelity design-reference level.

### Responsive compositions

- Desktop uses a split hero, full navigation and three-up feature cards.
- Tablet changes to a single-column story with touch-friendly card rails.
- Mobile prioritises the promise and CTA before the illustrative phone UI.
- The 320px minimum-width check has no header collision or page-level horizontal overflow.
- Result: Pass.

### Components and interaction

- Header, buttons, feature cards, carousel controls, FAQ and waitlist states are documented.
- Mobile menu manages focus, locks background scrolling and restores focus when closed.
- Feature rails report `Card n of 3`, disable at their boundaries and disable entirely when all cards fit.
- FAQ uses native disclosure behavior; reduced-motion users keep the complete content order.
- Result: Pass in the standalone design prototype.

### Asset traceability

- Every current visual is an original HTML/CSS/SVG construction or a documented provisional brand asset.
- Photography, real app screenshots, store badges and social proof are intentionally absent because no approved source exists.
- Result: Pass with the limitations recorded in the asset export list.

### Approval status

- Visual, content and interaction are packaged for owner review.
- Owner approval remains pending before Phase 4 begins.

## Browser QA

The standalone prototype was checked at 320, 390, 768, 1024 and 1440 widths:

- No page-level horizontal overflow.
- One H1 and complete landmark/heading structure.
- Desktop navigation and mobile menu switch at the intended breakpoint.
- Mobile menu focus movement, scroll lock and focus return work.
- Card rails move through cards 1 → 2 → 3 and update disabled states.
- FAQ disclosure opens correctly.
- Waitlist fields remain disabled and submit no data.
- No browser console warnings or errors remained.

## Phase Boundary

Phase 3 does not include:

- Next.js or React project scaffold
- Production components
- Real waitlist submission
- CMS or backend
- Final photography licensing
- App Store or Google Play badges
- Analytics
- Deployment
- Commit or push unless separately requested

## Next Gate

Phase 3 was carried forward when the owner explicitly started Phase 4. The next
gate is now maintained in the [Phase 4 index](../phase-4/README.md).

`เริ่ม Phase 5`
