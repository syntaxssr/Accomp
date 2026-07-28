import { SITE_NAME } from "@/lib/site";

export async function GET() {
  return Response.json(
    {
      service: SITE_NAME.toLowerCase(),
      status: "ok",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
