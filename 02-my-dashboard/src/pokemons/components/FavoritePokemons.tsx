"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
    const favorite = useAppSelector((state) => Object.values(state.pokemons));
    const [pokemons, setPokemons] = useState(favorite);

    return <>{pokemons.length === 0 ? <NoFavorites /> : <PokemonGrid pokemons={pokemons} />}</>;
};
const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No Hay favoritos</span>
        </div>
    );
};
