import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingPlanner from "../components/ShoppingPlanner";

it("Completes an item in the list", () => {
  render(<ShoppingPlanner />);
  const itemName = screen.getByLabelText(/Item Name/i);
  fireEvent.change(itemName, { target: { value: "Pasta" } });

  const quantity = screen.getByLabelText(/Qty/i);
  fireEvent.change(quantity, { target: { value: 1 } });

  const price = screen.getByLabelText(/Price \(\$\)/i);
  fireEvent.change(price, { target: { value: 0.55 } });

  const addItem = screen.getByText(/Add Item/i);
  fireEvent.click(addItem);

  expect(screen.getByText(/Pasta/i)).toBeTruthy();
  expect(screen.getByText(/Qty: 1/i)).toBeTruthy();
  expect(screen.getByText(/\$0.55/i)).toBeTruthy();

  expect(screen.queryByTestId("completeCheck").checked).toBeFalsy();

  fireEvent.click(screen.getByTestId("completeCheck"));

  expect(screen.getByTestId("completeCheck")).toBeChecked();
  expect(
    screen.getByTestId("itemDiv").classList.contains("itemCompleted")
  ).toBeTruthy();
});
