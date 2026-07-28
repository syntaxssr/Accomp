import type { Metadata } from "next";
import { SupportPage } from "@/components/support/SupportPage";
import {
  localizedPath,
  otherLocale,
} from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { requireLocale } from "@/lib/i18n/routing";

interface LocalizedSupportPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocalizedSupportPageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);
  const canonical = localizedPath(locale, "/support");
  const socialImage = locale === "th" ? "/og-th.png" : "/og.png";

  return {
    title: messages.support.metaTitle,
    description: messages.support.metaDescription,
    alternates: {
      canonical,
      languages: {
        en: localizedPath("en", "/support"),
        th: localizedPath("th", "/support"),
        "x-default": localizedPath("en", "/support"),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: messages.support.metaTitle,
      description: messages.support.metaDescription,
      locale: messages.meta.openGraphLocale,
      alternateLocale: [
        getMessages(otherLocale(locale)).meta.openGraphLocale,
      ],
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
      title: messages.support.metaTitle,
      description: messages.support.metaDescription,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocalizedSupportPage({
  params,
}: LocalizedSupportPageProps) {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);

  return <SupportPage locale={locale} messages={messages} />;
}
