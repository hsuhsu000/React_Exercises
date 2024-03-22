import React from "react";
import CartItem from "../components/CartItem";
const fruits = [
  {
    id: 1,
    price: 10,
    name: "Banana",
    description: "fresh banana from myanmar",
  },
  {
    id: 2,
    price: 20,
    name: "Apple",
    description: "fresh Apple from myanmar",
  },
  {
    id: 3,
    price: 30,
    name: "Durian",
    description: "fresh banana from myanmar",
  },
];
const Cart = (props) => {
  return (
    <section className="cart-box">
      <h2>Carts</h2>
      {fruits.map((fruit) => (
        <CartItem key={fruit.id} fruit={fruit}></CartItem>
      ))}
      <hr></hr>
      <div className="d-flex justify-content-between">
        <h3>Total Price</h3>
        <h4>$3000</h4>
      </div>
      <div className="text-end mt-3">
        <button className="btn btn-dark me-2" onClick={props.hideCartHandler}>Close</button>
        <button className="btn btn-warning">Order</button>
      </div>
    </section>
  );
};

export default Cart;
