import Vue from 'vue'
import Vuex from 'vuex'

import players from './modules/players'
import board from './modules/board'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    players,
    board
  }
})
