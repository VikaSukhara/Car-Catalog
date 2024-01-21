import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.catalog.items;
export const selectLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;

export const selectFilter = state => state.filters;

export const selectFavorite = state => state.favorite.favorite;
export const selectFavouriteIDs = state => state.favorite.favouriteIDs;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],

  (cars, filters) => {
    return cars.filter(cars =>
      cars.make.toLowerCase().includes(filters.model.toLowerCase())
    );
  }
);
