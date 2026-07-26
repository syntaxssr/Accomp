# Accomp Phase 2 — Information Architecture

> Page model: Single-page marketing homepage  
> Primary journey: Understand → believe → inspect → act  
> Primary CTA: `Join the waitlist`  
> Status: Provisional until product claims and CTA destination are confirmed

## 1. First-Viewport Contract

Without scrolling, the visitor should understand:

1. `Accomp` is a mobile app for shared outdoor-trip planning.
2. It brings the crew, route, gear and plan into one place.
3. The next action is to join a waitlist, not download an unconfirmed product.

The hero must not depend on animation, a video or a readable app screenshot to communicate these points.

## 2. Primary Journey

```text
Arrival
  ↓
What is Accomp?
  ↓
What problems does it solve?
  ↓
How does shared planning work?
  ↓
Why does offline readiness matter?
  ↓
How do I get started?
  ↓
Can I trust the unanswered details?
  ↓
Join the waitlist
```

## 3. Page Outline

| Order | Landmark / anchor | Section | Communication job | Primary content |
|---:|---|---|---|---|
| 0 | `header` | Sticky header | Keep orientation and CTA available | Logo, Features, How it works, Offline, FAQ, CTA |
| 1 | `main#top` | Hero | Identify app, promise and next action | Eyebrow, H1, value proposition, two CTAs, product placeholder |
| 2 | `section#promise` | Product promise strip | Compress the proposition for scanners | One statement, Plan / Pack / Explore labels |
| 3 | `section#features` | Plan Together | Explain shared trip and itinerary setup | Chapter intro, three-card rail |
| 4 | `section#pack` | Pack Together | Explain shared gear ownership and readiness | Chapter intro, three-card rail |
| 5 | `section#offline` | Ready Anywhere | Establish offline preparation as a differentiator | Dark chapter, map/detail placeholder, three proof points |
| 6 | `section#how-it-works` | How It Works | Reduce the product to three memorable steps | Create, invite, head out ready |
| 7 | `section#story` | Editorial brand moment | Add emotional meaning without fake social proof | Editorial headline, body, photography reservation |
| 8 | `section#faq` | FAQ | Resolve launch, platform and product uncertainty honestly | Native disclosure list |
| 9 | `section#waitlist` | Final CTA | Repeat the single conversion action | Headline, CTA placeholder, privacy caveat |
| 10 | `footer` | Footer | Close with navigation and legal readiness | Brand statement, verified destinations only |

## 4. Navigation Model

### Desktop

- Sticky header remains visible.
- `Features` targets `#features`.
- `How it works` targets `#how-it-works`.
- `Offline` targets `#offline`.
- `FAQ` targets `#faq`.
- Primary CTA targets `#waitlist`.
- The current section may be indicated by `aria-current="location"` only when implementation can keep it accurate.

### Mobile

- Header contains symbol/wordmark, CTA and visible `Menu` label.
- Menu opens as a modal panel below the header, not a full-screen animated takeover.
- Focus enters the first menu link and returns to the trigger after closing.
- Background scrolling is locked while the menu is open.
- Selecting a destination closes the panel before moving to the anchor.

## 5. Storytelling Rhythm

The page alternates explanation and evidence:

```text
Promise
  → product evidence
  → product evidence
  → dark differentiator
  → simple process
  → human meaning
  → honest answers
  → action
```

| Section | Desktop rhythm | Mobile rhythm | Theme |
|---|---|---|---|
| Header | 72px sticky | 64px sticky | Warm Cream |
| Hero | 760–900px | 680–780px | Warm Cream + dark visual frame |
| Promise | 180–240px | 260–340px | Warm Cream |
| Plan Together | 900–1100px | 980–1220px | Warm Cream |
| Pack Together | 900–1100px | 980–1220px | Trail Sand / Meadow Sage |
| Ready Anywhere | 900–1100px | 900–1120px | Background Dark |
| How It Works | 680–820px | 760–920px | Warm Cream |
| Editorial | 560–720px | 620–760px | Trail Sand |
| FAQ | Content-driven | Content-driven | Warm Cream |
| Final CTA | 560–680px | 620–720px | Trail Sage |
| Footer | 320–440px | 420–560px | Background Dark |

Section height is a range, not a forced viewport lock. Content expansion, text zoom and localization must increase height naturally.

## 6. CTA Ladder

| Location | CTA | Purpose |
|---|---|---|
| Header | `Join the waitlist` | Persistent primary action |
| Hero | `Join the waitlist` | First conversion opportunity |
| Hero secondary | `Explore the features` | Lower-commitment path to `#features` |
| Ready Anywhere | No competing primary CTA | Keep focus on differentiation |
| Final CTA | `Join the waitlist` | Conversion after full story |

The prototype scrolls to a placeholder waitlist region. A live form is not implied.

## 7. Semantic Structure

```text
body
├── a.skip-link
├── header
│   └── nav[aria-label="Primary"]
├── main#top
│   ├── section.hero
│   ├── section#promise
│   ├── section#features
│   ├── section#pack
│   ├── section#offline
│   ├── section#how-it-works
│   ├── section#story
│   ├── section#faq
│   └── section#waitlist
└── footer
```

- One H1 only.
- Every chapter receives an H2.
- Cards and FAQ questions use H3 where appropriate.
- Decorative path graphics are hidden from assistive technology.
- The product placeholder receives concise alt text only if rendered as an informative image.

## 8. Content That Must Remain Visible Without Motion

- Hero H1, value proposition and CTA
- All feature chapter headings and bodies
- Every card title and description
- Offline readiness explanation
- All three How It Works steps
- Editorial statement
- Every FAQ question and answer
- Final CTA and privacy caveat

Motion may clarify relationships, but it cannot reveal otherwise inaccessible content.
