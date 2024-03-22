import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import BackDrop from "../components/BackDrop";

const Main = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      <Header showCartHandler={showCartHandler}></Header>
      <Body></Body>
      <BackDrop showCart={showCart} hideCartHandler={hideCartHandler}></BackDrop>
    </>
  );
};

export default Main;
