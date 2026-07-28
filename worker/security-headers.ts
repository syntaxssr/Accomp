const BASE_CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data:",
  "manifest-src 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "worker-src 'self'",
];

export function withSecurityHeaders(
  response: Response,
  requestUrl: URL,
): Response {
  const headers = new Headers(response.headers);
  const contentSecurityPolicy = [...BASE_CONTENT_SECURITY_POLICY];

  if (requestUrl.protocol === "https:") {
    contentSecurityPolicy.push("upgrade-insecure-requests");
    headers.set("Strict-Transport-Security", "max-age=31536000");
  }

  headers.set("Content-Security-Policy", contentSecurityPolicy.join("; "));
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  );
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Permitted-Cross-Domain-Policies", "none");

  return new Response(response.body, {
    headers,
    status: response.status,
    statusText: response.statusText,
  });
}
