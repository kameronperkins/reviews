import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import { App } from "./App"

describe('smoke test', () => {
  test("renders intro text", () => {
    render(<App />)
    const introText = screen.getByText(/Hello, I'm/i)
    expect(introText).toBeInTheDocument()
  });
});

