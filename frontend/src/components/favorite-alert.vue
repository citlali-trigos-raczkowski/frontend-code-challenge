<template>
  <v-alert
    id="favorite-alert"
    transition="slide-x-reverse-transition"
    :type="alertType"
    dismissible
    v-model="show"
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
    getAlertString: function (): string {
      if (this.alertType === "success") {
        return `Successfully ${this.favorited ? "" : "un"}favorited ${
          this.pokemonName
        }`;
      }
      return `Failed to ${this.favorited ? "" : "un"}favorite ${
        this.pokemonName
      }`;
    },
  },
  beforeMount() {
    this.alertString = this.getAlertString();
  },
  data() {
    return {
      alertString: "",
      show: true,
    };
  },
});
</script>
