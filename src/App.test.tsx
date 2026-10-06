import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { milestones } from "./content";

describe("App", () => {
  it("shows the project name and ticker", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Hello DEVGEN" }),
    ).toBeInTheDocument();
    expect(screen.getByText("$HELLO")).toBeInTheDocument();
  });

  it("shows a plan with three milestones, each with a status", () => {
    render(<App />);
    const plan = screen.getByRole("region", { name: "Plan" });
    const items = within(plan).getAllByRole("listitem");
    expect(items).toHaveLength(3);
    milestones.forEach((m, i) => {
      expect(within(items[i]).getByText(m.title)).toBeInTheDocument();
      expect(within(items[i]).getByText(m.status)).toBeInTheDocument();
    });
  });
});
