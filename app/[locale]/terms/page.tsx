import type { Metadata } from "next";
import { LegalNoticePage } from "@/components/legal/LegalNoticePage";
import { localizedPath } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { requireLocale } from "@/lib/i18n/routing";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);

  return {
    title: messages.terms.metaTitle,
    description: messages.terms.metaDescription,
    alternates: {
      canonical: localizedPath(locale, "/terms"),
      languages: {
        en: localizedPath("en", "/terms"),
        th: localizedPath("th", "/terms"),
        "x-default": localizedPath("en", "/terms"),
      },
    },
    openGraph: {
      url: localizedPath(locale, "/terms"),
      title: messages.terms.metaTitle,
      description: messages.terms.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const locale = requireLocale((await params).locale);
  const messages = getMessages(locale);

  return (
    <LegalNoticePage
      copy={messages.terms}
      languageSwitcher={messages.languageSwitcher}
      locale={locale}
      pathname="/terms"
    />
  );
}
