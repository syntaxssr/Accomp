import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing/MarketingPage";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
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

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
        type="application/ld+json"
      />
      <MarketingPage />
    </>
  );
}
