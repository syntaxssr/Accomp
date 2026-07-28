import { redirect } from "next/navigation";
import { localizedPath } from "@/lib/i18n/config";

export default function TermsRedirect() {
  redirect(localizedPath("en", "/terms"));
}
