import { getSiteOrigin } from "@/lib/site";

export function GET(request: Request) {
  const origin = getSiteOrigin(request.url);
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", origin).toString()}
`;

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
