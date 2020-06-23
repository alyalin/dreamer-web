// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex';
import Vuelidate from 'vuelidate/src';
import Cookies from 'js-cookie';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import DefaultLayout from '~/layouts/Default.vue';
import rootStore from './store';
import { parseJwt } from './utils/jwt-decode';

export default async function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Vuex);
  Vue.use(Vuelidate);

  const storeInstance = rootStore();
  appOptions.store = storeInstance;
  appOptions.store.$router = router;

  const cookieJwt = Cookies.get('jwt');
  let CSRFToken;

  if (cookieJwt) {
    storeInstance.commit('auth/SET_AUTHENTICATED_STATE', true);
  }

  const axiosConfig = {
    baseURL: process.env.GRIDSOME_API_URL,
    timeout: 10000,
    // headers: { Authorization: `Bearer ${cookieJwt}` },
  };

  const axiosInstance = axios.create(axiosConfig);

  // Function that will be called to refresh authorization
  const refreshAuthLogic = (failedRequest) =>
    axiosInstance
      .post('/auth/refresh-token', {}, { withCredentials: true })
      .then((tokenRefreshResponse) => {
        const jwt = tokenRefreshResponse.data.access_token;
        setJwtCookie(jwt);
        failedRequest.response.config.headers['Authorization'] =
          'Bearer ' + jwt;
        return Promise.resolve();
      });

  // Instantiate the interceptor (you can chain it as it returns the axios instance)
  createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);

  axiosInstance.interceptors.request.use((request) => {
    const token = Cookies.get('jwt');
    console.log(request);
    if (CSRFToken) {
      request.headers.common['X-CSRF-Token'] = CSRFToken.data.token;
    }
    if (Cookies.get('jwt')) {
      request.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return request;
  });

  Vue.prototype.$axios = axiosInstance;
  appOptions.store.$axios = axiosInstance;

  try {
    CSRFToken = await axiosInstance.get('/auth/csrf-token', {
      withCredentials: true,
    });
  } catch (e) {
    console.warn('CSRF TOKEN NOT AVAILABLE');
  }

  if (!cookieJwt) {
    try {
      const token = await axiosInstance.post(
        '/auth/refresh-token',
        {},
        {
          withCredentials: true,
          headers: { 'X-CSRF-Token': CSRFToken.data.token },
        },
      );
      setJwtCookie(token.data.access_token);
      storeInstance.commit('auth/SET_AUTHENTICATED_STATE', true);
    } catch (e) {
      console.log(e);
    }
  }

  // route guards goes here
  router.beforeEach((to, from, next) => {
    // Do stuff before next page load
    // if (to.path === '/account/sign-in/') {
    //   next('/')
    //   return;
    // }
    next();
  });
}

function setJwtCookie(jwt) {
  const jwtExpiresIn = parseJwt(jwt).exp;
  Cookies.set('jwt', jwt, {
    expires: new Date(jwtExpiresIn * 1000),
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
}
