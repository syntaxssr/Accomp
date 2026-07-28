# Accomp Phase 9 — Production Launch Preparation

> Status: **Engineering preparation complete — deployment remains gated**
> Date completed: 2026-07-28
> Scope: CI, production preflight, runtime hardening and deployment handoff

## Objective

Make the verified Phase 8 candidate safer and easier to release without
inventing the production domain, legal approvals, live CTA destination or
deployment authorization.

## Delivered

- Least-privilege GitHub Actions quality workflow for pushes and pull requests
- Strict production-origin validation for `NEXT_PUBLIC_SITE_URL`
- Machine-readable report of every unchecked public-launch gate
- `/health` endpoint for production monitoring
- Security headers applied at the Worker response boundary
- Empty `.env.example` contract without a fake production domain
- Source and rendered-output regression tests for the launch layer
- Production input worksheet and deployment runbook

## Commands

```bash
npm run check
npm run preflight:status
npm run preflight:production
```

`preflight:status` reports open gates without failing. The strict
`preflight:production` command exits unsuccessfully until a valid HTTPS origin
is configured and every required deployment item is checked.

## Documents

- [Production readiness report](./production-readiness.md)
- [Production input worksheet](./production-inputs.md)
- [Deployment runbook](./deployment-runbook.md)
- [Phase 8 release checklist](../phase-8/release-checklist.md)

## Phase Boundary

Phase 9 does not create a Sites project, save a hosted version, activate a
waitlist, add analytics or deploy the website. Those actions remain blocked
until the owner supplies and approves the required production inputs, then
issues a separate deployment instruction.
