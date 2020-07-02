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

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
