import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemonSlice: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemonSlice } = pokemonSlice.actions;
export default pokemonSlice.reducer;
