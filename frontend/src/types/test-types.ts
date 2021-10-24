import { PokemonDropdownType } from "./component-types";
import { PokemonType } from "./pokemon-types";

export type TestingGetFilterType = {
  input: string | null;
  expectedOutput: string;
};
export type TestingIsNotEmptyType = {
  input: string | null;
  expectedOutput: boolean;
};
export type TestingCreatePokemonType = {
  input: PokemonType[];
  expectedOutput: PokemonDropdownType[];
};

export type TestingRemoveSlashesType = {
  input: string;
  expectedOutput: string;
};

export type TestingGetHeartColorType = {
  input: boolean;
  expectedOutput: "pink" | "gray";
};
