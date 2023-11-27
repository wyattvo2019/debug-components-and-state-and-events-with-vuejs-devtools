import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: [],
  },
  getters: {},
  mutations: {
    UPDATE_FAVORITES(state, payload) {
      state.favorites = payload;
    },
  },
  actions: {
    addToFavorites({ state, commit }, payload) {
      const airports = state.favorites;
      airports.push(payload);
      commit("UPDATE_FAVORITES", airports);
    },
  },
  modules: {},
});
