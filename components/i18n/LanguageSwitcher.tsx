"use client";

import { useEffect, useRef, useState } from "react";
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
}

const languageCodes: Record<Locale, string> = {
  en: "EN",
  th: "TH",
};

export function LanguageSwitcher({
  className,
  copy,
  locale,
  pathname = "/",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(
    null,
  );
  const navigationTimer = useRef<number | null>(null);
  const displayedLocale = pendingLocale ?? locale;

  useEffect(
    () => () => {
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
    },
    [],
  );

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

    event.preventDefault();

    if (targetLocale === locale) {
      return;
    }

    if (navigationTimer.current !== null) {
      window.clearTimeout(navigationTimer.current);
    }

    setPendingLocale(targetLocale);

    const delay = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
      ? 0
      : 520;

    navigationTimer.current = window.setTimeout(() => {
      navigationTimer.current = null;
      router.push(destination, { scroll: false });
    }, delay);
  }

  return (
    <nav
      aria-label={copy.label}
      className={[styles.switcher, className].filter(Boolean).join(" ")}
      data-display-locale={displayedLocale}
      data-locale={locale}
    >
      <span className={styles.indicator} aria-hidden="true">
        <span className={styles.indicatorCore} key={displayedLocale} />
      </span>
      {(["en", "th"] as const).map((targetLocale) => (
        <a
          aria-current={targetLocale === locale ? "page" : undefined}
          aria-label={
            targetLocale === "en" ? copy.english : copy.thai
          }
          data-active={targetLocale === locale}
          href={localizedPath(targetLocale, pathname)}
          hrefLang={targetLocale}
          key={targetLocale}
          lang={targetLocale}
          onClick={(event) => changeLanguage(event, targetLocale)}
        >
          {languageCodes[targetLocale]}
        </a>
      ))}
    </nav>
  );
}
