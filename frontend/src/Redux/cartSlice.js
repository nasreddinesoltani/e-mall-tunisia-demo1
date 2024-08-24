import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  totalPrice: 0,
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, price, name, photo } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += 1;
      } else {
        state.items.push({ productId, quantity, price, name, photo });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      const { productId } = action.payload;
      const newCart = (state.items = state.items.filter(
        (item) => item.productId !== productId
      ));
      state.items = newCart;
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    // changeQuantity(state, action) {
    //   const { productId, quantity } = action.payload;
    //   const indexProductId = state.items.findIndex(
    //     (item) => item.productId === productId
    //   );
    //   if (quantity > 0) {
    //     state.items[indexProductId].quantity = quantity;
    //   } else {
    //     state.items = state.items.filter(
    //       (item) => item.productId !== productId
    //     );
    //   }
    //   localStorage.setItem("carts", JSON.stringify(state.items));
    // },

    minusQuantity(state, action) {
      const { productId } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (state.items[indexProductId].quantity > 1) {
        state.items[indexProductId].quantity -= 1;
      } else if (state.items[indexProductId].quantity === 1) {
        const newCart = (state.items = state.items.filter(
          (item) => item.productId !== productId
        ));
        state.items = newCart;
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const { addToCart, toggleStatusTab, removeFromCart, minusQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
