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
  setAttacker: ({commit}, tile) => {
    commit('setAttacker', tile);
  },
  setAttackee: ({commit}, tile) => {
    commit('setAttackee', tile);
  }
}

const mutations = {
  setPlayers: (state, new_players) => {
    state.players = new_players;
  },
  setCurrentPlayer: (state, new_current_player) => {
    state.current_player = new_current_player;
  },
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
