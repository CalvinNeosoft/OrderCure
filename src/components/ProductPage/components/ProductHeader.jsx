import React from "react";
import { Link } from "react-router-dom";

function ProductHeader() {
  return (
    <header className="delivery-order-header">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <Link to="/">
            <img
              className="back-button"
              src="https://payzah.net/production770/ecommercelayout/side/images/left-arrow.png"
              alt="back button"
            ></img>
          </Link>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-11">
          <p className="delivery-order-title text-center">Product Details</p>
        </div>
      </div>
    </header>
  );
}

export default ProductHeader;
