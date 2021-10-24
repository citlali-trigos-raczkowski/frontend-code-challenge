<template>
  <v-alert
    id="favorite-alert"
    transition="slide-x-reverse-transition"
    :type="alertType"
    dismissible
    v-model="show"
    data-cy="favorite-alert"
  >
    {{ this.alertString }}</v-alert
  >
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { AlertType } from "../types/component-types";

export default Vue.extend({
  name: "FavoriteAlert",
  props: {
    alertType: {
      type: String as PropType<AlertType>,
    },
    pokemonName: {
      type: String,
    },
    favorited: {
      type: Boolean,
    },
    clearAlert: {
      type: Function,
    },
  },
  watch: {
    show() {
      this.clearAlert();
      this.show = true;
    },
  },
  methods: {
    getAlertValues: function (): void {
      if (this.alertType === "success") {
        this.alertString = `Successfully ${
          this.favorited ? "" : "un"
        }favorited ${this.pokemonName}`;
        this.alertColor = "green";
      } else {
        this.alertString = `Failed to ${this.favorited ? "" : "un"}favorite ${
          this.pokemonName
        }`;
        this.alertColor = "red";
      }
    },
  },
  beforeMount() {
    this.getAlertValues();
  },
  data() {
    return {
      alertString: "",
      show: true,
      alertColor: "",
    };
  },
});
</script>
