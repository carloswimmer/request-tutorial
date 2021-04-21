import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toastAlert: {
      visibility: false,
      type: 'error',
      message: 'Tivemos um problema inesperado. Tente novamente.',
    },
    loading: false,
  },
  mutations: {
    toggleToastAlert(state, toaster) {
      if (toaster && toaster.type) {
        state.toastAlert.type = toaster.type;
      }
      if (toaster && toaster.message) {
        state.toastAlert.message = toaster.message;
      }
      state.toastAlert.visibility = toaster.visibility;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    loading(state, status) {
      state.loading = status;
    },
  },
  actions: {
    toggleToastAlert({ commit }, payload) {
      const toaster = payload;

      toaster.visibility = true;
      commit('toggleToastAlert', toaster);

      setTimeout(() => {
        toaster.visibility = false;
        commit('toggleToastAlert', toaster);
      }, 5000);
      setTimeout(() => {
        if (toaster) toaster.type = 'error';
        if (toaster)
          toaster.message = 'Tivemos um problema inesperado. Tente novamente.';
        commit('toggleToastAlert', toaster);
      }, 6000);
    },
    loading({ commit }, status) {
      commit('loading', status);
    },
  },
  modules: {},
});
