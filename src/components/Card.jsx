import React from "react";

const Card = ({ fruit }) => {
  return (
    <div className="d-flex justify-content-between border p-3 shadow-lg m-2">
      <div className="card-body">
        <h4 className="card-title">{fruit.name}</h4>
        <h4 className="card-text">{fruit.description}</h4>
        <h4 className="card-text">{fruit.price}</h4>
        <button className="btn btn-warning">Add</button>
      </div>
      <div className="card-body">
        <input type="number" min={1} value={1} />
        <button className="btn btn-warning">Add</button>
      </div>
    </div>
  );
};

export default Card;
