# Accomp Phase 8 — Cross-Device QA and Release Readiness

> Status: **Local release candidate complete — launch inputs still required**
> Date completed: 2026-07-28
> Scope: Final browser, responsive, accessibility, content, asset and build QA

## Objective

Turn the Phase 7 site into a repeatably verified local release candidate
without pretending that missing business, legal or launch decisions are
complete.

## Delivered

- Browser and responsive review at every planned viewport
- Keyboard and accessibility-tree smoke tests
- Touch-target and contrast corrections
- Legal, 404, link, form and runtime-error checks
- Original-asset and production file-size audit
- Reusable `npm run audit:release` command
- Phase 8 source and rendered-output regression coverage
- Final production build and slow-network Lighthouse verification
- QA report, known limitations and release checklist

## Release Status

The local project has no known critical visual, accessibility or runtime
defect. It is ready for owner review and for the missing launch inputs to be
supplied.

It is not ready to deploy publicly yet. The waitlist destination, production
domain, legal entity/contact, final policies, approved product claims and owner
release approval remain open. The current site keeps the waitlist inactive and
labels all app UI and offline behavior as illustrative or provisional.

## Documents

- [QA report](./qa-report.md)
- [Known limitations](./known-limitations.md)
- [Release checklist](./release-checklist.md)

## Validation Commands

```bash
npm run check
git diff --check
```

`npm run check` covers formatting, lint, TypeScript, source tests, the
production build, rendered-route tests and the release audit.

## Phase Boundary

Phase 8 does not activate a form, add analytics, invent app-store destinations,
publish final legal agreements or deploy the site. Deployment requires a
separate instruction after every unchecked release gate is resolved.
