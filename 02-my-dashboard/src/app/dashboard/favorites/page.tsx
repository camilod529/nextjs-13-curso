import { FavoritePokemons } from "@/pokemons";

export const metadata = {
    title: "Favoritos",
    description: "Pokemones favoritos",
};

export default async function FavoritePokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Listado de Pokemons favoritos <small className="text-blue-500">Global estate</small>
            </span>
            <FavoritePokemons />
        </div>
    );
}
