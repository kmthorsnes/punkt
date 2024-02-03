<template>
  <page-main class="pkt-container pkt-container--laptop">
    <h1>Tag</h1>

    <section class="component">
      <pkt-tag>Tag</pkt-tag>
      <pkt-tag skin="red">Tag</pkt-tag>
      <pkt-tag skin="yellow">Tag</pkt-tag>
      <pkt-tag skin="green">Tag</pkt-tag>
      <pkt-tag skin="beige">Tag</pkt-tag>
      <pkt-tag skin="grey">Tag</pkt-tag>
      <pkt-tag skin="blue-light">Tag</pkt-tag>
      <h2>Tag med ikon</h2>
      <pkt-tag iconName="edit">Tag</pkt-tag>
      <pkt-tag iconName="clock" skin="red">Tag</pkt-tag>
      <pkt-tag iconName="plus-sign" skin="yellow">Tag</pkt-tag>
      <pkt-tag iconName="check-big" skin="green">Tag</pkt-tag>
      <pkt-tag iconName="chevron-right" skin="beige">Tag</pkt-tag>
      <pkt-tag iconName="edit" skin="grey">Tag</pkt-tag>
      <h2>Tag med close</h2>
      <pkt-tag closeTag>Tag</pkt-tag>
      <pkt-tag closeTag skin="red" ariaLabel="fjern dine valg">Tag</pkt-tag>
      <pkt-tag closeTag skin="yellow">Tag</pkt-tag>
      <pkt-tag closeTag skin="green">Tag</pkt-tag>
      <pkt-tag closeTag skin="beige">Tag</pkt-tag>
      <pkt-tag closeTag skin="grey">Tag</pkt-tag>
      <h2>Tag med ikon og close</h2>
      <pkt-tag iconName="edit" closeTag>Tag</pkt-tag>
      <pkt-tag iconName="clock" closeTag skin="red">Tag</pkt-tag>
      <pkt-tag iconName="plus-sign" closeTag skin="yellow">Tag</pkt-tag>
      <pkt-tag iconName="check-big" closeTag skin="green">Tag</pkt-tag>
      <pkt-tag iconName="chevron-right" closeTag skin="beige">Tag</pkt-tag>
      <pkt-tag iconName="edit" closeTag skin="grey">Tag</pkt-tag>
      <h2>Tag størrelser</h2>
      <pkt-tag size="large" iconName="edit" closeTag>Large</pkt-tag>
      <pkt-tag size="medium" iconName="edit" closeTag>Medium</pkt-tag>
      <pkt-tag size="small" iconName="edit" closeTag>Small</pkt-tag>
      <h2>Tag tekst-style</h2>
      <pkt-tag textStyle="thin-text">Thin</pkt-tag>
      <pkt-tag textStyle="normal-text">Normal</pkt-tag>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue';
import { PktTag } from '@/components/tag';

export default {
  name: 'BackLink',
  components: {
    PktTag,
    PageMain,
  },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
