<template>
  <Layout>
    <div>
      <div class="w-full h-64 bg-gray-300 mb-8"></div>
      <div class="w-full flex flex-no-wrap overflow-y-auto mb-8">
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
      </div>

      <div class="w-full h-64 bg-gray-300 mb-8"></div>
      <div class="w-full overflow-y-auto">
        <div class="flex flex-no-wrap">
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
          <div class="flex-shrink-0 w-4/12 mx-4 bg-gray-300 h-64"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Главная',
  },
  routeMeta: {
    isAuth: true,
  },
  meta: {
    isAuth: true,
  },
  created() {},
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
