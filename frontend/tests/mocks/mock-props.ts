import {
  PokemonEvolutionDataType,
  GalleryPokemon,
} from "@/types/pokemon-types";

// eslint-disable-next-line
const GenericFunction = (): void => {};

export const sampleEvolutionPokemon: PokemonEvolutionDataType = {
  image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
  name: "Ivysaur",
};

export const MockGalleryPokemon: GalleryPokemon = {
  name: "Ivysaur",
  id: "001",
  image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
  types: ["water", "fire"],
  isFavorite: true,
};

export const SuccessAlertPropData = {
  alertType: "success",
  pokemonName: "Ivysaur",
  favorited: true,
  clearAlert: GenericFunction,
};

export const FailureAlertPropData = {
  alertType: "error",
  pokemonName: "Ivysaur",
  favorited: false,
  clearAlert: GenericFunction,
};

export const HeartToggleMockData = {
  togglePokemonfavorite: GenericFunction,
  heartColor: "pink",
};

export const TitleMockData = {
  pageTitle: "Page Title Sample",
};

export const SoundToggleMockData = {
  sound: "MockSoundSource",
};

export const NavigationMockData = {
  viewAll: GenericFunction,
  viewFavorites: GenericFunction,
  updateGalleryView: GenericFunction,
  galleryView: true,
  pokemonTypes: ["type1"],
  changeFilter: GenericFunction,
  updateSearchString: GenericFunction,
  modeOption: "dark",
};

export const NightModeToggleMockData = {
  toggleMode: GenericFunction,
  modeOption: "Light",
};

export const PokemonDisplayMockProp = {
  triggerReload: GenericFunction,
  galleryView: true,
  pokemons: [MockGalleryPokemon],
};

export const PokemonGalleryItemMockProp = {
  pokemon: MockGalleryPokemon,
  triggerReload: GenericFunction,
  toggleFavorite: GenericFunction,
};

export const DropdownFilterMockData = {
  pokemonTypes: ["fire", "water"],
  changeFilter: GenericFunction,
  modeOption: "dark",
};
export const SearchBarMockData = {
  updateSearchString: GenericFunction,
  modeOption: "dark",
};

export const PokemonDetailItemMockProp = {
  name: "Ivysaur",
  id: "001",
  image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
  types: ["water", "fire"],
  isFavorite: true,
  sound: "http://localhost:4000/sounds/2",
  maxCP: 1483,
  maxHP: 1632,
};
