const state = {
  is_regenerating: true,
  attacker: null, // The Tile attacking
  attackee: null, // The Tile being attacked
  surrounding_enemy_tiles: []
}

const getters = {
  is_regenerating: state => state.is_regenerating,
  attacker: state => state.attacker,
  attackee: state => state.attackee,
  surrounding_enemy_tiles: state => state.surrounding_enemy_tiles,
}

const actions = {
  toggleRegeneration: ({commit}) => {
    commit('toggleRegeneration');
  },
  setAttacker: ({commit}, tile) => {
    commit('setAttacker', tile);
  },
  setAttackee: ({commit}, tile) => {
    commit('setAttackee', tile);
  },
  setSurroundingEnemyTiles: ({commit}, surrounding_enemy_tiles) => {
    commit('setSurroundingEnemyTiles', surrounding_enemy_tiles);
  },
  nextRound: ({commit, dispatch}) => {
    dispatch('nextPlayer');
    dispatch('toggleRegeneration');
    commit('nextMove');
  },
  nextMove: ({dispatch}) => {
    dispatch('setAttacker', null);
    dispatch('setAttackee', null);
    dispatch('setSurroundingEnemyTiles', []);
  },

}

const mutations = {
  toggleRegeneration: state => {
    state.is_regenerating = !state.is_regenerating;
  },
  setAttacker: (state, tile) => {
    state.attacker = tile;
  },
  setAttackee: (state, tile) => {
    state.attackee = tile;
  },
  setSurroundingEnemyTiles: (state, surrounding_enemy_tiles) => {
    state.surrounding_enemy_tiles = surrounding_enemy_tiles;
  },
  nextMove: state => {
    state.attacker = null;
    state.attackee = null;
    state.surrounding_enemy_tiles = [];
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
