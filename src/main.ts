import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";
// plugins here
import PortalVue from 'portal-vue'
import './plugins/vue-toasted'

Vue.use(PortalVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
