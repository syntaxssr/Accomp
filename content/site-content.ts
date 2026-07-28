import type { Messages } from "@/lib/i18n/messages";

export interface NavigationItem {
  href: `#${string}`;
  label: string;
}

export type FeatureVisual =
  | "assign"
  | "invite"
  | "itinerary"
  | "readiness"
  | "trip"
  | "checklist";

export interface FeatureCardContent {
  body: string;
  eyebrow: string;
  title: string;
  visual: FeatureVisual;
}

export interface FAQItem {
  answer: string;
  question: string;
}

const navigationDefinitions = [
  { href: "#features", key: "features" },
  { href: "#how-it-works", key: "howItWorks" },
  { href: "#offline", key: "offline" },
  { href: "#faq", key: "faq" },
] as const;

const planningVisuals: FeatureVisual[] = ["trip", "invite", "itinerary"];
const packingVisuals: FeatureVisual[] = [
  "checklist",
  "assign",
  "readiness",
];

function addVisuals(
  cards: Messages["marketing"]["plan"]["cards"],
  visuals: FeatureVisual[],
): FeatureCardContent[] {
  return cards.map((card, index) => ({
    ...card,
    visual: visuals[index],
  }));
}

export function createSiteContent(messages: Messages) {
  return {
    faqItems: messages.marketing.faq.items as FAQItem[],
    howItWorks: messages.marketing.howItWorks.steps,
    navigation: navigationDefinitions.map(({ href, key }) => ({
      href,
      label: messages.navigation[key],
    })) as NavigationItem[],
    packingFeatures: addVisuals(
      messages.marketing.pack.cards,
      packingVisuals,
    ),
    planningFeatures: addVisuals(
      messages.marketing.plan.cards,
      planningVisuals,
    ),
    promiseLabels: messages.marketing.promise.items,
  };
}
