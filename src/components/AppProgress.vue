<template>
  <div class="dream-progress z-10 bg-white flex">
    <div class="meter w-full flex bg-white">
      <span class="relative dream-progress-success z-10"></span>
      <span
        class="absolute w-full h-full flex justify-center text-xs lg:text-base items-center font-bold z-10"
        style="color: #329edb"
        >Еще 34 дня</span
      >
    </div>
    <span class="meter-shadow"></span>
  </div>
</template>

<script>
export default {
  name: 'AppProgress',
};
</script>

<style scoped>
.meter {
  border-radius: 8px;
}

.meter-shadow {
  position: absolute;
  top: 0;
  left: -5px;
  width: 30px;
  height: 100%;
  z-index: -1;
  background-color: #70ff00;
  border-radius: 8px;
}

.dream-progress {
  width: 100px;
  height: 30px;
  border-radius: 8px;
  font-size: 8px;
}

.dream-progress-success {
  width: 63%;
  background-color: #4dff94;
  border-radius: 8px;
  opacity: 0.3;
}

@media (min-width: 1024px) {
  .dream-progress {
    width: 164px;
    height: 42px;
    border-radius: 16px;
  }

  .dream-progress-success {
    border-radius: 16px;
  }

  .meter {
    border-radius: 16px;
  }

  .meter-shadow {
    border-radius: 16px;
  }
}
</style>
