import { PokemonType } from "@/types/pokemon-types";
import { PokemonDropdownType } from "@/types/component-types";

const directions = {
  text: "Filter by Pokemon Type",
  value: null,
  disabled: true,
};
const nothingOption = { text: "No Filter", value: "all" };

export const baseOptions = [directions, nothingOption]

export const createPokemonTypeList = (
  pokemonTypeVals: PokemonType[]
): PokemonDropdownType[] => {
  const pokemonList = pokemonTypeVals.map((type: string) => {
    return { text: type, value: type };
  });
  return [...baseOptions, ...pokemonList];
};

export const getFilterValue = (selectedFilter: string | null) => {
  return selectedFilter ? selectedFilter : "all";
};
