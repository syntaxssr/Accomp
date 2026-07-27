# Accomp Phase 6 — Interaction QA Notes

## QA Matrix

| Interaction | Pointer/touch | Keyboard | Reduced motion | Failure fallback |
|---|---|---|---|---|
| Header navigation | Native anchor | Native link | Immediate theme change | Working anchors |
| Mobile menu | Tap open/close | Focus trap, Escape, focus return | Near-instant | Header destinations remain links |
| Feature rails | Native horizontal swipe | Arrow keys, Home, End, controls | Instant programmatic scroll | Native overflow scroll |
| Scroll reveals | One-time reveal | No keyboard dependency | Immediately visible | Server content remains visible |
| Offline route | Draws once | Decorative only | Final route visible | Final route visible |
| FAQ | Native disclosure | Enter/Space via summary | Immediate answer | Native details/summary |
| CTA | Native anchors | Native links | Static final frame | Working destination |

## Source and Automated Checks

- Reveal enhancement is enabled only after client initialization.
- All reveal targets are exposed when Intersection Observer is unavailable.
- Reduced-motion changes are observed while the page is open.
- Rail scroll state is throttled through `requestAnimationFrame`.
- Rail controls never autoplay and do not capture vertical touch scrolling.
- The sticky header marks the active destination with `aria-current`.
- Mobile menu focus behavior from Phase 5 remains intact.
- Rendered HTML retains one H1, native FAQ disclosures and complete hash targets.

## Layout Stability Review

- No animated property affects document flow.
- Hero, route, card and CTA animations use transform, opacity or stroke offset.
- Every animated visual has its final dimensions before animation begins.
- Copy is visible before the longest 900ms visual sequence completes.

## Manual Follow-up

Before public launch, repeat the following on representative iOS, Android and
desktop hardware:

1. Swipe both feature rails without blocking vertical page scroll.
2. Toggle system reduced-motion while the page is open.
3. Confirm the dark header transition remains readable over the Offline chapter.
4. Check animation smoothness under CPU throttling.
5. Verify browser back/forward never creates a blocking intro.

This hardware pass belongs to release QA; it does not change the Phase 6
progressive-enhancement contract.
