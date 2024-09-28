import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Cart() {
  const { arrWithCount } = useSelector((state) => state.products);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const productHasCount = arrWithCount.filter((product) => product.count);
    setCartItems(productHasCount);
  }, [arrWithCount]);
  return (
    <>
      {cartItems.map((item) => (
        <div className="container py-5">
          <div className="row g-3">
            <div className="col-md-6 offset-md-3">
              <ProductCard
                id={item.id}
                count={item.count}
                title={item.title}
                description={item.category}
                price={item.price}
                image={item.image}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
