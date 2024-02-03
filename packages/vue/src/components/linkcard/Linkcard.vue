<template>
  <a
    :href="href"
    class="pkt-linkcard pkt-link"
    :class="skin ? `pkt-linkcard--${this.skin}` : 'normal'"
    :target="openInNewTab ? '_blank' : '_self'"
    :rel="openInNewTab ? 'noopener noreferrer' : undefined"
  >
    <pkt-icon class="pkt-link__icon" :name="iconName"></pkt-icon>
    <div class="pkt-linkcard__content">
      <div :class="['pkt-linkcard__title', { 'pkt-link pkt-link--external': external }]">
        {{ title }}
      </div>
      <div class="pkt-linkcard__text">
        <slot />
      </div>
    </div>
  </a>
</template>

<script>
import PktIcon from '../icon/Icon.vue';
export default {
  name: 'PktLinkcard',
  components: {
    PktIcon,
  },
  props: {
    skin: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'blue', 'beige', 'beige-outline', 'grey-outline'].includes(value);
      },
    },
    title: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    openInNewTab: {
      type: Boolean,
      default: false,
    },
    external: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>
