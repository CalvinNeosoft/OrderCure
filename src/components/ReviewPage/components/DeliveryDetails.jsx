import React from "react";
import { Link } from "react-router-dom";

function DeliveryDetails() {
  return (
    <div className="pt-2 details-container">
      <div className="order-details-div">
        <div className="delivery-details-div">
          <h3 className="delivery-sub-heading">Delivery Info</h3>
          <Link className="delivery-timing-tab mt-3">
            <p>Delivery Within 2 Hours</p>
            <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDetails;
