import React from "react";
import Header from "./components/Header";
import ShoppingPlanner from "./components/ShoppingPlaner";

export default function App() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-green-500 to-green-300 h-screen">
        <ShoppingPlanner />
      </div>
    </div>
  );
}
