import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
};

export const wishlistReducer = createSlice({
  name: "wishlist/actions",
  initialState,
  reducers: {
    updateWishes(state, { payload }) {
      const wishesCopy = [...state.list];
      const isExist = wishesCopy.find((item) => item.id === payload.id);
      if (isExist) {
        state.list = wishesCopy.filter((item) => item.id !== payload.id);
      } else {
        state.list.push(payload);
      }
    },
  },
});

export const { updateWishes } = wishlistReducer.actions;

export default wishlistReducer.reducer;
