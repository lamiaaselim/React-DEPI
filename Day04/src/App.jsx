import { Route, Routes } from "react-router";
import "./app.css";
import MyHome from "./pages/MyHome";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import { useState } from "react";

/*eslint-disable*/
function App() {
  const [cartCount, setCartCount]= useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyHome />} />
          <Route path="/products" element={<Store cartCount={cartCount} setCartCount= {setCartCount} />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
