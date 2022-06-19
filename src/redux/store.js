import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from './services/TMDB';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
