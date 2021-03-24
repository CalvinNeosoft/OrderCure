import React from "react";

function Footer() {
  return (
    <div className="pt-3 footer">
      <a href="http://payzah.com/ecommerce.html">
        <img
          src="https://payzah.net/production770/ecommercelayout/side/images/estorelogovertical.png"
          className="img-fluid estore-img"
          alt="estore"
        ></img>
      </a>
      <a href="http://payzah.com/">
        <img
          src="https://payzah.net/production770/ecommercelayout/side/images/logos.png"
          className="knet-img p-1"
          alt="knet"
        ></img>
      </a>
      <div className="powered-by-container">
        <span>Powered by</span>
        <a href="http://payzah.com/">
          <img
            src="https://payzah.net/production770/ecommercelayout/side/images/Logo-05.png"
            alt="ecom"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
