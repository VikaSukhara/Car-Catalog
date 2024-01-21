import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    model: '',
    price: '',
  },
  reducers: {
    modelReducer(state, action) {
      state.model = action.payload;
    },
    priceReducer(state, action) {
      state.price = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { modelReducer, priceReducer } = filtersSlice.actions;
