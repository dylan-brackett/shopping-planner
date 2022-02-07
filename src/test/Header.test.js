import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../components/Header.js";

it("Renders the header", () => {
  render(<Header />);
  expect(screen.getByTestId("header")).toBeTruthy();
});
