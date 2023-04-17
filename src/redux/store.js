import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from './pokemonSlice';

const store = configureStore({
  reducer: pokemonSlice.reducer,
});

export default store;
