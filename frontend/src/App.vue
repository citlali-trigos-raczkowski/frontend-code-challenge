<template>
  <div>
    <v-app id="app" class="pokedex">
      <div id="body">
        <Title />
        <NightModeToggle :modeOption="modeOption" :toggleMode="toggleMode" />
        <transition name="fade" mode="out-in">
          <router-view :modeOption="modeOption" />
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
import NightModeToggle from "./components/night-mode-toggle.vue";
import { setNightMode } from "./helper-functions/night-mode";

export default Vue.extend({
  name: "App",
  components: { Footer, Title, NightModeToggle },
  methods: {
    toggleMode: function (isDark: boolean) {
      const newMode = isDark ? "dark" : "light";
      this.modeOption = setNightMode(newMode);
    },
  },
  data() {
    return {
      modeOption: "Dark",
    };
  },
});
</script>
