import { createSlice } from '@reduxjs/toolkit';
import { getFavorites } from '../catalog/operations.jsx';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favouriteIDs: [],
    favorite: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavourites(state, { payload }) {
      state.favouriteIDs = [...state.favouriteIDs, payload];
    },
    deleteFavourites(state, { payload }) {
      state.favouriteIDs = state.favouriteIDs.filter(item => item !== payload);
      state.favorite = state.favorite.filter(item => item.id !== payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFavorites.pending, handlePending)
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = payload; 
      })
      .addCase(getFavorites.rejected, handleRejected);
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { deleteFavourites, addFavourites } = favoriteSlice.actions;
