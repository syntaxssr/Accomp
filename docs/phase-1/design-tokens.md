# Accomp Design Token Proposal v1

> Status: Phase 1 proposal  
> Purpose: Lock visual relationships before high-fidelity design or implementation  
> These values are not production CSS yet

## 1. Token Principles

- Preserve the four approved sage–sand–cream colors
- Add only the derived neutrals required for readable marketing layouts
- Use Trail Sage as a focus color
- Use spacing and radius consistently enough to become recognizable
- Keep motion calm and bounded
- Prefer semantic tokens over component-specific hex values

## 2. Color Foundations

### Approved brand colors

| Token | Value | Role |
|---|---:|---|
| `brand-sage` | `#778873` | Primary CTA, path, active state |
| `brand-meadow` | `#A1BC98` | Hover, supporting surface, secondary path |
| `brand-sand` | `#DCCFC0` | Muted card, border field, soft layer |
| `brand-cream` | `#FDF6ED` | Main canvas and light surface |
| `brand-dark` | `#1F1F1F` | Primary text, dark card |
| `background-dark` | `#171717` | Dark chapter and footer |

### Proposed derived colors

| Token | Value | Role |
|---|---:|---|
| `sage-ink` | `#2C352F` | Dark sage icon depth |
| `text-muted` | `#5D685F` | Supporting text on Warm Cream |
| `border-subtle` | `rgba(119, 136, 115, 0.28)` | Dividers and quiet card borders |
| `white` | `#FFFFFF` | Controlled neutral surface |

Derived colors require visual approval in Phase 1 review.

## 3. Semantic Color Mapping

| Semantic token | Light context | Dark context |
|---|---|---|
| `color-canvas` | `brand-cream` | `background-dark` |
| `color-surface` | `brand-cream` | `brand-dark` |
| `color-surface-muted` | `brand-sand` | `sage-ink` |
| `color-text-primary` | `brand-dark` | `brand-cream` |
| `color-text-secondary` | `text-muted` | `brand-sand` |
| `color-action-primary-bg` | `brand-sage` | `brand-meadow` |
| `color-action-primary-text` | `background-dark` | `background-dark` |
| `color-action-hover-bg` | `brand-meadow` | `brand-sand` |
| `color-focus` | `brand-sage` | `brand-meadow` |
| `color-border` | `border-subtle` | `brand-sage` |
| `color-path` | `brand-sage` | `brand-meadow` |

## 4. Verified Contrast Pairings

Ratios were calculated from the proposed values:

| Foreground / Background | Ratio | Guidance |
|---|---:|---|
| Brand Dark / Warm Cream | `15.37:1` | Body and display text |
| Warm Cream / Background Dark | `16.72:1` | Body and display text |
| Brand Dark / Meadow Sage | `7.98:1` | Text on supporting sage surfaces |
| Background Dark / Trail Sage | `4.74:1` | Primary button text |
| Sage Ink / Meadow Sage | `6.13:1` | Icons and supporting labels |
| Text Muted / Warm Cream | `5.42:1` | Supporting body copy |
| Trail Sage / Warm Cream | `3.53:1` | Non-text path and focus indicators |
| Warm Cream / Trail Sage | `3.53:1` | Not for normal-size body text |

Final component states still require accessibility testing.

## 5. Typography Tokens

### Font families

| Token | Value |
|---|---|
| `font-display` | Nunito Variable, system sans-serif fallback |
| `font-body` | Nunito Variable, system sans-serif fallback |
| `font-mono` | System monospace, only for technical metadata if needed |

### Weight

| Token | Value | Use |
|---|---:|---|
| `weight-regular` | 400 | Body |
| `weight-medium` | 500 | Navigation, buttons, large display |
| `weight-semibold` | 600 | Section headings |
| `weight-bold` | 700 | Rare emphasis |

### Proposed fluid type scale

| Token | Min | Max | Use |
|---|---:|---:|---|
| `text-display-xl` | 56px | 112px | Hero H1 |
| `text-display-lg` | 44px | 88px | Chapter headings |
| `text-display-md` | 36px | 64px | Final CTA |
| `text-heading-lg` | 30px | 44px | Section/card group heading |
| `text-heading-md` | 24px | 32px | Card title |
| `text-body-lg` | 18px | 22px | Lead copy |
| `text-body` | 16px | 18px | Body copy |
| `text-small` | 14px | 15px | Labels and supporting note |
| `text-micro` | 12px | 13px | Legal and metadata |

