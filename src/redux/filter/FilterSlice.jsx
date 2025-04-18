import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    model: 'Show all cars',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  reducers: {
    getModel(state, action) {
      state.model = action.payload;
    },
    getPrice(state, action) {
      state.price = action.payload;
    },
    getMileageFrom(state, action) {
      state.mileageFrom = action.payload;
    },
    getMileageTo(state, action) {
      state.mileageTo = action.payload;
    },
    clearAllFilters(state, action) {
      state.model = 'Show all cars';
      state.price = '';
      state.mileageFrom = '';
      state.mileageTo = '';
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const {
  getModel,
  getPrice,
  clearAllFilters,
  getMileageFrom,
  getMileageTo,
} = filtersSlice.actions;
