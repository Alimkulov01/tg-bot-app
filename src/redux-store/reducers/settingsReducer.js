import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  isLoading: false,
  productsLayoutSettings: {
    layoutTypes: ["vertical", "horizontal"],
    activeLayout: "vertical",
    columnAmounts: [6, 4, 3],
    activeAmount: 3,
    showOnSale: false,
  },
};

export const getCountries = createAsyncThunk("settings/getCountries");

export const settingsReducer = createSlice({
  name: "settings/actions",
  initialState,
  reducers: {
    changeColumnAmount(state, { payload }) {
      state.productsLayoutSettings.activeAmount = payload;
      state.productsLayoutSettings.activeLayout = "horizontal";
    },
    changeLayout(state, { payload }) {
      state.productsLayoutSettings.activeLayout = payload;
    },
  },
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountries.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.countries = payload;
    },
    [getCountries.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { changeColumnAmount, changeLayout } = settingsReducer.actions;

export default settingsReducer.reducer;
