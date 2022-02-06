import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function List({
  listItems,
  setActiveItemId,
  toggleItemComplete,
  deleteItem,
  toggleEditModal,
}) {
  return (
    <div>
      {listItems.map((item) => {
        return (
          <div
            id={item.id}
            key={item.id}
            data-testid="itemDiv"
            className={`flex justify-center items-center gap-3 p-4 border-b-2 border-slate-700 ${
              item.completed ? "itemCompleted bg-slate-200" : ""
            }`}
          >
            <div className=" flex justify-center items-center">
              <input
                className="h-6 w-6"
                data-testid="completeCheck"
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
                  setActiveItemId(item.id);
                  toggleEditModal();
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
            <div>
              <button
                data-testid="deleteBtn"
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
