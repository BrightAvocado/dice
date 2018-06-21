const state = {
  players: [],
  current_player: null,
}

const getters = {
  players: state => state.players,
  current_player: state => state.current_player,
}

const actions = {
  setPlayers: ({commit}, new_players) => {
    commit('setPlayers', new_players);
  },
  setCurrentPlayer: ({commit}, new_current_player) => {
    commit('setCurrentPlayer', new_current_player);
  },
  nextPlayer: ({commit, getters}) => {
    let current_player_index = getters.players.indexOf(getters.current_player);
    let next_player_index = current_player_index + 1;
    if (next_player_index >= getters.players.length) {
      next_player_index = 0;
    }
    commit('setCurrentPlayer', getters.players[next_player_index]);
  }
}

const mutations = {
  setPlayers: (state, new_players) => {
    state.players = new_players;
  },
  setCurrentPlayer: (state, new_current_player) => {
    state.current_player = new_current_player;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
