"use client";

import { useEffect, useRef } from "react";
import styles from "./marketing-page.module.css";
import { reboundCardFromCursor } from "./card-cursor-rebound";

const DESKTOP_QUERY = "(min-width: 48rem)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

interface PromiseCardStackProps {
  items: readonly string[];
  label: string;
}

export function PromiseCardStack({
  items,
  label,
}: PromiseCardStackProps) {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const currentList = listRef.current;

    if (!currentList) {
      return;
    }

    const list: HTMLOListElement = currentList;
    const cards = Array.from(
      list.querySelectorAll<HTMLElement>("[data-promise-card]"),
    );
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let frame = 0;

    function expandWithoutMotion() {
      list.dataset.stackEnabled = "false";
      list.dataset.stackState = "expanded";
      list.style.removeProperty("--promise-stack-progress");

      cards.forEach((card) => {
        card.style.removeProperty("--promise-stack-x");
      });
    }

    function updateStack() {
      frame = 0;

      if (reducedMotion.matches || !desktop.matches) {
        expandWithoutMotion();
        return;
      }

      const bounds = list.getBoundingClientRect();
      const stackStart = window.innerHeight * 0.82;
      const stackEnd = window.innerHeight * 0.28;
      const range = Math.max(1, stackStart - stackEnd);
      const progress = Math.min(
        1,
        Math.max(0, (stackStart - bounds.top) / range),
      );
      const collapse = 1 - progress;
      const listCenter = list.clientWidth / 2;
      const middle = (cards.length - 1) / 2;

      list.dataset.stackEnabled = "true";
      list.dataset.stackState =
        progress <= 0.01
          ? "stacked"
          : progress >= 0.99
            ? "expanded"
            : "spreading";
      list.style.setProperty(
        "--promise-stack-progress",
        progress.toFixed(4),
      );

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const stackedCenter = listCenter + (index - middle) * 18;
        const offset = (stackedCenter - cardCenter) * collapse;

        card.style.setProperty("--promise-stack-x", `${offset.toFixed(2)}px`);
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
  }, [items]);

  return (
    <ol
      aria-label={label}
      className={styles.promisePath}
      data-promise-stack
      ref={listRef}
    >
      {items.map((item, index) => (
        <li
          className={styles.promiseStep}
          data-promise-card
          key={item}
          onMouseEnter={reboundCardFromCursor}
        >
          <span aria-hidden="true" className={styles.promiseNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <strong>{item}</strong>
          <span aria-hidden="true" className={styles.promiseCardVisual}>
            <i />
            <i />
            <i />
          </span>
        </li>
      ))}
    </ol>
  );
}
