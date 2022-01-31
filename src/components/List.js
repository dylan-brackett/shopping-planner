import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function List({
  listItems,
  toggleItemComplete,
  deleteItem,
  toggleEditModal,
  setActiveItemId,
}) {
  return (
    <div>
      {listItems.map((item) => {
        return (
          <div
            id={item.id}
            className={`flex justify-center items-center gap-3 p-4 border-b-2 border-slate-700 ${
              item.completed ? "itemCompleted bg-slate-200" : ""
            }`}
          >
            <div className=" flex justify-center items-center">
              <input
                className="h-6 w-6"
                onChange={() => {
                  toggleItemComplete(item.id);
                }}
                checked={item.completed}
                type="checkbox"
              ></input>
            </div>
            <div className="flex-1">
              {item.title}
              <div className="text-slate-700">Qty: {item.quantity}</div>
            </div>
            <div className="text-2xl font-semibold mx-3">${item.price}</div>
            <div>
              <button
                onClick={() => {
                  toggleEditModal();
                  setActiveItemId(item.id);
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
