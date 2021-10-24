<template>
  <div id="toggle-gallery-display">
    <div data-cy="toggle-to-list" v-if="galleryView">
      <v-app-bar-nav-icon
        color="inherit"
        v-on:click="updateGalleryView"
        id="toggle-icon"
      ></v-app-bar-nav-icon>
    </div>
    <div v-else>
      <v-btn data-cy="toggle-to-tiles" v-on:click="updateGalleryView" icon>
        <v-icon id="toggle-icon" color="inherit">mdi-apps</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ToggleGalleryView",
  props: {
    updateGalleryView: {
      type: Function,
    },
    galleryView: {
      type: Boolean,
    },
  },
});
</script>
