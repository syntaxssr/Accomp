import type { Metadata } from "next";
import { LegalNoticePage } from "@/components/legal/LegalNoticePage";
import { localizedPath } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { requireLocale } from "@/lib/i18n/routing";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);

  return {
    title: messages.privacy.metaTitle,
    description: messages.privacy.metaDescription,
    alternates: {
      canonical: localizedPath(locale, "/privacy"),
      languages: {
        en: localizedPath("en", "/privacy"),
        th: localizedPath("th", "/privacy"),
        "x-default": localizedPath("en", "/privacy"),
      },
    },
    openGraph: {
      url: localizedPath(locale, "/privacy"),
      title: messages.privacy.metaTitle,
      description: messages.privacy.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);

  return (
    <LegalNoticePage
      copy={messages.privacy}
      languageSwitcher={messages.languageSwitcher}
      locale={locale}
      pathname="/privacy"
    />
  );
}
