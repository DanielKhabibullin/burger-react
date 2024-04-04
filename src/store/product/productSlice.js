import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../const';

const initialState = {
  products: [],
  flagProduct: false,
  error: '',
};

export const productRequestAsync = createAsyncThunk(
  'product/fetch',
  (category) =>
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then((res) => res.json())
      .catch((error) => ({ error }))
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productRequestAsync.pending, (state) => {
        state.error = '';
        state.flagProduct = false;
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.products = action.payload;
        state.flagProduct = true;
      })
      .addCase(productRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
