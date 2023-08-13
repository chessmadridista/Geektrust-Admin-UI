import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDialog: false,
  },
  getters: {
  },
  mutations: {
    SHOW_DIALOG(state) {
      state.showDialog = true;
    },
    HIDE_DIALOG(state) {
      state.showDialog = false;
    },
  },
  actions: {
    showDialog(context) {
      context.commit('SHOW_DIALOG');
    },
    hideDialog(context) {
      context.commit('HIDE_DIALOG');
    },
  },
  modules: {
  }
})
