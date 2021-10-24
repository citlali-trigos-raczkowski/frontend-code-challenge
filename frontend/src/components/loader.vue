<template>
  <div id="loader">
    <v-progress-circular
      :size="70"
      width="7"
      indeterminate
      color="amber"
    ></v-progress-circular>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loader",
});
</script>
