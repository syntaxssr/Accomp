# Accomp Phase 3 — Motion Specification

> Motion concept: **A path becomes a plan**
> Character: calm, continuous, purposeful
> Production library: not selected until Phase 4

## 1. Timing Tokens

| Token | Duration | Use |
|---|---:|---|
| `motion-instant` | 120ms | Press and immediate feedback |
| `motion-fast` | 180ms | Hover and small color state |
| `motion-ui` | 280ms | Menu, accordion and control state |
| `motion-reveal` | 420ms | Section content reveal |
| `motion-route` | 640ms | Route transformation |
| `motion-hero` | 900ms | Initial shared-path sequence |

No content waits for the 900ms hero sequence before becoming readable.

## 2. Easing

| Token | Value | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` | Calm deceleration |
| `ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveals |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Short exits |

No spring, bounce or elastic overshoot is used in branded motion.

## 3. Hero Sequence

1. Copy is already visible.
2. Faint contour field is already present.
3. Two paths draw from opposite sides over 640–900ms.
4. Companion dots move a short distance.
5. Phone opacity moves from 0.88 to 1 and rises no more than 16px.
6. The final frame remains static.

The sequence runs once per page load and does not loop.

## 4. Header

| Event | Motion |
|---|---|
| Initial entry | 180ms opacity after content is available |
| Scroll away from hero | Surface opacity increases over 280ms |
| Enter dark chapter | Text and border theme change over 280ms |
| Open mobile menu | Fade + maximum 16px translate over 280ms |
| Close menu | 180ms exit |

Focus movement is immediate and independent of animation.

## 5. Feature Rails

- Native touch scrolling is primary.
- Optional `scroll-snap-type: inline proximity`.
- Button movement uses native scroll with a maximum 420ms smooth transition.
- No autoplay.
- Active-card depth changes over 180ms.
- Card hover rises 3px maximum.
- Press returns to rest over 120ms.

## 6. Chapter Transitions

### Plan Together

- Route line crosses cards once.
- Card content is never hidden behind the route.

### Pack Together

- Route nodes become checklist circles.
- Check mark draws in 180–280ms.
- Assignment labels fade in without lateral travel.

### Ready Anywhere

- Background and text colors crossfade over 420–640ms.
- Shared Path becomes Meadow Sage.
- Contours appear through opacity only.
- Map does not pan or imply live tracking.

## 7. How It Works

- Path draw is scroll-linked only as progressive enhancement.
- Each step uses a 420ms fade/rise.
- All three steps are visible when JavaScript or Intersection Observer is unavailable.

## 8. FAQ

- Indicator changes once over 180ms.
- Answer transition is limited to 280ms.
- Native `<details>` state remains authoritative.
- Multiple answers may stay open.

## 9. Final CTA

- Two companion dots enter separately and align.
- Total travel is under 120px desktop and 60px mobile.
- CTA button does not pulse.
- Final state is static and suitable for screenshots.

## 10. Reduced Motion

Under `prefers-reduced-motion: reduce`:

- Smooth scrolling becomes instant.
- Shared paths render in their final state.
- No parallax, path drawing or scroll-linked progress.
- Menu and FAQ state changes are near-instant.
- Hover uses color/border rather than transform.
- No information is removed.

## 11. Performance Constraints

- Animate transform, opacity and SVG stroke properties only.
- No continuous offscreen animation.
- No hero video in the approved direction.
- Decorative SVG point count remains restrained.
- Animation code loads only where the behavior exists.
- Core content and CTA work when motion JavaScript fails.

## 12. QA Checklist

- [ ] No layout shift during hero entry
- [ ] 60fps target on a representative mid-range phone
- [ ] Keyboard focus never waits for animation
- [ ] Mobile menu returns focus after close
- [ ] Carousel never traps vertical touch scrolling
- [ ] Reduced motion contains the full narrative
- [ ] Browser back/forward does not replay a blocking intro
