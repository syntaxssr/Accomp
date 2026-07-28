# Phase 2.3 — Support the Developer

## Outcome

Phase 2.3 adds a bilingual Support experience for the independent development
of Accomp. It explains what thoughtful support can help with and prepares a
consent-driven wall for recognizing real supporters by approved display name
and portrait.

No support destination or supporter identity was supplied for this phase.
Accordingly, payments remain inactive and the wall renders an intentional
empty state. No fictional people, portraits, testimonials or contribution
amounts were added.

## Routes

| Route | Purpose |
| --- | --- |
| `/support` | Redirects to the default English Support page |
| `/en/support` | English Support page |
| `/th/support` | Thai Support page |

The desktop navigation, mobile menu and footer link to the localized route.
The language switcher preserves the Support-page context.

## Experience

- One H1 with a short explanation of independent product development
- Three areas support could help: product learning, careful design and reliable
  foundations
- A visible inactive status instead of a false payment control
- A responsive supporter wall with a deliberate empty state
- A privacy note explaining that public recognition is optional
- Accomp palette, pine motif, responsive layout and reduced-motion behavior

## Data and Consent

`content/supporters.ts` is the static source of truth. A future approved entry
contains only an internal ID, public display name, local WebP or AVIF path and
owner-selected sort order. Duplicate IDs, image paths and sort orders are
rejected.

The repository must not contain payment details, contact information,
transaction amounts, addresses or private consent evidence. Before adding an
entry, follow the
[supporter publication register](./supporter-publication-register.md).

## Images

Approved portraits belong in `public/supporters/` and must:

- be cropped to a respectful 1:1 composition;
- use WebP or AVIF;
- include fixed width and height when rendered;
- use lazy loading and asynchronous decoding;
- be no larger than 200 KB where practical; and
- have EXIF and GPS metadata removed.

The page already supports localized alt text through the shared `{name}`
placeholder. No image is shown until an approved entry exists.

## Internationalization and Discovery

All visible interface copy, metadata and accessibility labels live in
`messages/en.json` and `messages/th.json`. Both catalogs have matching keys,
array shapes and placeholders. Canonical URLs, language alternates, localized
social metadata and sitemap entries cover both Support routes.

## Validation

Phase 2.3 expands the production smoke matrix from fourteen to sixteen HTTP
requests. Source and rendered-output tests verify the route, language context,
single-H1 structure, inactive support status, empty state, supporter image
contract, sitemap entries and absence of a payment form.

## Remaining Owner Gates

- Supply and approve the HTTPS support destination.
- Supply each public display name and portrait.
- Confirm publication consent and the removal-request contact.
- Review the Thai and English copy.
- Complete manual browser, device and assistive-technology QA.
- Issue a separate deployment instruction.

This phase does not add payment processing, a backend, supporter accounts,
provider synchronization, analytics or mobile-app implementation.
