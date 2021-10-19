<template>
  <div>
    <loader v-if="loading" />
    <div v-else id="pokemon-detail">
      <div id="pokemon-detail-left">
        <img
          id="pokemon-detail-image"
          v-bind:src="pokemon.image"
          alt="pokemon-image"
        />
      </div>
      <div id="pokemon-detail-info">
        <div id="tile-heart">
          <heart-toggle
            :togglePokemonfavorite="togglePokemonfavorite"
            :heartColor="heartColor"
          />
        </div>
        <h1 id="pokemon-detail-name">{{ pokemon.name }}</h1>
        <br />
        <strong>Types:</strong> {{ pokemon.types.join(", ") }}

        <div id="pokemon-weight" v-if="pokemon && pokemon.weight">
          <strong>Weight</strong>: {{ pokemon.weight.minimum }} -
          {{ pokemon.weight.maximum }}<br />
        </div>
        <div id="pokemon-height" v-if="pokemon && pokemon.height">
          <strong>Height</strong>: {{ pokemon.height.minimum }} -
          {{ pokemon.height.maximum }}<br />
        </div>
        <strong>Max CP</strong>: {{ pokemon.maxCP }}<br />
        <strong>Max HP</strong>: {{ pokemon.maxHP }}<br />
      </div>
    </div>
    <div id="evolution-tiles">
      <pokemon-evolution-tile
        v-for="pokemon in pokemon.evolutions"
        :key="pokemon.id"
        :pokemon="pokemon"
      >
      </pokemon-evolution-tile>
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
import HeartToggle from "../components/heart-toggle.vue";
import { getHeartColor } from "../helper-functions/get-heart-color";
import {
  FavoritePokemon,
  UnFavoritePokemon,
} from "../api/update-favorite-status";

export default Vue.extend({
  name: "PokemonDetail",
  components: {
    "pokemon-evolution-tile": EvolutionTile,
    loader: Loader,
    "heart-toggle": HeartToggle,
  },
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
            this.reloadHeart();
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
    reloadHeart: function () {
      this.heartColor = getHeartColor(this.pokemon);
    },
    togglePokemonfavorite: function () {
      if (this.pokemon.isFavorite) {
        UnFavoritePokemon({ pokemonId: this.pokemon.id }).then((response) => {
          if (
            response &&
            response.unFavoritePokemon &&
            response.unFavoritePokemon.id === this.pokemon.id
          ) {
            console.log("successfully unfavorited");
            this.pokemon.isFavorite = false;
            this.reloadHeart();
          } else {
            console.log("failed to unfavorite");
          }
        });
      } else {
        FavoritePokemon({ pokemonId: this.pokemon.id }).then((response) => {
          if (
            response &&
            response.favoritePokemon &&
            response.favoritePokemon.id === this.pokemon.id
          ) {
            console.log("successfully favorited");
            this.pokemon.isFavorite = true;
            this.reloadHeart();
          } else {
            console.log("failed to favorite");
          }
        });
      }
    },
  },
  beforeMount() {
    this.loadPokemon(this.windowLocation);
  },
  data: function () {
    const pokemon: DetailedPokemonType = {} as DetailedPokemonType;
    return {
      loading: true,
      windowLocation: RemoveSlashes(getPathname()),
      pokemon,
      heartColor: "",
    };
  },
});
</script>
