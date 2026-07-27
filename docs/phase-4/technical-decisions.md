# Accomp Phase 4 — Technical Decisions

## Runtime

The project uses a Next-compatible React App Router surface compiled by Vinext
and Vite. This preserves server-rendered semantic HTML and metadata conventions
while keeping a Cloudflare-compatible static-first deployment path available.

## Styling

Global CSS contains only semantic tokens, reset rules and universal
accessibility behavior. Component layout and appearance live in CSS Modules.

Token names describe purpose rather than a specific section:

```text
--color-brand
--color-cream
--font-family-display
--space-section
--radius-pill
--motion-ui
```

Marketing sections must consume these tokens rather than adding duplicate hex
values or arbitrary spacing scales.

## Components

Primitives are server components by default. A component becomes a client
component only when its behavior requires browser state or events. Phase 4
contains no client component.

The public component surface is re-exported from `components/index.ts`.

## Assets

- Source and review material remains under `brand/` and `docs/`.
- Assets needed by the application live under `public/`.
- The provisional pine symbol is copied to `public/brand/`.
- Review screenshots never move into production asset directories.
- Third-party files require source, license and retrieval records before use.

## Content

Phase 4 keeps preview copy directly in the route because it is not marketing
content. Phase 5 will introduce a typed content model for repeated navigation,
feature, FAQ and CTA content.

## Dependencies

The baseline contains no database, form, animation, analytics, icon-library or
state-management dependency. New dependencies require a concrete feature need.

## Deployment

The build remains compatible with the configured worker runtime, but Phase 4
does not create or update a production deployment.
