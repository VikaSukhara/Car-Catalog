import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65aa8864081bd82e1d972de5.mockapi.io/api';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/catalog?page=${page}&limit=12`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavorites = createAsyncThunk(
  '/catalog/getById',
  async (id, thunkAPI) => {
    try {
      const promises = id.map(id => axios.get(`/catalog?id=${id}`));
      const favourites = await Promise.all(promises);
      return favourites.map(response => response.data[0]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
