import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import authFormReducer from './slices/authFormSlice';
import { axiosMiddleware } from './middlewares/axiosMiddleware';

const store = configureStore({
  reducer: {
    auth: authReducer,
    authForm: authFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(axiosMiddleware),
});

export default store;
