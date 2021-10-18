<template>
  <div>
    <v-app id="app" class="pokedex">
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/footer.vue";

export default Vue.extend({
  name: "App",
  components: { Footer },
});
</script>

<style src="@/assets/styles.css"></style>
