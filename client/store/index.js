import Vue from 'vue'

export default {
  state: () => ({
    appInfos: {
      version: '0.0.1',
      drawer: null
    }
  }),
  actions: {
    SET_DRAWER ({ commit }, value) {
      commit('SET_DRAWER', value)
    }
  },
  mutations: {
    SET_DRAWER (state, value) {
      Vue.set(state, 'drawer', value)
    }
  }
}
