import type { Messages } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";

export interface NavigationLink {
  current?: boolean;
  href: string;
  label: string;
}

export interface NavigationGroup {
  items: NavigationLink[];
  label: string;
}

export type NavigationItem = NavigationGroup | NavigationLink;

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
  const anchorHref = (href: string) =>
    currentPathname ? `${home}${href}` : href;

  return [
    {
      items: navigationDefinitions.map(({ href, key }) => ({
        href: anchorHref(href),
        label: messages.navigation[key],
      })),
      label: messages.navigation.product,
    },
    {
      current: currentPathname === "/roadmap",
      href: localizedPath(locale, "/roadmap"),
      label: messages.navigation.roadmap,
    },
    {
      current: currentPathname === "/support",
      href: localizedPath(locale, "/support"),
      label: messages.navigation.support,
    },
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
