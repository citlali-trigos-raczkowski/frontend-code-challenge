<template>
  <v-footer dark id="footer">
    <!-- <v-card  class="flex" flat tile> -->
    <v-card-title id="footer-top">
      <div id="footer-left"/>
      <div id="footer-center">
        <strong id="footer-heading">Thanks for visiting!</strong>
      </div>
      <div id="footer-right">
        <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" dark icon>
          <a target="_blank" :href="icon.link">
            <v-icon color="black" size="24px">
              {{ icon.name }}
            </v-icon>
          </a>
        </v-btn>
      </div>
    </v-card-title>

    <v-card-text id="footer-bottom" class="py-2 white--text text-center">
      {{ new Date().getFullYear() }} — {{ DeveloperName }}
    </v-card-text>
    <!-- </v-card> -->
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import { DeveloperName, LinkedInLink, GithubLink } from "../assets/constants";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      icons: [
        { name: "mdi-linkedin", link: LinkedInLink },
        { name: "mdi-github", link: GithubLink },
      ],
      DeveloperName,
    };
  },
});
</script>
