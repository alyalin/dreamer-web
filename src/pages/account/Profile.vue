<template>
  <Layout>
    <div class="container mx-auto px-6">
      <h1 class="text-3xl font-bold mb-4">Мой профиль</h1>
      <template v-if="info">
        <div><strong>Почта:</strong> {{ info.email }}</div>
        <div><strong>Аккаунт создан:</strong> {{ info.created }}</div>
        <div>
          <strong>Верифицирован:</strong> {{ info.verified ? 'Да' : 'Нет' }}
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

export default {
  data() {
    return {
      error: '',
    };
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
  computed: {
    ...mapGetters('profile', ['info']),
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>

<style></style>
