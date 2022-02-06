import React, { useState } from "react";
import { nanoid } from "nanoid";

/**
 * @typedef {import("./ShoppingPlanner.js").Item} Item
 */

export default function AddItemForm({ addItem }) {
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  const [itemTitle, setItemTitle] = useState("");

  function onPriceChange(e) {
    setItemPrice(e.target.value);
  }

  function onQtyChange(e) {
    setItemQty(e.target.value);
  }

  function onItemNameChange(e) {
    setItemTitle(e.target.value);
  }

  return (
    <form data-testid="addForm" className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="itemName"
          >
            Item Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="itemName"
            name="itemName"
            type="text"
            value={itemTitle}
            onChange={onItemNameChange}
            placeholder="Carrots"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="qty"
          >
            Qty
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="qty"
            name="qty"
            type="number"
            value={itemQty}
            onChange={onQtyChange}
            placeholder="10"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="price"
          >
            Price ($)
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="price"
            name="price"
            value={itemPrice}
            onChange={onPriceChange}
            type="number"
            min="0.00"
            step="0.01"
            placeholder="1.00"
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline text-white font-bold py-2 px-4 rounded"
            type="button"
            id="addBtn"
            name="addBtn"
            onClick={() => {
              /**
               * Add item in the fields to the listItems in ShoppingPlanner
               */

              /**
               * @type {string}
               */
              const newId = nanoid();

              /**
               * @type {Item}
               */
              let newItem = {
                title: itemTitle,
                price: itemPrice,
                quantity: itemQty,
                completed: false,
                id: newId,
              };
              addItem(newItem);

              /**
               * Clear form fields
               */
              setItemTitle("");
              setItemPrice("");
              setItemQty("");
            }}
          >
            Add Item
          </button>
        </div>
      </div>
    </form>
  );
}
