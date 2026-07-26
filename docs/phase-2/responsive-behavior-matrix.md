# Accomp Phase 2 — Responsive Behavior Matrix

> Breakpoints describe layout intent, not final production media-query values.

## 1. Viewport Bands

| Band | Working width | Layout intent |
|---|---:|---|
| Compact | 320–599px | One-column reading, native horizontal rails |
| Medium | 600–899px | One-column or asymmetric two-column sections |
| Wide | 900–1199px | Desktop navigation, two-column hero, 2–3 cards |
| Extra wide | 1200px+ | Full page rhythm with bounded content width |

The design must be tested at 320, 390, 768, 1024, 1440 and 1600px.

## 2. Component Matrix

| Component | Compact | Medium | Wide | Extra wide |
|---|---|---|---|---|
| Header | Logo, CTA, Menu | Logo, CTA, Menu | Full nav + CTA | Full nav + CTA |
| Hero | Copy then portrait visual | Copy then wide visual | 5/7 copy-visual split | Bounded 5/7 split |
| Hero H1 | 48–64px intent | 64–76px intent | 76–96px intent | 88–112px intent |
| Promise labels | Vertical stack | Three-column row | Three-column row | Three-column row |
| Chapter intro | Full width | Max 70% copy width | 5-column copy | 5-column copy |
| Card rail | 1.12 cards visible | 1.5–2 cards | 3 cards or rail | 3 cards with bounded width |
| Offline chapter | Copy then visual | Copy then visual | Sticky-capable 5/7 split | Sticky-capable 5/7 split |
| How It Works | Vertical steps | Vertical/row by fit | Three columns | Three columns |
| Editorial | Type then image | Asymmetric split | 6/6 split | Bounded 6/6 split |
| FAQ | Single column | Single column | 8-column centered | 8-column centered |
| Final CTA | Stacked | Stacked | Centered field | Centered field |
| Footer | Stacked groups | 2-column groups | 4-column grid | 4-column grid |

## 3. Header Details

| Behavior | Compact / Medium | Wide / Extra wide |
|---|---|---|
| Height | 64px | 72px |
| Navigation | Modal panel | Inline |
| CTA | Short label, minimum 44px target | Full label |
| Wordmark | May use symbol + `Accomp` | Symbol + `Accomp` |
| Safe width | Menu and CTA never overlap at 320px | Container max applies |

## 4. Hero Details

### Compact

1. Eyebrow
2. H1
3. Lead
4. Primary and secondary CTA
5. Product placeholder

The visual is not absolutely positioned behind essential text.

### Wide

- Copy and visual share the same first viewport.
- CTA is visible without scrolling at a representative 900px-high viewport.
- The phone/product placeholder may overlap decorative paths only.
- Copy width stays below approximately 46rem.

## 5. Card Rail Measurements

| Band | Card basis | Gap | Edge treatment |
|---|---:|---:|---|
| Compact | 82–88vw | 16px | Next card remains partially visible |
| Medium | 44–56vw | 20px | 1.5–2 cards visible |
| Wide | 30–32% | 24px | Three cards if content fits |
| Extra wide | 360–400px max | 24px | Rail remains inside/breaks container intentionally |

Cards use content-driven height. A rail may align card heights per group, but text must never be clipped at 200% zoom.

## 6. Vertical Rhythm

| Band | Section padding intent | Chapter intro gap |
|---|---:|---:|
| Compact | 80–112px | 36–48px |
| Medium | 96–128px | 48–64px |
| Wide | 128–160px | 64–80px |
| Extra wide | 144–192px | 72–96px |

Mobile spacing is intentionally reduced from desktop; it is not a proportionally scaled desktop canvas.

## 7. Content Reflow Rules

- Text remains before supporting visuals in DOM order.
- Decorative paths can change geometry without changing meaning.
- Labels do not rotate vertically to save width.
- CTA pairs wrap into a vertical stack below approximately 360px if needed.
- Footer links wrap by group, not as one undifferentiated list.
- FAQ answer height is always automatic.
- Long English and future Thai copy can add lines without overlap.

## 8. Touch and Keyboard

- Minimum interactive target: 44×44px.
- Horizontal rails preserve vertical touch scrolling.
- Menu and carousel controls expose visible focus.
- No hover-only content.
- Sticky elements do not consume more than 20% of a 320×568px viewport.
- Zoom to 200% does not introduce two-dimensional page scrolling.

## 9. Responsive QA Checklist

- [ ] 320px: header controls do not collide
- [ ] 390px: next-card preview remains visible
- [ ] 768px: hero does not create an empty half-screen
- [ ] 1024px: navigation and hero split remain balanced
- [ ] 1440px: content does not stretch beyond readable width
- [ ] 1600px: decorative space increases without enlarging body text excessively
- [ ] Landscape phone: menu and CTA remain reachable
- [ ] 200% zoom: no clipped card or fixed-height FAQ
- [ ] Reduced motion: every section remains understandable
- [ ] Keyboard: menu, rail controls and FAQ follow visual order
