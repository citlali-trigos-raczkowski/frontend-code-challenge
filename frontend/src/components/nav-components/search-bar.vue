<template>
  <div id="search-bar">
    <v-text-field
      clearable
      dense
      filled
      rounded
      color="success"
      type="text"
      v-model="searchString"
      :placeholder="SearchPlaceholder"
    >
    </v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { SearchPlaceholder } from "../../assets/constants";

export default Vue.extend({
  name: "SearchBar",
  props: {
    updateSearchString: {
      type: Function,
    },
  },
  watch: {
    searchString() {
      this.updateSearchString(this.searchString);
    },
  },
  data() {
    return {
      searchString: "",
      SearchPlaceholder
    };
  },
});
</script>
