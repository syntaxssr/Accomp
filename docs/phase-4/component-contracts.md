# Accomp Phase 4 — Component Contracts

## Layout

### Container

- Constrains content to the page maximum width.
- Applies responsive gutters from the token layer.
- Accepts semantic wrapper elements for page regions.

### Stack

- Handles vertical rhythm only.
- Supports `sm`, `md`, `lg` and `xl` token-backed gaps.
- Does not control child typography or surface styles.

## Typography

### Heading

- Requires an explicit `h1`, `h2` or `h3` element.
- Separates semantic level from visual size.
- Supports default and inverse brand tones.

### Text

- Supports body, lead and eyebrow roles.
- Uses a readable maximum measure.
- Muted text is limited to approved light surfaces.

## Controls

### Button

- Defaults to `type="button"` to avoid accidental form submission.
- Supports primary, secondary and dark treatments.
- Retains visible keyboard focus and disabled states.

### ButtonLink

- Uses anchor semantics when an action navigates.
- Shares visual treatments with Button.

### TextLink

- Keeps an underline in its resting state.
- Never relies on color alone to communicate interactivity.

## Surfaces

### Card

- Supports cream, sand, meadow and dark semantic tones.
- Exposes only token-backed padding sizes.
- Does not contain section-specific layout behavior.

## Assets

### Icon

- Uses a finite icon-name registry instead of arbitrary source paths.
- Requires a label unless explicitly decorative.
- Starts with the provisional Accomp pine symbol only.
