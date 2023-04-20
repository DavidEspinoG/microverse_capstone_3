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

const fetchPokemonDetailed = createAsyncThunk(
  'pokemons/fetchPokemonDetailed',
  async (pokemonId) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = res.json();
    return data;
  },
);

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    types: [],
    pokemonsOfType: [],
    pokemonDetailed: [],
    loading: false,
    error: false,
    search: '',
    filtered: [],
  },
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateFiltered: (state, action) => {
      state.filtered = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        action.payload.splice(action.payload.length - 2, 2);
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
      })
      .addCase(fetchPokemonDetailed.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonDetailed.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonDetailed = action.payload;
      })
      .addCase(fetchPokemonDetailed.rejected, (state) => {
        state.error = true;
        state.loading = true;
      });
  },
});

export default pokemonSlice;
export { fetchCategories, fetchPokemonsOfType, fetchPokemonDetailed };
