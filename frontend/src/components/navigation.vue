<template>
  <div id="navigation">
    <div id="title"><h1 bold>Who's That Pokemon?</h1></div>

    <v-tabs>
      <v-tab va @click="viewAll">All</v-tab>
      <v-tab @click="viewFavorites">Favorites</v-tab> </v-tabs
    ><br />
    <div id="side-by-side">
      <search-bar
        id="search-bar"
        v-bind:updateSearchString="updateSearchString"
      />
      <div id="filter-dropdown" v-if="pokemonTypes.length !== 0">
        <v-select
          :items="pokemonTypes"
          dense
          filled
          rounded
          placeholder="Filter by Type"
          v-model="selectedFilter"
          color="success"
          @change="updateFilter"
        ></v-select>
      </div>
      <div id="toggle-gallery-display">
        <div v-if="galleryView">
          <v-app-bar-nav-icon
            v-on:click="updateGalleryView"
          ></v-app-bar-nav-icon>
        </div>
        <div v-else>
          <v-btn v-on:click="updateGalleryView" icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "../components/search-bar.vue";

export default Vue.extend({
  name: "Navigation",
  components: {
    "search-bar": SearchBar,
  },
  props: {
    viewAll: {
      type: Function,
    },
    viewFavorites: {
      type: Function,
    },
    updateGalleryView: {
      type: Function,
    },
    galleryView: {
      type: Boolean,
    },
    pokemonTypes: {
      type: Array,
    },
    changeFilter: {
      type: Function,
    },
    updateSearchString: {
      type: Function,
    },
  },
  methods: {
    updateFilter: function () {
      this.changeFilter(this.selectedFilter);
    },
  },
  data() {
    return {
      selectedFilter: null,
    };
  },
});
</script>
