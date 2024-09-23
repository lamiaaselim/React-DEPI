import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { ProductsContextProvider } from "./Context/Product";
import {store} from "./Redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <ProductsContextProvider> */}

    <Provider store={store}>
      <App />
    </Provider>

    {/* </ProductsContextProvider> */}
  </BrowserRouter>
  // </React.StrictMode>
);
