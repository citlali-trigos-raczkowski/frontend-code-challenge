<template>
  <router-link id="EvolutionTile" v-bind:to="pokemon.name">
    <v-app id="inspire">
      <v-card max-width="200">
        <v-img v-bind:src="pokemon.image" height="auto"></v-img>
        <v-card-title>{{ pokemon.name }}</v-card-title>
        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
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
