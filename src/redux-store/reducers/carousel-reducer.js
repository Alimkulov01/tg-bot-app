import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
};

export const carouselReducer = createSlice({
  name: "carousel/actions",
  initialState,
  extraReducers: {},
});

export default carouselReducer.reducer;
