const state = {
  attacker: null, // The Tile attacking
  attackee: null, // The Tile being attacked
}

const getters = {
  attacker: state => state.attacker,
  attackee: state => state.attackee
}

const actions = {
  setAttacker: ({commit}, tile) => {
    commit('setAttacker', tile);
  },
  setAttackee: ({commit}, tile) => {
    commit('setAttackee', tile);
  }
}

const mutations = {
  setAttacker: (state, tile) => {
    state.attacker = tile;
  },
  setAttackee: (state, tile) => {
    state.attackee = tile;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
