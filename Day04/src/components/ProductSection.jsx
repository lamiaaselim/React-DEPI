import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../API/product";

export default function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <h1 className="text-center py-4">Our Product</h1>
        </div>

        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <ProductCard
                id={product.id}
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
