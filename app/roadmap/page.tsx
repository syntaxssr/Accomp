import { redirect } from "next/navigation";
import { localizedPath } from "@/lib/i18n/config";

export default function RoadmapRedirectPage() {
  redirect(localizedPath("en", "/roadmap"));
}
