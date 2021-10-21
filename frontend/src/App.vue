<template>
  <div>
    <v-app id="app" class="pokedex">
      <div id="body">
        <Title />
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
      <Footer />
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/footer.vue";
import Title from "./components/title.vue";

export default Vue.extend({
  name: "App",
  components: { Footer, Title },
});
</script>

