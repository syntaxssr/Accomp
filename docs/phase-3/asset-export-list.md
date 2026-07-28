# Accomp Phase 3 — Asset Export List

> All Phase 3 artwork is original to the Accomp project unless marked placeholder.
> No Phantom assets, app-store assets, photography or third-party illustrations are included.

## 1. Brand Assets

| Asset | Source | Format | Status | Phase 4 use |
|---|---|---|---|---|
| Pine symbol master | `brand/accomp-pine-icon.svg` | SVG/currentColor | Provisional | Header, footer, favicon candidate |
| Pine symbol preview | `brand/accomp-pine-icon-preview.svg` | SVG/PNG | Review only | Do not ship |
| Temporary mascot logo | `public/brand/accomp-logo-temporary.webp` | WebP/512 × 512 | Temporary | Header, footer, legal navigation, 404 and favicon |
| Text wordmark | System type in prototype | Live text | Placeholder | Replace if custom wordmark is approved |

## 2. Phase 3 Design Assets

| Asset | Format | Source/rights | Status |
|---|---|---|---|
| Shared Path hero art | Inline SVG/CSS | Original Accomp artwork | Design reference |
| Topographic contour field | Inline SVG/CSS | Original abstract geometry | Design reference |
| Generic trip phone | HTML/CSS | Original illustrative UI | Not a product screenshot |
| Plan Together cards | HTML/CSS | Original illustrative UI | Design reference |
| Pack Together cards | HTML/CSS | Original illustrative UI | Design reference |
| Offline map card | HTML/CSS/SVG | Original abstract route | Not real map data |
| Companion-group illustration | HTML/CSS/SVG | Original Accomp artwork | Replaces unapproved photography |
| Component state sheet | SVG/PNG | Original Accomp artwork | Implementation reference |

## 3. Responsive Captures

| Capture | Target viewport | Purpose |
|---|---:|---|
| [Desktop key screen](./desktop-key-screen.png) | 1440×1000 | Header and hero composition |
| [Tablet key screen](./tablet-key-screen.png) | 768×1024 | Intermediate stacking and navigation |
| [Mobile key screen](./mobile-key-screen.png) | 390×844 | Compact header, hero and card preview |

Target values describe the tested browser viewport. The browser content capture
excludes native scrollbar chrome. Captures are review artifacts, not production assets.

## 4. Assets Still Required

- Approved final logo/wordmark decision
- Real or approved app screenshots, if preferred over static marketing mockups
- Photography source decision
- Licensed photography files, if selected
- App icon master
- App Store and Google Play badges with real destinations
- Open Graph image after hero approval
- Final favicon exports
- Legal/company marks

## 5. Proposed Production Paths

These directories are for Phase 4 planning only:

```text
public/
├── brand/
│   ├── accomp-symbol.svg
│   └── accomp-wordmark.svg
├── illustrations/
│   ├── hero-shared-path.svg
│   ├── plan-together.svg
│   ├── pack-together.svg
│   └── offline-ready.svg
├── images/
│   └── editorial/
└── social/
    └── og-accomp.jpg
```

Do not copy the Phase 3 screenshots into production assets.

## 6. Export Rules

- Keep vector art as SVG.
- Preserve `currentColor` when the symbol should inherit theme color.
- Remove editor metadata before production.
- Avoid embedded raster images inside SVG.
- Photography uses AVIF/WebP with responsive source dimensions.
- Every third-party asset receives a recorded source URL, author, license and retrieval date.
- Do not export placeholder store badges or legal marks.
