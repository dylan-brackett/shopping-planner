import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingPlanner from "../components/ShoppingPlanner.js";

it("Edits an item", () => {
  render(<ShoppingPlanner />);

  fireEvent.change(screen.getByLabelText(/Item Name/i), {
    target: { value: "Bob's Oats" },
  });

  fireEvent.change(screen.getByLabelText(/Price \(\$\)/i), {
    target: { value: 1.25 },
  });

  fireEvent.change(screen.getByLabelText(/Qty/i), { target: { value: 2 } });

  expect(screen.getByTestId("addForm")).toHaveFormValues({
    itemName: "Bob's Oats",
    qty: 2,
    price: 1.25,
  });

  fireEvent.click(screen.getByText(/Add Item/i));

  expect(screen.getByTestId("addForm")).toHaveFormValues({
    itemName: "",
    qty: null,
    price: null,
  });

  expect(screen.getByText(/Bob's Oats/i)).toBeTruthy();
  expect(screen.getByText(/Qty: 2/i)).toBeTruthy();
  expect(screen.getByText(/\$1\.25/i)).toBeTruthy();

  fireEvent.click(screen.getByTestId("editBtn"));

  expect(screen.getByTestId("editForm")).toBeTruthy();

  expect(screen.getByTestId("editForm")).toHaveFormValues({
    editItemName: "Bob's Oats",
    editQty: 2,
    editPrice: 1.25,
  });

  fireEvent.change(screen.getByDisplayValue(/Bob's Oats/i), {
    target: { value: "Dylan's Hamburgers" },
  });

  fireEvent.change(screen.getByDisplayValue(/1\.25/i), {
    target: { value: 35.67 },
  });

  fireEvent.change(screen.getByDisplayValue(/2/i), { target: { value: 4 } });

  expect(screen.getByTestId("editForm")).toHaveFormValues({
    editItemName: "Dylan's Hamburgers",
    editQty: 4,
    editPrice: 35.67,
  });

  fireEvent.click(screen.getByText(/Update Item/i));

  expect(screen.queryByTestId("editForm")).toBeFalsy();

  expect(screen.getByText(/Dylan's Hamburgers/i)).toBeTruthy();
  expect(screen.getByText(/Qty: 4/i)).toBeTruthy();
  expect(screen.getByText(/\$35\.67/i)).toBeTruthy();
});
