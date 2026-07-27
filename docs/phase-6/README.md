# Accomp Phase 6 — Motion and Visual Storytelling

> Status: **Draft complete — waiting for review and approval**
> Date started: 2026-07-28
> Scope: Calm progressive motion for the complete Phase 5 marketing story

## Objective

Add premium visual sequencing without delaying content, changing layout or
making motion necessary to understand the page.

## Implemented Motion

| Area | Phase 6 behavior |
|---|---|
| Hero | Paths draw once, companion points enter briefly and the phone rises 16px |
| Content | One-time Intersection Observer reveals with short staggered steps |
| Offline map | Both approved Phase 3 routes draw when the chapter enters view |
| Feature rails | Native touch scroll, smooth button movement and active-card depth |
| Header | Sticky surface depth, active chapter state and dark-chapter theme |
| How It Works | Route progression and staggered step reveal |
| FAQ | Native disclosure remains authoritative with short answer feedback |
| Final CTA | Two companion points align once and remain static |

## Progressive Enhancement

- Server-rendered content is visible before JavaScript runs.
- Reveal styles activate only after the motion controller is ready.
- Intersection Observer failure leaves every section visible.
- No autoplay, continuous loop, parallax or blocking introduction is present.
- No animation dependency was added.

## Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- All content is immediately visible.
- Smooth rail movement becomes instant.
- Paths render in their final state.
- Transform-based hover movement is removed.
- Header, menu, FAQ and checklist feedback becomes immediate.
- Content order, navigation and interaction remain unchanged.

## Performance Guardrails

- Motion is limited to transform, opacity and SVG stroke offset.
- Scroll handlers are passive and state updates are scheduled with
  `requestAnimationFrame`.
- Intersection-observed elements stop being observed after their first reveal.
- The hero sequence runs once and lasts no longer than 900ms.
- No continuous offscreen animation is present.

## Quality Verification

- Formatting baseline: pass
- ESLint: pass without warnings
- Strict TypeScript: pass
- Motion and source-contract tests: 15 pass
- Rendered-output tests: 3 pass
- Production-compatible Vinext build: pass
- Local development response: HTTP 200

See [interaction QA notes](./interaction-qa.md) for the behavior matrix and
manual device follow-up.

## Phase Boundary

Phase 6 does not include SEO launch metadata, analytics, legal destinations,
live waitlist submission, social imagery or deployment. Those remain gated
behind later phases.

## Next Gate

After implementation and owner review:

`เริ่ม Phase 7`
