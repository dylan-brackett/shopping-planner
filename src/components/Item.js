import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Item({
  title,
  price,
  quantity,
  completed,
  id,
  toggleItemComplete,
  deleteItem,
  toggleEditModal,
  setActiveItemId,
}) {
  return (
    <div
      id={id}
      className={`flex justify-center items-center gap-3 p-4 border-b-2 border-slate-700 ${
        completed ? "itemCompleted bg-slate-200" : ""
      }`}
    >
      <div className=" flex justify-center items-center">
        <input
          className="h-6 w-6"
          onChange={() => {
            toggleItemComplete(id);
          }}
          checked={completed}
          type="checkbox"
        ></input>
      </div>
      <div className="flex-1">
        {title}
        <div className="text-slate-700">Qty: {quantity}</div>
      </div>
      <div className="text-2xl font-semibold mx-3">${price}</div>
      <div>
        <button
          onClick={() => {
            toggleEditModal();
            setActiveItemId(id);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
