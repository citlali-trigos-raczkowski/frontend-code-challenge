import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PokemonGallery from "@/views/PokemonGallery.vue";
import PokemonDetail from "@/views/PokemonDetail.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "pokemon-gallery",
    component: PokemonGallery,
  },
  {
    path: "/:name",
    name: "pokemon-detail",
    component: PokemonDetail,
  },
  {
    path: "/:name/not-found",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
