<template>
  <div id="night-mode">
    <v-layout>
      <v-spacer></v-spacer>

      <v-switch
        v-model="toggleBoolean"
        inset
        color="yellow"
        id="night-mode-toggle"
      >
        <template v-slot:label>
          <span id="night-mode-toggle">{{ modeOption }} mode</span>
        </template></v-switch
      >
    </v-layout>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NightModeToggle",
  props: {
    toggleMode: {
      type: Function,
    },
    modeOption: {
      type: String,
    },
  },
  watch: {
    toggleBoolean() {
      this.toggleMode(this.toggleBoolean);
    },
  },

  data() {
    return {
      toggleBoolean: false,
    };
  },
});
</script>
