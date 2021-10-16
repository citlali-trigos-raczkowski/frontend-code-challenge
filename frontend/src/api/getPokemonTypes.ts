import axios from "axios";
import { PokemonType } from "./types";

const GetPokemonTypes = async (): Promise<unknown> => {
  const queryString = `query { pokemonTypes }`;
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
        `Response status ${res.status} for GetPokemonTypes. Status text: ${res.statusText} `
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (res.data as any).data as PokemonType[];
  } catch (err) {
    console.log(`Error received from GetPokemonTypes: ${err}`);
  }
};

export default GetPokemonTypes;
