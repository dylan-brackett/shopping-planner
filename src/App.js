import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [listItems, setListItems] = useState([
    { title: "Carrots", price: "$2.50", quantity: 10 },
  ]);

  function addItem(itemTitle, itemPrice, itemQuantity) {
    let newItems = [
      ...listItems,
      { title: itemTitle, price: itemPrice, quantity: itemQuantity },
    ];
    setListItems(newItems);
  }

  return (
    <div className="app bg-gradient-to-b from-green-500 to-green-300 h-screen">
      <Header />
      <div className="max-w-lg mx-auto bg-white my-8 rounded-lg p-10 shadow-xl">
        <h1 className="text-center">Shopping Tracker</h1>
        <List listItems={listItems} />
      </div>
    </div>
  );
}

export default App;
