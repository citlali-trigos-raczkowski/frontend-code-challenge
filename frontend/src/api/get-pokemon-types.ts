import axios from "axios";
import { logGenericError, logStatusError } from "@/helper-functions/logging";
import { GqlUrl } from "@/api/api-configuration";
import { ApiResponse } from "@/types/api-types";
import { PokemonType } from "@/types/pokemon-types";

const GetPokemonTypes = async (): Promise<PokemonType[] | void> => {
  const queryString = `query { pokemonTypes }`;
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
        functionName: "GetPokemonTypes",
        status: res.status,
        statusText: res.statusText,
        queryString: null,
      });
    }
    return (res.data as ApiResponse).data.pokemonTypes as PokemonType[];
  } catch (err) {
    if (err) {
      logGenericError({
        functionName: "GetPokemonTypes",
        errorMessage: `${err}`,
      });
    }
  }
};

export default GetPokemonTypes;
