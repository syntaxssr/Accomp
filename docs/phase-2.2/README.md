# Phase 2.2 — Bilingual Project Roadmap

## Outcome

Phase 2.2 adds a public project-history experience in Thai and English. It
summarizes the work from kickoff through the current phase without exposing raw
Git history, commit identifiers, internal blockers or unapproved future dates.

## Routes

| Route | Purpose |
| --- | --- |
| `/roadmap` | Redirects to the default English roadmap |
| `/en/roadmap` | English project roadmap |
| `/th/roadmap` | Thai project roadmap |

The language switcher preserves the roadmap route, while header and footer
navigation provide a roadmap entry point in both locales.

## Content Architecture

- `content/roadmap.ts` owns stable milestone IDs, order, ISO dates, phase
  numbers and status keys.
- `messages/en.json` and `messages/th.json` own all public copy, highlights,
  status labels, accessibility labels and metadata.
- `components/roadmap/RoadmapPage.tsx` combines the structural model and active
  catalog into a semantic ordered timeline.
- Git history, Markdown and the filesystem are not read at runtime.

The first release contains thirteen entries: project kickoff, Phase 1.1–1.10,
Phase 2.1 and the current Phase 2.2.

## Experience and Accessibility

- One H1 and one semantic ordered roadmap
- A heading and three concise highlights for every milestone
- Visible status text in addition to marker shape and color
- `aria-current="step"` on the current phase
- Localized dates and accessibility labels
- Keyboard-accessible navigation with 44px minimum targets
- Single-column mobile flow and expanded desktop timeline
- Motion only when reduced motion is not requested

## Search and Release Integration

- Locale-specific title, description, canonical and language alternates
- EN/TH roadmap URLs in the sitemap
- Existing locale-specific social cards
- Fourteen-route local and hosted smoke-test contract
- Source and rendered-output regression coverage

## Remaining Owner Gates

- Review the Thai wording and both public milestone summaries.
- Perform the separate manual browser/device review before public deployment.
- Supply and approve the existing production inputs.
- Issue a separate deployment instruction.

This phase does not activate analytics, a live waitlist, GitHub integration or
public deployment.
