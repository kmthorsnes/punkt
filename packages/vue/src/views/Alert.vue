<template>
  <page-main class="pkt-container">
    <h1>Alert</h1>

    <section class="component">
      <h2>Alert - kort melding</h2>
      <div class="component__block-example">
        <pkt-alert> Bruk dette tekstfeltet til å skrive en kort varsling.</pkt-alert>
        <pkt-alert :closeAlert="true" @on-close="toggleAlert">
          Bruk dette tekstfeltet til å skrive en kort varsling.
        </pkt-alert>
        <h2>Alert - melding med tittel</h2>
        <pkt-alert title="Med heading">
          Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har behov
          for, men prøv likevel å være kort og konsis.
        </pkt-alert>
        <pkt-alert title="Med date" date="09.03.2022">
          Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har behov
          for, men prøv likevel å være kort og konsis.
        </pkt-alert>
        <pkt-alert title="Med close-ikon" date="09.03.2022" :closeAlert="true">
          Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har behov
          for, men prøv likevel å være kort og konsis.</pkt-alert
        >
        <pkt-alert skin="warning" title="Alert warning" date="09.03.2022" :closeAlert="true">
          Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har behov
          for, men prøv likevel å være kort og konsis.</pkt-alert
        >

        <pkt-alert skin="error" title="Alert error" date="09.03.2022" :closeAlert="true">
          Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har behov
          for, men prøv likevel å være kort og konsis.</pkt-alert
        >

        <pkt-alert skin="success" title="Alert success" date="09.03.2022" :closeAlert="true">
          Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har behov
          for, men prøv likevel å være kort og konsis.</pkt-alert
        >
      </div>
    </section>
  </page-main>
</template>

<script>
import spec from 'componentSpecs/alert.json';
import { PktAlert } from '@/components/alert';
import PageMain from '@/dev-components/PageMain.vue';

export default {
  name: 'Alert',
  data: () => ({
    specProps: spec.props,
  }),
  components: {
    PktAlert,
    PageMain,
  },
  methods: {
    toggleAlert(closed) {
      console.log('toggle ' + closed);
    },
  },
};
</script>

<style lang="scss"></style>
