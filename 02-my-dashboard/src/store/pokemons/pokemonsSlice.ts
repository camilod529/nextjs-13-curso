import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";
/**
 * {
 *  '1': {id: 1, name: 'bulbasaur'}
 *  '2': {id: 2, name: 'ivysaur'}
 *  '3': {id: 3, name: 'venusaur'}
 * }
 */

interface FavoritePokemonsState {
    [key: string]: SimplePokemon;
}

const initialState: FavoritePokemonsState = {
    "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
