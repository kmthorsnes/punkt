<template>
  <page-main class="pkt-container">
    <h1>Linkcard</h1>

    <section class="component">
      <div class="component__block-example">
        <h2>Linkcard default</h2>
        <pkt-linkcard href="" title="Overskrift her" iconName="user"
          >Tekst som går over flere linjer og som forklarer innholdet på den siden man kommer.</pkt-linkcard
        >
        <h2>Linkcard blue</h2>
        <pkt-linkcard href="" title="Overskrift her" iconName="user" skin="blue"
          >Tekst som går over flere linjer og som forklarer innholdet på den siden man kommer.</pkt-linkcard
        >
        <h2>Linkcard beige</h2>
        <pkt-linkcard href="" title="Overskrift her" iconName="chevron-right" skin="beige"
          >Tekst som går over flere linjer og som forklarer innholdet på den siden man kommer.</pkt-linkcard
        >
        <h2>Linkcard beige-outline</h2>
        <pkt-linkcard href="#" title="Overskrift her" iconName="user" skin="beige-outline"
          >Tekst som går over flere linjer og som forklarer innholdet på den siden man kommer.</pkt-linkcard
        >
        <h2>Linkcard grey-outline</h2>
        <pkt-linkcard href="#" title="Overskrift her" iconName="user" skin="grey-outline"
          >Tekst som går over flere linjer og som forklarer innholdet på den siden man kommer.</pkt-linkcard
        >
        <pkt-linkcard href="www.example.com" title="Åpne i ny fane" iconName="user" openInNewTab external
          >Tekst som går over flere linjer og som forklarer innholdet på den siden man kommer.</pkt-linkcard
        >
      </div>
    </section>
  </page-main>
</template>

<script>
import { PktLinkcard } from '@/components/linkcard';
import PageMain from '@/dev-components/PageMain.vue';

export default {
  name: 'Linkcard',
  components: {
    PktLinkcard,
    PageMain,
  },
};
</script>
