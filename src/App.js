import React from "react";
import Header from "./components/Header";
import ShoppingPlanner from "./components/ShoppingPlanner";

export default function App() {
  return (
    <div className="min-h-screen max-h-full bg-gradient-to-b from-green-500 to-green-300">
      <Header />
      <div className="w-full ">
        <ShoppingPlanner />
      </div>
    </div>
  );
}
