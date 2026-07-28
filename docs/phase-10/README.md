# Accomp Phase 10 — Release Candidate Packaging and Smoke Automation

> Status: **Automation complete — deployment remains gated**
> Date completed: 2026-07-28
> Scope: Production smoke testing, release archives and CI verification

## Objective

Make every release candidate independently testable and traceable to one Git
commit before any hosted version can be created.

## Delivered

- URL-driven smoke test for local and HTTPS production origins
- Managed local production-server smoke command
- Seven-route verification covering pages, legal routes, crawl files, health
  and not-found behavior
- Runtime security-header, hash-link and inactive-form assertions
- Clean-tree release packager based on `git archive`
- SHA-256 checksum and JSON manifest tied to the full commit SHA
- GitHub Actions release-quality gate
- Regression coverage for smoke and package contracts

## Commands

```bash
npm run check:release
npm run smoke:site -- https://approved-production-origin.example
npm run package:release
```

The URL above is documentation syntax only. Use the approved real origin; the
production preflight continues to reject reserved or placeholder origins.

Generated release archives and manifests are written to the ignored
`release-artifacts/` directory. They are local handoff artifacts and are not
committed to the repository.

## Documents

- [Smoke-test contract](./smoke-test-contract.md)
- [Release package contract](./release-package.md)
- [Phase 9 deployment runbook](../phase-9/deployment-runbook.md)
- [Phase 8 release checklist](../phase-8/release-checklist.md)

## Phase Boundary

Phase 10 does not create a Sites project, upload an archive, save a hosted
version or deploy the website. Packaging proves which source commit is ready
for handoff; it does not replace owner approval or the strict production
preflight.
