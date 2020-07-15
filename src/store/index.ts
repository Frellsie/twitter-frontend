import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';
import account from './account';
Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  key: 'twitter',
  storage: localStorage
});
export default new Vuex.Store({
  modules: {
    account
  },
  plugins: [vuexPersist.plugin]
});
