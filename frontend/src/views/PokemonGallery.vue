<template>
  <div class="home">
    hello gallery

    <SearchBar @search="search" />
    <div id="gallery">
      <pokemon-tile
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      ></pokemon-tile>

      <!-- <v-menu offset-y>
        <template id="filter-dropdown" v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on"> Dropdown </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in filterItems" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </div>
    <!-- <HelloWorld msg="Pokemon gallery!" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokemonTile from "@/components/PokemonTile.vue";
import SearchBar from "@/components/SearchBar.vue";

export default defineComponent({
  name: "PokemonGallery",
  components: { PokemonTile, SearchBar },
  data() {
    return {
      pokemons: [],
    };
  },
});
</script>
