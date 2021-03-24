import React from "react";
import CartDetails from "./CartDetails";
import CartTotal from "./CartTotal";
import DeliveryDetails from "./DeliveryDetails";

function OrderDetails() {
  return (
    <div>
      <DeliveryDetails></DeliveryDetails>
      <CartDetails></CartDetails>
      <CartTotal></CartTotal>
      <div className="details-container cart-blank-space"></div>
    </div>
  );
}

export default OrderDetails;
