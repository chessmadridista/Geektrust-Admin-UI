import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDialog: false,
    users: [],
    userToBeEdited: {},
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
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
    SET_USERS(state, users) {
      state.users = users;
    },
    UPDATE_USER(state, { index, updatedUser }) {
      state.users[index] = updatedUser;
      // This snippet is needed as Vue reactivity 
      // does not detect state changes via index assignment in array of objects.
      // Using slice, a new array is assigned and 
      // Vue reactivity can detect the changes.
      state.users = state.users.slice(); 
    },
    DELETE_USER(state, userToBeRemoved) {
      state.users = state.users.filter((user) => {
        return user !== userToBeRemoved;
      });
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
      context.commit('SET_USER_TO_BE_EDITED', structuredClone(user));
    },
    setUsers(context, users) {
      context.commit('SET_USERS', users);
    },
    updateUser(context, updatedUser) {
      const index = context.getters.getUsers.findIndex((user) => {
        return user.id === updatedUser.id;
      });
      context.commit('UPDATE_USER', { index, updatedUser, });
    },
    deleteUser(context, user) {
      context.commit('DELETE_USER', user);
    },
  },
  modules: {
  }
})
