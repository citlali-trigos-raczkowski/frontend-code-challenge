<template>
  <v-tabs background-color="transparent" id="nav-tabs">
    <v-tab data-cy="view-all-tab" @click="viewAll"
      ><span id="nav-tab-item">All</span></v-tab
    >
    <v-tab data-cy="view-favorites-tab" @click="viewFavorites"
      ><span id="nav-tab-item">Favorites</span></v-tab
    >
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
