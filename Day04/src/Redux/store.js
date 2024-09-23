import { configureStore } from "@reduxjs/toolkit";
import cartCounter from "./Slices/cartCounterSlicer";
import products from './Slices/productSlicer'

export const store = configureStore({
  reducer: {
    cartCounter,
    products
  },
});
