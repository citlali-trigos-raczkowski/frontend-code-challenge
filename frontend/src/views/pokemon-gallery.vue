<template>
  <div id="body">
    <div id="navigation">
      <search-bar
        id="search-bar"
        v-bind:updateSearchString="updateSearchString"
      />
      <div id="filter-dropdown" v-if="pokemonTypes.length !== 0">
        <v-select
          :items="pokemonTypes"
          placeholder="Filter by Type"
          v-model="selectedFilter"
          @change="changeFilter"
        ></v-select>
      </div>
      <div id="toggle-gallery-display">
        <div v-if="galleryView">
          <v-app-bar-nav-icon
            v-on:click="updateGalleryView"
          ></v-app-bar-nav-icon>
        </div>
        <div v-else>
          <v-btn v-on:click="updateGalleryView" icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <v-tabs>
      <v-tab va @click="viewAll">All</v-tab>
      <v-tab @click="viewFavorites">Favorites</v-tab>
    </v-tabs>

    <v-container v-if="galleryView" id="gallery-tiles" class="lighten-5">
      <pokemon-tile
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        :triggerReload="triggerReload"
        :galleryView="galleryView"
        id="pokemon-tile"
      />
    </v-container>
    <v-container v-else id="gallery-list" class="lighten-5">
      <pokemon-list
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        :triggerReload="triggerReload"
        id="pokemon-list"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import PokemonTile from "../components/pokemon-tile.vue";
import PokemonList from "../components/pokemon-list.vue";

import SearchBar from "../components/search-bar.vue";
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
  components: {
    "search-bar": SearchBar,
    "pokemon-tile": PokemonTile,
    "pokemon-list": PokemonList,
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
          console.log("number of pokeys fetched: ", result.length);
          this.pokemons = Object.assign({}, {}, result);
          console.log(Object.keys(this.pokemons).length);
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
    changeFilter: function () {
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
      pokemonTypes: pokemonTypes,
      galleryView: true,
    };
  },
});
</script>
