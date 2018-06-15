import Vue from 'vue'
import Vuex from 'vuex'

import game from './modules/game'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    game
  }
})
