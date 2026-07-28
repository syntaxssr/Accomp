import type { Metadata } from "next";
import { RoadmapPage } from "@/components/roadmap/RoadmapPage";
import {
  localizedPath,
  otherLocale,
} from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { requireLocale } from "@/lib/i18n/routing";

interface LocalizedRoadmapPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocalizedRoadmapPageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);
  const canonical = localizedPath(locale, "/roadmap");
  const socialImage = locale === "th" ? "/og-th.png" : "/og.png";

  return {
    title: messages.roadmap.metaTitle,
    description: messages.roadmap.metaDescription,
    alternates: {
      canonical,
      languages: {
        en: localizedPath("en", "/roadmap"),
        th: localizedPath("th", "/roadmap"),
        "x-default": localizedPath("en", "/roadmap"),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: messages.roadmap.metaTitle,
      description: messages.roadmap.metaDescription,
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
      title: messages.roadmap.metaTitle,
      description: messages.roadmap.metaDescription,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocalizedRoadmapPage({
  params,
}: LocalizedRoadmapPageProps) {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);

  return <RoadmapPage locale={locale} messages={messages} />;
}
