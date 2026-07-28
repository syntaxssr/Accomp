# Phase 2.1 Translation Key Map

## Catalogs

| File | Role |
|---|---|
| `messages/en.json` | English source catalog and TypeScript shape reference |
| `messages/th.json` | Thai catalog with identical keys and placeholders |

Both catalogs are statically imported so the Cloudflare-compatible build does
not perform runtime file or network loading.

## Namespaces

| Namespace | User-facing surface |
|---|---|
| `meta` | Title, description, keywords, Open Graph and structured data |
| `navigation` | Header, mobile menu, navigation labels and CTA |
| `languageSwitcher` | Accessible language selector names |
| `marketing.hero` | Hero copy and illustrative phone UI |
| `marketing.promise` | Product-promise strip |
| `marketing.plan` | Planning chapter and feature cards |
| `marketing.pack` | Packing chapter and feature cards |
| `marketing.featureArtwork` | Visible text inside feature illustrations |
| `marketing.offline` | Offline chapter, map card and qualification |
| `marketing.howItWorks` | Three-step product explanation |
| `marketing.editorial` | Shared-adventure story and artwork label |
| `marketing.faq` | FAQ introduction, questions and answers |
| `marketing.waitlist` | Inactive waitlist state and accessible labels |
| `marketing.footer` | Footer navigation, legal labels and status |
| `accessibility.featureRail` | Carousel controls, region and live status |
| `privacy` | Privacy metadata and page copy |
| `terms` | Terms metadata and page copy |
| `notFound` | Localized 404 metadata and recovery copy |

## Validation Contract

- Object keys must match exactly.
- Arrays must have the same length and nested shape.
- Every string must be non-empty.
- Interpolation placeholders such as `{label}`, `{current}` and `{total}` must
  match exactly.
- Production does not fall back between catalogs.
- Former hard-coded user copy is guarded by source tests.

## Language-Neutral Values

The following stay in code because translating them would change behavior or
identity rather than copy:

- `Accomp`
- `en` and `th`
- route and anchor IDs
- feature-artwork visual keys
- dates in machine-readable `dateTime`
- percentages and checklist state symbols
- `/health` response keys and values
