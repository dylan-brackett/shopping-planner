import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";
import Modal from "react-modal";

Modal.setAppElement(".app");

function App() {
  const [listItems, setListItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    });
    setListItems(updatedList);
  }

  function toggleEditModal(itemId) {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="app bg-gradient-to-b from-green-500 to-green-300 h-screen">
      <Header />
      <div className="max-w-xl mx-auto bg-white my-8 rounded-lg p-10 shadow-xl">
        <AddItemForm addItem={addItem} />
        <List
          listItems={listItems}
          toggleItemComplete={toggleItemComplete}
          deleteItem={deleteItem}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleEditModal}
        contentLabel="Edit Item"
      >
        <EditItemForm editItem={editItem} />
      </Modal>
    </div>
  );
}

export default App;
