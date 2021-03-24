import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  const [note, setNote] = useState("");

  const onNoteChange = (e) => setNote(e.target.value);

  return (
    <React.Fragment>
      <div className="details-container pt-2">
        <div className="product-outer-div">
          <div className="product-inner-div">
            <h3 className="product-name">
              ALL DAY ANTI-BACTERIAL WET WIPES 72PCS
            </h3>
            <p className="product-category mt-3">Seasonal Items</p>
          </div>
        </div>
      </div>
      <div className="details-container pt-2">
        <div className="product-outer-div">
          <div className="product-inner-div">
            <div className="product-price-div">
              <p className="product-name">Price</p>
              <p className="product-price">
                <span>5.750KD </span>
                <del>7.000KD</del>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="details-container pt-2">
        <div className="product-outer-div">
          <div className="product-inner-div">
            <div className="product-price-div">
              <p className="product-name">SKU</p>
              <p className="product-price">owYEQIrsKjzG</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details-container pt-2">
        <div className="product-outer-div">
          <div className="product-inner-div margin-bottom-div">
            <div className="product-notes-div">
              <label class="label-note">Add a note (Optional)</label>
              <input
                type="text"
                id="add_note"
                value={note}
                onChange={(e) => onNoteChange(e)}
                aria-label=""
                placeholder=""
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="details-container pt-2">
        <div className="product-outer-div">
          <div className="product-inner-div item-count-div">
            <div className="count-control-div">
              <div className="control-button-div">
                <button class="control-button">
                  <i class="fa fa-minus"></i>
                </button>
                <p class="quantity-text">1</p>
                <button class="control-button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-button">
        <Link className="text-center checkout-button">
          Add to Order&nbsp;&nbsp;&nbsp;5.750 KD
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ProductDetails;
