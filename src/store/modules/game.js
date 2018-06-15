const state = {
  current_player: null,
  attacker: null,
  attackee: null
}

const getters = {
  current_player: state => state.current_player,
  attacker: state => state.attacker,
  attackee: state => state.attackee
}

const actions = {
  setCurrentPlayer: ({commit}, new_current_player) => {
    commit('setCurrentPlayer', new_current_player);
  },
  setAttacker: ({commit}, new_attacker) => {
    commit('setAttacker', new_attacker);
  },
  setAttackee: ({commit}, new_attackee) => {
    commit('setAttackee', new_attackee);
  }
}

const mutations = {
  setCurrentPlayer: (state, new_current_player) => {
    state.current_player = new_current_player;
  },
  setAttacker: (state, new_attacker) => {
    state.current_player = new_attacker;
  },
  setAttackee: (state, new_attackee) => {
    state.current_player = new_attackee;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
