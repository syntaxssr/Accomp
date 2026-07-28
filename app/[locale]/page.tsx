import type { Metadata } from "next";
import { headers } from "next/headers";
import { MarketingPage } from "@/components/marketing/MarketingPage";
import { localizedPath, SUPPORTED_LOCALES } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { requireLocale } from "@/lib/i18n/routing";
import { getSiteOriginFromHeaders, SITE_NAME } from "@/lib/site";

interface LocalizedPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalizedPageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);

  return {
    alternates: {
      canonical: localizedPath(locale),
      languages: {
        en: localizedPath("en"),
        th: localizedPath("th"),
        "x-default": localizedPath("en"),
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocalizedHome({
  params,
}: LocalizedPageProps) {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);
  const origin = getSiteOriginFromHeaders(await headers());
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: messages.meta.description,
    inLanguage: messages.meta.inLanguage,
    url: new URL(localizedPath(locale), origin).toString(),
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
        type="application/ld+json"
      />
      <MarketingPage locale={locale} messages={messages} />
    </>
  );
}
