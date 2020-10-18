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
        class="font-display hidden lg:block text-xl tracking-wider bg-white text-primary font-bold py-3 px-16 ml-8 rounded-full no-underline"
      >
        Профиль
      </g-link>

      <g-image
        class="lg:hidden"
        src="~/assets/burger.svg"
        width="34.8"
        @click="handleMobileMenuClick()"
      />
    </div>
    <AppDrawer ref="mobileMenuDrawer" position="right">
      <template v-slot:content>
        <div class="flex flex-col flex-1 py-20 h-full">
          <nav class="flex flex-col flex-1" style="width: 320px">
            <span class="mb-4" @click="handleMobileMenuClick()">
              <g-link
                to="/dreams/"
                class="block font-display text-black text-xl py-2 px-10 tracking-wider no-underline"
              >
                Дримы
              </g-link>
            </span>

            <span class="mb-4" @click="handleMobileMenuClick()">
              <g-link
                to="/partners/"
                class="block font-display text-xl text-black py-2 px-10 tracking-wider no-underline"
              >
                Партнеры
              </g-link>
            </span>

            <span class="mb-4" @click="handleMobileMenuClick()">
              <g-link
                to="/blog/"
                class="block font-display text-xl text-black py-2 px-10 tracking-wider no-underline"
              >
                Блог
              </g-link>
            </span>

            <span class="mb-4" @click="handleMobileMenuClick()">
              <g-link
                to="/about-us/"
                class="block font-display text-xl text-black py-2 px-10 tracking-wider no-underline"
              >
                О нас
              </g-link>
            </span>

            <span class="mb-4 mt-auto" @click="handleMobileMenuClick()">
              <g-link
                v-show="!isAuth"
                to="/account/sign-in/"
                class="font-display text-xl tracking-wider border-2 border-primary mt-auto text-primary py-2 px-8 mx-10 self-start text-center rounded-full no-underline"
              >
                Вход
              </g-link>
            </span>

            <span class="mb-4 mt-auto" @click="handleMobileMenuClick()">
              <g-link
                v-show="isAuth"
                to="/account/profile/"
                class="font-display text-xl tracking-wider border-2 border-primary mt-auto text-primary py-2 px-8 mx-10 self-start text-center rounded-full no-underline"
              >
                Профиль
              </g-link>
            </span>
          </nav>
        </div>
      </template>
    </AppDrawer>
  </div>
</template>

<script>
import AppDrawer from './AppDrawer';
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  components: {
    AppDrawer,
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),
  },
  methods: {
    handleMobileMenuClick() {
      if (this.$refs.mobileMenuDrawer) {
        this.$refs.mobileMenuDrawer.open();
      }
    },
  },
};
</script>
