import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./Context/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
