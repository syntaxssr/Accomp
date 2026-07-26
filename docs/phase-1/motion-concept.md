# Accomp Motion Concept v1

> Concept: **A path becomes a plan**  
> Status: Storyboard-level direction only  
> No motion library or implementation is selected in Phase 1

## 1. Motion Purpose

Motion should answer one of three questions:

1. What belongs together?
2. What changed?
3. Where should the viewer look next?

If an animation does not answer one of these questions, remove it.

## 2. Character

- Calm
- Purposeful
- Lightweight
- Continuous
- Grounded
- Predictable

Avoid:

- Bounce
- Elastic overshoot
- Random floating
- Aggressive zoom
- Long scroll hijacking
- Decorative motion competing with copy

## 3. Narrative Spine

One shared path travels through the page and changes meaning:

```text
separate routes
    ↓
shared trip
    ↓
itinerary
    ↓
gear checklist
    ↓
offline contours
    ↓
companions moving forward
```

The page must still make sense when this continuous motion is replaced by static states.

## 4. Storyboard

### 4.1 Header

#### Entry

- Header fades in after core content is visible
- No drop animation
- Logo and CTA remain stable

#### Scroll

- Background becomes more opaque after leaving hero
- Text/icon theme changes before entering dark chapter
- Header never disappears long enough to hide navigation

#### Duration

- 180–360ms

### 4.2 Hero

#### Initial state

- Hero copy is immediately readable
- Two route lines are already faintly present
- Phone mockup is visible at its final size

#### Motion

1. Two paths draw in from opposite sides
2. Companion dots travel a short distance
3. Paths meet behind the phone
4. Phone increases opacity and moves no more than 16px
5. One soft contour wave settles behind the composition

#### Duration

- Total visual entry: 700–1000ms
- Copy is not delayed by the full sequence

#### Constraints

- No autoplay video required
- No repeated loop after the entry
- No scale beyond roughly 1.02

### 4.3 Product Promise Strip

Three labels appear as the path passes them:

- Plan together
- Pack together
- Explore ready

Each label uses opacity and a 6–8px rise. The movement is sequential but short enough that all labels are visible within one viewport pause.

### 4.4 Plan Together

#### Chapter intro

- Headline rises 12px and fades
- Shared path travels from headline into card rail

#### Cards

- Cards are horizontally scrollable by the user
- Active card gains subtle depth
- Route line continues visually across card edges
- Arrow buttons move exactly one logical card group

#### No-JS state

- Cards display in a readable stacked or overflow layout
- All content remains available

### 4.5 Pack Together

#### Transformation

- Route nodes expand into checklist circles
- Assignee labels fade beside the nodes
- Checked state uses a short draw, not a bounce

#### Interaction

- Hover/focus lifts a card 2–4px
- Press state removes the lift
- State change duration stays below 220ms

#### Guardrail

The marketing animation must not imply live collaboration if the actual feature does not support it.

### 4.6 Ready Anywhere

#### Transition

- Light background crossfades into Background Dark
- Shared path stays continuous and becomes Meadow Sage on the dark surface
- Secondary route lines spread into a contour field
- Header theme changes at the same boundary

#### Screen moment

- Offline status becomes visible
- No pulsing “live” indicator
- Map remains still enough to read

#### Duration

- Chapter transition: 480–640ms

### 4.7 How It Works

- One path connects three steps
- Each step reveals when it enters the reading zone
- Progress is scroll-linked only as a progressive enhancement
- User can understand all three steps without watching the line animate

### 4.8 Editorial Moment

If photography is used:

- Very subtle crop shift of no more than 2–3%
- No dramatic parallax on mobile
- Text remains stationary

If typography only:

- No animation beyond a soft fade and short rise

### 4.9 Final CTA

#### Motion

- Two companion dots enter from separate sides
- They align and move forward together
- CTA receives one calm emphasis through contrast, not pulsing

#### Completion

The final frame is static and suitable for a screenshot or social preview.

## 5. Interaction Motion

### Buttons

- Hover: background/color transition, optional 1–2px lift
- Press: return to rest, 120ms
- Focus: immediate visible ring, no animation required
- Disabled: no motion

### Links

- Underline or arrow moves 2–4px
- Do not animate font weight

### Accordion

- Indicator rotates or changes once
- Content transition remains under 360ms
- Screen readers receive correct expanded state

### Mobile menu

- Panel fades/slides no more than 16px
- Focus moves into menu
- Background does not continue scrolling
- Closing returns focus to trigger

### Carousel

- Native touch scrolling first
- Snap is optional
- Buttons provide deterministic movement
- Current position is not communicated by animation alone

## 6. Timing System

| Purpose | Duration |
|---|---:|
| Press/focus feedback | 120ms |
| Hover/small state | 180ms |
| Menu/accordion | 240–360ms |
| Content reveal | 320–480ms |
| Route transformation | 480–640ms |
| Hero entry | 700–1000ms |

No user should wait for an animation before reading or acting.

## 7. Easing

### Standard

`cubic-bezier(0.22, 1, 0.36, 1)`

Use for calm deceleration.

### Enter

`cubic-bezier(0.16, 1, 0.3, 1)`

Use for content and card entry.

### Exit

`cubic-bezier(0.4, 0, 1, 1)`

Use only for short exits.

Avoid spring physics in the brand layer.

## 8. Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- Route is rendered in its final state
- Content is visible immediately
- No scroll-linked drawing
- No parallax
- Carousel remains manually scrollable
- Header theme switches without a long transition
- Accordion/menu may use near-instant opacity
- Focus indicators remain immediate and visible

Reduced motion is a complete experience, not a fallback with missing storytelling.

## 9. Performance Budget

- Prefer transform and opacity
- Avoid animating layout properties across large sections
- Use SVG paths with restrained point count
- No continuous animation when offscreen
- Pause or remove ambient motion on low-power contexts
- Avoid large hero video unless approved after performance testing
- Do not add a motion library only for basic fades

## 10. Motion QA

- Keyboard users can trigger and understand every state
- Touch carousel does not trap vertical scrolling
- No animated element causes layout shift
- Text never becomes unreadable during a theme transition
- Motion remains smooth on a representative mid-range phone
- Browser back/forward does not replay a long intro unnecessarily
- All states are testable without waiting for scroll position

## 11. Approval Checklist

- [ ] Continuous shared-path narrative approved
- [ ] Hero entry approved
- [ ] Light-to-dark offline transition approved
- [ ] No-bounce motion character approved
- [ ] Reduced-motion behavior approved
- [ ] Motion budget approved
