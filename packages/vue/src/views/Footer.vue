<template>
  <page-main class="pkt-container pkt-container--full">
    <h1>Footer</h1>

    <section class="component">
      <h2>Footer Simple</h2>
      <div class="component__block-example">
        <pkt-footer-simple :links="links"></pkt-footer-simple>
      </div>
      <h2>Footer Simple - default</h2>
      <div class="component__block-example">
        <pkt-footer-simple></pkt-footer-simple>
      </div>
    </section>

    <section class="component">
      <h2>Footer Normal</h2>
      <div class="component__block-example">
        <pkt-footer :columnOne="columnOne" :columnTwo="columnTwo" tilgjengelighetLink="www.vg.no"></pkt-footer>
      </div>
      <h2>Footer Normal - Med språklenke</h2>
      <div class="component__block-example">
        <pkt-footer :columnOne="columnOne" :columnTwo="columnTwo" :socialLinks="socialLinksLang"></pkt-footer>
      </div>
      <h2>Footer Normal - Med språk og ikonlenker</h2>
      <div class="component__block-example">
        <pkt-footer :columnOne="columnOne" :columnTwo="columnTwo" :socialLinks="socialLinksAll"></pkt-footer>
      </div>
    </section>
  </page-main>
</template>

<script>
import { PktFooterSimple } from '@/components/footersimple'
import { PktFooter } from '@/components/footer'
import PageMain from '@/dev-components/PageMain.vue'

export default {
  name: 'Footer',
  components: {
    PktFooterSimple,
    PktFooter,
    PageMain,
  },
  data: () => ({
    links: [
      { text: 'Test ekstern lenke', href: 'https://www.example.com', external: true, openInNewTab: true },
      { text: 'Testlenke', href: '#' },
    ],
    columnOne: {
      title: 'Kolonnetittel 1',
      text: 'Her kan du skrive en lengre tekst som beskriver løsningen eller tjenesten om ønskelig.',
      links: [
        { text: 'Test ekstern lenke', href: 'https://www.example.com', external: true, openInNewTab: true },
        { text: 'Testlenke', href: '#' },
      ],
    },
    columnTwo: {
      title: 'Kolonnetittel 2',
      links: [
        { text: 'Testlenke', href: '#' },
        { text: 'Testlenke', href: '#' },
      ],
    },
    socialLinksAll: [
      { href: 'https://www.example.com', language: 'Engelsk', openInNewTab: true },
      { href: '#', iconName: 'facebook' },
      { href: '#', iconName: 'twitter' },
    ],
    socialLinksLang: [{ href: '#', language: 'Engelsk' }],
  }),
}
</script>

<style lang="scss"></style>
