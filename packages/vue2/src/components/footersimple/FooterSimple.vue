<template>
  <footer class="pkt-footer-simple" data-mode="dark">
    <div class="pkt-footer-simple__container">
      <ul class="pkt-footer-simple__list">
        <li class="pkt-footer-simple__list-item" v-for="(item, index) in links" :key="`links-${index}`">
          <a
            class="pkt-footer-simple__link"
            :class="{ 'pkt-link--external': item.external }"
            :href="item.href"
            :target="item.openInNewTab ? '_blank' : '_self'"
            :rel="item.openInNewTab ? 'noopener noreferrer' : undefined"
          >
            <pkt-icon class="pkt-footer-simple__link-icon" name="chevron-right"></pkt-icon>
            {{ item.text }}
          </a>
        </li>
        <li class="pkt-footer-simple__list-item">
          <a class="pkt-footer-simple__link" :href="personvernOgInfoLink">
            <pkt-icon class="pkt-footer-simple__link-icon" name="chevron-right"></pkt-icon>
            Personvern og informasjonskapsler
          </a>
        </li>
        <li class="pkt-footer-simple__list-item">
          <a class="pkt-footer-simple__link" :href="tilgjengelighetLink">
            <pkt-icon class="pkt-footer-simple__link-icon" name="chevron-right"></pkt-icon>
            Tilgjengelighet
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import PktIcon from '../icon/Icon.vue'

export default {
  name: 'PktFooterSimple',
  components: {
    PktIcon,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
      validator: (value) => value.every((link) => typeof link.href === 'string' && typeof link.text === 'string'),
    },
    personvernOgInfoLink: {
      type: String,
      default: 'https://www.oslo.kommune.no/personvern-og-informasjonskapsler/',
      required: false,
    },
    tilgjengelighetLink: {
      type: String,
      default: 'https://www.oslo.kommune.no/tilgjengelighet/',
      required: false,
    },
  },
}
</script>
