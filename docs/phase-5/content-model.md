# Accomp Phase 5 — Content Model

## Source

Navigation, feature cards, How It Works steps and FAQ entries live in
`content/site-content.ts`. Repeated content is data; page-specific editorial
copy remains close to its semantic section.

## Contracts

### NavigationItem

- Requires a same-page hash destination.
- Keeps the visible label separate from the target.
- Every destination must exist in rendered HTML.

### FeatureCardContent

- Contains eyebrow, title, body and a finite visual key.
- Visual keys map to original HTML/CSS compositions.
- Cannot accept arbitrary HTML or external media.

### FAQItem

- Contains a question and a plain-text answer.
- Renders through native `details` and `summary`.
- Allows multiple answers to remain open.

## Product-Truth Rules

- Planned behavior uses words such as `concept`, `planned` or `being designed`.
- Platform, price and launch timing remain explicitly unconfirmed.
- Offline copy avoids safety, emergency or live-tracking implications.
- Waitlist copy never claims that data is collected.
- No ratings, user counts, testimonials or partner marks are fabricated.
