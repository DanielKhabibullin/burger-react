import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../const';

const initialState = {
  products: [],
  flag: false,
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
        state.flag = false;
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.products = action.payload;
        state.flag = true;
      })
      .addCase(productRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
