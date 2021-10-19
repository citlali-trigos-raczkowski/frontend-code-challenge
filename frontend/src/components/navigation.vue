<template>
  <div id="navigation">
    <nav-tabs :viewAll="viewAll" :viewFavorites="viewFavorites" />
    <div id="side-by-side">
      <search-bar :updateSearchString="updateSearchString" />
      <dropdown-filter
        v-bind:pokemonTypes="pokemonTypes"
        v-bind:changeFilter="changeFilter"
      />
      <toggle-gallery-view
        :galleryView="galleryView"
        :updateGalleryView="updateGalleryView"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "./nav-components/search-bar.vue";
import DropDownFilter from "./nav-components/dropdown-filter.vue";
import NavTabs from "./nav-components/nav-tabs.vue";
import ToggleGalleryView from "./nav-components/toggle-gallery-view.vue";

export default Vue.extend({
  name: "Navigation",
  components: {
    "search-bar": SearchBar,
    "dropdown-filter": DropDownFilter,
    "nav-tabs": NavTabs,
    "toggle-gallery-view": ToggleGalleryView,
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
});
</script>
