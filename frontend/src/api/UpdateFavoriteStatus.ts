/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {
  UpdateFavoriteStatusQueryInput,
  UpdateFavoriteStatusInput,
  GalleryPokemon,
} from "./types";

const UpdatePokemonStatus = async ({
  pokemonId,
  queryString,
}: UpdateFavoriteStatusQueryInput): Promise<unknown> => {
  try {
    const res = await axios({
      url: "http://localhost:4000/graphql",
      method: "post",
      timeout: 8000,
      data: {
        query: queryString,
        variables: {
          id: pokemonId,
        },
      },
    });
    if (res.status !== 200) {
      console.log(
        `Response status ${res.status} for updatePokemonStatus with query string ${queryString}. Status text: ${res.statusText} `
      );
    }
    // Don't forget to return something
    return (res.data as any).data.pokemons.edges as GalleryPokemon[];
  } catch (err) {
    console.log(`Error received from getPokemonList: ${err}`);
  }
};

export const UnfavoritePokemon = async ({
  pokemonId,
}: UpdateFavoriteStatusInput): Promise<any> => {
  const queryString = `
    mutation unFavoritePokemon($id: ID!){
      unFavoritePokemon(id: $id) {
        id
      }
    }`;
  return UpdatePokemonStatus({ queryString, pokemonId });
};

export const FavoritePokemon = async ({
  pokemonId,
}: UpdateFavoriteStatusInput): Promise<any> => {
  const queryString = `
    mutation favoritePokemon($id: ID!){
      favoritePokemon(id: $id) {
        id
      }
    }`;
  return UpdatePokemonStatus({ queryString, pokemonId });
};
