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
  async (typeId) => {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
    const data = await res.json();
    return data.pokemon;
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
      })
      .addCase(fetchPokemonsOfType.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchPokemonsOfType.fulfilled, (state, action) => {
        state.pokemonsOfType = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemonsOfType.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default pokemonSlice;
export { fetchCategories, fetchPokemonsOfType };
