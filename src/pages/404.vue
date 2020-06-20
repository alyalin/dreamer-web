<template>
  <Layout>
    <div class="flex flex-col items-center justify-center pt-20">
      <g-link class="text-2xl" to="/">⟵ Вернуться на главную</g-link>
      <g-image class="mx-auto" src="~/assets/404.png" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Страница не найдена',
  },
};
</script>
