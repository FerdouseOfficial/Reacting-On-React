import React from "react";

const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}
      <h4>Products</h4>
      <ul>
        {items.map((item) => {
          return <li key={Math.random()}> {item} </li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
