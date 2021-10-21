<template>
  <div>
    <v-container v-if="galleryView" id="gallery-tiles" class="lighten-5">
      <pokemon-tile
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        :triggerReload="triggerReload"
        :toggleFavorite="toggleFavorite"
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
        id="pokemon-list"
      />
    </v-container>
    <favorite-alert
      v-if="showAlert"
      :alertType="alertType"
      :pokemonName="alertPokemon"
      :favorited="alertFavorited"
      :clearAlert="clearAlert"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { GalleryPokemon } from "../types/pokemon-types";
import PokemonTile from "../components/pokemon-tile.vue";
import PokemonList from "../components/pokemon-list.vue";
import FavoriteAlert from "../components/favorite-alert.vue";
import {
  FavoritePokemon,
  UnFavoritePokemon,
} from "../api/update-favorite-status";

export default Vue.extend({
  name: "PokemonDisplay",
  components: {
    "pokemon-tile": PokemonTile,
    "pokemon-list": PokemonList,
    "favorite-alert": FavoriteAlert,
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
      this.showAlert = false;
      this.alertPokemon = pokemon.name;
      this.alertFavorited = !pokemon.isFavorite;
      if (pokemon.isFavorite) {
        UnFavoritePokemon({ pokemonId: pokemon.id }).then((response) => {
          if (
            response &&
            response.unFavoritePokemon &&
            response.unFavoritePokemon.id === pokemon.id
          ) {
            this.alertType = "success";
            this.showAlert = true;
            pokemon.isFavorite = false;
            this.triggerReload();
            return true;
          } else {
            this.alertType = "error";
            this.showAlert = true;
          }
        });
      } else {
        FavoritePokemon({ pokemonId: pokemon.id }).then((response) => {
          if (
            response &&
            response.favoritePokemon &&
            response.favoritePokemon.id === pokemon.id
          ) {
            this.alertType = "success";
            this.showAlert = true;
            pokemon.isFavorite = true;
            this.triggerReload();
            return true;
          } else {
            this.alertType = "error";
            this.showAlert = true;
          }
        });
        return false;
      }
    },
    clearAlert: function () {
      this.showAlert = false;
    },
  },
  data: function () {
    return {
      alertType: "",
      showAlert: false,
      alertPokemon: "",
      alertFavorited: false,
    };
  },
});
</script>
<style src="@/assets/styles.css"></style>
