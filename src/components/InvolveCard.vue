<template>
  <div class="relative">
    <div class="card-body relative z-10 bg-white">
      <div
        class="overflow-hidden relative flex items-center justify-center"
        style="height: 257px; border-radius: 24px; background: linear-gradient(127.09deg, #dcffd0 -9.32%, #a7dfff 70.35%);"
      >
        <slot name="image"></slot>
      </div>
      <div>
        <ul class="px-4 py-5 lg:px-5 lg:py-10">
          <li class="flex flex-col mb-8 text-base lg:text-xl">
            <span class="font-medium" style="color: #cbcbcb">Привлекли</span>
            <span
              class="font-black text-3xl lg:text-5xl leading-none"
              style="color: #412e2d"
              >{{ amount }} ₽</span
            >
          </li>
          <li class="flex mb-2 lg:mb-8 items-center text-base lg:text-xl">
            <g-image
              class="mr-2 lg:mr-4 transform scale-75 lg:scale-100"
              src="~/assets/event-sm.svg"
            />
            {{ events }} событий
          </li>
          <li class="flex mb-2 lg:mb-8 items-center text-base lg:text-xl">
            <g-image
              class="mr-2 lg:mr-4 transform scale-75 lg:scale-100"
              src="~/assets/doughnut-sm.svg"
            />
            {{ donates }} донатов
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
export default {
  name: 'InvolveCard',
  props: {
    amount: {
      type: String,
      required: true,
    },
    events: {
      type: String,
      required: true,
    },
    donates: {
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
  }

  .card-shadow {
    top: 60px;
    bottom: 30px;
  }
}
</style>
