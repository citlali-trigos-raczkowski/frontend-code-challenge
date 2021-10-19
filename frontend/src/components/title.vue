<template>
  <router-link id="title" to="/">
    <h1 bold>{{ pageTitle }}</h1>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import { PageTitle } from "../assets/constants";
export default Vue.extend({
  name: "Title",
  data() {
    return {
      pageTitle: PageTitle,
    };
  },
});
</script>
