<template>
  <nav class="pkt-back-link" aria-label="Gå tilbake et steg">
    <a v-if="href.startsWith('http') || href.startsWith('mailto')" :href="href" class="pkt-link pkt-link--icon-left">
      <pkt-icon class="pkt-back-link__icon pkt-icon pkt-link__icon" name="chevron-thin-left"></pkt-icon>
      <span class="pkt-back-link__text">
        <slot>{{ text }}</slot>
      </span>
    </a>
    <router-link v-else :to="href" class="pkt-link pkt-link--icon-left">
      <pkt-icon class="pkt-back-link__icon pkt-icon pkt-link__icon" name="chevron-thin-left"></pkt-icon>
      <span class="pkt-back-link__text">
        <slot>{{ text }}</slot>
      </span>
    </router-link>
  </nav>
</template>

<script>
import PktIcon from '../icon/Icon.vue'

export default {
  name: 'PktBackLink',
  components: {
    PktIcon,
  },
  props: {
    // Text will get overwritten by "slot" if we have any DOM children in the button element
    text: {
      type: String,
      required: false,
      default: 'oslo.kommune.no',
    },
    href: {
      type: String,
      required: false,
      default: 'https://www.oslo.kommune.no',
    },
  },
}
</script>
