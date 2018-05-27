import Vue from 'vue';
import Vuex from 'vuex';
// Import VuexPersistence from 'vuex-persist';

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
// });

Vue.use(Vuex);

const state = {
  count: 0,
};

export default new Vuex.Store({
  state,
  // Plugins: [
  //   vuexLocal.plugin
  // ],
});
