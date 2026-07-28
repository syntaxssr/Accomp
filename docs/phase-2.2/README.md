# Phase 2.2 — Bilingual Mobile App Roadmap

## Outcome

Phase 2.2 adds a Thai and English product roadmap for the future Accomp mobile
app. It describes the intended direction at a high level without claiming that
the app, its features, platforms or launch date are confirmed.

This phase changes only the promotional website. It does not begin mobile app
implementation.

## Routes

| Route | Purpose |
| --- | --- |
| `/roadmap` | Redirects to the default English roadmap |
| `/en/roadmap` | English mobile app roadmap |
| `/th/roadmap` | Thai mobile app roadmap |

The language switcher preserves the roadmap route, while header and footer
navigation provide a roadmap entry point in both locales.

## Product Direction

The roadmap contains six broad stages:

1. Product discovery
2. Shared trip planning
3. Shared gear coordination
4. Offline readiness
5. Private beta
6. Launch readiness

Product discovery is the current focus. Every later stage is marked as planned,
and the page deliberately avoids calendar dates, progress percentages or a
launch promise.

## Content Architecture

- `content/roadmap.ts` owns stable stage IDs, order, horizon and status keys.
- `messages/en.json` and `messages/th.json` own all public copy, highlights,
  status labels, accessibility labels and metadata.
- `components/roadmap/RoadmapPage.tsx` combines the structural model and active
  catalog into a semantic ordered timeline.
- Git history, Markdown and the filesystem are not read at runtime.

## Experience and Accessibility

- One H1 and one semantic ordered roadmap
- A heading and two concise highlights for every stage
- Visible Now, Next and Later horizon labels
- Visible status text in addition to marker shape and color
- `aria-current="step"` on product discovery
- Keyboard-accessible navigation with 44px minimum targets
- Single-column mobile flow and expanded desktop timeline
- Motion only when reduced motion is not requested

## Search and Release Integration

- Locale-specific mobile-roadmap title, description, canonical and language
  alternates
- EN/TH roadmap URLs in the sitemap
- Existing locale-specific social cards
- Fourteen-route local and hosted smoke-test contract
- Source and rendered-output regression coverage

## Remaining Owner Gates

- Review the Thai and English roadmap wording.
- Validate the product direction before treating any stage as committed scope.
- Perform the separate manual browser/device review before public deployment.
- Supply and approve the existing production inputs.
- Issue a separate deployment instruction.

This phase does not activate analytics, a live waitlist, mobile development or
public deployment.
