# Accomp Asset Brief v1

> Status: Phase 1 planning document  
> No production asset is assumed to exist unless listed in Current Inventory  
> Every external asset requires a source and commercial-use check

## 1. Current Inventory

### Available

- Brand identity text
- Approved core color palette
- Typeface direction: Geist and Inter
- Tagline: `Adventure Together.`
- Website plan
- Phase 1 copy and visual direction
- [Pine symbol exploration v1](../../brand/accomp-pine-icon.svg) — pending approval

### Missing

- Final wordmark
- App icon
- Real app screenshots
- Approved static app mockups
- Hero visual
- Feature illustrations
- Photography
- Store badges and store URLs
- Waitlist destination
- Social sharing image
- Favicon set
- Legal and company marks

## 2. Priority Matrix

| Priority | Asset | Required by | Status |
|---|---|---|---|
| P0 | Wordmark/logo decision | Before Phase 3 final design | Pine symbol exploration v1 |
| P0 | App screen source or mockup permission | Before Phase 3 | Missing |
| P0 | CTA destination and platform status | Before Phase 2 copy lock | Missing |
| P1 | Hero visual system | Phase 3 | Briefed |
| P1 | Feature illustration set | Phase 3 | Briefed |
| P1 | Photography set | Phase 3 | Direction only |
| P1 | App icon | Phase 3/7 | Missing |
| P2 | Store badges | Phase 7 | Depends on launch |
| P2 | Open Graph image | Phase 7 | Depends on final hero |
| P2 | Favicon exports | Phase 7 | Depends on logo |
| P2 | Footer/legal marks | Phase 7 | Missing |

## 3. Logo Brief

### Objective

Create a small, memorable pine symbol that communicates companionship through movement.

### Concept territory

- Two paths becoming coordinated
- Two companion dots moving together
- An organic pine silhouette with layered negative space
- Forward progress without an arrow cliché
- Connection without a link-chain icon

### Required behavior

- Recognizable at 16px
- Works in monochrome
- Works inside a square app-icon crop
- Works beside the word `Accomp`
- Can become a path node in motion
- Clear on light and dark surfaces

### Avoid

- Mountain inside a circle
- Generic triangular or realistic pine tree
- Generic location pin
- Compass rose
- Literal pair of hikers
- Visual similarity to Phantom’s ghost
- Complex contour map inside the mark

### Deliverables

- Symbol master SVG
- Horizontal wordmark SVG
- Monochrome light/dark variants
- App-icon master
- Safe-area specification
- 16px, 32px and 64px legibility checks

## 4. Hero Visual Brief

### Story

Separate plans become one shared adventure.

### Composition

- Dark rounded frame
- One phone mockup
- Two paths entering from different directions
- Paths converge behind the phone
- Companion dots remain visible
- Low-contrast topographic field
- Optional natural-light photography layer only if it does not compete with copy

### Required UI moment

Choose one:

1. Trip overview with companions, itinerary and readiness
2. Offline map saved for a named trip

Do not combine every feature in the hero.

### Deliverables

- Desktop hero master
- Mobile portrait composition
- Static fallback
- Motion-ready vector layers
- Dark/light text-safe variants
- Alt-text draft

### Production constraints

- No copied device render or Phantom asset
- Phone model must be generic or properly licensed
- No store badge until real destination exists
- UI data must be clearly illustrative and avoid private real-world information

## 5. App Screen Brief

### Required screen set

| Screen | Story purpose | Minimum UI content |
|---|---|---|
| Trip overview | One calm home for the trip | Name, dates, companions, readiness |
| Shared itinerary | Plan the days together | Day sections, stops, add action |
| Shared gear | Divide responsibility | Item, assignee, readiness state |
| Offline map | Stay prepared without signal | Route, saved state, update status |
| Invite flow | Bring companions in | Share method and joined state |

### Source decision

Choose one before Phase 3:

- Export real app screens supplied by the product team
- Create marketing-only static mockups that do not imply implementation completeness

