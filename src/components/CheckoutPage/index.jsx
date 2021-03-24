import React from "react";
import { useState } from "react";
import DesktopNavigationBar from "../HomePage/components/DesktopNavigationBar";
import CheckoutHeader from "./components/CheckoutHeader";
import ContactInfoForm from "./components/ContactInfoForm";

function CheckoutPage() {
  const [stepper, setStepper] = useState(0);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-12 order-md-2 order-sm-2 order-lg-1 order-2 small-col p-0">
          <CheckoutHeader
            stepper={stepper}
            setStepper={setStepper}
          ></CheckoutHeader>
          {stepper === 0 && <ContactInfoForm></ContactInfoForm>}
        </div>
        <div
          className="col-lg-8 col-md-12 order-md-1 order-lg-2 order-sm-1 order-1 large-col p-0"
          style={{
            backgroundImage: `url("https://payzah.net/production770/upload/ecommerce/product/curepharmacy_banner_1614852111cure.jpg")`,
          }}
        >
          <DesktopNavigationBar></DesktopNavigationBar>
          <div className="logo-container">
            <img
              src="https://payzah.net/production770/upload/5d6e69d574259_PHOTO-2019-06-10-16-12-48.jpg"
              className="img-fluid right-big-logo"
              alt="payzah-logo"
            ></img>
            <p className="logo-name mt-4">Cure Pharmacy</p>
            <p className="logo-detail mt-2">Free delivery </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
