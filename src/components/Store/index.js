import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

const Store = configureStore({
  reducer: {
    cartRdx: CartReducer,
  }
})

export default Store;