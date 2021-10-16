<template>
  <div class="home">
    hello gallery<br />

    <!-- 

    <input
      type="text"
      placeholder="Search"
      v-model="txtSearch"
      v-on:keyup="() => getPokemonList('', 'all', true)"
    />
    <select v-on:change="getPokemonList" v-model="typeSelected">
      <option disabled selected value="null">Type</option>
      <option value="all">All</option>
      <option v-for="type of pokemonTypes" v-bind:key="type">{{ type }}</option>
    </select> -->

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
import PokemonTile from "@/components/PokemonTile.vue";
// import SearchBar from "@/components/SearchBar.vue";
import { GetGalleryPokemons } from "@/api/GetGalleryPokemons";
// import gql from "graphql-tag";
import Vue from "vue";

const response = GetGalleryPokemons({
  searchString: "",
  isFavoriteSearch: false,
  selectedFilter: "all",
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
response.then((result: any) => {
  console.log("citlali", result);
});

export default Vue.extend({
  name: "PokemonGallery",
  components: { PokemonTile },
  data() {
    return {
      pokemons: response,
    };
  },
});
</script>
