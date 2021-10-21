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
        <div id="pokemon-name-sound">
          <h1>{{ pokemon.name }}</h1>
          <sound-toggle id="pokemon-sound" :sound="pokemon.sound" />
        </div>
        <div v-if="pokemon.types">
          <strong>Types:</strong> {{ pokemon.types.join(", ") }}
        </div>

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
    <pokemon-evolutions
      v-if="loadEvolutions"
      :pokemonEvolutions="pokemon.evolutions"
    />
    <favorite-alert
      v-if="showAlert"
      :alertType="alertType"
      :pokemonName="pokemon.name"
      :favorited="pokemon.isFavorite"
      :clearAlert="clearAlert"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RemoveSlashes } from "../helper-functions/format-strings";
import GetPokemonDetail from "../api/get-pokemon-details";
import Evolutions from "../components/evolutions.vue";
import FavoriteAlert from "../components/favorite-alert.vue";
import { logGenericError } from "../helper-functions/logging";
import { getPathname, reRouteto } from "../helper-functions/routes";
import { DetailedPokemonType } from "../types/pokemon-types";
import Loader from "../components/loader.vue";
import SoundToggle from "../components/sound-toggle.vue";
import HeartToggle from "../components/heart-toggle.vue";
import { getHeartColor } from "../helper-functions/get-heart-color";
import {
  FavoritePokemon,
  UnFavoritePokemon,
} from "../api/update-favorite-status";

export default Vue.extend({
  name: "PokemonDetail",
  components: {
    "pokemon-evolutions": Evolutions,
    loader: Loader,
    "heart-toggle": HeartToggle,
    "sound-toggle": SoundToggle,
    "favorite-alert": FavoriteAlert,
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
            this.showEvolutions();
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
    showEvolutions: function (): void {
      this.loadEvolutions =
        this.pokemon.evolutions &&
        Object.keys(this.pokemon.evolutions).length !== 0;
    },
    reloadHeart: function () {
      this.heartColor = getHeartColor(this.pokemon);
    },
    togglePokemonfavorite: function () {
      this.showAlert = false;
      if (this.pokemon.isFavorite) {
        UnFavoritePokemon({ pokemonId: this.pokemon.id }).then((response) => {
          if (
            response &&
            response.unFavoritePokemon &&
            response.unFavoritePokemon.id === this.pokemon.id
          ) {
            this.pokemon.isFavorite = false;
            this.reloadHeart();
            this.alertType = "success";
            this.showAlert = true;
          } else {
            this.alertType = "error";
            this.showAlert = true;
          }
        });
      } else {
        FavoritePokemon({ pokemonId: this.pokemon.id }).then((response) => {
          if (
            response &&
            response.favoritePokemon &&
            response.favoritePokemon.id === this.pokemon.id
          ) {
            this.pokemon.isFavorite = true;
            this.reloadHeart();
            this.alertType = "success";
            this.showAlert = true;
          } else {
            this.alertType = "error";
            this.showAlert = true;
          }
        });
      }
    },
    clearAlert: function () {
      this.showAlert = false;
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
      alertType: "",
      showAlert: false,
      loadEvolutions: false,
    };
  },
});
</script>
