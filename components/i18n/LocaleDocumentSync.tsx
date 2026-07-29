"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n/config";

export function LocaleDocumentSync() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
