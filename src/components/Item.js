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
      className={`flex justify-center items-center gap-3 ${
        completed ? "itemCompleted" : ""
      }`}
    >
      <div className=" flex justify-center items-center">
        <input
          onChange={() => {
            toggleItemComplete(id);
          }}
          checked={completed}
          type="checkbox"
        ></input>
      </div>
      <div className="flex-1">
        {title}
        <div className="">Qty: {quantity}</div>
      </div>
      <div className="my-auto">{price}</div>
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
