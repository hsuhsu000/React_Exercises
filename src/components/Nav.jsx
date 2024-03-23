import React, { useContext } from "react";
import { itemContext } from "../store/itemContext";
const Nav = (props) => {
  const { items } = useContext(itemContext);
  const totalCart = items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);
  return (
    <>
      <nav className="nav d-flex justify-content-between p-4">
        <h2 className="text-warning">Shoppy</h2>
        <button className="btn btn-warning text-white" onClick={props.showCartHandler}>
          Cart <span>({totalCart})</span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
