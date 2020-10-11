<template>
  <div class="relative">
    <div
      class="card-body relative z-10 bg-white"
      :class="{ 'border-2 border-dashed': !background }"
      :style="{
        background: background
          ? 'linear-gradient(127.09deg, #FF36BB -9.32%, #FF6D40 70.35%)'
          : 'transparent',
      }"
    >
      <slot name="content"></slot>
      <button
        class="transform scale-75 lg:scale-100 flex justify-center items-center absolute bottom-0 bg-accent rounded-full"
        style="width: 80px; height: 80px; bottom: -40px; right: 37px"
      >
        <g-image src="~/assets/arrow-lg.svg" />
      </button>
    </div>
    <div v-if="background" class="absolute card-shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    background: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.card-body {
  width: 320px;
  height: 509px;
  border-radius: 24px;
}

.card-shadow {
  bottom: 20px;
  top: 60px;
  left: 40px;
  right: 25px;
  width: auto;
  height: auto;
  background-color: #2e1c0b;
  filter: blur(32px);
}

@media (min-width: 1024px) {
  .card-body {
    width: 424px;
    height: 598px;
  }

  .card-shadow {
    top: 60px;
    bottom: 30px;
  }
}
</style>
