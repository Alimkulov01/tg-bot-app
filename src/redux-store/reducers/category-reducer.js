import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
};

export const categoryReducer = createSlice({
  name: "category/actions",
  initialState,
  extraReducers: {},
});

export default categoryReducer.reducer;
