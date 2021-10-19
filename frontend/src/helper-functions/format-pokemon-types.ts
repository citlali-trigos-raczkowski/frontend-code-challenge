import { PokemonType } from "@/types/pokemon-types";
import { PokemonDropdownType } from "@/types/component-types";
import {
  DropdownPlaceholder,
  NothingDropdownOption,
} from "../assets/constants";
const directions = {
  text: DropdownPlaceholder,
  value: null,
  disabled: true,
};

export const baseOptions: PokemonDropdownType[] = [
  directions,
  NothingDropdownOption,
];

export const createPokemonTypeList = (
  pokemonTypeVals: PokemonType[]
): PokemonDropdownType[] => {
  const pokemonList = pokemonTypeVals.map((type: string) => {
    return { text: type, value: type };
  });
  return [...baseOptions, ...pokemonList];
};

export const getFilterValue = (selectedFilter: string | null): string => {
  return selectedFilter ? selectedFilter : "all";
};
