# Accomp Phase 2 — Interaction Notes

> Prototype: [Open the standalone low-fidelity prototype](./interaction-prototype.html)  
> Status: Behavior specification, not production implementation

## 1. Interaction Principles

- Native scrolling is the default.
- Content is useful before JavaScript runs.
- Motion explains relationship or state, not decoration.
- Every pointer interaction has a keyboard equivalent.
- Focus is always visible.
- No scroll hijacking, forced snap or autoplay carousel.
- Reduced motion keeps the complete story.

## 2. Sticky Header

### Rest state

- Warm Cream background with a subtle bottom border.
- Desktop height: 72px.
- Mobile height: 64px.
- Logo and CTA remain stable.

### Theme state

- Before `#offline`, dark text is used on Warm Cream.
- At the dark chapter boundary, the implementation may switch to a dark header theme.
- The switch occurs before text loses contrast.
- Reduced-motion mode changes theme without a long crossfade.

### Anchor behavior

- Anchor targets include `scroll-margin-top`.
- Focus moves only when the user activates an interactive control designed to move it.
- A skip link is the first focusable item.

## 3. Mobile Menu

| Event | Result |
|---|---|
| Activate `Menu` | Open panel, set `aria-expanded="true"`, move focus to first link |
| Activate close | Close panel and return focus to menu trigger |
| Press Escape | Close panel and return focus |
| Select link | Close panel, then navigate to anchor |
| Click backdrop | Close panel |
| Resize to desktop | Close panel and restore normal document scroll |

The page behind the menu does not scroll while the panel is open.

## 4. Feature Card Rails

Plan Together and Pack Together use the same interaction model.

### Default behavior

- Native horizontal overflow.
- Cards remain in DOM order.
- Touch dragging is native.
- Trackpad and wheel behavior do not block vertical page movement.
- Optional CSS scroll snap uses `proximity`, not `mandatory`.

### Controls

- Previous and next buttons move one card at a time.
- Buttons have descriptive accessible names.
- A status label announces `Card 2 of 3` after button activation.
- Disabled controls remain visibly disabled at the ends.
- Keyboard users can tab into cards and controls without entering a focus trap.

### Responsive behavior

- Mobile: one card plus a visible 12–18% preview of the next card.
- Tablet: approximately 1.5–2 cards.
- Desktop: three cards visible when space permits; controls may remain for consistency.
- No automatic advancement.

## 5. Ready Anywhere Transition

- The background changes from a light surface to Background Dark.
- The shared path changes to Meadow Sage.
- Product and map placeholders are already visible before animation.
- The transition may use opacity and color only.
- No live pulse or safety-status implication.

## 6. How It Works

- Desktop: three steps in one row connected by a path.
- Mobile: vertical reading order with the path on the left.
- Scroll-linked drawing is progressive enhancement only.
- Step numbers remain visible at all times.

## 7. FAQ

- Use native `<details>` and `<summary>` in the prototype.
- Multiple questions may remain open.
- The marker receives a single rotation/change.
- Answers are present in the document and discoverable without JavaScript.
- Deep links may target the FAQ section, not an unverified individual-answer URL.

## 8. CTA Behavior

Until a real waitlist destination exists:

- Header, hero and final CTA link to `#waitlist`.
- The prototype shows a non-submitting placeholder field and disabled submit treatment.
- It must not collect or store an email.
- The interface states clearly that the form is a prototype.

## 9. Motion States

| Element | Standard | Reduced motion |
|---|---|---|
| Hero path | Short draw on entry | Final path visible immediately |
| Hero product card | Fade + maximum 16px rise | Static |
| Chapter entry | Fade + 8–12px rise | Static |
| Card hover | 2–4px lift | Color/border change only |
| Theme transition | 360–640ms | Near-instant |
| Menu | Fade + maximum 16px slide | Near-instant |
| FAQ | Short disclosure transition | Immediate |

## 10. Keyboard Sequence

```text
Skip link
→ Logo
→ Primary navigation
→ Header CTA
→ Hero CTA
→ Hero secondary CTA
→ Promise labels
→ Plan rail controls and cards
→ Pack rail controls and cards
→ Offline content
→ How It Works
→ FAQ summaries
→ Final CTA
→ Footer links
```

Visual arrangement must not diverge from this reading order.

## 11. Prototype Boundaries

The standalone prototype intentionally:

- Uses low-fidelity boxes instead of final artwork.
- Contains no framework or package dependency.
- Does not submit data.
- Does not represent final type, spacing or animation polish.
- Exists only to validate structure and interaction before Phase 3.
