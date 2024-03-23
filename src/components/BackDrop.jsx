import React from "react";
import Cart from "./Cart";

const BackDrop = (props) => {
  return (
    <>
      {props.showCart && (
        <>
          <section className="backdrop" onClick={props.hideCartHandler}></section>
          <Cart hideCartHandler={props.hideCartHandler}></Cart>
        </>
      )}
    </>
  );
};

export default BackDrop;
