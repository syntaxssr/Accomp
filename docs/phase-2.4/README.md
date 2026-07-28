# Phase 2.4 — Home Screen Widget Spotlight

## Outcome

Phase 2.4 adds a bilingual, platform-neutral Widget spotlight to the localized
homepage. The section lives inside `#features`, after Offline readiness and
before How it works. It does not add a route, topbar item, footer link, core
feature, or fourth capability.

The website presents two planned companion surfaces that reuse information from
the single Shared Trip Planning feature:

1. Countdown Companion uses the trip date and a provisional five-state Accomp
   mascot progression.
2. Gear Checklist shows compact readiness progress and two remaining example
   items.

Both are static promotional concepts. The website does not claim iOS or Android
availability, background refresh, real-time sync, deep links, interactive
controls, or native implementation.

## Product Contract

`brand/product-definition.md` remains the canonical product source:

- one core feature: Shared Trip Planning;
- three capabilities: plan the trip, prepare the gear, and stay ready offline;
- two planned Home Screen companion surfaces that reuse the same plan.

The six-stage mobile app roadmap remains unchanged in structure. The existing
Trip Planning and Gear Coordination stages now mention the planned companion
surfaces without promoting them to new stages.

## Experience

- TH/EN title, descriptions, concept labels, states, progress, item statuses,
  and accessibility copy
- platform-neutral preview frames using the Accomp palette
- explicit concept disclaimer
- privacy-safe generic countdown label
- static gear rows rather than controls that imply data can be saved
- Countdown-first reading order at every viewport
- one-column compact layout and two-column wide layout
- reduced-motion fallback

## Countdown Contract

`content/widgets.ts` owns the ordered static mascot states:

| Days remaining | State | Asset |
| --- | --- | --- |
| 31+ | Calm | `countdown-calm.webp` |
| 30–8 | Smile | `countdown-smile.webp` |
| 7–3 | Excited | `countdown-excited.webp` |
| 2–1 | Eager | `countdown-eager.webp` |
| 0 or past | Today | `countdown-today.webp` |

The helper clamps negative inputs at zero so a preview cannot display a
negative countdown. A future mobile implementation must calculate the value by
calendar day in the trip timezone; Phase 2.4 does not implement mobile date
storage or background updates.

## Provisional Mascot Assets

The five provisional expressions were created with OpenAI's built-in ImageGen
from the owner-provided temporary Accomp mascot. The generation direction was:
preserve the same three-tier pine silhouette, sage palette, warm brown trunk,
line weight, proportions, and centered flat illustration; isolate the mascot
on a removable chroma background; change only the face from calm to smiling,
excited, eager, and ready-today.

The outputs were converted to transparent 512 × 512 WebP assets and stored in
`public/brand/widget-mascot/`. Each file is under 60 KB and the complete set is
under 300 KB. They remain replaceable provisional assets until the owner
approves the final mascot and logo.

## Accessibility and Trust

- The section has a programmatic heading and localized group label.
- Countdown meaning is present in text; expression and color are reinforcement.
- Mascot images use empty alt text and are hidden from assistive technology.
- Gear progress uses a named `progressbar` with numeric values.
- Remaining items include visible localized status text.
- No button, form, checkbox, app-store badge, or platform-specific chrome is
  shown.
- The concept disclaimer qualifies platform and native behavior.

## Validation

Source-contract tests cover classification, placement, navigation boundaries,
countdown ordering and clamping, static controls, localized copy, responsive
CSS, reduced motion, WebP format, transparency, dimensions, and asset budgets.
Rendered-output tests cover both localized headings, both widget concepts, the
disclaimer, progress semantics, and the Phase 2.4 marker.

The release gate remains `npm run check:release`, which includes formatting,
lint, strict TypeScript, source tests, a production build, rendered-output
tests, the release audit, and the sixteen-route local production smoke matrix.
The complete gate passed for this implementation.

## Remaining Owner Gates

- Review the Thai and English public copy.
- Approve or replace the five provisional mascot expressions.
- Approve the final widget presentation.
- Complete manual browser, device, zoom, and assistive-technology QA.
- Validate native platform feasibility in the future mobile app project.
- Issue a separate deployment instruction.
