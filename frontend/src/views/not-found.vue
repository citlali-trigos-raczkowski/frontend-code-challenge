<template>
  <div id="not-found-page">
    <router-link
      id="not-found-link-pikachu"
      data-cy="view-pikachu-link"
      to="/pikachu"
    >
      <img
        id="not-found-image"
        src="../../public/happy-pikachu.png"
        alt="pokemon-image"
    /></router-link>
    <div id="not-found-info">
      <h2>Oh no! That page was not found.</h2>
      <h3>Here's Pikachu instead.</h3>
      <br />
      <router-link id="not-found-link-home" data-cy="return-home-link" to="/">
        Return home
      </router-link>
      <h5>(or click Pikachu)</h5>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NotFound",
  data() {
    const PikachuImage = "/public/happy-pikachu.png";
    return {
      PikachuImage,
    };
  },
});
</script>
