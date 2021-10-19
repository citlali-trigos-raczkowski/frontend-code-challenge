<template>
  <div :key="pokemon.id">
    <v-card class="mx-auto" id="tile-card" light>
      <heart-toggle
        :togglePokemonfavorite="togglePokemonfavorite"
        :heartColor="heartColor"
      />
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
import HeartToggle from "./heart-toggle.vue";
import { getHeartColor } from "../helper-functions/get-heart-color";

export default Vue.extend({
  components: { "heart-toggle": HeartToggle },
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
      this.heartColor = getHeartColor(this.pokemon);
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
