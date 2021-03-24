import React from "react";
import { Link } from "react-router-dom";

function BranchDetails() {
  return (
    <React.Fragment>
      <div className="branch-call-div">
        <div className="branch-call-flex">
          <a href="tel:22062082" className="branch-call text-center">
            Call Branch
          </a>
          <a
            href="https://www.google.com/maps/place/Mijana+Restaurant+and+Cafe/@29.3474338,48.0381806,17z/data=!4m12!1m6!3m5!1s0x3fcf9d2be85fb84d:0xfa1e3995ce7f3e13!2sMijana+Restaurant+and+Cafe!8m2!3d29.3474338!4d48.0403693!3m4!1s0x3fcf9d2be85fb84d:0xfa1e3995ce7f3e13!8m2!3d29.3474338!4d48.0403693"
            class="text-center branch-call"
            target="_blank"
          >
            Get Direction
          </a>
        </div>
      </div>
      <div className="details-container pt-2">
        <div className="branch-inner-div">
          <p className="branch-big-text">
            <span>
              <i class="fa fa-circle"></i> Open Till{"  "}
            </span>
            15:30 PM
          </p>
        </div>
      </div>
      <div className="details-container pt-2">
        <div className="branch-inner-div branch-text-flex">
          <p className="branch-small-text">Sunday - Saturday</p>
          <p className="branch-small-text">08:30 AM - 15:30 PM</p>
        </div>
      </div>
      <div className="details-container pt-2">
        <div className="branch-inner-div">
          <p className="branch-small-text">
            Fahaheel - Block 12, Al Dabous Street, Al Kout Mall
          </p>
        </div>
      </div>
      <div className="details-container cart-blank-space"></div>
      <div className="bottom-button">
        <Link className="text-center checkout-button">Pickup Available</Link>
      </div>
    </React.Fragment>
  );
}

export default BranchDetails;
