import Cookies from 'js-cookie';

const authModule = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    isRegSucceed: false,
  }),
  mutations: {
    SET_IS_REG_SUCCEED(state, payload) {
      state.isRegSucceed = payload;
    },
    SET_AUTHENTICATED_STATE(state, payload) {
      state.isAuth = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const token = await this.$axios.post(
          '/auth/signin',
          { email, password },
          { withCredentials: true },
        );
        const jwt = token.data.access_token;

        Cookies.set('jwt', jwt, {
          expires: new Date(jwtExpiresIn * 1000),
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        });

        this.$router.push('/');

        commit('SET_AUTHENTICATED_STATE', !!jwt);

        // await this.app.$stopJwtRefresh()
        // await this.app.$startJwtRefresh()
      } catch (error) {
        throw error;
      }
    },

    async register({ commit }, { email, password, checkbox }) {
      try {
        const req = await this.$axios.post(
          '/auth/signup',
          { email, password, checkbox },
          { withCredentials: true },
        );
        commit('SET_TOKEN', null);
        commit('SET_AUTHENTICATED_STATE', false);
        commit('SET_IS_REG_SUCCEED', true);
      } catch (e) {
        throw e;
      }
    },

    async logout({ commit }) {
      try {
        const req = await this.$axios.get('/auth/logout', {
          withCredentials: true,
        });
        commit('SET_AUTHENTICATED_STATE', false);
        this.$router.push('/');
      } catch (e) {
        commit('SET_AUTHENTICATED_STATE', false);
        console.warn(e);
      }
    }
  },
  getters: {
    isAuth: (state) => state.isAuth,
    isRegSucceed: (state) => state.isRegSucceed,
  },
};

export default authModule;
