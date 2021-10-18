<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img v-bind:src="pokemon.image"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="pokemon.name"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-icon>
      <v-btn icon v-bind:color="heartColor" v-on:click="this.toggleFavorite">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-list-item-icon>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { GalleryPokemon } from "../types/pokemon-types";
import {
  FavoritePokemon,
  UnFavoritePokemon,
} from "../api/update-favorite-status";

export default Vue.extend({
  name: "PokemonTile",
  props: {
    pokemon: {
      type: Object as PropType<GalleryPokemon>,
    },
    triggerReload: {
      type: Function,
    },
        toggleFavorite: {
      type: Function,
    },
        getHeartColor: {
      type: Function,
    },
    heartColor: {
        type: String
    }
  },
//   methods: {
//     toggleFavorite: function () {
//       if (this.pokemon.isFavorite) {
//         UnFavoritePokemon({ pokemonId: this.pokemon.id }).then((response) => {
//           if (
//             response.favoritePokemon &&
//             response.favoritePokemon.id === this.pokemon.id
//           ) {
//             console.log("successfully unfavorited");
//             this.pokemon.isFavorite = false;
//             this.heartColor = this.getHeartColor();
//             this.triggerReload();
//           } else {
//             console.log("failed to unfavorite");
//           }
//         });
//       } else {
//         FavoritePokemon({ pokemonId: this.pokemon.id }).then((response) => {
//           if (
//             response.unFavoritePokemon &&
//             response.unFavoritePokemon.id === this.pokemon.id
//           ) {
//             console.log("successfully favorited");
//             this.pokemon.isFavorite = true;
//             this.heartColor = this.getHeartColor();
//             this.triggerReload();
//           } else {
//             console.log("failed to favorite");
//           }
//         });
//       }
//     },
//     getHeartColor: function (): string {
//       return this.pokemon.isFavorite ? "pink" : "gray";
//     },
//   },
//   beforeMount() {
//     this.heartColor = this.getHeartColor();
//   },
//   data() {
//     return {
//       heartColor: "",
//     };
//   },
});
</script>
<style src="@/assets/styles.css"></style>
