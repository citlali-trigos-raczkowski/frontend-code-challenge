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
  methods: {
    togglePokemonfavorite: function () {
      this.toggleFavorite(this.pokemon);
    },
  },
  beforeMount() {
    this.heartColor = this.getHeartColor(this.pokemon);
  },
  data() {
    return {
      heartColor: "",
    };
  },
});
</script>
<style src="@/assets/styles.css"></style>
