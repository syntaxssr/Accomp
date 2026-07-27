# Accomp Phase 3 — High-Fidelity Design Specification

> Design concept: **The Shared Path**
> Primary surface: Warm Cream
> Primary action: Trail Sage
> Dark chapter: Background Dark

## 1. Design Thesis

Accomp should feel like calm preparation before an outdoor trip: spacious, useful, human and quietly confident.

The page uses one continuous visual idea:

```text
separate paths
  → shared plan
  → itinerary
  → gear ownership
  → offline contours
  → two companions moving forward
```

The design borrows the quality bar and storytelling rhythm of the reference site, not its purple palette, mascot, assets or composition.

## 2. Recognizable Accomp Elements

### Pine symbol

- Used beside the provisional `Accomp` wordmark.
- Default color is Trail Sage on light surfaces.
- Inverse color is Warm Cream on dark surfaces.
- Never used as a repeating decorative pattern.

### Shared Path

- Two lines enter from separate positions.
- Lines remain individually visible after converging.
- Companion dots use Trail Sage, Meadow Sage or Warm Cream.
- The path changes meaning by section rather than repeating one identical graphic.

### Contour field

- Reserved for the hero and offline chapter.
- Line opacity stays below text contrast.
- Does not use real geographic data.

## 3. Color Application

| Context | Background | Primary text | Secondary text | Accent |
|---|---|---|---|---|
| Page canvas | Warm Cream | Brand Dark | Text Muted | Trail Sage |
| Sand chapter | Trail Sand | Brand Dark | Text Muted | Trail Sage |
| Meadow card | Meadow Sage | Brand Dark | Sage Ink | Warm Cream |
| Dark hero/offline | Background Dark / Sage Ink | Warm Cream | Trail Sand | Meadow Sage |
| Final CTA | Trail Sage | Background Dark | Sage Ink | Warm Cream |

### Contrast rules

- Primary buttons use Background Dark text on Trail Sage.
- Warm Cream text is never used for normal-size text on Trail Sage.
- Text Muted is used only on Warm Cream or equally light surfaces.
- Focus rings combine contrast and offset; color alone is not the only state.

### Verified prototype contrast

| Pair | Ratio | WCAG AA normal text |
|---|---:|---|
| Brand Dark on Warm Cream | 16.72:1 | Pass |
| Text Muted on Warm Cream | 5.42:1 | Pass |
| Brand Dark on Trail Sage | 4.74:1 | Pass |
| Trail Sand on Brand Dark | 11.72:1 | Pass |
| Meadow Sage on Brand Dark | 8.68:1 | Pass |
| Sage Ink on Meadow Sage | 6.13:1 | Pass |

These checks cover the normal-size text combinations used in the prototype.
Decorative lines may be lower contrast because they do not communicate information.

## 4. Typography

### Display

- Geist or system sans fallback
- Weight 500–600
- Tight letter spacing
- Sentence case

### Body

- Inter or system sans fallback
- Weight 400–500
- Maximum measure approximately 62–68 characters

### Fluid scale

| Role | Compact | Desktop |
|---|---:|---:|
| Hero H1 | 56px | 112px |
| Chapter H2 | 42px | 76px |
| Editorial statement | 38px | 68px |
| Card H3 | 24px | 30px |
| Lead | 18px | 22px |
| Body | 16px | 18px |
| Label | 12px | 13px |

At 320px, line breaks are controlled through measure rather than manual `<br>` elements wherever possible.

## 5. Layout

### Container

- Maximum content width: 1280px
- Desktop gutter: 48–72px
- Tablet gutter: 32px
- Mobile gutter: 20px

### Section rhythm

- Desktop chapter padding: 144–192px
- Tablet chapter padding: 112–144px
- Mobile chapter padding: 88–112px
- Card gap: 16px mobile / 24px desktop

### Composition

- Hero: 5/7 copy-to-visual split.
- Feature chapters: intro above three-card rail.
- Offline: 5/7 copy-to-map split.
- Editorial: typography plus original abstract group illustration.
- FAQ: 4/8 intro-to-accordion split.

## 6. Header

### Desktop

- 72px high pill inside the page container.
- Provisional pine symbol + wordmark.
- Four navigation anchors.
- One persistent CTA.
- Cream surface becomes slightly more opaque after scroll.

### Mobile

- 64px high.
- Symbol + shortened wordmark treatment.
- Compact waitlist CTA.
- Visible `Menu` label.
- Menu panel slides no more than 16px and traps focus while open.

## 7. Hero

- Dark rounded terrain frame occupies the visual column.
- Two paths converge behind one generic phone.
- Phone shows a single trip overview moment.
- UI is labeled `Illustrative UI`.
- No device brand, copied screen or platform chrome.
- Hero copy and CTA are readable before the visual loads.

## 8. Feature Chapters

### Plan Together

- Warm Cream surface.
- Three cards: trip, invite, itinerary.
- Cards use different brand surfaces but one shared route.

### Pack Together

- Trail Sand chapter.
- Cards visualize list, assignment and readiness.
- Check states use a short draw, never bounce.

### Ready Anywhere

- Background Dark chapter.
- Meadow Sage path expands into contours.
- A generic map card and offline-status panel are illustrative only.
- No live tracking, emergency or safety implication.

## 9. How It Works

- Three steps connected by one path on desktop.
- Vertical path on compact layouts.
- Numbers remain visible without animation.
- Copy stays short enough to scan in one pause.

## 10. Editorial Moment

Photography remains unapproved, so Phase 3 uses an original abstract group illustration built from companion circles, a paper-map plane and the Shared Path.

The illustration may later be replaced by licensed photography without changing the section structure.

## 11. FAQ and Final CTA

### FAQ

- Native disclosure semantics.
- Multiple answers may remain open.
- Divider and icon states are visible at 200% zoom.

### Final CTA

- Trail Sage field.
- Dark action button.
- Disabled email prototype makes the missing backend explicit.
- No claim that signup data is collected.

## 12. Responsive Decisions

| Component | Compact | Tablet | Desktop |
|---|---|---|---|
| Header | Menu panel | Menu panel | Inline nav |
| Hero | Copy then visual | Copy then visual | Split |
| Card rail | 1.12 cards | 1.5–2 cards | 3 cards |
| Offline | Copy then map | Copy then map | Split |
| Steps | Vertical | Vertical/row | Row |
| Editorial | Type then art | Split when space allows | Split |
| FAQ | One column | One column | 4/8 split |

## 13. Implementation Handoff Rules

- HTML reading order follows the mobile layout.
- Decorative SVG is `aria-hidden`.
- UI mockups are separate presentational components, not screenshots.
- All component colors use semantic tokens.
- Every motion behavior has a reduced-motion state.
- No layout depends on a fixed content height.
- Final assets remain replaceable without rewriting section markup.
