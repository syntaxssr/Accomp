# Phase 8 Known Limitations

## Public-Launch Blockers

The following are required before deployment. They are intentionally not
invented or silently replaced in Phase 8.

| Open input | Current behavior | Required owner decision |
|---|---|---|
| Production domain | Metadata falls back to the request host | Supply and approve the real domain |
| Waitlist or store destination | CTA scrolls to an explicitly disabled preview | Supply a consented waitlist or real store URL |
| Legal entity and contact | Privacy page says they are not supplied | Provide verified legal name and public contact |
| Final privacy policy and terms | Factual pre-launch notices are shown | Approve jurisdiction-appropriate agreements |
| Product claims | UI and offline behavior remain illustrative | Approve exact product capability language |
| Platform, launch date and pricing | No claim is made | Confirm any statements to publish |
| Analytics and consent | No analytics or optional cookie is active | Choose provider and consent behavior, or approve none |
| Release approval | Candidate is local only | Approve the final public release |

Because the waitlist has no live destination and legal/product claims have not
received final approval, two Phase 8 acceptance criteria remain open even
though the local code quality gates pass.

## Coverage Limitations

- Chromium was tested through the in-app browser and Google Chrome.
- Safari, Firefox, iOS Safari, Android Chrome and physical-device touch remain
  a manual pre-launch matrix.
- The accessibility tree and keyboard paths were smoke-tested, but VoiceOver,
  NVDA, JAWS and TalkBack were not run in this local pass.
- The 320px layout is a reflow proxy; native browser zoom at 200% should be
  repeated in the final browser matrix.
- Lighthouse uses simulated mobile throttling. Real-device and deployed-origin
  network behavior can differ.

These coverage items are not evidence of a known critical defect. They are
verification tasks that depend on browsers, devices or production
infrastructure outside the current local candidate.

## Product Limitations

- The repository is a marketing website only; it does not contain the mobile
  app.
- The waitlist does not collect data.
- There is no backend, account, purchase, CMS or admin surface.
- The illustrative map is not real route data.
- Contact is labelled “coming later.”
- The wordmark, app icon and optional photography remain provisional.
