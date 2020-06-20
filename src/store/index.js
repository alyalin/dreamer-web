import Vuex from 'vuex';
import authModule from './modules/auth';
import profileModule from './modules/profile';

const rootStore = () =>
  new Vuex.Store({
    state: {
      counter: 0,
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
    },
    modules: {
      auth: authModule,
      profile: profileModule,
    },
  });

export default rootStore;
