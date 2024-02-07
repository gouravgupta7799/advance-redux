import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import uiReducer from "./uiActions";

const Store = configureStore({
  reducer: {
    cartRdx: CartReducer,
    uiRdx: uiReducer,
  }
})

export default Store;