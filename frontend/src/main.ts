import Vue from "vue";
import Vuetify from "vuetify";
import VueApollo from "vue-apollo";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { apolloProvider } from "./graphql/apolloClient";

import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueApollo);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