### Mockup rules

- One task per screen
- Large enough text to remain legible inside marketing cards
- Consistent platform chrome
- No fake ratings, live tracking or safety status
- No UI flow that the actual product cannot support

## 6. Feature Illustration Brief

### System

Original geometric illustrations made from:

- Shared path
- Companion dots
- Route nodes
- Checklist rows
- Topographic contours
- Layered trip cards

### Style

- Flat with subtle depth
- Rounded
- Two or three tones per composition
- Mostly brand and neutral colors
- Minimal gradient
- No cartoon characters

### Set

1. Create a trip
2. Invite companions
3. Shape the itinerary
4. Share the checklist
5. Assign gear
6. Review readiness
7. Save an offline area
8. Keep essential details close

### Formats

- SVG master
- Optimized SVG export
- PNG fallback only if required
- Layer naming suitable for motion

## 7. Photography Brief

### Shot list

1. Friends planning over a phone and paper map
2. Shared gear laid out before packing
3. One friend passing equipment to another
4. Small group checking the route at a trailhead
5. Walking together with natural spacing
6. Campsite preparation in natural light
7. Quiet landscape with room for copy

### Casting

- Authentic friend groups
- Inclusive gender expression and experience level
- Clothing appropriate to the location
- Practical gear rather than fashion styling
- Expressions focused on collaboration, not camera performance

### Location

- Forest trail
- Open viewpoint
- Trailhead or campsite
- One indoor/home packing moment

### Grade

- Natural greens
- Warm neutral skin tones
- Controlled saturation
- No heavy orange/teal split
- Preserve shadow detail

### Required crops

- 16:9 desktop
- 4:5 and 3:4 card
- 9:16 mobile hero option
- 1:1 social crop option

## 8. Store and CTA Assets

Do not use store badges until:

- App listing exists
- Destination URL is final
- Badge follows platform usage guidelines
- Platform availability copy matches reality

Pre-launch CTA requires:

- Waitlist form destination
- Consent copy
- Privacy policy link
- Confirmation state
- Unsubscribe method

## 9. Social and Metadata Assets

### Open Graph

- 1200 × 630 master
- Accomp wordmark
- `Adventure Together.`
- Shared-path visual
- High contrast at thumbnail size
- No tiny app UI

### Favicon

- Derived from approved symbol
- SVG plus required raster exports
- Test on light/dark browser UI

### App preview

Only create if actual store and product launch plan requires it.

## 10. Asset Register Template

Every production asset should have:

| Field | Example |
|---|---|
| Asset ID | `photo-plan-01` |
| Filename | `friends-planning-forest.webp` |
| Creator/source | Name and URL |
| License | Commercial stock / commissioned / owned |
| Proof | Receipt, license file or agreement path |
| Restrictions | Attribution, territory, term |
| Edits | Crop, color grade, retouch |
| Approved by | Owner |
| Approval date | YYYY-MM-DD |

## 11. Proposed Repository Structure

This is a future structure, not created during Phase 1:

```text
public/
└── assets/
    ├── brand/
    ├── icons/
    ├── illustrations/
    ├── photography/
    ├── product/
    └── social/

design/
└── source/
    ├── brand/
    ├── illustration/
    ├── motion/
    └── photography-license-register/
```

## 12. Reference Policy

- Moodboard imagery is not automatically licensed for production
- Do not download reference images into the production asset directory
- Use references to communicate framing, tone and behavior
- Create original shared-path and topographic artwork
- Re-check the exact license at acquisition time because licensing can change

## 13. Owner Decisions

- [ ] Approve or revise pine symbol exploration v1
- [ ] Supply a wordmark or authorize custom wordmark exploration
- [ ] Supply app screens or authorize static mockups
- [ ] Choose photography source
- [ ] Approve photography casting/location direction
- [ ] Confirm platform availability
- [ ] Supply waitlist or store URLs
- [ ] Approve asset register workflow
