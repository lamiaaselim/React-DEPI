import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class ProductSection extends Component {
  render() {
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <h1 className="text-center">Our Product</h1>
          </div>
          <div className="row g-3">
            <div className="col-md-4">
              <ProductCard />
            </div>
            <div className="col-md-4">
              <ProductCard />
            </div>
            <div className="col-md-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </>
    );
  }
}
