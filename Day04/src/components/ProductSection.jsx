import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

export default function ProductSection({ cartCount, setCartCount }) {
  const products = useSelector((state) => state.products.arrWithCount);

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
                count= {product.count}
                title={product.title}
                description={product.category}
                price={product.price}
                image={product.image}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
