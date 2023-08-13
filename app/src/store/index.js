import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDialog: false,
    itemToBeEdited: {},
  },
  getters: {
    getItemToBeEdited(state) {
      return state.itemToBeEdited;
    },
  },
  mutations: {
    SHOW_DIALOG(state) {
      state.showDialog = true;
    },
    HIDE_DIALOG(state) {
      state.showDialog = false;
    },
    SET_ITEM_TO_BE_EDITED(state, item) {
      state.itemToBeEdited = structuredClone(item);
    },
  },
  actions: {
    showDialog(context) {
      context.commit('SHOW_DIALOG');
    },
    hideDialog(context) {
      context.commit('HIDE_DIALOG');
    },
    setItemToBeEdited(context, item) {
      context.commit('SET_ITEM_TO_BE_EDITED', item);
    },
  },
  modules: {
  }
})
