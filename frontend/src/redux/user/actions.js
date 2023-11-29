import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3010';
axios.defaults.baseURL = 'https://foodsite-virid.vercel.app';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/REGISTER',
  async (registerData, thunkAPI) => {
    try {
      const response = await axios.post('/soyummy/signup', registerData);
      console.log(response.data);
      setHeader(response.data.user.token);

      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/LOGIN',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post('/soyummy/login', loginData);
      setHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/LOGOUT', async (_, thunkAPI) => {
  try {
    // eslint-disable-next-line
    const response = await axios.post('/soyummy/logout');
    removeToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
