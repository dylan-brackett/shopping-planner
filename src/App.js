import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";
import { list } from "postcss";

function App() {
  const [listItems, setListItems] = useState([]);

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

  return (
    <div className="app bg-gradient-to-b from-green-500 to-green-300 h-screen">
      <Header />
      <div className="max-w-xl mx-auto bg-white my-8 rounded-lg p-10 shadow-xl">
        <Form addItem={addItem} />
        <List listItems={listItems} toggleItemComplete={toggleItemComplete} />
      </div>
    </div>
  );
}

export default App;
