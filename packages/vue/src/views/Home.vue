<template>
  <page-main class="pkt-container pkt-txt-center">
    <h1>Vue komponenter</h1>
    <p>
      <img
        class="pkt-logo"
        alt="Punkt logo"
        aria-hidden="true"
        src="https://cdn-nocors.punkt.oslo.systems/latest/icons/punkt-circle-blue.svg"
      />

      <img
        class="pkt-logo"
        alt="Punkt logo"
        aria-hidden="true"
        src="https://cdn-nocors.punkt.oslo.systems/latest/icons/vue.svg"
      />
    </p>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue';
import { PktButton } from '@/components/button';

export default {
  name: 'Home',
  components: {
    PktButton,
    PageMain,
  },
};
</script>

<style lang="scss">
.pkt-logo {
  width: 50%;
  height: 50%;
  max-width: 18rem;
  display: inline-block;
  margin: 1rem;
}
</style>
