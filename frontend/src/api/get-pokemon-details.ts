import axios from "axios";
import { logGenericError, logStatusError } from "@/helper-functions/logging";
import { GqlUrl } from "@/api/api-configuration";
import { GetPokemonDetailInput, ApiResponse } from "@/types/api-types";
import { DetailedPokemonType } from "@/types/pokemon-types";

const GetPokemonDetail = async ({
  pokemonName,
}: GetPokemonDetailInput): Promise<DetailedPokemonType | void> => {
  const queryString = `
    query pokemonByName($name: String!){
        pokemonByName(name: $name) {
            id, name, image, types, isFavorite, sound, maxCP, maxHP, weight { minimum, maximum }, height { minimum, maximum } evolutions { name, image }
        }
    }`;

  try {
    const res = await axios({
      url: GqlUrl,
      method: "post",
      timeout: 8000,
      data: {
        query: queryString,
        variables: {
          name: pokemonName,
        },
      },
    });
    if (res.status !== 200) {
      logStatusError({
        functionName: "GetPokemonDetail",
        status: res.status,
        statusText: res.statusText,
        queryString: null,
      });
    }

    return (res.data as ApiResponse).data.pokemonByName as DetailedPokemonType;
  } catch (err) {
    if (err) {
      logGenericError({
        functionName: "GetPokemonDetail",
        errorMessage: `${err}`,
      });
    }
  }
};

export default GetPokemonDetail;
