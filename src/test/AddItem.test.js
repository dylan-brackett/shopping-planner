import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingPlanner from "../components/ShoppingPlanner";

it("Adds an item to the list", () => {
  render(<ShoppingPlanner />);
  const itemName = screen.getByLabelText(/Item Name/i);
  fireEvent.change(itemName, { target: { value: "Potatoes" } });

  const quantity = screen.getByLabelText(/Qty/i);
  fireEvent.change(quantity, { target: { value: 10 } });

  const price = screen.getByLabelText(/Price \(\$\)/i);
  fireEvent.change(price, { target: { value: 12 } });

  expect(screen.getByTestId("addForm")).toHaveFormValues({
    itemName: "Potatoes",
    qty: 10,
    price: 12,
  });

  const addItem = screen.getByText(/Add Item/i);
  fireEvent.click(addItem);

  expect(screen.getByTestId("addForm")).toHaveFormValues({
    itemName: "",
    qty: null,
    price: null,
  });

  expect(screen.getByText(/Potatoes/i)).toBeTruthy();
  expect(screen.getByText(/Qty: 10/i)).toBeTruthy();
  expect(screen.getByText(/\$12/i)).toBeTruthy();
});
