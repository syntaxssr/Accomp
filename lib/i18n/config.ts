export const SUPPORTED_LOCALES = ["en", "th"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_HEADER = "x-accomp-locale";
export type LocalizedPathname =
  | "/"
  | "/privacy"
  | "/roadmap"
  | "/terms";

interface HeaderReader {
  get(name: string): string | null;
}

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];

  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export function getLocaleFromHeaders(headers: HeaderReader): Locale {
  const value = headers.get(LOCALE_HEADER);

  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

export function localizedPath(
  locale: Locale,
  pathname: LocalizedPathname = "/",
): string {
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "th" : "en";
}
