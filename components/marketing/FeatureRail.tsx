"use client";

import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type {
  FeatureCardContent,
  FeatureVisual,
} from "@/content/site-content";
import { formatMessage } from "@/lib/i18n/format";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./feature-rail.module.css";

interface FeatureRailProps {
  artwork: Messages["marketing"]["featureArtwork"];
  cards: FeatureCardContent[];
  copy: Messages["accessibility"]["featureRail"];
  label: string;
  tone: "cream" | "sand";
}

function FeatureArtwork({
  copy,
  visual,
}: {
  copy: Messages["marketing"]["featureArtwork"];
  visual: FeatureVisual;
}) {
  if (visual === "trip") {
    return (
      <div className={styles.tripForm} aria-hidden="true">
        <span>{copy.trip.name}</span>
        <span>{copy.trip.dates}</span>
        <span>{copy.trip.meetingPoint}</span>
        <b>{copy.trip.action}</b>
      </div>
    );
  }

  if (visual === "invite") {
    return (
      <div className={styles.companions} aria-hidden="true">
        <span />
        <span />
        <b>{copy.invite.action}</b>
        <span />
        <span>{copy.invite.more}</span>
      </div>
    );
  }

  if (visual === "itinerary") {
    return (
      <div className={styles.timeline} aria-hidden="true">
        {copy.itinerary.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    );
  }

  if (visual === "checklist" || visual === "assign") {
    const rows =
      visual === "checklist"
        ? [
            ["✓", copy.checklist.tent, ""],
            ["✓", copy.checklist.stove, ""],
            ["·", copy.checklist.waterFilter, ""],
          ]
        : [
            ["✓", copy.assign.tent, copy.assign.may],
            ["✓", copy.assign.stove, copy.assign.ton],
            ["·", copy.assign.firstAid, copy.assign.you],
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
      <strong>{copy.readiness.value}</strong>
      <span>
        <i />
      </span>
      <small>{copy.readiness.status}</small>
    </div>
  );
}

export function FeatureRail({
  artwork,
  cards,
  copy,
  label,
  tone,
}: FeatureRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
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

    function scheduleUpdate() {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        update();
        animationFrameRef.current = null;
      });
    }

    update();
    rail?.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      rail?.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [update]);

  function moveTo(nextIndex: number) {
    const rail = railRef.current;
    const firstCard = rail?.querySelector<HTMLElement>("[data-feature-card]");

    if (!rail || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const target = Math.max(0, Math.min(cards.length - 1, nextIndex));

    rail.scrollTo({
      left: target * (firstCard.getBoundingClientRect().width + gap),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTo(index + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveTo(cards.length - 1);
    }
  }

  return (
    <div className={styles.wrapper} data-reveal>
      <div className={styles.controls}>
        <button
          aria-label={formatMessage(copy.previous, { label })}
          disabled={!hasOverflow || index === 0}
          onClick={() => moveTo(index - 1)}
          type="button"
        >
          ←
        </button>
        <button
          aria-label={formatMessage(copy.next, { label })}
          disabled={!hasOverflow || index === cards.length - 1}
          onClick={() => moveTo(index + 1)}
          type="button"
        >
          →
        </button>
        <span aria-live="polite">
          {hasOverflow
            ? formatMessage(copy.status, {
                current: index + 1,
                total: cards.length,
              })
            : formatMessage(copy.allVisible, { total: cards.length })}
        </span>
      </div>

      <div
        aria-label={formatMessage(copy.region, { label })}
        aria-roledescription={copy.roleDescription}
        className={styles.rail}
        data-tone={tone}
        onKeyDown={onKeyDown}
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        {cards.map((card, cardIndex) => (
          <article
            className={styles.card}
            data-active={!hasOverflow || index === cardIndex}
            data-feature-card
            key={card.title}
          >
            <p>{card.eyebrow}</p>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <FeatureArtwork copy={artwork} visual={card.visual} />
          </article>
        ))}
      </div>
    </div>
  );
}
