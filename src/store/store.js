import Vue from 'vue';
import Vuex from 'vuex';
import toSafeInteger from 'lodash/toSafeInteger';
// Import VuexPersistence from 'vuex-persist';

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
// });

Vue.use(Vuex);

const state = {
  startingLifeTotal: 20,
  players: [
    {
      name: 'Pierre',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
    {
      name: 'Markus',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
    {
      name: 'Robert',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
    {
      name: 'Thomas',
      commander: null,
      colors: [],
      life: 20,
      counters: {
        poison: 0,
      },
      commanderDamage: null,
    },
  ],
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

const mutations = {
  incrementPlayerLife(state, payload) {
    let currentPlayerLife = toSafeInteger(state.players[payload.playerIndex].life);
    currentPlayerLife++;

    state.players[payload.playerIndex].life = currentPlayerLife.toString();
  },

  decrementPlayerLife(state, payload) {
    let currentPlayerLife = toSafeInteger(state.players[payload.playerIndex].life);
    currentPlayerLife--;

    state.players[payload.playerIndex].life = currentPlayerLife.toString();
  },
};

export default new Vuex.Store({
  state,
  mutations,
  // Plugins: [
  //   vuexLocal.plugin
  // ],
});
