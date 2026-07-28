import type { Metadata } from "next";
import { LocalizedNotFound } from "@/components/legal/LocalizedNotFound";
import { getMessages } from "@/lib/i18n/messages";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: messages.notFound.metaTitle,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <LocalizedNotFound
      copy={messages.notFound}
      languageSwitcher={messages.languageSwitcher}
      locale="en"
    />
  );
}
