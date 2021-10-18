import { logGenericError, logStatusError } from "@/helper-functions/logging";
import axios from "axios";
import { GqlUrl } from "./api-configuration";
import {
  UpdateFavoriteStatusQueryInput,
  ToggleFavoritePokemonInput,
  ApiResponse,
} from "@/types/api-types";

const UpdatePokemonStatus = async ({
  pokemonId,
  queryString,
}: UpdateFavoriteStatusQueryInput): Promise<ApiResponse | void> => {
  try {
    const res = await axios({
      url: GqlUrl,
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
      logStatusError({
        functionName: "GetPokemonTypes",
        status: res.status,
        statusText: res.statusText,
        queryString: null,
      });
    } else if ((res.data as ApiResponse).error) {
      logGenericError({
        functionName: "getPokemonList",
        errorMessage: `${(res.data as ApiResponse).error}`,
      });
    }
    return (res.data as ApiResponse).data as ApiResponse;
  } catch (err) {
    if (err) {
      logGenericError({
        functionName: "getPokemonList",
        errorMessage: `${err}`,
      });
    }
  }
};

const getQueryString = (favorited: boolean) => {
  const favoriteValue = favorited ? "unFavoritePokemon" : "favoritePokemon";
  return `mutation ${favoriteValue}($id: ID!){
    ${favoriteValue}(id: $id) {
    id
  }
}`;
};

export const FavoritePokemon = async ({
  pokemonId,
}: ToggleFavoritePokemonInput): Promise<ApiResponse | void> => {
  const queryString = getQueryString(true);
  return UpdatePokemonStatus({ queryString, pokemonId });
};

export const UnFavoritePokemon = async ({
  pokemonId,
}: ToggleFavoritePokemonInput): Promise<ApiResponse | void> => {
  const queryString = getQueryString(false);
  return UpdatePokemonStatus({ queryString, pokemonId });
};
