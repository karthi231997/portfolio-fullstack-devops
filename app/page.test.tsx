import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders the portfolio hero content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /full-stack developer/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/portfolio • ci\/cd ready/i)).toBeInTheDocument();
  });
});
