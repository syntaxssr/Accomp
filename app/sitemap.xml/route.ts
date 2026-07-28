import {
  localizedPath,
  SUPPORTED_LOCALES,
} from "@/lib/i18n/config";
import { getSiteOrigin } from "@/lib/site";

const routes = [
  { path: "/", changeFrequency: "monthly", priority: "1.0" },
  { path: "/roadmap", changeFrequency: "monthly", priority: "0.7" },
  { path: "/privacy", changeFrequency: "yearly", priority: "0.3" },
  { path: "/terms", changeFrequency: "yearly", priority: "0.3" },
] as const;

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET(request: Request) {
  const origin = getSiteOrigin(request.url);
  const lastModified = "2026-07-28";
  const urls = routes
    .flatMap(({ path, changeFrequency, priority }) =>
      SUPPORTED_LOCALES.map((locale) => {
        const localized = localizedPath(locale, path);
        const alternates = SUPPORTED_LOCALES.map(
          (alternateLocale) =>
            `    <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${escapeXml(
              new URL(
                localizedPath(alternateLocale, path),
                origin,
              ).toString(),
            )}" />`,
        ).join("\n");

        return `  <url>
    <loc>${escapeXml(new URL(localized, origin).toString())}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
${alternates}
  </url>`;
      }),
    )
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
