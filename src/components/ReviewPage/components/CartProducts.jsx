import React from "react";
import { Link } from "react-router-dom";

function CartProducts() {
  return (
    <React.Fragment>
      <div className="cart-product-details mt-3">
        <Link className="cart-product-name">
          FIRST AID KIT 25PERSON
          {false && <p className="cart-product-notes">Hello</p>}
        </Link>
        <p className="cart-product-total">
          KD 6.500
          {false && (
            <>
              <br /> <span className="cart-product-discount">KD 21.000</span>
            </>
          )}
        </p>
      </div>
      <div className="cart-product-quantity mt-3">
        <div className="product-quantity-control">
          <button className="product-quantity-button">
            <i class="fa fa-minus"></i>
          </button>
          <p className="product-quantity">1</p>
          <button className="product-quantity-button">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <button className="remove-product-button">Remove</button>
      </div>
    </React.Fragment>
  );
}

export default CartProducts;
