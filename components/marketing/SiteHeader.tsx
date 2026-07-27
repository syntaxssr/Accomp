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
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
      <header className={styles.header}>
        <div className={styles.pill}>
          <a className={styles.brand} href="#top" aria-label="Accomp home">
            <Icon name="pine" size="md" decorative />
            <span>Accomp</span>
          </a>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
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
              <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
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
