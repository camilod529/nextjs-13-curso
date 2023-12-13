import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

const getInitialState = (): FavoritePokemonsState => {
    const favorites = JSON.parse(localStorage.getItem("favoritePokemons") ?? "{}");
    return favorites;
};

const initialState: FavoritePokemonsState = {
    ...getInitialState(),
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            if (!!state[pokemon.id]) {
                delete state[pokemon.id];
            } else {
                state[pokemon.id] = pokemon;
            }
            localStorage.setItem("favoritePokemons", JSON.stringify(state));
        },
    },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
