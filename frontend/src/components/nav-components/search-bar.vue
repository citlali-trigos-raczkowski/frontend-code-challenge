<template>
  <v-text-field
    clearable
    dense
    filled
    rounded
    id="search-bar"
    type="text"
    v-model="searchString"
    :placeholder="SearchPlaceholder"
    data-cy="search-bar"
    :dark="modeOption !== 'Dark'"
  />
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
    modeOption: {
      type: String,
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
      SearchPlaceholder,
      displayVariant: this.modeOption.toLowerCase(),
    };
  },
});
</script>
