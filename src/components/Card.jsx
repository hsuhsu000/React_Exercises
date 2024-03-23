import React, { useContext, useState } from "react";
import { itemContext } from "../store/itemContext";

const Card = ({ fruit }) => {
  const { id, name, description, price } = fruit;
  const { addItem } = useContext(itemContext);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };

  return (
    <div className="d-flex justify-content-between border p-3 shadow-lg mx-5 m-3 p-5">
      <div className="card-body">
        <h4 className="card-title pb-3">{name}</h4>
        <h6 className="card-text">{description}</h6>
        <h4 className="card-text">$ {price}</h4>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-end">
          <input
            type="number"
            min={1}
            style={{ width: "30px" }}
            className="me-3"
            value={currentAmount}
            onChange={(e) => {
              setCurrentAmount(e.target.value);
            }}
          />
          <button className="btn btn-warning" onClick={addToCartHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
