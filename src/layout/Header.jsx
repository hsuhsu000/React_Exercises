import React from "react";
import Summary from "../components/Summary";
import Nav from "../components/Nav";

const Header = (props) => {
  return (
    <>
      <Nav showCartHandler={props.showCartHandler}></Nav>
      <Summary></Summary>
    </>
  );
};

export default Header;
