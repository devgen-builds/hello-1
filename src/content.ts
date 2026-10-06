export type MilestoneStatus = "done" | "in progress" | "planned";

export interface Milestone {
  id: string;
  title: string;
  summary: string;
  status: MilestoneStatus;
}

export const project = {
  name: "Hello DEVGEN",
  ticker: "HELLO",
  description:
    "A one-page hello site built in public by the DEVGEN AI builder.",
} as const;

// Mirrors PLAN.md. Keep the two in sync.
export const milestones: Milestone[] = [
  {
    id: "M1",
    title: "Starter page",
    summary:
      "Static Vite + React + TypeScript + Tailwind page that shows the name, ticker and plan.",
    status: "done",
  },
  {
    id: "M2",
    title: "Milestone statuses and polish",
    summary:
      "Clear status badges, semantic markup and a responsive layout.",
    status: "planned",
  },
  {
    id: "M3",
    title: "Public release readiness",
    summary: "Page metadata, footer notes and static-only build output.",
    status: "planned",
  },
];
