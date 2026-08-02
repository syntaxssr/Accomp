import type { MouseEvent } from "react";

const CARD_REBOUND_DISTANCE = 10;
const CARD_REBOUND_DURATION = 600;
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const activeAnimations = new WeakMap<HTMLElement, Animation>();

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function offsetFromCursor(
  cursorPosition: number,
  start: number,
  size: number,
) {
  const halfSize = size / 2;

  if (halfSize === 0) {
    return 0;
  }

  const center = start + halfSize;

  return clamp(
    ((center - cursorPosition) / halfSize) * CARD_REBOUND_DISTANCE,
    -CARD_REBOUND_DISTANCE,
    CARD_REBOUND_DISTANCE,
  );
}

export function reboundCardFromCursor(event: MouseEvent<HTMLElement>) {
  if (
    !window.matchMedia(FINE_POINTER_QUERY).matches ||
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  ) {
    return;
  }

  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = offsetFromCursor(event.clientX, bounds.left, bounds.width);
  const y = offsetFromCursor(event.clientY, bounds.top, bounds.height);
  const previousAnimation = activeAnimations.get(card);

  previousAnimation?.cancel();

  const animation = card.animate(
    [
      { offset: 0, translate: "0 0" },
      { offset: 0.32, translate: `${x.toFixed(2)}px ${y.toFixed(2)}px` },
      {
        offset: 0.42,
        translate: `${(x * 0.92).toFixed(2)}px ${(y * 0.92).toFixed(2)}px`,
      },
      {
        offset: 0.72,
        translate: `${(-x * 0.18).toFixed(2)}px ${(-y * 0.18).toFixed(2)}px`,
      },
      {
        offset: 0.88,
        translate: `${(x * 0.05).toFixed(2)}px ${(y * 0.05).toFixed(2)}px`,
      },
      { offset: 1, translate: "0 0" },
    ],
    {
      duration: CARD_REBOUND_DURATION,
      easing: "linear",
    },
  );

  activeAnimations.set(card, animation);

  function clearAnimation() {
    if (activeAnimations.get(card) === animation) {
      activeAnimations.delete(card);
    }
  }

  animation.addEventListener("cancel", clearAnimation, { once: true });
  animation.addEventListener("finish", clearAnimation, { once: true });
}
