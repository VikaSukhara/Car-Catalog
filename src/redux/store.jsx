import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { catalogReducer } from './catalog/catalogSlice';
import { filtersReducer } from './filter/FilterSlice';
import { favoriteReducer } from './favorite/favoriteSlice';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'favourite',
  storage,
};

export const store = configureStore({
  reducer: {
    favorite: persistReducer(persistConfig, favoriteReducer),
    catalog: catalogReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
