<template>
  <div class="bg-white z-40 relative pt-20 pb-18 lg:pb-24 footer">
    <div class="container px-8 md:px-2 mx-auto flex flex-col lg:flex-row">
      <div
        class="absolute block lg:hidden right-0 top-0"
        style="right: 26px; top: -15px"
      >
        <button
          class="flex relative z-10 justify-center items-center bg-accent rounded-full"
          style="width: 64px; height: 64px"
          @click="handleMobileSubscribeClick()"
        >
          <g-image src="~/assets/mail-lg.svg" />
        </button>
        <div class="absolute bg-black footer-btn-shadow"></div>
      </div>
      <div class="lg:w-3/12">
        <details open>
          <summary
            id="firstSummary"
            class="font-bold w-full text-2xl mb-4 inline-flex items-center justify-between pr-20 lg:pr-0 lg:pointer-events-none"
          >
            О Дримере
            <g-image
              class="block summary-arrow lg:hidden"
              src="~/assets/green-arrow.svg"
            />
          </summary>
          <ul>
            <li class="mb-4">
              <g-link to="/"> Как работает </g-link>
            </li>
            <li class="mb-4">
              <g-link to="/"> FAQ </g-link>
            </li>
            <li class="mb-4">
              <g-link to="/"> Фондам </g-link>
            </li>
            <li>
              <g-link to="/"> Связаься с нами </g-link>
            </li>
          </ul>
        </details>
      </div>
      <div class="lg:w-3/12 mt-10 lg:mt-0">
        <details id="docsDetails">
          <summary
            class="font-bold w-full text-2xl mb-4 inline-flex items-center justify-between pr-20 lg:pr-0 lg:pointer-events-none"
          >
            Документы
            <g-image
              class="block summary-arrow lg:hidden"
              src="~/assets/green-arrow.svg"
            />
          </summary>
          <ul>
            <li class="mb-4">
              <g-link to="/"> Политика конфиденциальности </g-link>
            </li>
            <li class="mb-4">
              <g-link to="/"> Официальные правила </g-link>
            </li>
            <li>
              <g-link to="/"> Оферта </g-link>
            </li>
          </ul>
        </details>
      </div>
      <div class="w-3/12"></div>
      <div class="w-3/12 hidden lg:block">
        <form class="relative mb-10">
          <g-image
            class="absolute top-0 bottom-0 my-auto"
            style="height: 40px; left: 12px"
            src="~/assets/mail.svg"
            width="40"
          />
          <input
            class="border w-full border-gray-400 rounded-lg px-16 py-6 placeholder-gray-300"
            type="email"
            placeholder="your@email"
          />
          <button
            class="absolute right-0 top-0 bottom-0 my-auto bg-accent rounded-full"
            style="height: 47px; right: -20px"
          >
            <g-image src="~/assets/arrow.svg" width="47" />
          </button>
        </form>
        <p class="text-black text-sm text-opacity-50 mb-20">
          Оставь нам свою почту, чтобы первым получать наши новости, бонусы и
          специальные предложения
        </p>

        <div class="flex space-x-4">
          <a href="#" title="Наш Фейсбук"
            ><g-image src="~/assets/fb.svg" width="40"
          /></a>
          <a href="#" title="Наш Инстаграм"
            ><g-image src="~/assets/insta.svg" width="40"
          /></a>
          <a href="#" title="Наш Вконтакте"
            ><g-image src="~/assets/vk.svg" width="40"
          /></a>
        </div>
      </div>
    </div>

    <AppDrawer ref="subscribeDrawerRef" position="bottom">
      <template v-slot:content>
        <div class="py-10">
          <h4 class="font-bold text-2xl mb-10 px-10">
            Подпишись <br />
            на новые дримы!
          </h4>

          <form class="mx-6 relative mb-10">
            <g-image
              class="absolute top-0 bottom-0 my-auto"
              style="height: 40px; left: 12px"
              src="~/assets/mail.svg"
              width="40"
            />
            <input
              class="border w-full border-gray-400 rounded-lg px-16 py-6 placeholder-gray-300"
              type="email"
              placeholder="your@email"
            />
            <button
              class="absolute right-0 top-0 bottom-0 my-auto bg-accent rounded-full"
              style="height: 47px; right: -20px"
            >
              <g-image src="~/assets/arrow.svg" width="47" />
            </button>
          </form>
          <p class="text-black px-10 text-sm text-opacity-50 mb-20">
            Оставь нам свою почту, чтобы первым получать наши новости, бонусы и
            специальные предложения
          </p>
        </div>
      </template>
    </AppDrawer>
  </div>
</template>

<script>
import AppDrawer from './AppDrawer';
export default {
  name: 'AppFooter',
  components: {
    AppDrawer,
  },
  created() {
    if (process.isClient) {
      window.addEventListener('resize', this.handleResize);
    }
  },
  destroyed() {
    if (process.isClient) {
      window.removeEventListener('resize', this.handleResize);
    }
  },
  mounted() {
    if (process.isClient) {
      if (window.innerWidth >= 1024) {
        this.openFirstSummary(true);
      } else {
        this.openFirstSummary(false);
      }
    }
  },
  methods: {
    handleResize(event) {
      console.log(event);
      if (event.target.innerWidth >= 1024) {
        this.openFirstSummary(true);
      } else {
        this.openFirstSummary(false);
      }
    },
    openFirstSummary(visibility) {
      const elem = document.getElementById('docsDetails');
      if (visibility) {
        elem.setAttribute('open', '');
      } else {
        elem.removeAttribute('open');
      }
    },
    handleMobileSubscribeClick() {
      this.$refs.subscribeDrawerRef.open();
    },
  },
};
</script>

<style>
@media (max-width: 1023px) {
  .footer {
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    top: -24px;
  }
}

summary::-webkit-details-marker {
  display: none;
}

details[open] .summary-arrow {
  transform: rotate(90deg);
}

.footer-btn-shadow {
  width: 41px;
  height: 41px;
  filter: blur(32px);
  bottom: 8px;
  left: 12px;
}
</style>
