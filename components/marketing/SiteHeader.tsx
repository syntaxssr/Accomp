"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonLink, Icon } from "@/components";
import type { NavigationItem } from "@/content/site-content";
import styles from "./site-header.module.css";

interface SiteHeaderProps {
  navigation: NavigationItem[];
}

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [headerState, setHeaderState] = useState({
    activeHref: "",
    dark: false,
    scrolled: false,
  });
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let animationFrame: number | null = null;

    function updateHeader() {
      const sections = navigation
        .map((item) => ({
          element: document.querySelector<HTMLElement>(item.href),
          href: item.href,
        }))
        .filter(
          (
            section,
          ): section is {
            element: HTMLElement;
            href: NavigationItem["href"];
          } => section.element !== null,
        )
        .sort(
          (first, second) =>
            first.element.offsetTop - second.element.offsetTop,
        );
      const activeLine = window.scrollY + window.innerHeight * 0.32;
      const activeSection = sections
        .filter((section) => section.element.offsetTop <= activeLine)
        .at(-1);
      const offline = document.querySelector<HTMLElement>("#offline");
      const offlineBounds = offline?.getBoundingClientRect();
      const headerLine = 96;
      const nextState = {
        activeHref: activeSection?.href ?? "",
        dark:
          offlineBounds !== undefined &&
          offlineBounds.top <= headerLine &&
          offlineBounds.bottom > headerLine,
        scrolled: window.scrollY > 48,
      };

      setHeaderState((current) =>
        current.activeHref === nextState.activeHref &&
        current.dark === nextState.dark &&
        current.scrolled === nextState.scrolled
          ? current
          : nextState,
      );
      animationFrame = null;
    }

    function scheduleUpdate() {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = requestAnimationFrame(updateHeader);
    }

    updateHeader();
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("scroll", scheduleUpdate);
    };
  }, [navigation]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const focusable = panel?.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>(
      "a[href], button:not([disabled])",
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function onResize() {
      if (window.innerWidth >= 900) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={styles.header}
        data-scrolled={headerState.scrolled}
        data-theme={headerState.dark ? "dark" : "light"}
      >
        <div className={styles.pill}>
          <a className={styles.brand} href="#top" aria-label="Accomp home">
            <Icon name="pine" size="md" decorative />
            <span>Accomp</span>
          </a>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navigation.map((item) => (
              <a
                aria-current={
                  headerState.activeHref === item.href ? "location" : undefined
                }
                data-active={headerState.activeHref === item.href}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ButtonLink className={styles.headerCta} href="#waitlist">
            Join the waitlist
          </ButtonLink>

          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            className={styles.menuTrigger}
            onClick={() => setOpen(true)}
            ref={triggerRef}
            type="button"
          >
            Menu
          </button>
        </div>
      </header>

      <div className={styles.menu} hidden={!open} id="mobile-menu">
        <div
          aria-labelledby="mobile-menu-title"
          aria-modal="true"
          className={styles.menuPanel}
          ref={panelRef}
          role="dialog"
        >
          <div className={styles.menuTop}>
            <strong id="mobile-menu-title">Navigate Accomp</strong>
            <button
              aria-label="Close menu"
              className={styles.menuClose}
              onClick={() => setOpen(false)}
              type="button"
            >
              ×
            </button>
          </div>
          <nav aria-label="Mobile">
            {navigation.map((item) => (
              <a
                aria-current={
                  headerState.activeHref === item.href ? "location" : undefined
                }
                data-active={headerState.activeHref === item.href}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#waitlist" onClick={() => setOpen(false)}>
              Join the waitlist
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
