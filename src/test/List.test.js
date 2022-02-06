import React from "react";
import { render, screen } from "@testing-library/react";
import List from "../components/List";

it("Renders an item", () => {
  const testItem = [
    {
      title: "Carrots",
      price: "1.00",
      quantity: 100,
      completed: false,
      id: "1",
    },
  ];

  render(<List listItems={testItem} />);
  expect(screen.getByText(/Carrots/i)).toBeTruthy();
  expect(screen.getByText(/Qty: 100/i)).toBeTruthy();
  expect(screen.getByText(/\$1.00/i)).toBeTruthy();
});
