<template>
  <section class="pkt-grid-debug">
    <slot></slot>
    <section v-if="showGuide" class="pkt-grid pkt-grid--guide">
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
      <div class="pkt-cell"></div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    showGuide: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@use "sass:map";
@use "@pkt/scss/abstracts/variables";
@use "@pkt/scss/abstracts/mixins/breakpoints" as *;

.pkt-grid-debug {
  position: relative;
  z-index: 0;

  & > .pkt-cell {
    background-color: rgb(42, 40, 89, 1);
    padding: map.get(variables.$spacing, "size-8") 0;
    text-align: center;
    color: #fff;
  }

  .pkt-grid--guide {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    & > .pkt-cell {
      background-color: #ececec;
      padding: map.get(variables.$spacing, "size-8") 0;
      text-align: center;
      color: #fff;
    }
  }

  & + .pkt-grid {
    margin-top: 1.875rem;
  }
}
</style>
