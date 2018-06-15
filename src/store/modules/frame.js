import {Frame} from '../../js/frame/Frame';

const state = {
  frame: new Frame(1,1,1)
}

const getters = {
  frame: state => state.frame,
  board: state => state.frame
}

const actions = {
  setFrame: ({commit}, frame) => {
    commit('setFrame', frame);
  }
}

const mutations = {
  setFrame: (state, frame) => {
    state.frame = frame;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