### Line height

- Display: `0.95–1.03`
- Heading: `1.08–1.18`
- Lead: `1.45–1.55`
- Body: `1.55–1.70`
- UI labels: `1.20–1.35`

### Measure

- Lead copy: maximum `46rem`
- Body copy: maximum `40rem`
- FAQ answer: maximum `46rem`
- Card copy: maximum `28ch`

## 6. Spacing Scale

Base unit: 4px.

| Token | Value |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |
| `space-32` | 128px |
| `space-40` | 160px |
| `space-48` | 192px |

### Section rhythm

- Mobile section block: `space-24` to `space-32`
- Tablet section block: `space-32` to `space-40`
- Desktop chapter intro: `space-40` to `space-48`
- Card gap: `space-4` mobile, `space-6` desktop

Large spacing is deliberate but must not create blank pages when motion is disabled.

## 7. Layout Tokens

| Token | Proposed value |
|---|---:|
| `page-max` | 1600px |
| `content-max` | 1280px |
| `copy-max` | 720px |
| `page-gutter-mobile` | 20px |
| `page-gutter-tablet` | 32px |
| `page-gutter-desktop` | 48–72px |
| `header-height-mobile` | 64px |
| `header-height-desktop` | 72px |

### Grid

- Desktop: 12 columns
- Tablet: 8 columns
- Mobile: 4 columns
- Card rails may intentionally break the content container but not the page viewport

## 8. Radius Tokens

| Token | Value | Use |
|---|---:|---|
| `radius-xs` | 8px | Small control |
| `radius-sm` | 12px | Tag and input |
| `radius-md` | 20px | Small card |
| `radius-lg` | 28px | Feature card |
| `radius-xl` | 40px | Hero and large CTA field |
| `radius-pill` | 999px | Navigation and buttons |

Mobile may reduce `radius-xl` to 28–32px to preserve usable content area.

## 9. Border and Shadow Tokens

### Border

- Default: `1px solid border-subtle`
- Dark: `1px solid rgba(253, 246, 237, 0.12)`
- Focus: `2px solid color-focus` plus external offset

### Shadow

| Token | Proposal |
|---|---|
| `shadow-soft` | `0 12px 40px rgba(23, 23, 23, 0.08)` |
| `shadow-raised` | `0 24px 72px rgba(23, 23, 23, 0.14)` |
| `shadow-dark` | `0 24px 72px rgba(0, 0, 0, 0.24)` |

Cards should not rely on shadow alone to communicate interactivity.

## 10. Motion Tokens

| Token | Value | Use |
|---|---:|---|
| `duration-instant` | 120ms | Focus/press feedback |
| `duration-fast` | 180ms | Hover and small state |
| `duration-standard` | 360ms | Reveal and card state |
| `duration-slow` | 640ms | Route transformation |
| `duration-ambient-max` | 1000ms | Hero entry only |
| `ease-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` | Calm deceleration |
| `ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveal |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Short exit |

No branded animation should require more than 1000ms before the content is readable.

## 11. Breakpoint Intent

Exact implementation breakpoints are a Phase 2/4 decision. Design intent:

| Range | Behavior |
|---|---|
| 320–599px | Single-column, portrait hero, one-card focus |
| 600–899px | Tablet grid, 1.5-card rail |
| 900–1199px | Compact desktop nav and two-card rail |
| 1200–1599px | Full desktop composition |
| 1600px+ | Max-width layout with controlled outer space |

Breakpoints respond to layout needs, not named devices.

## 12. Component-Level Direction

### Primary button

- Trail Sage background
- Background Dark text
- Pill radius
- Minimum height 48px mobile, 52px desktop
- Clear focus ring

### Secondary button

- Transparent or light surface
- Brand Dark text
- Visible border
- Never styled as a disabled-looking grey pill

### Navigation

- Light pill over light canvas
- Dark-mode variant for dark chapter
- Mobile CTA remains visible beside menu

### Feature card

- Radius LG
- One focal visual
- Title/body hierarchy
- Optional path continuation across sibling cards
- Clear link treatment when interactive

## 13. Approval Checklist

- [ ] Derived neutrals approved
- [ ] Trail Sage button with Background Dark text approved
- [ ] Fluid type scale approved
- [ ] Spacing/radius character approved
- [ ] Motion timing approved
- [ ] Breakpoint intent approved
