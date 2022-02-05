import React from "react";
import { render, screen } from "@testing-library/react";
import AddItemForm from "../../components/AddItemForm";

it("Renders the AddItemForm", () => {
  render(<AddItemForm />);

  expect(screen.getByLabelText(/Item Name/i)).toBeTruthy();
  expect(screen.getByLabelText(/Qty/i)).toBeTruthy();
  expect(screen.getByLabelText(/Price \(\$\)/i)).toBeTruthy();
  expect(screen.getByText(/Add Item/i)).toBeTruthy();
});
