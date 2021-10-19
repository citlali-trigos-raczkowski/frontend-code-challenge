<template>
  <div :key="pokemon.id">
    <v-card class="mx-auto" id="tile-card" light>
      <v-card-title id="tile-header">
        <v-col id="tile-heart" cols="6" sm="3">
          <v-btn
            icon
            v-bind:color="heartColor"
            v-on:click="togglePokemonfavorite"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <router-link v-bind:to="pokemon.name">
        <v-img v-bind:src="pokemon.image" height="200"></v-img>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-content>
              <v-list-item-title>{{ pokemon.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </router-link>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { GalleryPokemon } from "../types/pokemon-types";

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
  },
  watch: {
    "pokemon.isFavorite": {
      handler() {
        this.reloadHeart();
      },
    },
  },
  methods: {
    togglePokemonfavorite: function () {
      this.toggleFavorite(this.pokemon);
    },
    reloadHeart: function () {
      this.heartColor = this.getHeartColor(this.pokemon);
    },
  },
  beforeMount() {
    this.reloadHeart();
  },
  data() {
    return {
      heartColor: "",
    };
  },
});
</script>
<style src="@/assets/styles.css"></style>
