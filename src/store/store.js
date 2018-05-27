import Vue from 'vue';
import Vuex from 'vuex';
// Import VuexPersistence from 'vuex-persist';

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
// });

Vue.use(Vuex);

const state = {
  startingLifeTotal: 20,
  players: {
    0: {
      name: 'Pierre',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
    1: {
      name: 'Markus',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
    2: {
      name: 'Robert',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
    3: {
      name: 'Thomas',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
  },
  colors: {
    w: {
      name: 'White',
      shortName: 'W',
      hex: '#eeead3',
    },
    u: {
      name: 'Blue',
      shortName: 'U',
      hex: '#3a81b2',
    },
    b: {
      name: 'Black',
      shortName: 'B',
      hex: '#1f1e1d',
    },
    r: {
      name: 'Red',
      shortName: 'R',
      hex: '#aa4545',
    },
    g: {
      name: 'Green',
      shortName: 'G',
      hex: '#51a36d',
    },
    c: {
      name: 'Colorless',
      shortName: 'C',
      hex: '#9cafae',
    },
  },
};

export default new Vuex.Store({
  state,
  // Plugins: [
  //   vuexLocal.plugin
  // ],
});
