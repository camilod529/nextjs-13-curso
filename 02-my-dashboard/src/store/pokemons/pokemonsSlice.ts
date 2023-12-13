import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/**
 * {
 * favorites:{
 *  '1': {id: 1, name: 'bulbasaur'}
 *  '2': {id: 2, name: 'ivysaur'}
 *  '3': {id: 3, name: 'venusaur'}
 * }
 * }
 */

interface FavoritePokemonsState {
    favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): FavoritePokemonsState => {
//     // if (typeof localStorage === "undefined") return {};
//     const favorites = JSON.parse(localStorage.getItem("favoritePokemons") ?? "{}");
//     return favorites;
// };

const initialState: FavoritePokemonsState = {
    favorites: {},
    // ...getInitialState(),
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload;
        },

        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            if (!!state.favorites[pokemon.id]) {
                delete state.favorites[pokemon.id];
            } else {
                state.favorites[pokemon.id] = pokemon;
            }
        },
    },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
