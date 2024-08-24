import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
  devTools: true,
});

export default store;
