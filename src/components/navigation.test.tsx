import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import Navigation from "./Navigation";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe('navigation', () => {
  test("renders home link", () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Navigation />
      </Router>,
    )

    const homeLink = screen.getByText(/Home/i)
    expect(homeLink).toBeInTheDocument()
  });

  test("renders plays link", () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Navigation />
      </Router>,
    )

    const playsLink = screen.getByText(/Plays/i)
    expect(playsLink).toBeInTheDocument()
  });

  test("renders reviews link", () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Navigation />
      </Router>,
    )

    const reviewsLink = screen.getByText(/Reviews/i)
    expect(reviewsLink).toBeInTheDocument()
  });
});

