# Deployment Runbook

## 1. Close Owner Inputs

1. Complete the [production input worksheet](./production-inputs.md).
2. Update the site with the approved domain, CTA, legal content and product
   claims.
3. Check every item under “Required Before Public Deployment” in the
   [Phase 8 release checklist](../phase-8/release-checklist.md).

## 2. Verify the Candidate

Set `NEXT_PUBLIC_SITE_URL` to the approved HTTPS origin, then run:

```bash
npm run check
npm run preflight:production
npm run smoke:site -- https://approved-production-origin.example
git diff --check
```

The strict preflight must pass without an exception or bypass.

## 3. Prepare the Hosted Version

After the owner explicitly requests deployment:

1. Reuse the persisted Sites project ID when one exists.
2. If no Sites project exists, create it once and save the returned ID exactly.
3. Push the exact source state being released.
4. Run `npm run package:release` from that clean commit and verify its checksum.
5. Save a Sites version using that pushed commit SHA.
6. Deploy only the saved version.

## 4. Production Smoke Test

Verify on the deployed origin:

- homepage, Privacy, Terms, robots, sitemap and branded 404
- `/health` returns `200`, JSON and `Cache-Control: no-store`
- canonical and social URLs use the production origin
- CTA reaches the approved destination
- consent behavior matches the legal decision
- security headers are present
- no console or runtime error appears
- responsive, keyboard and assistive-technology checks still pass
- Lighthouse and crawl checks meet the approved target

## 5. Record the Release

Record the deployed URL, Sites version, commit SHA, release time, approver and
known limitations in a release note. Do not mark the project launched until the
production smoke test passes.
