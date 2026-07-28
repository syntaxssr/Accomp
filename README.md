# Accomp Marketing Website

Accomp is a static-first marketing website for the Accomp mobile app. The
repository contains the motion-complete bilingual marketing page, the Phase 10
release-candidate automation layer, the Phase 2.1 TH/EN foundation and the
Phase 2.2 bilingual project roadmap.

## Technology

- Next-compatible React application using Vinext and Vite
- React 19 and TypeScript in strict mode
- CSS custom properties and CSS Modules
- Phase 3-aligned system sans-serif typography
- Native CSS motion with a small Intersection Observer enhancement
- ESLint, TypeScript and Node test runner
- Cloudflare Worker-compatible build output
- Request-aware metadata, crawl routes and original social preview artwork
- Worker-level security headers and a no-store health endpoint
- GitHub Actions quality checks and strict production preflight
- URL-driven production smoke tests and commit-bound release packaging
- File-based Thai and English catalogs with locale-aware routes and metadata
- Curated bilingual project roadmap from kickoff through the current phase

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
npm run audit:release
npm run preflight:status
npm run check:release
```

## Project structure

```text
app/                 App Router entry and metadata
app/[locale]/        Localized homepage, roadmap, legal and not-found routes
components/layout/   Container and spacing primitives
components/ui/       Typography, buttons, links, cards and icon primitive
components/marketing/Marketing sections and progressive interactions
components/i18n/     Accessible language switcher
components/legal/    Shared localized legal and not-found presentation
components/roadmap/  Responsive semantic project timeline
content/             Typed localized content composition
messages/            Complete English and Thai message catalogs
public/brand/        Production-facing brand assets
public/og.png        1200 × 630 social preview
public/og-th.png     1200 × 630 Thai social preview
brand/               Brand source files and identity documentation
docs/                Phase deliverables and design references
lib/                 Shared site identity and origin resolution
scripts/             Repeatable quality and production preflight checks
tests/               Source-contract and rendered-output smoke tests
worker/              Cloudflare-compatible application entry
```

## Phase boundary

The `/en` and `/th` routes contain the complete marketing story, while
`/en/roadmap` and `/th/roadmap` present the curated project journey. The local
candidate also includes calm progressive motion, search/social metadata, crawl
endpoints, legal status notices, a branded 404, repeatable release checks, a
health endpoint, runtime security headers and commit-bound release packaging.
Analytics, live forms, final legal agreements, confirmed launch destinations
and deployment remain gated.

See [Phase 2.2 documentation](./docs/phase-2.2/README.md),
[Phase 2.1 documentation](./docs/phase-2.1/README.md),
[Phase 10 release automation](./docs/phase-10/README.md) and the main
[project plan](./plan.md).
