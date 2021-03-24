import React from "react";
import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <li className="products-list-item choose">
      <div className="product-div">
        {false && <span className="item-count">1X</span>}
        <div>
          <Link className="product-image-link">
            <img
              src="https://payzah.net/production770/upload/ecommerce/product/20200603_1548322.jpg"
              alt="some"
              className="product-list-image"
            ></img>
            <span className="product-offer">BEST OFFERS</span>
          </Link>
        </div>
        <div className="product-list-description">
          <Link className="product-list-title">IMMUNITYPACKAGE FOR ADULTS</Link>
          <Link className="product-list-subtitle">Sub-title</Link>
          <div className="product-cost-div">
            <del>
              <span className="cost-bubble">KD 1.350</span>
            </del>
            {/* <Link className="cost-bubble">Currently unavailable</Link> */}
            {/* <Link
                  className="cost-bubble"
                  style={{ backgroundColor: "#b4de0b", color: "white" }}
                >
                  Buy 1 Get 2 Free
                </Link> */}
            <Link className="cost-bubble">
              KD 0.950 &nbsp;
              <img
                src="https://payzah.net/production770/ecommercelayout/side/images/cart.png"
                className="cart-image"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
