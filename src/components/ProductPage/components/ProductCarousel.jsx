import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ProductCarousel() {
  return (
    <OwlCarousel items={1} className="owl-theme" loop dots={false} margin={8}>
      <div>
        <img
          className="img"
          src={
            "https://payzah.net/production770/upload/ecommerce/product/2QRrAp36KWkjALLDAYANTIBACTERIALWETWIPES72PCS.jpg"
          }
        />
      </div>
      <div>
        <img
          className="img"
          src={
            "https://payzah.net/production770/upload/ecommerce/product/hzpE6gKOX47NALLDAY10WIPES.jpg"
          }
        />
      </div>
    </OwlCarousel>
  );
}

export default ProductCarousel;
