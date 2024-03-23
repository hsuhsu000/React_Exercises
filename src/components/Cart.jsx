import React from "react";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import { itemContext } from "../store/itemContext";
const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);
  return (
    <section className="cart-box">
      <h2>Carts</h2>
      {items.length < 1 ? (
        <h4 className="text-danger text-center">Your cart is empty.</h4>
      ) : (
        <>
          {items.map((fruit) => (
            <CartItem key={fruit.id} fruit={fruit}></CartItem>
          ))}
        </>
      )}

      <hr></hr>
      <div className="d-flex justify-content-between">
        <h3>Total Price</h3>
        <h4>${totalAmount}</h4>
      </div>
      <div className="text-end mt-3">
        <button className="btn btn-dark me-2" onClick={props.hideCartHandler}>
          Close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <>
            <button className="btn btn-warning">Order</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
