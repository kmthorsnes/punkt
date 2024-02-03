<template>
  <page-main class="pkt-container">
    <h1>Backlink</h1>

    <section class="component">
      <pkt-back-link :text="backlink.text" :href="backlink.href"> </pkt-back-link>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktBackLink } from '@/components/backlink'

export default {
  name: 'BackLink',
  components: {
    PktBackLink,
    PageMain,
  },
  data: () => ({
    backlink: { text: 'Start-/transport-/landingsside', href: '#' },
  }),
}
</script>

<style lang="scss"></style>
