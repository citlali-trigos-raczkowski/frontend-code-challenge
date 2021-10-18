<template>
  <v-progress-circular
    :size="70"
    indeterminate
    color="amber"
  ></v-progress-circular>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loader",
});
</script>
