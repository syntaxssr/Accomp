"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  FeatureCardContent,
  FeatureVisual,
} from "@/content/site-content";
import styles from "./feature-rail.module.css";

interface FeatureRailProps {
  cards: FeatureCardContent[];
  label: string;
  tone: "cream" | "sand";
}

function FeatureArtwork({ visual }: { visual: FeatureVisual }) {
  if (visual === "trip") {
    return (
      <div className={styles.tripForm} aria-hidden="true">
        <span>Trip name · Khao Yai Weekend</span>
        <span>Dates · 12–14 September</span>
        <span>Meeting point · Add later</span>
        <b>Create trip</b>
      </div>
    );
  }

  if (visual === "invite") {
    return (
      <div className={styles.companions} aria-hidden="true">
        <span />
        <span />
        <b>Invite</b>
        <span />
        <span>+1</span>
      </div>
    );
  }

  if (visual === "itinerary") {
    return (
      <div className={styles.timeline} aria-hidden="true">
        <span>08:00 · Trailhead</span>
        <span>12:30 · Ridge lunch</span>
        <span>16:00 · Camp</span>
      </div>
    );
  }

  if (visual === "checklist" || visual === "assign") {
    const rows =
      visual === "checklist"
        ? [
            ["✓", "Tent", ""],
            ["✓", "Stove", ""],
            ["·", "Water filter", ""],
          ]
        : [
            ["✓", "Tent", "May"],
            ["✓", "Stove", "Ton"],
            ["·", "First aid", "You"],
          ];

    return (
      <div className={styles.checklist} aria-hidden="true">
        {rows.map(([state, item, owner]) => (
          <span key={item}>
            <b>{state}</b>
            {item}
            {owner && <small>{owner}</small>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.readiness} aria-hidden="true">
      <strong>8/10</strong>
      <span>
        <i />
      </span>
      <small>8 ready · 2 still open</small>
    </div>
  );
}

export function FeatureRail({ cards, label, tone }: FeatureRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(false);

  const update = useCallback(() => {
    const rail = railRef.current;
    const firstCard = rail?.querySelector<HTMLElement>("[data-feature-card]");

    if (!rail || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const overflows = rail.scrollWidth > rail.clientWidth + 1;
    const nextIndex = overflows
      ? Math.max(
          0,
          Math.min(cards.length - 1, Math.round(rail.scrollLeft / step)),
        )
      : 0;

    setHasOverflow(overflows);
    setIndex(nextIndex);
  }, [cards.length]);

  useEffect(() => {
    const rail = railRef.current;

    update();
    rail?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      rail?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  function move(direction: -1 | 1) {
    const rail = railRef.current;
    const firstCard = rail?.querySelector<HTMLElement>("[data-feature-card]");

    if (!rail || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    rail.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "auto",
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <button
          aria-label={`Previous ${label.toLowerCase()} card`}
          disabled={!hasOverflow || index === 0}
          onClick={() => move(-1)}
          type="button"
        >
          ←
        </button>
        <button
          aria-label={`Next ${label.toLowerCase()} card`}
          disabled={!hasOverflow || index === cards.length - 1}
          onClick={() => move(1)}
          type="button"
        >
          →
        </button>
        <span aria-live="polite">
          {hasOverflow ? `Card ${index + 1} of ${cards.length}` : `All ${cards.length} cards visible`}
        </span>
      </div>

      <div
        aria-label={`${label} feature cards`}
        className={styles.rail}
        data-tone={tone}
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        {cards.map((card) => (
          <article
            className={styles.card}
            data-feature-card
            key={card.title}
          >
            <p>{card.eyebrow}</p>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <FeatureArtwork visual={card.visual} />
          </article>
        ))}
      </div>
    </div>
  );
}
