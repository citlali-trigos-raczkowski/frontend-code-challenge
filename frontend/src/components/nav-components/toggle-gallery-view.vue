<template>
  <div id="toggle-gallery-display">
    <div v-if="galleryView">
      <v-app-bar-nav-icon v-on:click="updateGalleryView"></v-app-bar-nav-icon>
    </div>
    <div v-else>
      <v-btn v-on:click="updateGalleryView" icon>
        <v-icon>mdi-apps</v-icon>
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
