import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginMode: false,
  isOpen: false,
};

const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setIsLoginMode: (state, { payload }) => {
      state.isLoginMode = payload;
    },
    setIsAuthOpen: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});

export const { setIsLoginMode, setIsAuthOpen } = authFormSlice.actions;

export const getIsAuthOpen = (state) => state.authForm.isOpen;
export const getIsLoginMode = (state) => state.authForm.isLoginMode;

export default authFormSlice.reducer;
