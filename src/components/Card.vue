<template>
  <div class="relative">
    <div class="card-body relative z-10 bg-white">
      <AppProgress class="absolute" style="left: 30px; top: 30px" />
      <div
        class="overflow-hidden relative"
        style="border-radius: 24px"
      >
        <slot name="image"></slot>
      </div>
      <div>
        <ul class="px-5 py-10">
          <li class="flex mb-8 items-center text-xl">
            <g-image class="mr-4" src="~/assets/event-sm.svg" />
            {{ featureFirstLine }}
          </li>
          <li class="flex items-center text-xl">
            <g-image class="mr-4" src="~/assets/income.svg" />
            {{ featureSecondLine }}
          </li>
        </ul>
      </div>
      <button
          class="transform scale-75 lg:scale-100 flex justify-center items-center absolute bottom-0 bg-accent rounded-full"
          style="width: 80px; height: 80px; bottom: -40px; right: 37px"
      >
        <g-image src="~/assets/arrow-lg.svg" />
      </button>
    </div>
    <div class="absolute card-shadow"></div>
  </div>
</template>

<script>
import AppProgress from './AppProgress';
export default {
  name: 'Card',
  components: { AppProgress },
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    featureFirstLine: {
      type: String,
      required: true,
    },
    featureSecondLine: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-body {
  width: 320px;
  height: auto;
  border-radius: 24px;
}

.card-shadow {
  bottom: 30px;
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
  }

  .card-shadow {
    top: 60px;
    bottom: 30px;
  }
}
</style>
