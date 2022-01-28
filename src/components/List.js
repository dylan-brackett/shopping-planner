import React, { useState } from "react";
import Item from "./Item";

export default function List({ listItems }) {
  return (
    <div>
      {listItems.map((item) => {
        return (
          <Item
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            completed={item.completed}
          />
        );
      })}
    </div>
  );
}
