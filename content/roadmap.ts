import type { Messages } from "@/lib/i18n/messages";

export type RoadmapStatus = "completed" | "current" | "planned";
export type RoadmapCopyKey = keyof Messages["roadmap"]["items"];

export interface RoadmapEntry {
  copyKey: RoadmapCopyKey;
  date: `${number}-${number}-${number}`;
  id: string;
  phase: string | null;
  status: RoadmapStatus;
}

export const roadmapEntries = [
  {
    copyKey: "kickoff",
    date: "2026-07-26",
    id: "project-kickoff",
    phase: null,
    status: "completed",
  },
  {
    copyKey: "phase11",
    date: "2026-07-26",
    id: "phase-1-1",
    phase: "1.1",
    status: "completed",
  },
  {
    copyKey: "phase12",
    date: "2026-07-26",
    id: "phase-1-2",
    phase: "1.2",
    status: "completed",
  },
  {
    copyKey: "phase13",
    date: "2026-07-27",
    id: "phase-1-3",
    phase: "1.3",
    status: "completed",
  },
  {
    copyKey: "phase14",
    date: "2026-07-28",
    id: "phase-1-4",
    phase: "1.4",
    status: "completed",
  },
  {
    copyKey: "phase15",
    date: "2026-07-28",
    id: "phase-1-5",
    phase: "1.5",
    status: "completed",
  },
  {
    copyKey: "phase16",
    date: "2026-07-28",
    id: "phase-1-6",
    phase: "1.6",
    status: "completed",
  },
  {
    copyKey: "phase17",
    date: "2026-07-28",
    id: "phase-1-7",
    phase: "1.7",
    status: "completed",
  },
  {
    copyKey: "phase18",
    date: "2026-07-28",
    id: "phase-1-8",
    phase: "1.8",
    status: "completed",
  },
  {
    copyKey: "phase19",
    date: "2026-07-28",
    id: "phase-1-9",
    phase: "1.9",
    status: "completed",
  },
  {
    copyKey: "phase110",
    date: "2026-07-28",
    id: "phase-1-10",
    phase: "1.10",
    status: "completed",
  },
  {
    copyKey: "phase21",
    date: "2026-07-28",
    id: "phase-2-1",
    phase: "2.1",
    status: "completed",
  },
  {
    copyKey: "phase22",
    date: "2026-07-28",
    id: "phase-2-2",
    phase: "2.2",
    status: "current",
  },
] as const satisfies readonly RoadmapEntry[];
