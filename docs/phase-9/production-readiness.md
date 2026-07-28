# Phase 9 Production Readiness Report

> Review date: 2026-07-28
> Candidate: Accomp marketing website, Phase 9

## Result

The engineering launch path is prepared. Automated checks now protect the
repository before public deployment, while the production preflight prevents a
release with a local, reserved or malformed origin or with an incomplete owner
checklist.

Public deployment is still blocked by the unresolved business and legal inputs
recorded in the Phase 8 release checklist.

## Engineering Controls

| Control | Behavior | Status |
|---|---|---|
| CI quality gate | Runs `npm ci` and `npm run check` on pushes to `main` and pull requests | Ready |
| Workflow permissions | Repository contents are read-only | Ready |
| Origin validation | Requires a clean HTTPS production origin | Ready |
| Release-gate parser | Reports every unchecked public-deployment item | Ready |
| Health endpoint | Returns no-store JSON from `/health` | Ready |
| Security headers | Applied to page, route and image responses at the Worker boundary | Ready |
| Environment contract | Documents `NEXT_PUBLIC_SITE_URL` without a fake value | Ready |
| Regression coverage | Verifies CI, preflight, headers and health behavior | Ready |

## Response Hardening

The Worker adds:

- Content Security Policy with self-hosted runtime sources
- Cross-Origin Opener Policy
- Permissions Policy denying unused device capabilities
- strict-origin referrer handling
- MIME sniffing protection
- frame embedding denial
- cross-domain policy denial
- one-year HSTS on HTTPS requests

The Content Security Policy permits the inline scripts and styles required by
the current Vinext render while denying third-party origins, objects and
framing. It must be repeated on the deployed origin because hosting behavior is
not available locally.

## Open Launch Inputs

The strict production preflight is expected to fail until the owner provides:

- approved production domain
- real waitlist or store destination
- verified legal entity and public contact
- approved Privacy and Terms content
- approved product and offline-capability claims
- platform, pricing and launch statements, if any
- analytics and consent decision
- browser, physical-device and assistive-technology sign-off
- explicit public-release approval

This expected failure is a release guard, not a Phase 9 implementation defect.
