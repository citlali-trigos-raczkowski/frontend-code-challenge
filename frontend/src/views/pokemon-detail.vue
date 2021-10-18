<template>
  <div id="body">
    <router-link to="/">Return home</router-link>
    <loader v-if="loading" />
    <div v-else>
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
import { RemoveSlashes } from "../helper-functions/format-strings";
import GetPokemonDetail from "../api/get-pokemon-details";
import EvolutionTile from "../components/evolution-tile.vue";
import { logGenericError } from "../helper-functions/logging";
import { getPathname, reRouteto } from "../helper-functions/routes";
import { DetailedPokemonType } from "../types/pokemon-types";
import Loader from "../components/loader.vue";

export default Vue.extend({
  name: "PokemonDetail",
  components: { "pokemon-evolution-tile": EvolutionTile, loader: Loader },
  watch: {
    $route(to, from) {
      if (to !== from) {
        const windowLocation = RemoveSlashes(getPathname());
        this.loadPokemon(windowLocation);
      }
    },
  },
  methods: {
    loadPokemon: function (pathname: string) {
      if (pathname) {
        GetPokemonDetail({
          pokemonName: pathname,
        }).then((response) => {
          if (response) {
            Object.assign({}, this.pokemon, { a: 1, b: 2 });
            this.pokemon = response as DetailedPokemonType;
            this.loading = false;
            return;
          }
          const pathName = getPathname();
          if (!pathName.includes("not-found")) {
            reRouteto(`${pathName}/not-found`);
          }
        });
        return;
      }
      logGenericError({
        functionName: "loadPokemon",
        errorMessage:
          "Error found while collecting window location\nReturning home",
      });
      reRouteto("/");
    },
    pokemonNotEmpty: function (): boolean {
      return Object.keys(this.pokemon).length === 0;
    },
  },
  beforeMount() {
    this.loadPokemon(this.windowLocation);
  },
  data: function () {
    return {
      loading: true,
      windowLocation: RemoveSlashes(getPathname()),
      pokemon: {},
    };
  },
});
</script>
