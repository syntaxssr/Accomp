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
  presentation?: "rail" | "stack";
  tone: "cream" | "sand";
}

const DESKTOP_QUERY = "(min-width: 48rem)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

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
  presentation = "rail",
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

    if (presentation === "stack") {
      return;
    }

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
  }, [presentation, update]);

  useEffect(() => {
    const currentRail = railRef.current;

    if (!currentRail || presentation !== "stack") {
      return;
    }

    const rail: HTMLDivElement = currentRail;
    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>("[data-feature-card]"),
    );
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let frame = 0;

    function expandWithoutMotion() {
      rail.dataset.stackEnabled = "false";
      rail.dataset.stackState = "expanded";
      rail.style.removeProperty("--feature-stack-progress");

      cards.forEach((card) => {
        card.style.removeProperty("--feature-stack-x");
      });
    }

    function updateStack() {
      frame = 0;

      if (reducedMotion.matches || !desktop.matches) {
        expandWithoutMotion();
        return;
      }

      const bounds = rail.getBoundingClientRect();
      const stackStart = window.innerHeight * 0.96;
      const stackEnd = window.innerHeight * 0.42;
      const range = Math.max(1, stackStart - stackEnd);
      const progress = Math.min(
        1,
        Math.max(0, (stackStart - bounds.top) / range),
      );
      const collapse = 1 - progress;
      const railCenter = rail.clientWidth / 2;
      const middle = (cards.length - 1) / 2;

      rail.dataset.stackEnabled = "true";
      rail.dataset.stackState =
        progress <= 0.01
          ? "stacked"
          : progress >= 0.99
            ? "expanded"
            : "spreading";
      rail.style.setProperty(
        "--feature-stack-progress",
        progress.toFixed(4),
      );

      cards.forEach((card, cardIndex) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const stackedCenter = railCenter + (cardIndex - middle) * 18;
        const offset = (stackedCenter - cardCenter) * collapse;

        card.style.setProperty(
          "--feature-stack-x",
          `${offset.toFixed(2)}px`,
        );
      });
    }

    function scheduleUpdate() {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateStack);
    }

    function configure() {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }

      updateStack();
    }

    configure();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    desktop.addEventListener("change", configure);
    reducedMotion.addEventListener("change", configure);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      desktop.removeEventListener("change", configure);
      reducedMotion.removeEventListener("change", configure);
      expandWithoutMotion();
    };
  }, [cards, presentation]);

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
    <div
      className={styles.wrapper}
      data-presentation={presentation}
      data-reveal
    >
      {presentation === "rail" && (
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
      )}

      <div
        aria-label={formatMessage(copy.region, { label })}
        aria-roledescription={
          presentation === "rail" ? copy.roleDescription : undefined
        }
        className={styles.rail}
        data-feature-stack={presentation === "stack" ? "" : undefined}
        data-presentation={presentation}
        data-tone={tone}
        onKeyDown={presentation === "rail" ? onKeyDown : undefined}
        ref={railRef}
        role="region"
        tabIndex={presentation === "rail" ? 0 : undefined}
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
