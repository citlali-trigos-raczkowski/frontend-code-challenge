<template>
  <v-select
    :items="pokemonTypes"
    dense
    filled
    rounded
    v-model="selectedFilter"
    color="success"
    @change="updateFilter"
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
  },
  methods: {
    updateFilter: function (selectFilter: string) {
      this.changeFilter(selectFilter);
    },
  },
  data() {
    return {
      selectedFilter: null,
    };
  },
});
</script>
