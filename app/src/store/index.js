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
    SET_USER_TO_BE_EDITED(state, user) {
      state.userToBeEdited = structuredClone(user);
    },
    UPDATE_USER(state, user) {
      console.log(`Item to be edited = ${user}, ${user.id}`);
      console.log(`Item = ${state.users[parseInt(user.id) - 1]}`)
      state.users[parseInt(user.id) - 1] = user;
    },
  },
  actions: {
    showDialog(context) {
      context.commit('SHOW_DIALOG');
    },
    hideDialog(context) {
      context.commit('HIDE_DIALOG');
    },
    setUserToBeEdited(context, user) {
      context.commit('SET_USER_TO_BE_EDITED', user);
    },
    updateUser(context, user) {
      context.commit('UPDATE_USER', user);
    },
  },
  modules: {
  }
})
