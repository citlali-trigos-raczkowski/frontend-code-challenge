import { ApolloClients } from "@vue/apollo-composable";
import { createApp, provide, h } from "vue";
import App from "./App.vue";
import { apolloClient } from "./graphql/apolloClient";
import router from "./router";
import store from "./store";

createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
    });
  },
  render: () => h(App),
})
  .use(store)
  .use(router)
  .mount("#app");
