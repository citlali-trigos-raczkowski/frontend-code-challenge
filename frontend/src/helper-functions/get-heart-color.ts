import { DetailedPokemonType, GalleryPokemon } from "@/types/pokemon-types";

export const getHeartColor = (
  pokemon: GalleryPokemon | DetailedPokemonType
): string => {
  return pokemon.isFavorite ? "pink" : "gray";
};
