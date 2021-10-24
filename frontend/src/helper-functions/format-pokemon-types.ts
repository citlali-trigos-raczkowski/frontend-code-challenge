import { PokemonType } from "@/types/pokemon-types";
import { PokemonDropdownType } from "@/types/component-types";
import { DropdownDirections, NothingDropdownOption } from "../assets/constants";
import { isNotEmpty } from "./format-strings";

export const baseOptions: PokemonDropdownType[] = [
  DropdownDirections,
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
  return selectedFilter !== null && isNotEmpty(selectedFilter)
    ? selectedFilter
    : "all";
};
