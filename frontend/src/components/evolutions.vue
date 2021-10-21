<template>
  <div id="evolutions">
    <h2 id="fall-left">Evolutions</h2>

    <div id="evolution-container">
      <pokemon-evolution-tile
        v-for="pokemon in pokemonEvolutions"
        :key="pokemon.id"
        :pokemon="pokemon"
      >
      </pokemon-evolution-tile>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { PokemonEvolutionDataType } from "../types/pokemon-types";
import EvolutionTile from "../components/evolution-tile.vue";

export default Vue.extend({
  name: "Evolutions",
  props: {
    pokemonEvolutions: {
      type: Array as PropType<PokemonEvolutionDataType[]>,
    },
  },
  components: {
    "pokemon-evolution-tile": EvolutionTile,
  },
});
</script>
