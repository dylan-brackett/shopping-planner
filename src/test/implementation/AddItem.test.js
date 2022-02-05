import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingPlanner from "../../components/ShoppingPlaner";

it("Adds an item to the list", () => {
  render(<ShoppingPlanner />);
  const itemName = screen.getByLabelText(/Item Name/i);
  fireEvent.change(itemName, { target: { value: "Potatoes" } });

  const quantity = screen.getByLabelText(/Qty/i);
  fireEvent.change(quantity, { target: { value: 10 } });

  const price = screen.getByLabelText(/Price \(\$\)/i);
  fireEvent.change(price, { target: { value: 12 } });

  expect(screen.getByRole("form")).toHaveFormValues({
    itemName: "Potatoes",
    qty: 10,
    price: 12,
  });

  const addItem = screen.getByText(/Add Item/i);
  fireEvent.click(addItem);

  expect(screen.getByRole("form")).toHaveFormValues({
    itemName: "",
    qty: null,
    price: null,
  });
});
