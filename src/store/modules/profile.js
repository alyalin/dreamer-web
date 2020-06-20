const profileModule = {
  namespaced: true,

  state: () => ({
    profile: null,
  }),

  mutations: {
    SET_USER_PROFILE_INFO(state, payload) {
      state.profile = payload;
    },
  },

  actions: {
    async getProfile({ commit }) {
      try {
        const req = await this.$axios.get('/user/profile', {
          withCredentials: true,
        });
        commit('SET_USER_PROFILE_INFO', req.data);
      } catch (e) {
        throw e;
      }
    },
  },

  getters: {
    info: (state) => state.profile,
  },
};

export default profileModule;
