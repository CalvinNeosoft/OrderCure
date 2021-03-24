import React from "react";
import { Link } from "react-router-dom";

function CategoryContainer() {
  return (
    <div className="category-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-4  col-sm-4 col-6 mt-3 category-tab">
            <Link className="category-link" to="/products">
              <img
                src="https://payzah.net/production770/upload/ecommerce/category/1613385417_cure-05.jpg"
                className="category-image img-fluid"
              ></img>
              <p className="category-title pb-3">Cure Kits</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-4  col-sm-4 col-6 mt-3 category-tab">
            <Link className="category-link" to="/">
              <img
                src="https://payzah.net/production770/upload/ecommerce/category/1613385417_cure-05.jpg"
                className="category-image img-fluid"
              ></img>
              <p className="category-title pb-3">Cure Kits</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-4  col-sm-4 col-6 mt-3 category-tab">
            <Link className="category-link" to="/">
              <img
                src="https://payzah.net/production770/upload/ecommerce/category/1613385417_cure-05.jpg"
                className="category-image img-fluid"
              ></img>
              <p className="category-title pb-3">Cure Kits</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-4  col-sm-4 col-6 mt-3 category-tab">
            <Link className="category-link" to="/">
              <img
                src="https://payzah.net/production770/upload/ecommerce/category/1613385417_cure-05.jpg"
                className="category-image img-fluid"
              ></img>
              <p className="category-title pb-3">Cure Kits</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-4  col-sm-4 col-6 mt-3 category-tab">
            <Link className="category-link" to="/">
              <img
                src="https://payzah.net/production770/upload/ecommerce/category/1613385417_cure-05.jpg"
                className="category-image img-fluid"
              ></img>
              <p className="category-title pb-3">Cure Kits</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-4  col-sm-4 col-6 mt-3 category-tab">
            <Link className="category-link" to="/">
              <img
                src="https://payzah.net/production770/upload/ecommerce/category/1613385417_cure-05.jpg"
                className="category-image img-fluid"
              ></img>
              <p className="category-title pb-3">Cure Kits</p>
            </Link>
          </div>
          <div className="col-lg-6 col-md-4  col-sm-4 col-6 mt-3 category-tab">
            <Link className="category-link" to="/">
              <img
                src="https://payzah.net/production770/upload/ecommerce/category/1613385417_cure-05.jpg"
                className="category-image img-fluid"
              ></img>
              <p className="category-title pb-3">Cure Kits</p>
            </Link>
          </div>
        </div>
        <div class="no-data"> </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
