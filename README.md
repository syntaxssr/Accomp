# Accomp Marketing Website

Accomp is a static-first marketing website for the Accomp mobile app. The
repository currently contains the Phase 6 motion-complete marketing page and
the Phase 7 search, social, legal and performance readiness layer.

## Technology

- Next-compatible React application using Vinext and Vite
- React 19 and TypeScript in strict mode
- CSS custom properties and CSS Modules
- Phase 3-aligned system sans-serif typography
- Native CSS motion with a small Intersection Observer enhancement
- ESLint, TypeScript and Node test runner
- Cloudflare Worker-compatible build output
- Request-aware metadata, crawl routes and original social preview artwork

No backend, database, CMS, authentication, analytics, cookie tracking or live
waitlist is active.

## Local development

Requirements:

- Node.js 22.13 or newer
- npm 10 or newer

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
```

## Project structure

```text
app/                 App Router entry and metadata
components/layout/   Container and spacing primitives
components/ui/       Typography, buttons, links, cards and icon primitive
components/marketing/Marketing sections and progressive interactions
content/             Typed navigation, feature and FAQ content
public/brand/        Production-facing brand assets
public/og.png        1200 × 630 social preview
brand/               Brand source files and identity documentation
docs/                Phase deliverables and design references
lib/                 Shared site identity and origin resolution
tests/               Source-contract and rendered-output smoke tests
worker/              Cloudflare-compatible application entry
```

## Phase boundary

The current routes contain the complete marketing story, calm progressive
motion, search/social metadata, crawl endpoints, legal status notices and a
branded 404. Analytics, live forms, final legal agreements, confirmed launch
destinations and deployment remain gated.

See [Phase 7 documentation](./docs/phase-7/README.md) and the main
[project plan](./plan.md).
