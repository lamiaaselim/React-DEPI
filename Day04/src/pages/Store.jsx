import React from "react";
import ProductSection from "../components/ProductSection";

export default function Store({cartCount , setCartCount}) {
  return (
    <>
      <ProductSection cartCount={cartCount} setCartCount={setCartCount} />
    </>
  );
}
