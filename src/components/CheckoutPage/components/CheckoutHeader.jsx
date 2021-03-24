import React from "react";
import { Link, useHistory } from "react-router-dom";

function CheckoutHeader({ stepper, setStepper }) {
  const history = useHistory();
  return (
    <header className="delivery-order-header">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <Link onClick={() => history.goBack()}>
            <img
              className="back-button"
              src="https://payzah.net/production770/ecommercelayout/side/images/left-arrow.png"
              alt="back button"
            ></img>
          </Link>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-11">
          <p className="delivery-order-title text-center">Checkout</p>
        </div>
      </div>
      <div className="stepper-bar mt-2">
        <div className={`step ${stepper === 0 ? "step-active" : ""}`}></div>
        <div className={`step ${stepper === 1 ? "step-active" : ""}`}></div>
        <div className={`step ${stepper === 2 ? "step-active" : ""}`}></div>
        <div className={`step ${stepper === 3 ? "step-active" : ""}`}></div>
      </div>
    </header>
  );
}

export default CheckoutHeader;
