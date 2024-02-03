<template>
  <page-main class="pkt-container pkt-container--full">
    <h1>Breadcrumbs</h1>

    <section class="component">
      <pkt-breadcrumbs :breadcrumbs="breadcrumbs"></pkt-breadcrumbs>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktBreadcrumbs } from '@/components/breadcrumbs'

export default {
  name: 'Breadcrumbs',
  components: {
    PktBreadcrumbs,
    PageMain,
  },
  data: () => ({
    breadcrumbs: [
      { text: 'Nivå 1', href: '#1' },
      { text: 'Nivå 2', href: '#2' },
      { text: 'Nivå 3', href: '#3' },
      { text: 'Nivå 4', href: '#4' },
      { text: 'Ikke lov med 5', href: '#ikkelov' },
    ],
  }),
}
</script>

<style lang="scss"></style>
