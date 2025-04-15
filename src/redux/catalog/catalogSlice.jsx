import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    hasMore: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
