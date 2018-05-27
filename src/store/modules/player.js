import { MutationTree, ActionTree, ActionContext, Module, GetterTree } from 'vuex';
import { PlayerInterface } from '../interfaces';

/**
 * State
 */
interface PlayerStateInterface {
  ids: Array<number>
};

const state: PlayerStateInterface = {
  ids: []
};

/**
 * Getters
 */
const getters: GetterTree<PlayerStateInterface, any> = {
  item(
    state: PlayerStateInterface,
    getters: GetterTree<PlayerStateInterface, any>,
    rootState: any,
    rootGetters: any,
  ): Function {
    return (playerId: number): any => {
      return rootGetters.getItemFromCache({
        type: 'player',
        id: playerId,
      });
    }
  }
};

/**
 * Mutations
 */
const PLAYER_FETCH = 'PLAYER_FETCH';
const PLAYER_UPDATE = 'PLAYER_UPDATE';
const mutations: MutationTree<PlayerStateInterface> = {

  /**
   * Get player
   * @param state state
   * @param payload player
   */
  [PLAYER_FETCH](state: PlayerStateInterface, payload: number): void {
    if (state.ids.includes(payload)) {
      return;
    }

    state.ids.push(payload);
  },

  [PLAYER_UPDATE](state: PlayerStateInterface, payload: number): void {
    if (state.ids.includes(payload)) {
      return;
    }

    state.ids.push(payload);
  }
}

/**
 * Action
 */
const actions: ActionTree<PlayerStateInterface, any> = {
  getItem({ commit, state, rootState }: ActionContext<PlayerStateInterface, any>, playerId: number): Promise<any> {
    if (state.ids.includes(playerId)) {
      return Promise.resolve(null);
    } else if (rootState.entities.players && rootState.entities.player[playerId]) {
      commit(PLAYER_FETCH, {
        playerId,
      });

      return Promise.resolve(null);
    }

    let options: FetchInitInterface = {
      params: {
        playerId
      }
    };

    return fetch(playerItemRequest, options)
      .then(data => {
        commit(PLAYER_FETCH, data);
      });
  },

  update({ commit, state, rootState }: ActionContext<PlayerStateInterface, any>, player: PlayerInterface): Promise<any> {
    let options: FetchInitInterface = {
      body: JSON.stringify(player),
    };

    return fetch(playerUpdateRequest, options)
      .then(data => {
        commit(PLAYER_UPDATE, data);
      });
  }
}

const playerModule: Module<PlayerStateInterface, any> = {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};

export default playerModule;
