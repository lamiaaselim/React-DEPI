import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class ProductSection extends Component {
  // class component stateful
  state = {
    products: [],
  };
  componentDidMount() {
    console.log("Mounting ...")
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => this.setState({products: data}));
  }
  render() {
    console.log("Rendering..........")
    return (
      <>
        <div className="container py-5 my-5">
          <div className="row">
            <h1 className="text-center">Our Product</h1>
          </div>

          <div className="row g-3">
            {this.state.products.map((product) => (
              <div key={product.id} className="col-md-4">
                <ProductCard
                  title={product.title}
                  description={product.category}
                  price={product.price}
                  image= {product.image}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
