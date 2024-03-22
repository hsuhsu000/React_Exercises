import React from "react";

const Nav = (props) => {
  return (
    <>
      <nav className="nav d-flex justify-content-between p-4">
        <h2 className="text-warning">Shoppy</h2>
        <button className="btn btn-warning text-white" onClick={props.showCartHandler}>
          Cart <span>1</span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
