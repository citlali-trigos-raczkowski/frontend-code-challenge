<template>
  <div>
    <div v-if="!typesLoading">
      <navigation
        :viewAll="viewAll"
        :viewFavorites="viewFavorites"
        :galleryView="galleryView"
        :updateSearchString="updateSearchString"
        :selectedFilter="selectedFilter"
        :changeFilter="changeFilter"
        :updateGalleryView="updateGalleryView"
        :pokemonTypes="pokemonTypes"
        :modeOption="modeOption"
      />
    </div>
    <loader v-if="galleryLoading" />
    <div v-else>
      <pokemon-display
        :pokemons="pokemons"
        :triggerReload="triggerReload"
        :galleryView="galleryView"
        :pokemonTypes="pokemonTypes"
      />
    </div>
  </div>
</template>

<script lang="ts">
import PokemonDisplay from "../components/pokemon-display.vue";
import Navigation from "../components/navigation.vue";
import Loader from "../components/loader.vue";
import GetGalleryPokemons from "../api/get-gallery-pokemons";
import GetPokemonTypes from "../api/get-pokemon-types";
import {
  createPokemonTypeList,
  getFilterValue,
  baseOptions,
} from "../helper-functions/format-pokemon-types";
import { GalleryPokemon, PokemonType } from "../types/pokemon-types";
import { PokemonDropdownType } from "../types/component-types";
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "PokemonGallery",
  props: {
    modeOption: {
      type: String,
    },
  },
  components: {
    "pokemon-display": PokemonDisplay,
    navigation: Navigation,
    loader: Loader,
  },
  methods: {
    fetchGalleryPokemons: function () {
      const response = GetGalleryPokemons({
        searchString: this.searchString,
        isFavoriteSearch: this.isFavoriteSearch,
        selectedFilter: getFilterValue(this.selectedFilter),
      });
      response.then((result: GalleryPokemon[] | void) => {
        if (result) {
          // eslint-disable-next-line
          this.pokemons = result as GalleryPokemon[] as any;
          this.galleryLoading = false;
        }
      });
    },
    fetchPokemonTypes: function () {
      const response = GetPokemonTypes();
      response.then((result: PokemonType[] | void) => {
        if (result) {
          const pokemonTypeList: PokemonDropdownType[] =
            createPokemonTypeList(result);
          this.pokemonTypes = pokemonTypeList;
          this.typesLoading = false;
        }
      });
    },
    viewFavorites: function () {
      if (this.isFavoriteSearch !== true) {
        this.isFavoriteSearch = true;
        this.fetchGalleryPokemons();
      }
    },
    triggerReload: function () {
      this.fetchGalleryPokemons();
    },
    viewAll: function () {
      if (this.isFavoriteSearch === true) {
        this.isFavoriteSearch = false;
        this.fetchGalleryPokemons();
      }
    },
    changeFilter: function (filter: string | null) {
      // eslint-disable-next-line
      this.selectedFilter = filter as any;
      this.fetchGalleryPokemons();
    },
    updateGalleryView: function () {
      this.galleryView = !this.galleryView;
    },
    updateSearchString: function (search: string) {
      this.searchString = search;
      this.fetchGalleryPokemons();
    },
  },
  beforeMount() {
    this.fetchGalleryPokemons();
    this.fetchPokemonTypes();
  },
  data() {
    const pokemonTypes: PokemonDropdownType[] = baseOptions;
    return {
      pokemons: Array as PropType<GalleryPokemon[]>,
      searchString: "",
      isFavoriteSearch: false,
      selectedFilter: null,
      pokemonTypes,
      galleryView: true,
      galleryLoading: true,
      typesLoading: true,
    };
  },
});
</script>
