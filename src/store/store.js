import Vue from 'vue'
import Vuex from 'vuex'

import frame from './modules/frame'
import game from './modules/game'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    frame,
    game
  }
})
