"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ButtonLink, Icon } from "@/components";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import type {
  NavigationGroup,
  NavigationItem,
  NavigationLink,
} from "@/content/site-content";
import type { Locale, LocalizedPathname } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./site-header.module.css";

interface SiteHeaderProps {
  copy: Messages["navigation"];
  homeHref?: string;
  languagePathname?: LocalizedPathname;
  languageSwitcher: Messages["languageSwitcher"];
  locale: Locale;
  navigation: NavigationItem[];
  waitlistHref?: string;
}

function isNavigationGroup(
  item: NavigationItem,
): item is NavigationGroup {
  return "items" in item;
}

export function SiteHeader({
  copy,
  homeHref = "#top",
  languagePathname = "/",
  languageSwitcher,
  locale,
  navigation,
  waitlistHref = "#waitlist",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [headerState, setHeaderState] = useState({
    activeHref: "",
    dark: false,
    scrolled: false,
  });
  const desktopNavRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigationLinks = useMemo(
    () =>
      navigation.flatMap((item) =>
        isNavigationGroup(item) ? item.items : [item],
      ),
    [navigation],
  );

  useEffect(() => {
    let animationFrame: number | null = null;

    function updateHeader() {
      const sections = navigationLinks
        .filter((item) => item.href.startsWith("#"))
        .map((item) => ({
          element: document.querySelector<HTMLElement>(item.href),
          href: item.href,
        }))
        .filter(
          (
            section,
          ): section is {
            element: HTMLElement;
            href: NavigationLink["href"];
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
  }, [navigationLinks]);

  useEffect(() => {
    if (openGroup === null) {
      return;
    }

    function closeFromOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !desktopNavRef.current?.contains(event.target)
      ) {
        setOpenGroup(null);
      }
    }

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      const trigger = desktopNavRef.current?.querySelector<HTMLButtonElement>(
        `[data-group-trigger="${openGroup}"]`,
      );
      setOpenGroup(null);
      trigger?.focus();
    }

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [openGroup]);

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
      if (window.innerWidth >= 1088) {
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
          <a className={styles.brand} href={homeHref} aria-label={copy.home}>
            <Icon name="logo" size="md" decorative />
            <span>Accomp</span>
          </a>

          <div className={styles.navPill}>
            <nav
              className={styles.desktopNav}
              aria-label={copy.primary}
              ref={desktopNavRef}
            >
              {navigation.map((item, index) => {
                if (isNavigationGroup(item)) {
                  const groupId = `desktop-nav-group-${index}`;
                  const expanded = openGroup === groupId;
                  const active = item.items.some(
                    (link) =>
                      link.current ||
                      headerState.activeHref === link.href,
                  );

                  return (
                    <div
                      className={styles.navGroup}
                      data-active={active}
                      data-nav-slot={index}
                      key={item.label}
                      onBlur={(event) => {
                        if (
                          !(event.relatedTarget instanceof Node) ||
                          !event.currentTarget.contains(event.relatedTarget)
                        ) {
                          setOpenGroup(null);
                        }
                      }}
                      onMouseEnter={() => setOpenGroup(groupId)}
                      onMouseLeave={() =>
                        setOpenGroup((current) =>
                          current === groupId ? null : current,
                        )
                      }
                    >
                      <button
                        aria-controls={`${groupId}-panel`}
                        aria-expanded={expanded}
                        className={styles.groupTrigger}
                        data-group-trigger={groupId}
                        onClick={() => setOpenGroup(groupId)}
                        type="button"
                      >
                        {item.label}
                        <span aria-hidden="true" />
                      </button>

                      <div
                        className={styles.dropdown}
                        hidden={!expanded}
                        id={`${groupId}-panel`}
                      >
                        {item.items.map((link) => (
                          <a
                            aria-current={
                              link.current
                                ? "page"
                                : headerState.activeHref === link.href
                                  ? "location"
                                  : undefined
                            }
                            data-active={
                              link.current ||
                              headerState.activeHref === link.href
                            }
                            href={link.href}
                            key={link.href}
                            onClick={() => setOpenGroup(null)}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    aria-current={
                      item.current
                        ? "page"
                        : headerState.activeHref === item.href
                          ? "location"
                          : undefined
                    }
                    data-active={
                      item.current ||
                      headerState.activeHref === item.href
                    }
                    data-nav-slot={index}
                    href={item.href}
                    key={item.href}
                    onFocus={() => setOpenGroup(null)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className={styles.actions}>
            <LanguageSwitcher
              className={styles.desktopLanguage}
              copy={languageSwitcher}
              locale={locale}
              pathname={languagePathname}
            />

            <ButtonLink
              className={styles.headerCta}
              data-motion="download"
              data-size-lock="waitlist"
              href={waitlistHref}
            >
              {copy.joinWaitlist}
            </ButtonLink>

            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              className={styles.menuTrigger}
              onClick={() => {
                setOpenGroup(null);
                setOpen(true);
              }}
              ref={triggerRef}
              type="button"
            >
              {copy.menu}
            </button>
          </div>
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
            <strong id="mobile-menu-title">{copy.menuTitle}</strong>
            <button
              aria-label={copy.closeMenu}
              className={styles.menuClose}
              onClick={() => setOpen(false)}
              type="button"
            >
              ×
            </button>
          </div>
          <nav aria-label={copy.mobile}>
            {navigation.map((item) =>
              isNavigationGroup(item) ? (
                <div className={styles.mobileGroup} key={item.label}>
                  <p>{item.label}</p>
                  {item.items.map((link) => (
                    <a
                      aria-current={
                        link.current
                          ? "page"
                          : headerState.activeHref === link.href
                            ? "location"
                            : undefined
                      }
                      data-active={
                        link.current ||
                        headerState.activeHref === link.href
                      }
                      href={link.href}
                      key={link.href}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  aria-current={
                    item.current
                      ? "page"
                      : headerState.activeHref === item.href
                        ? "location"
                        : undefined
                  }
                  data-active={
                    item.current ||
                    headerState.activeHref === item.href
                  }
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
            <a href={waitlistHref} onClick={() => setOpen(false)}>
              {copy.joinWaitlist}
            </a>
          </nav>
          <LanguageSwitcher
            className={styles.mobileLanguage}
            copy={languageSwitcher}
            locale={locale}
            pathname={languagePathname}
          />
        </div>
      </div>
    </>
  );
}
