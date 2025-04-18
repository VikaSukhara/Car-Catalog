import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { catalogReducer } from './catalog/catalogSlice';
import { filtersReducer } from './filter/FilterSlice';
import { favoriteReducer } from './favorite/favoriteSlice';
import persistStore from 'redux-persist/es/persistStore';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'favourite',
  storage,
};
const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);


const filtersPersistConfig = {
  key: 'filters',
  storage,
};

const persistedFiltersReducer = persistReducer(filtersPersistConfig, filtersReducer);



export const store = configureStore({
  reducer: {
    favorite: persistedFavoriteReducer,
    catalog: catalogReducer,
    filters: persistedFiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
