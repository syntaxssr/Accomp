import { MarketingPage } from "@/components/marketing/MarketingPage";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

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
