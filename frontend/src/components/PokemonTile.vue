<template>
  <div :key="pokemon.id">
    <v-card class="mx-auto" color="#525252" dark max-width="400">
      <v-card-title>
        <span class="title font-weight-light">Title</span>
        <v-col cols="12" sm="3">
          <v-btn icon color="pink">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>

      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>
      <v-card-text class="headline font-weight-bold">
        description description description
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <!-- <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar> -->

          <v-list-item-content>
            <v-list-item-title>{{ pokemon.name }}</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokemonTile",
  props: ["pokemon"],
});
</script>
