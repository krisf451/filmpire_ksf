import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from './services/TMDB';
import authReducer from './features/authSlice';
import genreOrCategoryReducer from './features/currentGenreOrCategory';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
