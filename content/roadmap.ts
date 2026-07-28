import type { Messages } from "@/lib/i18n/messages";

export type RoadmapStatus = "current" | "planned";
export type RoadmapHorizon = "now" | "next" | "later";
export type RoadmapCopyKey = keyof Messages["roadmap"]["items"];

export interface RoadmapEntry {
  copyKey: RoadmapCopyKey;
  horizon: RoadmapHorizon;
  id: string;
  stage: string;
  status: RoadmapStatus;
}

export const roadmapEntries = [
  {
    copyKey: "discovery",
    horizon: "now",
    id: "product-discovery",
    stage: "1",
    status: "current",
  },
  {
    copyKey: "tripPlanning",
    horizon: "next",
    id: "shared-trip-planning",
    stage: "2",
    status: "planned",
  },
  {
    copyKey: "gearCoordination",
    horizon: "next",
    id: "shared-gear-coordination",
    stage: "3",
    status: "planned",
  },
  {
    copyKey: "offlineReadiness",
    horizon: "later",
    id: "offline-readiness",
    stage: "4",
    status: "planned",
  },
  {
    copyKey: "privateBeta",
    horizon: "later",
    id: "private-beta",
    stage: "5",
    status: "planned",
  },
  {
    copyKey: "launchReadiness",
    horizon: "later",
    id: "launch-readiness",
    stage: "6",
    status: "planned",
  },
] as const satisfies readonly RoadmapEntry[];
