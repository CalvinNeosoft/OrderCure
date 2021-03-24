import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductsList() {
  return (
    <div className="products-main-div">
      <ul className="products-list">
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </ul>
    </div>
  );
}

export default ProductsList;
