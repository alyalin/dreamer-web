<template>
  <div
    class="flex container top-0 inset-x-0 z-100 px-8 items-center mx-auto pt-10 pb-20 md:px-2 justify-between"
  >
    <g-link to="/" class="text-black no-underline font-bold visited:text-black">
      <g-image src="~/assets/logo.svg" width="222" />
    </g-link>

    <div class="flex items-center">
      <g-link
        to="/dreams/"
        class="font-display hidden lg:block text-xl text-white font-bold py-2 px-5 tracking-wider no-underline"
      >
        Дримы
      </g-link>

      <g-link
        to="/partners/"
        class="font-display hidden lg:block text-xl text-white font-bold py-2 px-5 tracking-wider no-underline"
      >
        Партнеры
      </g-link>

      <g-link
        to="/blog/"
        class="font-display hidden lg:block text-xl text-white font-bold py-2 px-5 tracking-wider no-underline"
      >
        Блог
      </g-link>

      <g-link
        to="/about-us/"
        class="font-display hidden lg:block text-xl text-white font-bold py-2 px-5 tracking-wider no-underline"
      >
        О нас
      </g-link>

      <g-link
        v-show="!isAuth"
        to="/account/sign-in/"
        class="font-display hidden lg:block text-xl tracking-wider bg-white text-primary font-bold py-3 px-16 ml-8 rounded-full no-underline"
      >
        Вход
      </g-link>
      <g-link
        v-show="isAuth"
        to="/account/profile/"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded no-underline"
      >
        Профиль
      </g-link>

      <g-image class="lg:hidden" src="~/assets/burger.svg" width="34.8" />
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters('auth', ['isAuth']),
  },
};
</script>
