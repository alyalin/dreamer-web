<template>
  <div class="flex flex-col items-center justify-center mb-6">
    <div class="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 px-10 sm:px-0">
      <button
        class="w-full px-6 py-4 mx-auto block font-bold text-white rounded mb-2"
        style="background-color: #1b6dd1;"
        type="button"
        @click="fbSignIn"
      >
        Войти с помощью Facebook
      </button>
      <button
        class="w-full px-6 py-4 mx-auto block font-bold text-white rounded"
        style="background-color: #5181b8;"
        type="button"
      >
        Войти с помощью Вконтакте
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'SocialLogin',
  async mounted() {
    await this.loadFacebookSDK(document, 'script', 'facebook-jssdk');
    await this.initFacebook();
  },
  methods: {
    async fbSignIn() {
      window.FB.login(
        async (response) => {
          if (response) {
            console.log(response);
            await this.$store.dispatch(
              'auth/sendFacebookToken',
              response.authResponse.accessToken,
            );
          }
        },
        { scope: 'email' },
      );
    },

    async initFacebook() {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '552866345407693',
          cookie: true,
          version: 'v7.0',
        });
      };
    },

    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    },
  },
});
</script>
