import { notFound } from "next/navigation";
import { requireLocale } from "@/lib/i18n/routing";

interface MissingPageProps {
  params: Promise<{ locale: string; missing: string[] }>;
}

export default async function MissingPage({ params }: MissingPageProps) {
  requireLocale((await params).locale);
  notFound();
}
