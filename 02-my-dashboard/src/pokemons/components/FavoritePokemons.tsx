"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritePokemons = () => {
    const favorite = useAppSelector((state) => Object.values(state.pokemons));

    return <PokemonGrid pokemons={favorite} />;
};
