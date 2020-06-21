<template>
  <div
    class="flex bg-white border-b border-gray-200 sticky top-0 inset-x-0 z-100 h-16 items-center px-6 justify-between"
  >
    <g-link to="/" class="text-black no-underline font-bold visited:text-black">
      Dreamer
    </g-link>
    <g-link
      v-show="!isAuth"
      to="/account/sign-in/"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded no-underline"
    >
      Войти
    </g-link>
    <g-link
      v-show="isAuth"
      to="/account/profile/"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded no-underline"
    >
      Профиль
    </g-link>
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
