import axios from "axios";
import {
  GetPokemonDetailInput,
  DetailedPokemonType,
  ApiResponse,
} from "./types";

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
      url: "http://localhost:4000/graphql",
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
      console.log(
        `Response status ${res.status} for GetPokemonDetail for pokemon name ${pokemonName}.`
      );
    }

    return (res.data as ApiResponse).data.pokemonByName as DetailedPokemonType;
  } catch (err) {
    console.log(
      `Query string ${queryString}. Error received from GetPokemonDetail: ${err}`
    );
  }
};

export default GetPokemonDetail;
