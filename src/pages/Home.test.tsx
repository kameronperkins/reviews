import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Home from "./Home";

describe('home page', () => {
  test("renders intro text", () => {
    render(<Home />)
    const introText = screen.getByText(/Hello, I'm/i)
    expect(introText).toBeInTheDocument()
  });

  test("renders buttons", () => {
    render(<Home />)
    const myWorkButton = screen.getByText(/My work/i)
    expect(myWorkButton).toBeInTheDocument()
  });

  test("renders buttons", () => {
    render(<Home />)
    const leaveRiviewButton = screen.getByText(/Leave review/i)
    expect(leaveRiviewButton).toBeInTheDocument()
  });
});

