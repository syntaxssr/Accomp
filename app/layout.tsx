import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import {
  getLocaleFromHeaders,
  localizedPath,
  otherLocale,
} from "@/lib/i18n/config";
import { LocaleDocumentSync } from "@/components/i18n/LocaleDocumentSync";
import { getMessages } from "@/lib/i18n/messages";
import { getSiteOriginFromHeaders, SITE_NAME } from "@/lib/site";
import "@fontsource-variable/nunito/wght.css";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FDF6ED",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const locale = getLocaleFromHeaders(requestHeaders);
  const messages = getMessages(locale);
  const alternate = otherLocale(locale);
  const metadataBase = getSiteOriginFromHeaders(requestHeaders);
  const canonical = localizedPath(locale);
  const socialImage = locale === "th" ? "/og-th.png" : "/og.png";

  return {
    metadataBase,
    title: {
      default: messages.meta.title,
      template: messages.meta.titleTemplate,
    },
    description: messages.meta.description,
    applicationName: SITE_NAME,
    category: "travel",
    keywords: messages.meta.keywords,
    alternates: {
      canonical,
      languages: {
        en: localizedPath("en"),
        th: localizedPath("th"),
        "x-default": localizedPath("en"),
      },
    },
    icons: {
      icon: [
        {
          url: "/favicon.ico?v=3",
          type: "image/x-icon",
        },
        {
          url: "/brand/accomp-logo.svg?v=3",
          type: "image/svg+xml",
        },
      ],
      shortcut: "/favicon.ico?v=3",
      apple: "/brand/accomp-apple-touch-icon.png?v=3",
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title: messages.meta.title,
      description: messages.meta.description,
      locale: messages.meta.openGraphLocale,
      alternateLocale: [getMessages(alternate).meta.openGraphLocale],
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: messages.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.description,
      images: [socialImage],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = getLocaleFromHeaders(requestHeaders);

  return (
    <html lang={locale}>
      <body>
        <LocaleDocumentSync />
        {children}
      </body>
    </html>
  );
}
