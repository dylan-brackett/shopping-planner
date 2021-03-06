import React, { useState } from "react";

/**
 * @typedef {import("./ShoppingPlanner.js").Item} Item
 */

export default function EditItemForm({
  editActiveItem,
  toggleEditModal,
  getActiveItem,
}) {
  /**
   * @type {Item}
   */
  const curItem = getActiveItem();

  const [newItemPrice, setNewItemPrice] = useState(curItem.price);
  const [newItemQty, setNewItemQty] = useState(curItem.quantity);
  const [newItemTitle, setNewItemTitle] = useState(curItem.title);

  function onNewItemPriceChange(e) {
    setNewItemPrice(e.target.value);
  }

  function onNewItemQtyChange(e) {
    setNewItemQty(e.target.value);
  }

  function onNewItemTitleChange(e) {
    setNewItemTitle(e.target.value);
  }

  function handleEditItem() {
    if (
      newItemTitle === "" ||
      newItemTitle === " " ||
      !newItemQty ||
      !newItemPrice
    ) {
      return -1;
    }

    /**
     * @type {Item}
     */
    const newItem = {
      title: newItemTitle,
      price: newItemPrice,
      quantity: newItemQty,
      completed: curItem.completed,
      id: curItem.id,
    };

    editActiveItem(newItem);

    /**
     * Clear form fields and close modal
     */
    setNewItemTitle("");
    setNewItemPrice("");
    setNewItemQty("");
    toggleEditModal();
  }

  return (
    <form data-testid="editForm" className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="editItemName"
          >
            Item Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="editItemName"
            name="editItemName"
            type="text"
            value={newItemTitle}
            onChange={onNewItemTitleChange}
            placeholder="Carrots"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="editQty"
          >
            Qty
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="editQty"
            name="editQty"
            type="number"
            value={newItemQty}
            onChange={onNewItemQtyChange}
            placeholder="10"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="editPrice"
          >
            Price ($)
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="editPrice"
            name="editPrice"
            value={newItemPrice}
            onChange={onNewItemPriceChange}
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
            id="editBtn"
            name="editBtn"
            onClick={() => {
              handleEditItem();
            }}
          >
            Update Item
          </button>
        </div>
      </div>
    </form>
  );
}
