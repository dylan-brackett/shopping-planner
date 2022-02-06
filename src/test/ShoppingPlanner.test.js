import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingPlanner from "../components/ShoppingPlanner";

it("Renders the shopping list", () => {
  render(<ShoppingPlanner />);
  expect(screen.getByTestId("shoppingPlanner")).toBeTruthy();
});
