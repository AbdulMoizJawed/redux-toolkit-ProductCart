import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder)=>{
    builder
    .addCase(fetchProducts.pending, (state, action)=>{
        state.status = STATUSES.LOADING;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = STATUSES.IDLE
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status =STATUSES.ERROR
    })

  }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// THUNKS

// Normal Thunk
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await axios("https://fakestoreapi.com/products");
//       let data = res.data;
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       dispatch(setStatus(STATUSES.ERROR));
//       console.log(error);
//     }
//   };
// }

// Toolkit Thunk

export const fetchProducts = createAsyncThunk('products/fetch', async()=>{
    const res = await axios("https://fakestoreapi.com/products");
     let data = await res.data;
     return data;
})
