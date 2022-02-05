import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingPlanner from "../../components/ShoppingPlaner";

it("Adds an item to the list", () => {
  render(<ShoppingPlanner />);
  const itemName = screen.getByLabelText(/Item Name/i);
  fireEvent.change(itemName, { target: { value: "Potatoes" } });
  console.log(screen.getByLabelText(/Item Name/i));
});
