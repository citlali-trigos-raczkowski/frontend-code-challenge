<template>
  <v-select
    :items="pokemonTypes"
    dense
    filled
    rounded
    v-model="selectedFilter"
    @change="updateFilter"
    data-cy="filter-dropdown"
    :dark="modeOption !== 'Dark'"
  ></v-select>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DropdownFilter",
  props: {
    pokemonTypes: {
      type: Array,
    },
    changeFilter: {
      type: Function,
    },
    modeOption: {
      type: String,
    },
  },
  methods: {
    updateFilter: function (selectFilter: string) {
      this.changeFilter(selectFilter);
    },
  },
  data() {
    return {
      selectedFilter: null,
      displayVariant: this.modeOption.toLowerCase(),
    };
  },
});
</script>
