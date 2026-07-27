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

export const navigation: NavigationItem[] = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#offline", label: "Offline" },
  { href: "#faq", label: "FAQ" },
];

export const promiseLabels = [
  "Plan together",
  "Pack together",
  "Explore ready",
] as const;

export const planningFeatures: FeatureCardContent[] = [
  {
    eyebrow: "01 · Start",
    title: "Start with the trip",
    body: "Set the place, dates, and first outline while the idea is still fresh.",
    visual: "trip",
  },
  {
    eyebrow: "02 · Invite",
    title: "Invite your crew",
    body: "Bring every companion into the same trip space and keep the context together.",
    visual: "invite",
  },
  {
    eyebrow: "03 · Shape",
    title: "Shape the days",
    body: "Turn loose ideas into a clear itinerary everyone can follow.",
    visual: "itinerary",
  },
];

export const packingFeatures: FeatureCardContent[] = [
  {
    eyebrow: "01 · List",
    title: "Share the checklist",
    body: "Keep personal and group essentials in one calm, readable list.",
    visual: "checklist",
  },
  {
    eyebrow: "02 · Assign",
    title: "Split the load",
    body: "Make responsibility visible before anyone leaves home.",
    visual: "assign",
  },
  {
    eyebrow: "03 · Review",
    title: "See what’s ready",
    body: "A final check shows what is ready and what still needs attention.",
    visual: "readiness",
  },
];

export const howItWorks = [
  {
    title: "Create the trip",
    body: "Add the place, dates, and first outline.",
  },
  {
    title: "Bring your people",
    body: "Invite the crew and plan together.",
  },
  {
    title: "Head out ready",
    body: "Review the details and prepare what is needed offline.",
  },
] as const;

export const faqItems: FAQItem[] = [
  {
    question: "What is Accomp?",
    answer:
      "Accomp is a mobile app concept for planning outdoor trips together. It brings the itinerary, companions, shared gear, important details, and offline preparation into one trip space.",
  },
  {
    question: "Can everyone help plan the same trip?",
    answer:
      "The planned experience lets invited companions view and contribute to shared trip details. Exact collaboration controls will be confirmed before launch.",
  },
  {
    question: "Can I use Accomp without a signal?",
    answer:
      "Accomp is being designed around offline readiness, including prepared maps and essential trip information. Final offline capabilities will be announced before launch.",
  },
  {
    question: "Who is Accomp for?",
    answer:
      "Accomp is designed for hiking groups, backpackers, campers, weekend adventurers, and friends who want one clear plan before heading outdoors.",
  },
  {
    question: "Will Accomp be available on iOS and Android?",
    answer:
      "Platform availability has not been confirmed yet. This site will be updated when the release plan is ready.",
  },
  {
    question: "When will Accomp launch?",
    answer:
      "A launch date has not been announced. The waitlist shown here remains a design preview until a consented signup system is available.",
  },
  {
    question: "Is Accomp free?",
    answer:
      "Pricing has not been announced. Confirmed product and launch details will appear here before release.",
  },
];
