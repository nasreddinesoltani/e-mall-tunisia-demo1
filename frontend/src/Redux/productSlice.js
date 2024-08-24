import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("product/getAll", async () => {
  axios.defaults.withCredentials = true;
  try {
    const { data } = await axios.get("http://localhost:5000/api/products/");
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
