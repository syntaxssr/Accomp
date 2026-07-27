# Accomp Marketing Website

Accomp is a static-first marketing website for the Accomp mobile app. The
repository currently contains the Phase 5 core marketing page and the approved
design references from earlier phases.

## Technology

- Next-compatible React application using Vinext and Vite
- React 19 and TypeScript in strict mode
- CSS custom properties and CSS Modules
- Framework-managed Geist and Inter fonts
- ESLint, TypeScript and Node test runner
- Cloudflare Worker-compatible build output

No backend, database, CMS, authentication, analytics or live waitlist is part
of Phase 4.

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
brand/               Brand source files and identity documentation
docs/                Phase deliverables and design references
tests/               Source-contract and rendered-output smoke tests
worker/              Cloudflare-compatible application entry
```

## Phase boundary

The current route contains the complete static marketing story and essential
navigation interactions. Advanced scroll animation, route drawing, analytics,
live forms, launch metadata and deployment remain gated behind later phases.

See [Phase 5 documentation](./docs/phase-5/README.md) and the main
[project plan](./plan.md).
