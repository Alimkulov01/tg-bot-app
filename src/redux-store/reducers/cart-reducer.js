import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartAmount: 0,
  cartItems: [],
};

export const cartReducer = createSlice({
  name: "cart/actions",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      let cartCopy = [...state.cartItems];
      const isExist = cartCopy.find((item) => item?.id === payload?.id);
      if (isExist) {
        cartCopy = cartCopy.map((item) => {
          if (item?.id === payload?.id) {
            return {
              ...item,
              quantity: item?.quantity + 1,
            };
          }
          return item;
        });
        state.cartItems = cartCopy;
        state.cartAmount = cartCopy.reduce((a, b) => {
          return a + b.quantity;
        }, 0);
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
        state.cartAmount = state.cartItems.reduce((a, b) => {
          return a + b.quantity;
        }, 0);
      }
    },
    removeFromCart(state, { payload }) {
      let cartCopy = [...state.cartItems];
      state.cartItems = cartCopy.filter((item) => item.id !== payload);
      state.cartAmount = state.cartItems.reduce((a, b) => {
        return a + b.quantity;
      }, 0);
    },
    decreaseCartItemQuantity(state, { payload }) {
      let cartCopy = [...state.cartItems];
      state.cartItems = cartCopy.map((item) => {
        if (item.id === payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      state.cartAmount = state.cartItems.reduce((a, b) => {
        return a + b.quantity;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, decreaseCartItemQuantity } =
  cartReducer.actions;

export default cartReducer.reducer;
