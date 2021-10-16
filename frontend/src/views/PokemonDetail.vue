<template>
  <div id="not-found">
    <router-link to="/">Return home</router-link>
    <div v-if="loading">Loading!</div>
    <div v-else-if="pokemon">
      <div class="pokemonDetail">
        <h1>Pokemon Detail</h1>
        name {{ pokemon.name }} <br />
        <img
          id="pokemon-image"
          v-bind:src="pokemon.image"
          alt="pokemon-image"
        />
        <br />types: [
        <div v-for="type in pokemon.types" v-bind:key="type">
          {{ type }}
        </div>
        ] <br />isFavorite: {{ pokemon.isFavorite }} <br />
        <div id="pokemon-weight" v-if="pokemon && pokemon.weight">
          weight: {{ pokemon.weight.minimum }} - {{ pokemon.weight.maximum
          }}<br />
        </div>
        <div id="pokemon-height" v-if="pokemon && pokemon.height">
          weight: {{ pokemon.height.minimum }} - {{ pokemon.height.maximum
          }}<br />
        </div>

        Max CP: {{ pokemon.maxCP }}<br />
        Max HP: {{ pokemon.maxHP }}<br />
        Evolutions: [
        <pokemon-evolution-tile
          v-for="pokemon in pokemon.evolutions"
          :key="pokemon.id"
          :pokemon="pokemon"
        >
        </pokemon-evolution-tile>
        ]
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RemoveSlashes } from "@/helperFunctions/formatting";
import GetPokemonDetail from "@/api/GetPokemonDetail";
import EvolutionTile from "@/components/EvolutionTile.vue";

import { DetailedPokemonType } from "@/api/types";

export default Vue.extend({
  name: "PokemonDetail",
  components: { "pokemon-evolution-tile": EvolutionTile },
  watch: {
    windowLocation: function () {
      console.log("changed to!!!1 ");
      this.loadPokemon();
      this.$forceUpdate();
    },
  },
  methods: {
    loadPokemon: function () {
      if (this.windowLocation) {
        GetPokemonDetail({
          pokemonName: this.windowLocation,
        }).then((response) => {
          console.log("citlali", response);
          if (response) {
            this.pokemon = response as DetailedPokemonType;
            console.log("pokemon ahs been set: ", this.pokemon)
            this.loading = false;
            return;
          }
          window.location.pathname = `${window.location.pathname}/not-found`;
        });

        this.loading = false;
        return;
      }
      console.log(
        "Error found while collecting window location\nReturning home"
      );
      window.location.pathname = `/`;
    },
  },
  beforeMount() {
    this.loadPokemon();
  },
  data: function () {
    
    return {
      loading: true,
      windowLocation: RemoveSlashes(window.location.pathname),
      pokemon: {},
    };
  },
});
</script>
