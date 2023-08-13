import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDialog: false,
    userToBeEdited: {},
  },
  getters: {
    getUserToBeEdited(state) {
      return state.userToBeEdited;
    },
  },
  mutations: {
    SHOW_DIALOG(state) {
      state.showDialog = true;
    },
    HIDE_DIALOG(state) {
      state.showDialog = false;
    },
    SET_USER_TO_BE_EDITED(state, item) {
      state.userToBeEdited = structuredClone(item);
    },
    UPDATE_USER(state, item) {
      console.log(`Item to be edited = ${item}, ${item.id}`);
      console.log(`Item = ${state.items[parseInt(item.id) - 1]}`)
      state.items[parseInt(item.id) - 1] = item;
    },
  },
  actions: {
    showDialog(context) {
      context.commit('SHOW_DIALOG');
    },
    hideDialog(context) {
      context.commit('HIDE_DIALOG');
    },
    setUserToBeEdited(context, item) {
      context.commit('SET_USER_TO_BE_EDITED', item);
    },
    updateUser(context, item) {
      context.commit('UPDATE_USER', item);
    },
  },
  modules: {
  }
})
