import type { Metadata } from "next";
import { MarketingPage } from "@/components/marketing/MarketingPage";

export const metadata: Metadata = {
  title: "Adventure Together",
  description:
    "Discover Accomp, a mobile app concept for planning shared outdoor trips.",
};

export default function Home() {
  return <MarketingPage />;
}
