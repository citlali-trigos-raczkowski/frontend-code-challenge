<template>
  <v-card-title id="tile-header">
    <v-col id="tile-heart">
      <v-btn icon v-bind:color="heartColor" v-on:click="togglePokemonfavorite">
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
