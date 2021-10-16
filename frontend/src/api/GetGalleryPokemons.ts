/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { GetPokemonGalleryInput } from "./types";

type GalleryPokemon = any;

export const GetGalleryPokemons = async ({
  searchString,
  selectedFilter,
  isFavoriteSearch,
}: GetPokemonGalleryInput): Promise<any> => {
  const queryString = `query { pokemons(query: { limit: 9999, offset: 0, search:"${
    searchString ? searchString : ""
  }",
      ${
        selectedFilter && selectedFilter !== "all"
          ? `filter: {type: "${selectedFilter}", ${
              isFavoriteSearch ? `isFavorite: true` : ``
            }}`
          : `${isFavoriteSearch ? `filter: {isFavorite: true}` : ``}`
      }
    }) { edges { id, name, image, types, isFavorite } } }`;

  try {
    const res = await axios({
      url: "http://localhost:4000/graphql",
      method: "post",
      timeout: 8000,
      data: {
        query: queryString,
      },
    });
    if (res.status !== 200) {
      console.log(
        `Response status ${res.status} for GetGalleryPokemons with search query ${searchString}. Status text: ${res.statusText} `
      );
    }
    // Don't forget to return something
    return (res.data as any).data.pokemons.edges as GalleryPokemon[];
  } catch (err) {
    console.error(`Error recieved from GetGalleryPokemons: ${err}`);
  }
};
