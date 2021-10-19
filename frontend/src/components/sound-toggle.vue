<template>
  <v-btn alt="pokemon audio" icon color="black" v-on:click="playAudio">
    <v-icon>mdi-volume-high</v-icon>
    <audio id="trigger-sound">
      <source :src="sound" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SoundToggle",
  props: {
    sound: {
      type: String,
    },
  },
  methods: {
    playAudio: function () {
      const el = document.getElementById("trigger-sound") as HTMLAudioElement;
      el.play();
    },
  },
});
</script>
