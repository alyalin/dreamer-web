<template>
  <Layout>
    <div v-if="isLoad" class="flex mt-12 justify-center">
      <div
        class="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-16 w-16"
      ></div>
    </div>

    <h1 v-if="isSuccess" class="text-2xl mt-12 font-bold text-center mb-2">
      Почта успешно подтверждена.
    </h1>

    <h1 v-if="!isSuccess" class="text-2xl mt-12 font-bold text-center mb-2">
      Не удалось подтвердить почту.
    </h1>

    <div class="text-center mt-10">
      <g-link class="text-2xl" to="/">
        ⟵ Вернуться на главную
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      isLoad: true,
      isSuccess: false,
      token: null,
    };
  },
  metaInfo: {
    title: 'Подтверждение почты',
  },
  async mounted() {
    this.token = this.$route.query.code;
    setTimeout(async () => {
      await this.confirmEmail();
    }, 200);
    if (!token) {
      this.$router.replace({ path: '/' });
    }
  },
  methods: {
    async confirmEmail() {
      try {
        await this.$store.dispatch('auth/confirmEmail', {
          hash: this.token,
        });
        this.isLoad = false;
        this.isSuccess = true;
      } catch (e) {
        this.isLoad = false;
        this.isSuccess = false;
      }
    },
  },
};
</script>

<style></style>
