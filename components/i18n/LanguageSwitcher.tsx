"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import type { Locale, LocalizedPathname } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./language-switcher.module.css";

interface LanguageSwitcherProps {
  className?: string;
  copy: Messages["languageSwitcher"];
  locale: Locale;
  pathname?: LocalizedPathname;
  variant?: "default" | "header";
}

const languageFlags: Record<Locale, string> = {
  en: "/brand/flag-en.svg",
  th: "/brand/flag-th.svg",
};

export function LanguageSwitcher({
  className,
  copy,
  locale,
  pathname = "/",
  variant = "default",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(
    null,
  );
  const displayedLocale = pendingLocale ?? locale;

  useEffect(() => {
    if (!open) {
      return;
    }

    function closeOnOutsidePress(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function changeLanguage(
    event: MouseEvent<HTMLAnchorElement>,
    targetLocale: Locale,
  ) {
    const baseHref = event.currentTarget.getAttribute("href");

    if (!baseHref) {
      return;
    }

    const destination = `${baseHref}${window.location.hash}`;
    const opensElsewhere =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (opensElsewhere) {
      event.currentTarget.href = destination;
      return;
    }

    setOpen(false);

    event.preventDefault();

    if (targetLocale === locale) {
      return;
    }

    setPendingLocale(targetLocale);
    router.push(destination, { scroll: false });
  }

  return (
    <div
      className={[styles.switcher, className].filter(Boolean).join(" ")}
      data-display-locale={displayedLocale}
      data-locale={locale}
      data-open={open}
      data-variant={variant}
      ref={rootRef}
    >
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={copy.label}
        className={styles.trigger}
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        {/* These fixed-size flag SVGs are supplied by the brand owner. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className={styles.currentFlag}
          src={languageFlags[displayedLocale]}
        />
      </button>

      <div
        aria-label={copy.label}
        className={styles.languageMenu}
        hidden={!open}
        id={menuId}
        role="menu"
      >
        {(["en", "th"] as const).map((targetLocale) => (
          <a
            aria-current={
              targetLocale === locale ? "page" : undefined
            }
            aria-label={
              targetLocale === "en" ? copy.english : copy.thai
            }
            data-active={targetLocale === locale}
            href={localizedPath(targetLocale, pathname)}
            hrefLang={targetLocale}
            key={targetLocale}
            lang={targetLocale}
            onClick={(event) => changeLanguage(event, targetLocale)}
            role="menuitem"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className={styles.menuFlag}
              src={languageFlags[targetLocale]}
            />
            <span>
              {targetLocale === "en" ? copy.english : copy.thai}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
