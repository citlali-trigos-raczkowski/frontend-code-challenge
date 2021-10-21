<template>
  <router-link id="evolution-tile" v-bind:to="pokemon.name">
    <v-card max-width="200">
      <v-img v-bind:src="pokemon.image" height="200"></v-img>
      <div id="evolution-text">
        <v-card-title>{{ pokemon.name }}</v-card-title>
        <v-icon color="orange lighten-2">mdi-arrow-right</v-icon>
      </div>
    </v-card>
  </router-link>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { PokemonEvolutionDataType } from "../types/pokemon-types";

export default Vue.extend({
  name: "EvolutionTile",
  props: {
    pokemon: {
      type: Object as PropType<PokemonEvolutionDataType>,
    },
  },
});
</script>
