import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://pokeapi.co/api/v2/pokemon/` }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (limit) => `?limit=${limit}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
