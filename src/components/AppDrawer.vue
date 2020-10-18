<template>
  <div v-if="visible" class="fixed z-50">
    <div
      :class="{
        'bottom-0 left-0 right-0 rounded-t-d-xl': position === 'bottom',
        'right-0 top-0 bottom-0 rounded-l-d-xl': position === 'right',
      }"
      class="fixed bg-white z-50"
    >
      <div
        v-if="position === 'bottom'"
        class="drawer-bar absolute inset-x-0 m-auto rounded-md bg-accent"
      ></div>
      <slot name="content"></slot>
    </div>
    <div
      class="fixed inset-0 bg-black opacity-50 z-40 transition duration-500 ease-in-out transition-opacity"
      @click="close()"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'AppDrawer',
  props: {
    position: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      visible: false,
    };
  },
  watch: {
    visible: function () {
      document.body.style.overflow = this.visible ? 'hidden' : '';
    },
  },
  methods: {
    open() {
      this.visible = !this.visible;
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.drawer-bar {
  width: 48px;
  height: 3px;
  top: -14px;
}
</style>
