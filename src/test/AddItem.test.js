import React from "react";
import {
  render,
  screen,
  fireEvent,
  queryByTestId,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingPlanner from "../components/ShoppingPlanner";

describe("Adding items", () => {
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

  it("Adds multiple items to the list", () => {
    render(<ShoppingPlanner />);

    fireEvent.change(screen.getByLabelText(/Item Name/i), {
      target: { value: "Dog food" },
    });

    fireEvent.change(screen.getByLabelText(/Price \(\$\)/i), {
      target: { value: 300 },
    });

    fireEvent.change(screen.getByLabelText(/Qty/i), { target: { value: 1 } });

    expect(screen.getByTestId("addForm")).toHaveFormValues({
      itemName: "Dog food",
      qty: 1,
      price: 300,
    });

    fireEvent.click(screen.getByText(/Add Item/i));

    expect(screen.getByTestId("addForm")).toHaveFormValues({
      itemName: "",
      qty: null,
      price: null,
    });

    expect(screen.getByText(/Dog food/i)).toBeTruthy();
    expect(screen.getByText(/Qty: 1/i)).toBeTruthy();
    expect(screen.getByText(/\$300/i)).toBeTruthy();

    fireEvent.change(screen.getByLabelText(/Item Name/i), {
      target: { value: "Soap" },
    });

    fireEvent.change(screen.getByLabelText(/Price \(\$\)/i), {
      target: { value: 10.55 },
    });

    fireEvent.change(screen.getByLabelText(/Qty/i), { target: { value: 3 } });

    expect(screen.getByTestId("addForm")).toHaveFormValues({
      itemName: "Soap",
      qty: 3,
      price: 10.55,
    });

    fireEvent.click(screen.getByText(/Add Item/i));

    expect(screen.getByTestId("addForm")).toHaveFormValues({
      itemName: "",
      qty: null,
      price: null,
    });

    expect(screen.getByText(/Dog food/i)).toBeTruthy();
    expect(screen.getByText(/Qty: 1/i)).toBeTruthy();
    expect(screen.getByText(/\$300/i)).toBeTruthy();

    expect(screen.getByText(/Soap/i)).toBeTruthy();
    expect(screen.getByText(/Qty: 3/i)).toBeTruthy();
    expect(screen.getByText(/\$10\.55/i)).toBeTruthy();
  });

  it("Won't add an empty item", () => {
    render(<ShoppingPlanner />);
    fireEvent.click(screen.getByText(/Add Item/i));

    expect(screen.queryByTestId("editBtn")).toBeFalsy();
    expect(screen.queryByTestId("deleteBtn")).toBeFalsy();
  });
});
