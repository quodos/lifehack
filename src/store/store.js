import Vue from 'vue';
import Vuex from 'vuex';
import toSafeInteger from 'lodash/toSafeInteger';

import PlayerModule from './modules/player';

import Player from '../models/player';
import { WHITE, BLUE, BLACK, RED, GREEN, COLORLESS } from '../models/colors';

// Import VuexPersistence from 'vuex-persist';

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
// });

Vue.use(Vuex);

const state = {
  startingLifeTotal: 20,
  players: [
    new Player('Pierre'),
    new Player('Markus'),
    new Player('Robert'),
    new Player('Thomas'),
  ],
  colors: [
    WHITE,
    BLUE,
    BLACK,
    RED,
    GREEN,
    COLORLESS,
  ],
};

const mutations = {
  incrementPlayerLife({ players }, player) {
    const playerIndex = players.indexOf(player);
    players[playerIndex].lifetotal++;
  },

  decrementPlayerLife({ players }, player) {
    const playerIndex = players.indexOf(player);
    players[playerIndex].lifetotal--;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  // Plugins: [
  //   vuexLocal.plugin
  // ],
});
