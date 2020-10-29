<template>
  <div class="layout">
    <div class="content">
      <AppHeader />
      <slot />
    </div>
    <AppFooter />
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
import AppFooter from '../components/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
html {
  /*font-size: 14.4px*/
}

.content {
  background-image: linear-gradient(90.12deg, #1d4592 -20.25%, #85c2c6 125.99%);
  background-color: #85c2c6;
  -webkit-overflow-scrolling: touch;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

@media (min-width: 1024px) {
  .content {
    border-bottom-right-radius: 32px;
    border-bottom-left-radius: 32px;
  }
}

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
