import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Here all products have been retrived for test. you can change this as you want
  allProducts: [],
  //you can set your API response here for best seller products
  bestSellerProducts: [],
  //you can set your API response here for best popular products
  popularProducts: [],
};

export const productsReducer = createSlice({
  name: "carousel/actions",
  initialState,
  extraReducers: {},
});

export default productsReducer.reducer;
