<template>
  <Layout>
    <div class="container mx-auto px-6">
      <h1 class="text-3xl font-bold mb-4">
        Мой профиль
      </h1>
      <template v-if="info">
        <div><strong>Имя:</strong> {{ info.firstName }}</div>
        <div><strong>Фамилия:</strong> {{ info.lastName }}</div>
        <div><strong>Почта:</strong> {{ info.email }}</div>
        <div><strong>Аккаунт создан:</strong> {{ info.created }}</div>
        <div><strong>Роль:</strong> {{ info.role }}</div>
        <div><strong>Facebook</strong> {{ info.facebook_id ? '✅' : '' }}</div>
        <div><strong>Vk</strong> {{ info.vk_id ? '✅' : '' }}</div>
        <div>
          <strong>Верифицирован:</strong> {{ info.verified ? 'Да' : 'Нет' }}
          <button
            v-if="!confirmEmailError && !emailIsSend && !info.verified"
            class="px-1 text-xs text-white rounded bg-purple-500 hover:bg-purple-600"
            type="button"
            @click="handleConfirmEmailClicked"
          >
            Подтвердить
          </button>
          <span v-if="emailIsSend" class="text-green-500"
            >Письмо было отправлено на вашу почту</span
          >
          <span v-if="confirmEmailError" class="text-red-500">{{
            confirmEmailError
          }}</span>
        </div>
      </template>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
        @click="handleLogout"
      >
        Выйти
      </button>
    </div>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex';
import DeviceDetector from 'device-detector-js';

export default {
  data() {
    return {
      confirmEmailError: '',
      emailIsSend: false,
    };
  },
  computed: {
    ...mapGetters('profile', ['info']),
  },
  async mounted() {
    try {
      await this.$store.dispatch('profile/getProfile');
    } catch (e) {
      if (e.response) {
        this.error = e.response.data.message;
      }
    }
  },
  metaInfo: {
    title: 'Профиль',
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('auth/logout');
    },
    async handleConfirmEmailClicked() {
      try {
        const deviceDetector = new DeviceDetector();
        const userAgent = navigator.userAgent;
        const device = deviceDetector.parse(userAgent);
        await this.$store.dispatch('auth/sendConfirmEmailMessage', {
          osName: device.os.name,
          browserName: device.client.name,
        });
        this.emailIsSend = true;
      } catch (e) {
        if (e.response.data.message) {
          this.confirmEmailError = e.response.data.message;
        }
      }
    },
  },
};
</script>

<style></style>
