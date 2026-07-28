export type CountdownMascotStateId =
  | "calm"
  | "smile"
  | "excited"
  | "eager"
  | "today";

export interface CountdownMascotState {
  assetPath: string;
  id: CountdownMascotStateId;
  maximumDays: number | null;
  minimumDays: number;
}

export const countdownMascotStates = [
  {
    assetPath: "/brand/widget-mascot/countdown-calm.webp",
    id: "calm",
    maximumDays: null,
    minimumDays: 31,
  },
  {
    assetPath: "/brand/widget-mascot/countdown-smile.webp",
    id: "smile",
    maximumDays: 30,
    minimumDays: 8,
  },
  {
    assetPath: "/brand/widget-mascot/countdown-excited.webp",
    id: "excited",
    maximumDays: 7,
    minimumDays: 3,
  },
  {
    assetPath: "/brand/widget-mascot/countdown-eager.webp",
    id: "eager",
    maximumDays: 2,
    minimumDays: 1,
  },
  {
    assetPath: "/brand/widget-mascot/countdown-today.webp",
    id: "today",
    maximumDays: 0,
    minimumDays: 0,
  },
] as const satisfies readonly CountdownMascotState[];

export function getCountdownMascotState(daysRemaining: number) {
  const safeDays = Number.isFinite(daysRemaining)
    ? Math.max(0, Math.floor(daysRemaining))
    : 0;

  return (
    countdownMascotStates.find(
      (state) =>
        safeDays >= state.minimumDays &&
        (state.maximumDays === null || safeDays <= state.maximumDays),
    ) ?? countdownMascotStates.at(-1)!
  );
}
