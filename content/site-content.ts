import type { Messages } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";

export interface NavigationItem {
  current?: boolean;
  href: string;
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

export function createSiteContent(messages: Messages, locale: Locale) {
  return {
    faqItems: messages.marketing.faq.items as FAQItem[],
    howItWorks: messages.marketing.howItWorks.steps,
    navigation: [
      ...navigationDefinitions.map(({ href, key }) => ({
        href,
        label: messages.navigation[key],
      })),
      {
        href: localizedPath(locale, "/roadmap"),
        label: messages.navigation.roadmap,
      },
    ] as NavigationItem[],
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

export function createRoadmapNavigation(
  messages: Messages,
  locale: Locale,
): NavigationItem[] {
  const home = localizedPath(locale);

  return [
    ...navigationDefinitions.map(({ href, key }) => ({
      href: `${home}${href}`,
      label: messages.navigation[key],
    })),
    {
      current: true,
      href: localizedPath(locale, "/roadmap"),
      label: messages.navigation.roadmap,
    },
  ];
}
