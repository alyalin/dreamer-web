<template>
  <div class="flex items-center justify-center mb-4">
    <div
      class="flex flex-col items-center flex-no-wrap w-full sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 px-10 sm:px-0"
    >
      <div class="h-px w-full bg-gray-400 mb-4" />
      <h2 class="text-lg font-bold mb-2">
        {{ helperText }}
      </h2>
      <g-link
        :to="href"
        class="text-center w-full px-6 py-4 mx-auto block rounded border-2 text-purple-500 font-bold border-purple-500 text-black no-underline"
      >
        {{ buttonText }}
      </g-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'FormFooterHelper',
  props: {
    helperText: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
});
</script>
