import {getSurroundingTiles} from '../helper/tiles_processing'

const state = {
  attacker: null, // The Tile attacking
  attackee: null, // The Tile being attacked
  tiles: [] //List of tiles
}

const getters = {
  attacker: state => state.attacker,
  attackee: state => state.attackee,
  tiles: state => state.tiles,
  surrounding_tiles: state => {
    if (state.attacker !== null) {
      return getSurroundingTiles(state.tiles, state.attacker)
    } else {
      return null;
    }
  },
  surrounding_enemy_tiles: state => {
    // TODO:
  }
}

const actions = {
  setAttacker: ({commit}, tile) => {
    commit('setAttacker', tile);
  },
  setAttackee: ({commit}, tile) => {
    commit('setAttackee', tile);
  },
  setTiles: ({commit}, tiles) => {
    commit('setTiles', tiles);
  }
}

const mutations = {
  setAttacker: (state, tile) => {
    state.attacker = tile;
  },
  setAttackee: (state, tile) => {
    state.attackee = tile;
  },
  setTiles: (state, tiles) => {
    state.tiles = tiles;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
