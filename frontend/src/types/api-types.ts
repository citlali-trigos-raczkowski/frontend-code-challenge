export type GetPokemonGalleryInput = {
  searchString: string | void;
  selectedFilter: string | void;
  isFavoriteSearch: boolean;
};

export type GetPokemonDetailInput = {
  pokemonName: string;
};

export type UpdateFavoriteStatusQueryInput = {
  pokemonId: string;
  queryString: string;
};

export type UpdateFavoriteStatusInput = {
  pokemonId: string;
};

export type ToggleFavoritePokemonInput = {
  pokemonId: string;
};

// eslint-disable-next-line
export type ApiResponse = any;

export type FavoritePokemonResponse = {
  favoritePokemon: PokemonIdType;
};

export type UnfavoritePokemonResponse = {
  unFavoritePokemon: PokemonIdType;
};

type PokemonIdType = {
  id: string;
};

export type ResponseStatusType = {
  favorited?: boolean;
  success: boolean;
};

export type LogStatusErrortype = {
  functionName: string;
  status: number;
  statusText: string;
  queryString: string | null;
};

export type LogGenericErrorType = {
  errorMessage: string;
  functionName: string;
};
