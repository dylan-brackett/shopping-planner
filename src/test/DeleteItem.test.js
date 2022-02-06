import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingPlanner from "../components/ShoppingPlanner";

it("Deletes an item in the list", () => {
  render(<ShoppingPlanner />);
  const itemName = screen.getByLabelText(/Item Name/i);
  fireEvent.change(itemName, { target: { value: "Tomatoes" } });

  const quantity = screen.getByLabelText(/Qty/i);
  fireEvent.change(quantity, { target: { value: 7 } });

  const price = screen.getByLabelText(/Price \(\$\)/i);
  fireEvent.change(price, { target: { value: 100 } });

  const addItem = screen.getByText(/Add Item/i);
  fireEvent.click(addItem);

  expect(screen.getByText(/Tomatoes/i)).toBeTruthy();
  expect(screen.getByText(/Qty: 7/i)).toBeTruthy();
  expect(screen.getByText(/\$100/i)).toBeTruthy();

  fireEvent.click(screen.getByTestId("deleteBtn"));

  expect(screen.queryByText(/Tomatoes/i)).toBeFalsy();
  expect(screen.queryByText(/Qty: 7/i)).toBeFalsy();
  expect(screen.queryByText(/\$100/i)).toBeFalsy();
});
