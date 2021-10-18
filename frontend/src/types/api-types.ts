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
  favorited: boolean;
};

export type ApiResponse = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  error?: any
};

export type FavTogglePokemonResponse = FavoritePokemonResponse | UnfavoritePokemonResponse;

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
  success: boolean
}