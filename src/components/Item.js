import React from "react";

export default function Item({ title, price, quantity, completed }) {
  return (
    <div className="flex ">
      <div className="w-10 flex justify-center items-center">
        <input defaultChecked={completed} type="checkbox"></input>
      </div>
      <div className="w-4/5">
        {title}
        <div className="">Qty: {quantity}</div>
      </div>
      <div className="my-auto">{price}</div>
    </div>
  );
}
