<template>
  <div id="body">
    <div id="not-found">
      <v-card class="mx-auto" id="not-found-tile">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
      </v-card>
      <v-card id="not-found-tile">
        <v-card-title> Oh no! We could not find that page </v-card-title>

        <v-card-subtitle>Here's a sad pikachu </v-card-subtitle>

        <v-card-actions id="not-found-return-home">
          <v-btn @click="routeHome" color="orange lighten-2" text>
            Return home <v-icon>{{ "mdi-arrow-right" }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { reRouteto } from "../helper-functions/routes";

export default Vue.extend({
  name: "NotFound",
  methods: {
    routeHome: function () {
      reRouteto("/");
    },
  },
});
</script>
