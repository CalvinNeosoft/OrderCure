import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function OrderType() {
  const [tabSelected, setTabSelected] = useState("delivery");

  const changeSelectedTab = (type) => {
    setTabSelected(type);
  };

  return (
    <div className="order-type-select">
      <ul className="nav nav-tabs order-type-select-box" role="tablist">
        <li class="nav-item">
          <span
            onClick={() => changeSelectedTab("delivery")}
            class={`nav-link ${tabSelected === "delivery" ? "active" : ""}`}
            role="tab"
            data-toggle="tab"
            aria-selected={tabSelected === "delivery"}
          >
            <p class="ordertype-link-title">Delivery</p>
          </span>
        </li>
        <li class="nav-item">
          <span
            onClick={() => changeSelectedTab("pickup")}
            class={`nav-link ${tabSelected === "pickup" ? "active" : ""}`}
            role="tab"
            data-toggle="tab"
            aria-selected={tabSelected === "pickup"}
          >
            <p class="ordertype-link-title">Pickup</p>
          </span>
        </li>
        <li class="nav-item">
          <span
            onClick={() => changeSelectedTab("later")}
            class={`nav-link ${tabSelected === "later" ? "active" : ""}`}
            role="tab"
            data-toggle="tab"
            aria-selected={tabSelected === "later"}
          >
            <p class="ordertype-link-title">Deliver Later</p>
          </span>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          className={`tab-pane ${tabSelected === "delivery" ? "active" : ""}`}
          id="delivery"
        >
          <div className="delivery-select">
            <div className="delivery-detail-selected">
              <Link to="/area">Area</Link>
              <Link to="/area">
                <span>Abdullah Al Salem</span>
                <i className="fa fa-angle-right right-go-arrow"></i>
              </Link>
            </div>
            <div className="delivery-detail-selected">
              <Link to="/area">Delivery Time</Link>
              <Link to="/area">
                <span>Delivery Within 2 Hours</span>
                <i className="fa fa-angle-right right-go-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${tabSelected === "pickup" ? "active" : ""}`}
          id="pickup"
        >
          <div className="delivery-select">
            <div className="delivery-detail-selected">
              <Link to="/area">Area</Link>
              <Link to="/area">
                <span>Abdullah Al Salem</span>
                <i className="fa fa-angle-right right-go-arrow"></i>
              </Link>
            </div>
            <div className="delivery-detail-selected">
              <Link>Delivery At</Link>
              <Link>
                <span>Branch</span>
                <i className="fa fa-angle-right right-go-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${tabSelected === "later" ? "active" : ""}`}
          id="later"
        >
          <div className="delivery-select">
            <div className="delivery-detail-selected">
              <Link to="/area">Area</Link>
              <Link to="/area">
                <span>Abdullah Al Salem</span>
                <i className="fa fa-angle-right right-go-arrow"></i>
              </Link>
            </div>
            <div className="delivery-detail-selected">
              <Link>Delivery Time</Link>
              <Link>
                <span>Delivery At 10</span>
                <i className="fa fa-angle-right right-go-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderType;
