import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import authFormReducer from './slices/authFormSlice';
import notificationReducer from './slices/notificationSlice';
import { axiosMiddleware } from './middlewares/axiosMiddleware';

const store = configureStore({
  reducer: {
    auth: authReducer,
    authForm: authFormReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(axiosMiddleware),
});

export default store;
