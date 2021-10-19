<template>
  <v-tabs id="nav-tabs">
    <v-tab va @click="viewAll">All</v-tab>
    <v-tab @click="viewFavorites">Favorites</v-tab>
  </v-tabs>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavTabs",
  props: {
    viewFavorites: {
      type: Function,
    },
    viewAll: {
      type: Function,
    },
  },
});
</script>
