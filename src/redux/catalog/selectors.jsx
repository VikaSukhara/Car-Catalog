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
    return cars.filter(car => {
      const matchesModel =
        filters.model === 'Show all cars' ||
        (car.make &&
          typeof filters.model === 'string' &&
          car.make.toLowerCase().includes(filters.model.toLowerCase()));

      const carPrice = Number(car.rentalPrice.slice(1));

      const matchesPrice = !filters.price || carPrice <= filters.price;

      const carMileage = car.mileage;
      const from = parseInt(filters.mileageFrom, 10);
      const to = parseInt(filters.mileageTo, 10);
      const matchesMileage =
        (!filters.mileageFrom || carMileage >= from) &&
        (!filters.mileageTo || carMileage <= to);

      return matchesModel && matchesPrice && matchesMileage;
    });
  }
);
