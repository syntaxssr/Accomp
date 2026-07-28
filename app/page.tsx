import { redirect } from "next/navigation";
import { localizedPath } from "@/lib/i18n/config";

export default function RootPage() {
  redirect(localizedPath("en"));
}
