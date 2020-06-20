<template>
  <div class="layout">
    <AppHeader></AppHeader>
    <slot />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import AppHeader from '../components/AppHeader';

export default {
  components: {
    AppHeader,
  },
};
</script>
