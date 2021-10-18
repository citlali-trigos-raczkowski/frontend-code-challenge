import { logGenericError, logStatusError } from "@/helper-functions/logging";
import axios from "axios";
import { GqlUrl } from "./api-configuration";
import { ApiResponse, GetPokemonGalleryInput } from "@/types/api-types";
import { GalleryPokemon } from "@/types/pokemon-types";

const GetGalleryPokemons = async ({
  searchString,
  selectedFilter,
  isFavoriteSearch,
}: GetPokemonGalleryInput): Promise<GalleryPokemon[] | void> => {
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
      url: GqlUrl,
      method: "post",
      timeout: 8000,
      data: {
        query: queryString,
      },
    });
    if (res.status !== 200) {
      logStatusError({
        functionName: "GetGalleryPokemons",
        status: res.status,
        statusText: res.statusText,
        queryString: searchString ? searchString : null,
      });
    }
    return (res.data as ApiResponse).data.pokemons.edges as GalleryPokemon[];
  } catch (err) {
    if (err) {
      logGenericError({
        functionName: "GetGalleryPokemons",
        errorMessage: `${err}`,
      });
    }
  }
};
export default GetGalleryPokemons;
