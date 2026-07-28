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

const pageNavigationDefinitions = [
  { key: "roadmap", pathname: "/roadmap" },
  { key: "supportDeveloper", pathname: "/support" },
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
    navigation: createNavigation(messages, locale),
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

function createNavigation(
  messages: Messages,
  locale: Locale,
  currentPathname?: "/roadmap" | "/support",
): NavigationItem[] {
  const home = localizedPath(locale);

  return [
    ...navigationDefinitions.map(({ href, key }) => ({
      href: currentPathname ? `${home}${href}` : href,
      label: messages.navigation[key],
    })),
    ...pageNavigationDefinitions.map(({ key, pathname }) => ({
      current: currentPathname === pathname,
      href: localizedPath(locale, pathname),
      label: messages.navigation[key],
    })),
  ];
}

export function createRoadmapNavigation(
  messages: Messages,
  locale: Locale,
): NavigationItem[] {
  return createNavigation(messages, locale, "/roadmap");
}

export function createSupportNavigation(
  messages: Messages,
  locale: Locale,
): NavigationItem[] {
  return createNavigation(messages, locale, "/support");
}
