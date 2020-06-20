// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex';
import DefaultLayout from '~/layouts/Default.vue';
import rootStore from './store';
import Vuelidate from 'vuelidate/src';
import axios from 'axios';

export default async function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Vuex);
  Vue.use(Vuelidate);

  const storeInstance = rootStore();
  appOptions.store = storeInstance;
  appOptions.store.$router = router;

  if (isClient) {
    const axiosConfig = {
      baseURL: process.env.GRIDSOME_API_URL,
      timeout: 30000,
    };
    const axiosInstance = axios.create(axiosConfig);
    const token = await axiosInstance.post(
      '/auth/refresh-token',
      {},
      { withCredentials: true },
    );
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token.data.access_token}`;

    Vue.prototype.$axios = axiosInstance;
    appOptions.store.$axios = axiosInstance;
  }

  // if (isClient) {
  //   // await storeInstance.dispatch('auth/getToken');
  //   const token = storeInstance.state.auth.token;
  //   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }

  router.beforeEach((to, from, next) => {
    // Do stuff before next page load
    // if (to.path === '/account/sign-in/') {
    //   next('/')
    //   return;
    // }
    next();
  });

  // axiosInstance.interceptors.response.use(config => {
  //   console.log('request');
  //   const token = storeInstance.state.auth.token;
  //   console.log(token);
  //   if (token) {
  //     config.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   return config;
  // })

  let tokenTimer;

  // inject('startJwtRefresh', async () => {
  //   if (store.state.auth.token) {
  //     const expTime = parseJwt(store.state.auth.token).exp
  //     let refreshInterval = (expTime * 1000 - Date.now()) * 0.75
  //     tokenTimer = setInterval(async () => {
  //       await store.dispatch('auth/getToken', { app });
  //     }, refreshInterval)
  //   }
  // })
  // inject('stopJwtRefresh', async () => clearInterval(tokenTimer))

  // app.$startJwtRefresh();
}
