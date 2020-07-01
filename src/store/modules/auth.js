import Cookies from 'js-cookie';
import { parseJwt } from '../../utils/jwt-decode';

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
        const { data } = await this.$axios.post(
          '/auth/signin',
          { email, password },
          { withCredentials: true },
        );
        handleLoginSuccess(commit, data.access_token, this.$router);
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
        Cookies.remove('jwt');
        this.$router.push('/');
      } catch (e) {
        commit('SET_AUTHENTICATED_STATE', false);
        console.warn(e);
      }
    },

    async sendFacebookToken({ commit }, token) {
      try {
        const { data } = await this.$axios.post(
          '/auth/fb/token',
          { token },
          { withCredentials: true },
        );

        handleLoginSuccess(commit, data.access_token, this.$router);
      } catch (e) {
        console.log(e);
      }
    },
    async sendVkToken({ commit }, token) {
      try {
        const { data } = await this.$axios.post(
          '/auth/vk/token',
          { token },
          { withCredentials: true },
        );

        handleLoginSuccess(commit, data.access_token, this.$router);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    isAuth: (state) => state.isAuth,
    isRegSucceed: (state) => state.isRegSucceed,
  },
};

function handleLoginSuccess(commit, jwt, router) {
  const jwtExpiresIn = parseJwt(jwt).exp;

  Cookies.set('jwt', jwt, {
    expires: new Date(jwtExpiresIn * 1000),
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });

  router.replace('/');

  commit('SET_AUTHENTICATED_STATE', !!jwt);
}

export default authModule;
