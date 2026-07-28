# Phase 8 Release Checklist

## Local Candidate

- [x] Planned page structure and marketing story are present.
- [x] Responsive layouts pass at 320, 390, 768, 1024, 1440 and 1920px.
- [x] In-app Chromium and Google Chrome smoke tests pass.
- [x] No document-level horizontal overflow is present.
- [x] Keyboard menu, FAQ and feature-rail paths work.
- [x] Focus return, reduced motion and skip navigation are implemented.
- [x] Primary touch targets meet the 44px minimum.
- [x] Release-critical contrast pairs meet WCAG AA for normal text.
- [x] Privacy, Terms and 404 routes render correctly.
- [x] No broken local Markdown link is detected.
- [x] No console warning or error is present in tested browsers.
- [x] No live form, analytics or cookie tracking is enabled.
- [x] Public asset provenance and size budgets are recorded.
- [x] Formatting, lint, TypeScript, tests and production build pass.
- [x] Slow-network Lighthouse simulation passes the Phase 7 targets.
- [x] Final diff hygiene passes.

## Required Before Public Deployment

Phase 9 now automates the repository quality gate, production-origin validation,
health endpoint and response security headers. The owner-controlled items below
remain intentionally unchecked.

- [ ] Confirm the production domain and set `NEXT_PUBLIC_SITE_URL`.
- [ ] Provide the real waitlist or app-store destination.
- [ ] Confirm the legal entity and public contact.
- [ ] Approve final Privacy and Terms content.
- [ ] Approve the exact product and offline-capability claims.
- [ ] Confirm platform availability, pricing and launch timing, if published.
- [ ] Decide analytics and consent behavior.
- [ ] Run Safari, Firefox, physical-device and assistive-technology checks.
- [ ] Repeat Lighthouse and crawl checks on the deployed origin.
- [ ] Obtain explicit owner release approval.
- [ ] Issue a separate deployment instruction.

## Deployment Guard

Do not deploy while any required-before-public-deployment item is unchecked.
The current commit is a local release candidate, not a public launch approval.
