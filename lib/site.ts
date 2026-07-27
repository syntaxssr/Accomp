const LOCAL_ORIGIN = new URL("http://localhost:3000");

export const SITE_NAME = "Accomp";
export const SITE_TITLE = "Adventure Together · Accomp";
export const SITE_DESCRIPTION =
  "Plan outdoor trips together with shared itineraries, gear checklists, trip details, and offline-ready maps in Accomp.";

interface HeaderReader {
  get(name: string): string | null;
}

function asOrigin(value: string | undefined): URL | null {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    return new URL(url.origin);
  } catch {
    return null;
  }
}

function configuredOrigin(): URL | null {
  return asOrigin(process.env.NEXT_PUBLIC_SITE_URL?.trim());
}

export function getSiteOrigin(requestUrl?: string): URL {
  return (
    configuredOrigin() ??
    asOrigin(requestUrl) ??
    new URL(LOCAL_ORIGIN.toString())
  );
}

export function getSiteOriginFromHeaders(headers: HeaderReader): URL {
  const configured = configuredOrigin();

  if (configured) {
    return configured;
  }

  const host = (
    headers.get("x-forwarded-host") ??
    headers.get("host") ??
    LOCAL_ORIGIN.host
  )
    .split(",")[0]
    .trim();
  const forwardedProtocol = headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    .trim();
  const protocol =
    forwardedProtocol === "http" || forwardedProtocol === "https"
      ? forwardedProtocol
      : host.startsWith("localhost") || host.startsWith("127.0.0.1")
        ? "http"
        : "https";

  return asOrigin(`${protocol}://${host}`) ?? new URL(LOCAL_ORIGIN.toString());
}
