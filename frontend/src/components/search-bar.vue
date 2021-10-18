<template>
  <div id="app">
    <v-text-field
      clearable
      dense
      filled
      rounded
      color="success"
      type="text"
      v-model="searchString"
      placeholder="Search for your Favorite Pokemon"
    >
    </v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
    };
  },
});
</script>
