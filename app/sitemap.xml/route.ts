import { getSiteOrigin } from "@/lib/site";

const routes = [
  { path: "/", changeFrequency: "monthly", priority: "1.0" },
  { path: "/privacy", changeFrequency: "yearly", priority: "0.3" },
  { path: "/terms", changeFrequency: "yearly", priority: "0.3" },
] as const;

export function GET(request: Request) {
  const origin = getSiteOrigin(request.url);
  const lastModified = "2026-07-28";
  const urls = routes
    .map(
      ({ path, changeFrequency, priority }) => `  <url>
    <loc>${new URL(path, origin).toString()}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
