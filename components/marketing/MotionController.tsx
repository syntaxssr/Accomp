"use client";

import { useEffect } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function MotionController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-motion-root]");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!root) {
      return;
    }

    const motionRoot = root;
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let observer: IntersectionObserver | null = null;

    function reveal(target: HTMLElement) {
      target.dataset.revealState = "visible";
      observer?.unobserve(target);
    }

    function showEverything() {
      observer?.disconnect();
      observer = null;
      motionRoot.dataset.motion = "reduced";
      targets.forEach(reveal);
    }

    function enhance() {
      if (!("IntersectionObserver" in window)) {
        showEverything();
        return;
      }

      const revealLine = window.innerHeight * 0.92;

      targets.forEach((target) => {
        const bounds = target.getBoundingClientRect();

        if (bounds.top <= revealLine && bounds.bottom >= 0) {
          reveal(target);
        }
      });

      motionRoot.dataset.motion = "enhanced";
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
            }
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.12,
        },
      );

      targets.forEach((target) => {
        if (target.dataset.revealState !== "visible") {
          observer?.observe(target);
        }
      });
    }

    function configure() {
      if (reducedMotion.matches) {
        showEverything();
      } else {
        observer?.disconnect();
        observer = null;
        enhance();
      }
    }

    configure();
    reducedMotion.addEventListener("change", configure);

    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", configure);
      delete motionRoot.dataset.motion;
    };
  }, []);

  return null;
}
