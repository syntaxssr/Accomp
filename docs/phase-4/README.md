# Accomp Phase 4 — Project Scaffold and Design System

> Status: **Carried into Phase 5 with provisional assumptions**
> Date started: 2026-07-28
> Scope: Runnable project foundation, design tokens and core primitives only

## Objective

Create a small, explicit implementation foundation that can reproduce the
Phase 3 direction without bringing Phase 5 marketing sections forward.

## Working technical decision

The owner started Phase 4 before Phase 0 was formally closed, so the scaffold
uses a reversible static-first baseline:

- Next-compatible React with Vinext and Vite
- React 19
- TypeScript strict mode
- CSS custom properties for semantic tokens
- CSS Modules for component-scoped styling
- Native CSS interaction states before adding a motion library
- Node test runner for the initial testing baseline
- Cloudflare Worker-compatible output without a deployment

## Deliverables

- [x] Runnable local application
- [x] Semantic color, typography, spacing, radius, shadow and motion tokens
- [x] Framework-managed Geist and Inter font loading
- [x] Container and Stack layout primitives
- [x] Heading and Text typography primitives
- [x] Button, ButtonLink and TextLink primitives
- [x] Card and Icon primitives
- [x] Public brand asset directory
- [x] Lint, typecheck, formatting, source-test and rendered-output scripts
- [x] Project conventions and component contracts

## Acceptance Review

- Local development returns a successful server-rendered page.
- Formatting, lint and strict TypeScript checks pass without warnings.
- Six source-contract tests and one rendered-output smoke test pass.
- The production-compatible Vinext build completes successfully.
- Core color tokens match the Accomp brand source of truth.
- No backend, database, CMS, authentication, animation or analytics dependency
  is installed.
- The root route is explicitly labeled as a Phase 4 foundation preview and does
  not implement Phase 5 marketing sections.
- Result: Pass at project-foundation level.

## Known Limitations

- The pine symbol and text wordmark remain provisional.
- The root page is a component showcase, not the marketing homepage.
- CTA destinations and product claims remain unimplemented.
- Deployment is intentionally deferred.

## Phase Boundary

Phase 4 intentionally does not include:

- Production marketing homepage sections
- Mobile navigation behavior
- Feature carousel
- FAQ behavior
- Live waitlist or email submission
- Analytics, legal integration or SEO launch metadata
- Backend, database, authentication or CMS
- Production deployment

## Next Gate

Phase 4 was carried forward when the owner explicitly started Phase 5. The next
gate is now maintained in the [Phase 5 index](../phase-5/README.md).

`เริ่ม Phase 6`
