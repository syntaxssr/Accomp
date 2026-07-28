import { headers } from "next/headers";
import { LocalizedNotFound } from "@/components/legal/LocalizedNotFound";
import { getLocaleFromHeaders } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export default async function NotFound() {
  const locale = getLocaleFromHeaders(await headers());
  const messages = getMessages(locale);

  return (
    <LocalizedNotFound
      copy={messages.notFound}
      languageSwitcher={messages.languageSwitcher}
      locale={locale}
    />
  );
}
