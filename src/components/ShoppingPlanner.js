import React, { useEffect, useState } from "react";
import List from "./List";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";
import Modal from "react-modal";

/**
 * A shopping list item
 *
 * @typedef {Object} Item
 * @property {string} title - Item name
 * @property {number} price - Item price
 * @property {number} quantity - Number of items
 * @property {boolean} completed - Item checked off
 * @property {string} id - Unique item ID
 */

/**
 * Set modal root to be the DOM body
 */
Modal.setAppElement(document.body);

export default function ShoppingPlanner() {
  /**
   * @type {[Item[], function]} listItems
   */
  const [listItems, setListItems] = useState([]);

  /**
   * @type {[boolean, function]} modalIsOpen
   */
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /**
   * @type {[string, function]} activeItemId
   */
  const [activeItemId, setActiveItemId] = useState("");

  /**
   * Add Item to the list of current items held within the ShoppingPlanner state
   *
   * @param {Item} newItem
   */
  function addItem(newItem) {
    let newItems = [...listItems, newItem];
    setListItems(newItems);
  }
  /**
   * Mark item as complete in listItems
   * @param {string} itemId - item to be marked as complete
   */
  function toggleItemComplete(itemId) {
    const updatedList = listItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setListItems(updatedList);
  }

  /**
   * Delete item from listItems
   * @param {string} itemId - item to be deleted
   */
  function deleteItem(itemId) {
    const updatedList = listItems.filter((item) => {
      if (item.id === itemId) {
        return false;
      }
      return true;
    });
    setListItems(updatedList);
  }

  /**
   * Get the currently active item
   * @returns {Item} The currently active item object
   */
  function getActiveItem() {
    const activeItem = listItems.find((item) => {
      return item.id === activeItemId;
    });

    return activeItem;
  }

  /**
   * Modify the active item with the newItem's values
   * @param {Item} newItem New details to add to active item
   */
  function editActiveItem(newItem) {
    const updatedList = listItems.map((item) => {
      if (item.id === activeItemId) {
        Object.assign(item, newItem);
      }
      return item;
    });
    setListItems(updatedList);
  }

  function toggleEditModal() {
    setModalIsOpen(!modalIsOpen);
  }

  useEffect(() => {}, [modalIsOpen]);

  return (
    <div data-testid="shoppingPlanner" className="py-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg p-10 shadow-xl">
        <AddItemForm addItem={addItem} />
        <div className="border-b-4 border-slate-800 my-8" />
        <List
          listItems={listItems}
          setActiveItemId={setActiveItemId}
          toggleItemComplete={toggleItemComplete}
          deleteItem={deleteItem}
          toggleEditModal={toggleEditModal}
        />
      </div>
      <Modal
        overlayClassName="bg-slate-800/80 overflow-y-auto overflow-x-hidden fixed flex right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
        className="w-1/3 h-1/2 shadow rounded-lg shadow-slate-800 bg-white"
        isOpen={modalIsOpen}
        onRequestClose={toggleEditModal}
        contentLabel="Edit Item"
      >
        <div className="w-full flex justify-end">
          <button
            className="bg-red-400 w-16 text-white p-2 rounded-md m-3"
            onClick={() => toggleEditModal()}
          >
            Close
          </button>
        </div>
        <div className="my-4 w-11/12 mx-auto border-b-2 border-slate-600" />
        <div className="flex justify-center">
          <EditItemForm
            editActiveItem={editActiveItem}
            getActiveItem={getActiveItem}
            toggleEditModal={toggleEditModal}
          />
        </div>
      </Modal>
    </div>
  );
}
