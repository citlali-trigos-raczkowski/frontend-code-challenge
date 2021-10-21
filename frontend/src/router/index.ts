import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PokemonGallery from "@/views/pokemon-gallery.vue";
import PokemonDetail from "@/views/pokemon-detail.vue";
import NotFound from "@/views/not-found.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "pokemon-gallery",
    component: PokemonGallery,
  },
  {
    path: "*/not-found",
    name: "not-found",
    component: NotFound,
  },
  {
    path: "/*",
    name: "pokemon-detail",
    component: PokemonDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
