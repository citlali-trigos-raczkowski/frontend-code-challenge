<template>
  <v-list-item>
    <router-link id="pokemon-list-link" :to="pokemon.name">
      <v-list-item-avatar>
        <v-img :src="pokemon.image"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="pokemon.name"></v-list-item-title>
      </v-list-item-content>
    </router-link>
    <heart-toggle
      id="pokemon-list-heart"
      :togglePokemonfavorite="togglePokemonfavorite"
      :heartColor="heartColor"
    />
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { GalleryPokemon } from "../types/pokemon-types";
import HeartToggle from "./heart-toggle.vue";
import { getHeartColor } from "../helper-functions/get-heart-color";

export default Vue.extend({
  name: "PokemonTile",
  components: {
    "heart-toggle": HeartToggle,
  },
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
