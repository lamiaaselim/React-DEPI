import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

export default function ProductSection() {
  const [products, sectProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => sectProducts(data));
  }, []);

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <h1 className="text-center">Our Product</h1>
        </div>

        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <ProductCard
                title={product.title}
                description={product.category}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
