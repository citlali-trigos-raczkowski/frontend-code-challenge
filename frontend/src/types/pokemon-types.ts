export type GalleryPokemon = {
  name: string;
  id: string;
  image: string;
  types: PokemonType;
  isFavorite: boolean;
};

export type DetailedPokemonType = {
  id: string;
  number: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: PokemonType[];
  resistant: ResistantType[];
  attacks: PokemonAttack;
  weaknesses: WeaknessesType[];
  fleeRate: number;
  maxCP: number;
  evolutions: EvolutionPokemonType;
  evolutionRequirements: PokemonEvolutionRequirementType;
  maxHP: number;
  image: string;
  sound: string;
  isFavorite: boolean;
};
type EvolutionPokemonType = {
  image: string;
  name: string;
};
type PokemonDimension = {
  minimum: string;
  maximum: string;
};

type PokemonAttack = {
  fast: AttackType;
  special: AttackType;
};

type AttackType = {
  name: string;
  type: string;
  damage: number;
};

type PokemonEvolutionRequirementType = {
  amount: number;
  name: string;
};

export type PokemonType = string;

type ResistantType = string;
type WeaknessesType = string;

export type PokemonEvolutionDataType = {
  name: string;
  image: string;
};
