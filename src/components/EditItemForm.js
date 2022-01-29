import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function EditItemForm({
  editItem,
  itemTitle,
  itemPrice,
  itemQuantity,
  itemCompleted,
  itemId,
}) {
  const [price, setPrice] = useState(itemPrice);
  const [qty, setQty] = useState(itemQuantity);
  const [itemName, setItemName] = useState(itemTitle);

  function onPriceChange(e) {
    setPrice(e.target.value);
  }

  function onQtyChange(e) {
    setQty(e.target.value);
  }

  function onItemNameChange(e) {
    setItemName(e.target.value);
  }

  return (
    <form className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="item-name"
          >
            Item Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="item-name"
            type="text"
            value={itemName}
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
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="qty"
            type="number"
            value={qty}
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
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="price"
            value={price}
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
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              const myId = nanoid();
              console.log(myId);
              editItem(itemName, "$" + price, qty, false, myId);
              setItemName("");
              setPrice("");
              setQty("");
            }}
          >
            Add Item
          </button>
        </div>
      </div>
    </form>
  );
}
