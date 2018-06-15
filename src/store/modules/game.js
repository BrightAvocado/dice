const state = {
  players: [],
  current_player: null,
  attacker: null,
  attackee: null
}

const getters = {
  players: state => state.players,
  current_player: state => state.current_player,
  attacker: state => state.attacker,
  attackee: state => state.attackee
}

const actions = {
  setPlayers: ({commit}, new_players) => {
    commit('setPlayers', new_players);
  },
  setCurrentPlayer: ({commit}, new_current_player) => {
    commit('setCurrentPlayer', new_current_player);
  },
  setAttacker: ({commit}, payload) => {
    commit('setAttacker', payload);
  },
  setAttackee: ({commit}, payload) => {
    commit('setAttackee', payload);
  }
}

const mutations = {
  setPlayers: (state, new_players) => {
    state.players = new_players;
  },
  setCurrentPlayer: (state, new_current_player) => {
    state.current_player = new_current_player;
  },
  setAttacker: (state, payload) => {
    state.attacker = {
      x_pos: payload.x_pos,
      y_pos: payload.y_pos,
    };
  },
  setAttackee: (state, new_attackee) => {
    state.attackee = {
      x_pos: payload.x_pos,
      y_pos: payload.y_pos,
    };
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
