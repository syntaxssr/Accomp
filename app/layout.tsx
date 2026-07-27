import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import {
  getSiteOriginFromHeaders,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FDF6ED",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const metadataBase = getSiteOriginFromHeaders(requestHeaders);

  return {
    metadataBase,
    title: {
      default: SITE_TITLE,
      template: `%s · ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    category: "travel",
    keywords: [
      "outdoor trip planner",
      "group hiking planner",
      "shared gear checklist",
      "offline trip planning",
    ],
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: "/brand/accomp-pine-icon.svg",
      shortcut: "/brand/accomp-pine-icon.svg",
    },
    openGraph: {
      type: "website",
      url: "/",
      siteName: SITE_NAME,
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      locale: "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Accomp — Adventure Together, with a shared route and trip-planning visual",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
