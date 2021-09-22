import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Plays from "./Plays";

describe('plays page', () => {
  test("renders plays", () => {
    render(<Plays />)
    const firstPlayTitle = screen.getByText(/Comedy of Errors/i)
    expect(firstPlayTitle).toBeInTheDocument()
  });
});

