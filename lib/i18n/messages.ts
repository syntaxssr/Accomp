import en from "@/messages/en.json";
import th from "@/messages/th.json";
import type { Locale } from "./config";

export type Messages = typeof en;

const catalogs: Record<Locale, Messages> = {
  en,
  th,
};

export function getMessages(locale: Locale): Messages {
  return catalogs[locale];
}
