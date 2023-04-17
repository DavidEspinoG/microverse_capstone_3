import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCategories = createAsyncThunk(
  'pokemons/fetchCategories',
  async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const data = await res.json();
    return data.results;
  },
);

const fetchPokemonsOfType = createAsyncThunk(
  'pokemons/fetchPokemonsOfType',
  async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
);

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    types: [],
    pokemonsOfType: [],
    pokemon_detailed: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.types = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default pokemonSlice;
export { fetchCategories, fetchPokemonsOfType };
