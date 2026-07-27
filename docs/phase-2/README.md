# Accomp Phase 2 — Wireframe and Interaction Prototype

> Status: **Carried into Phase 3 with provisional assumptions**
> Date: 2026-07-26  
> Scope: Information architecture, low-fidelity wireframes and interaction behavior only  
> No production website scaffold, framework code, backend or deployment

## Phase 2 Outcome

Phase 2 turns the approved direction **The Shared Path** into a responsive page structure that can be understood without final artwork or animation.

The user command `เริ่มทำ Phase 2` authorizes this phase to continue with the current Phase 1 working assumptions. It does not validate unconfirmed product claims, platform availability, pricing, launch timing or the waitlist backend.

## Working Assumptions

| Topic | Phase 2 assumption | Status |
|---|---|---|
| Page type | Single-page app marketing homepage | Working |
| Primary language | English | Provisional |
| Primary CTA | `Join the waitlist` | Provisional |
| CTA behavior | Scroll to a placeholder waitlist region | No live form |
| App status | Pre-launch | Unconfirmed |
| Product claims | Planning, invitations, shared gear and offline readiness | Requires validation |
| Logo | Pine symbol exploration v1 with text wordmark | Pending approval |
| App UI | Low-fidelity marketing placeholders | Not production screenshots |
| Photography | Reserved composition zones only | No asset selected |

## Deliverables

- [Information architecture](./information-architecture.md)
- [Revised copy hierarchy](./copy-hierarchy.md)
- [Interaction notes](./interaction-notes.md)
- [Responsive behavior matrix](./responsive-behavior-matrix.md)
- [Desktop wireframe SVG](./desktop-wireframe.svg)
- [Desktop wireframe PNG](./desktop-wireframe.png)
- [Mobile wireframe SVG](./mobile-wireframe.svg)
- [Mobile wireframe PNG](./mobile-wireframe.png)
- [Low-fidelity interaction prototype](./interaction-prototype.html)

## Review Sequence

1. Confirm the page order in the information architecture.
2. Review desktop and mobile reading rhythm.
3. Try the standalone interaction prototype at desktop and mobile widths.
4. Confirm carousel, mobile menu, FAQ and reduced-motion behavior.
5. Approve or revise the copy hierarchy.

## Acceptance Review

### Understand the app and find the CTA

- The first viewport contains the app category, primary promise and primary CTA.
- The skim-test hierarchy communicates Plan, Pack and Offline without requiring every paragraph.
- Result: Pass at wireframe level.

### Mobile is a distinct flow

- Copy precedes supporting visuals.
- Card rails show the next-card edge instead of shrinking three desktop cards.
- How It Works changes from a horizontal route to a vertical reading path.
- Header uses logo, CTA and Menu without horizontal overflow at 320px.
- Result: Pass.

### Carousel accessibility

- Native horizontal scrolling remains available.
- Previous/next buttons move one card and report `Card n of 3`.
- Buttons disable at the ends.
- Desktop controls disable when all three cards are already visible.
- No autoplay or focus trap exists inside the rail.
- Result: Pass in the standalone prototype.

### Motion-independent order

- Every heading, card, FAQ answer and CTA is present in document order.
- Reduced-motion mode disables smooth/long transitions without removing content.
- Result: Pass.

## Browser QA

The standalone prototype was checked at 320, 390, 768, 1024 and desktop widths:

- No page-level horizontal overflow.
- Mobile menu opens, locks background scroll, moves focus and returns focus when closed.
- Card rail reports cards 1 → 2 → 3 and disables controls at each boundary.
- FAQ disclosure opens with its answer visible.
- Header CTA reaches `#waitlist`.
- Waitlist controls remain disabled and submit no data.
- One desktop rail-state issue was found during testing and fixed.
- No browser console errors or warnings remained.

## Phase Boundary

Phase 2 intentionally does not include:

- High-fidelity UI
- Final photography or app screenshots
- Production components
- Next.js scaffold
- Final animation timing implementation
- Live waitlist submission
- Analytics
- Deployment
- Commit or push

## Next Gate

Phase 2 was carried forward when the owner explicitly started Phase 3. The next
gate is now maintained in the [Phase 3 index](../phase-3/README.md).

`เริ่ม Phase 4`
