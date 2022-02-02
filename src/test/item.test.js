import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "../components/Item";

it("Renders an item", () => {
  const testItem = {
    title: "Carrots",
    price: 1,
    quantity: 100,
    completed: false,
    id: "1",
  };
  render(
    <Item
      title={testItem.title}
      price={testItem.price}
      quantity={testItem.quantity}
      completed={testItem.completed}
      id={testItem.id}
    />
  );
  expect(screen.getByText(/Carrots/i)).toBeTruthy();
  expect(screen.getByText(/Qty: 100/i)).toBeTruthy();
});
