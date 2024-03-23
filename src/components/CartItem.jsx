import React, { useContext } from "react";
import { itemContext } from "../store/itemContext";

const CartItem = ({ fruit }) => {
  const { addItem, removeItem } = useContext(itemContext);
  const addAmountHandler = () => {
    addItem({ ...fruit, amount: 1 });
  };
  const removeAmountHandler = () => {
    removeItem(fruit.id);
  };
  return (
    <div className="d-flex justify-content-between border p-3 shadow-lg m-2 cart">
      <div className="card-body me-5">
        <h5 className="card-title">{fruit.name}</h5>
        <p className="card-text">{fruit.description}</p>
        <p className="card-text">${fruit.price}</p>
      </div>
      <div className="card-body d-flex justify-content-end">
        <div>
          <p className="badge bg-dark me-2">x {fruit.amount}</p>
        </div>
        <div>
          <button className="btn btn-sm btn-warning me-1" onClick={addAmountHandler}>
            +
          </button>
          <button className="btn btn-sm btn-warning me-2" onClick={removeAmountHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
