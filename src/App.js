import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [listItems, setListItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState("");

  function addItem(itemTitle, itemPrice, itemQuantity, itemCompleted, itemId) {
    const newItem = {
      title: itemTitle,
      price: itemPrice,
      quantity: itemQuantity,
      completed: itemCompleted,
      id: itemId,
    };
    let newItems = [...listItems, newItem];
    setListItems(newItems);
  }

  function toggleItemComplete(id) {
    const updatedList = listItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setListItems(updatedList);
  }

  function deleteItem(itemId) {
    const updatedList = listItems.filter((item) => {
      if (item.id === itemId) {
        return false;
      }
      return true;
    });
    setListItems(updatedList);
  }

  function editItem(itemTitle, itemPrice, itemQuantity, itemCompleted, itemId) {
    const updatedList = listItems.map((item) => {
      if (item.id === itemId) {
        item.title = itemTitle;
        item.price = itemPrice;
        item.quantity = itemQuantity;
        item.completed = itemCompleted;
      }
      return item;
    });
    setListItems(updatedList);
  }

  function toggleEditModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div
      id="app"
      className="app bg-gradient-to-b from-green-500 to-green-300 h-screen"
    >
      <Header />
      <div className="max-w-xl mx-auto bg-white my-8 rounded-lg p-10 shadow-xl">
        <AddItemForm addItem={addItem} />
        <div className="border-b-4 border-slate-800 my-8" />
        <List
          listItems={listItems}
          toggleItemComplete={toggleItemComplete}
          deleteItem={deleteItem}
          toggleEditModal={toggleEditModal}
          setActiveItemId={setActiveItemId}
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
          <EditItemForm editItem={editItem} itemId={activeItemId} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
