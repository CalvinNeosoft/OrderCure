import React from "react";
import { Link, useHistory } from "react-router-dom";

function ReviewHeader() {
  const history = useHistory();
  console.log(history.location);
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
          <p className="delivery-order-title text-center">Review Order</p>
        </div>
      </div>
    </header>
  );
}

export default ReviewHeader;
