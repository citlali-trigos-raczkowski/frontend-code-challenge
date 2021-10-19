<template>
  <v-container v-if="galleryView" id="gallery-tiles" class="lighten-5">
    <pokemon-tile
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      :triggerReload="triggerReload"
      :toggleFavorite="toggleFavorite"
      :getHeartColor="getHeartColor"
      id="pokemon-tile"
    />
  </v-container>
  <v-container v-else id="gallery-list" class="lighten-5">
    <pokemon-list
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      :triggerReload="triggerReload"
      :toggleFavorite="toggleFavorite"
      :getHeartColor="getHeartColor"
      id="pokemon-list"
    />
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { GalleryPokemon } from "../types/pokemon-types";
import PokemonTile from "../components/pokemon-tile.vue";
import PokemonList from "../components/pokemon-list.vue";
import {
  FavoritePokemon,
  UnFavoritePokemon,
} from "../api/update-favorite-status";

export default Vue.extend({
  name: "PokemonDisplay",
  components: {
    "pokemon-tile": PokemonTile,
    "pokemon-list": PokemonList,
  },
  props: {
    pokemons: {
      type: Object as PropType<GalleryPokemon[]>,
    },
    galleryView: {
      type: Boolean,
    },
    triggerReload: {
      type: Function,
    },
  },
  methods: {
    toggleFavorite: function (pokemon: GalleryPokemon) {
      if (pokemon.isFavorite) {
        UnFavoritePokemon({ pokemonId: pokemon.id }).then((response) => {
          if (
            response &&
            response.unFavoritePokemon &&
            response.unFavoritePokemon.id === pokemon.id
          ) {
            console.log("successfully unfavorited");
            pokemon.isFavorite = false;
            // this.heartColor = this.getHeartColor();
            this.triggerReload();
            return true;
          } else {
            console.log("failed to unfavorite");
          }
        });
      } else {
        FavoritePokemon({ pokemonId: pokemon.id }).then((response) => {
          if (
            response &&
            response.favoritePokemon &&
            response.favoritePokemon.id === pokemon.id
          ) {
            console.log("successfully favorited");
            pokemon.isFavorite = true;
            // this.heartColor = this.getHeartColor();
            this.triggerReload();
            return true;
          } else {
            console.log("failed to favorite");
          }
        });
        return false;
      }
    },
    getHeartColor: function (pokemon: GalleryPokemon): string {
      return pokemon.isFavorite ? "pink" : "gray";
    },
  },
});
</script>
<style src="@/assets/styles.css"></style>
