import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
