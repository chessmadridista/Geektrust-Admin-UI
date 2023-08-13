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
    UPDATE_USER(state, item) {
      state.items[item.id - 1] = item;
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
    updateUser(context, item) {
      context.commit('UPDATE_USER', item);
    },
  },
  modules: {
  }
})
