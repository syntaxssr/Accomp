"use client";

import type { MouseEvent } from "react";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./language-switcher.module.css";

interface LanguageSwitcherProps {
  className?: string;
  copy: Messages["languageSwitcher"];
  locale: Locale;
  pathname?: "/" | "/privacy" | "/terms";
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
  function preserveHash(event: MouseEvent<HTMLAnchorElement>) {
    if (!window.location.hash) {
      return;
    }

    const baseHref = event.currentTarget.getAttribute("href");

    if (baseHref) {
      event.currentTarget.href = `${baseHref}${window.location.hash}`;
    }
  }

  return (
    <nav
      aria-label={copy.label}
      className={[styles.switcher, className].filter(Boolean).join(" ")}
    >
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
          onClick={preserveHash}
        >
          {languageCodes[targetLocale]}
        </a>
      ))}
    </nav>
  );
}
