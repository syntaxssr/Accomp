# Accomp Phase 5 — Interaction and Accessibility

## Mobile Menu

- The trigger reports expanded state and controls the dialog.
- Opening moves focus to the first menu destination.
- Tab and Shift+Tab remain inside the open dialog.
- Escape closes the dialog.
- Background scrolling is locked only while the dialog is open.
- Closing restores focus to the trigger.
- Resizing to desktop closes the mobile dialog.

## Feature Rails

- Native horizontal scrolling is always available.
- The rail is keyboard-focusable.
- Previous and next controls move one card.
- A polite status reports the current card.
- Controls disable at the first and last card.
- Controls disable when all cards fit on desktop.
- There is no autoplay.

## FAQ

- Native disclosure semantics remain authoritative.
- Multiple answers may stay open.
- Answers have no fixed height.
- The page remains understandable with JavaScript unavailable.

## CTA and Forms

- Header and hero CTA links resolve to the real `#waitlist` section.
- The waitlist preview contains no form element or submit handler.
- Email and action controls are disabled.
- The page states that no information is collected.

## Responsive Reading Order

- Semantic HTML follows the compact layout.
- Copy precedes supporting visuals.
- Feature cards expose a next-card edge below desktop width.
- How It Works becomes a vertical path on compact layouts.
- The minimum supported width remains 320px.

## Motion Boundary

Phase 5 uses only short hover and focus feedback. Content is not hidden by
animation. Advanced reveals, path drawing and section transitions begin in
Phase 6.
