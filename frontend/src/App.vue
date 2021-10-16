<template>
  <v-app>
    <v-main>
      <router-view />
      <router-link to="/squirtle">visit squirtle</router-link><br />
      <router-link to="/cit">visit citlali</router-link>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
