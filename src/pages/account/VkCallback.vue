<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-16 w-16"
    ></div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const token = this.$route.query.code;
    if (token) {
      setTimeout(async () => {
        await this.$store.dispatch('auth/sendVkToken', token);
      }, 500);
    }
    this.$router.replace({ path: '/' });
  },
};
</script>

<style></style>
