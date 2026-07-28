# Phase 10 Smoke-Test Contract

## Purpose

The smoke test checks the built website through HTTP rather than relying only
on source inspection. The same command can target the managed local production
server or an approved HTTPS origin after deployment.

## Origin Rules

- HTTPS is required for non-local origins.
- HTTP is accepted only for `localhost`, `127.0.0.1` or `::1`.
- Credentials, paths, queries and fragments are rejected.
- Each request uses a five-second timeout.
- Local startup waits for the health route before running the matrix.

## Route Matrix

| Route | Expected result |
|---|---|
| `/` | 200, Phase 10 marker, one H1, complete hash targets, no form |
| `/privacy` | 200 with an H1 |
| `/terms` | 200 with an H1 |
| `/health` | 200 JSON and `Cache-Control: no-store` |
| `/robots.txt` | 200 with an absolute sitemap URL |
| `/sitemap.xml` | 200 with Privacy and Terms URLs |
| Missing route | 404 with `noindex` |

The homepage, legal pages and health response must include the critical
security headers introduced in Phase 9.

## Commands

```bash
npm run smoke:local
npm run smoke:site -- https://approved-origin.example
```

`smoke:local` starts the already-built Vinext production server, waits for
health, runs the route matrix and terminates the server process group even when
a check fails.

## CI

The repository workflow runs `npm run check:release`, which performs the full
quality suite, production build and managed local HTTP smoke test. A hosted
origin smoke remains part of the deployment runbook because the production URL
does not exist yet.
