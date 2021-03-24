import React from "react";

function ContactInfoForm() {
  return (
    <div className="checkout-step-one">
      <h1 className="main-heading">Contact Information</h1>
      <p className="sub-text pb-3">
        We’ll use it to get back to you for order updates
      </p>
      <div className="checkout-one">
        <div className="form-div">
          <label className="label-name">
            Full Name<sup>*</sup>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            id="name"
            name="first_name"
            required="true"
            value=""
          ></input>
          <label className="error-text">This field is required.</label>
        </div>
        <div className="form-div">
          <label className="label-name">
            Phone<sup>*</sup>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            id="name"
            name="phone"
            required="true"
            value=""
          ></input>
          <label className="error-text">This field is required.</label>
        </div>
        <div className="form-div">
          <label className="label-name">E-mail (optional)</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            id="name"
            name="email"
            value=""
          ></input>
          <label className="error-text">This field is incorrect</label>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoForm;
