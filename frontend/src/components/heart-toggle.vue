<template>
  <v-card-title id="tile-header">
    <v-col id="tile-heart-container">
      <v-btn
        data-cy="toggle-pokemon-favorite"
        icon
        v-bind:color="heartColor === 'pink' ? 'pink' : 'inherit'"
        v-on:click="togglePokemonfavorite"
        id="tile-heart"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-col>
  </v-card-title>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeartToggle",
  props: {
    togglePokemonfavorite: {
      type: Function,
    },
    heartColor: {
      type: String,
    },
  },
});
</script>
