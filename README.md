# Accomp Marketing Website

Accomp is a static-first marketing website for the Accomp mobile app. The
repository currently contains the Phase 4 implementation foundation and the
approved design references from earlier phases.

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
app/                 App Router entry, metadata and foundation preview
components/layout/   Container and spacing primitives
components/ui/       Typography, buttons, links, cards and icon primitive
public/brand/        Production-facing brand assets
brand/               Brand source files and identity documentation
docs/                Phase deliverables and design references
tests/               Source-contract and rendered-output smoke tests
worker/              Cloudflare-compatible application entry
```

## Phase boundary

The current root route is a design-system preview. The marketing homepage,
feature chapters, carousel, FAQ, final CTA and footer implementation begin only
after the owner authorizes Phase 5.

See [Phase 4 documentation](./docs/phase-4/README.md) and the main
[project plan](./plan.md).
