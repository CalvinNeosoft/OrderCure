import React from "react";
import CartProducts from "./CartProducts";

function CartDetails() {
  return (
    <div className="pt-2 details-container">
      <div className="order-details-div">
        <div className="cart-details-div">
          <h3 class="cart-sub-heading">Order Items</h3>
          <CartProducts></CartProducts>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
