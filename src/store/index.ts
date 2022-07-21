// import { createStore } from "redux";

// const pokemonReducer = (state = [], action) => {
//   if (action.type === "SET_POKEMON") {
//     return action.payload;
//   }
//   return state;
// };

// let store = createStore(pokemonReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "@api";
import pokemonSliceReducer from "./modules/pokemon.store";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemon: pokemonSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// setupListeners(store.dispatch);

// store.subscribe(() => console.log(store.getState()));
