<template>
  <div
    :class="{ 'pkt-alert': true, [skinClass]: true, 'pkt-alert--compact': compact }"
    v-show="open"
    :aria-live="ariaLive"
  >
    <pkt-icon :name="iconName" class="pkt-alert__icon"></pkt-icon>

    <div class="pkt-alert__close" v-if="closeAlert">
      <button
        class="pkt-btn pkt-btn--tertiary pkt-btn--small pkt-btn--icon-only"
        type="button"
        role="button"
        tabindex="0"
        aria-label="close"
        @keyup.enter="close"
        @click="close"
      >
        <pkt-icon class="pkt-btn__icon" name="close"></pkt-icon>
      </button>
    </div>

    <div class="pkt-alert__title" v-if="title">
      {{ title }}
    </div>

    <div class="pkt-alert__text"><slot /></div>

    <div class="pkt-alert__date" v-if="date">Sist oppdatert: {{ date }}</div>
  </div>
</template>

<script>
import PktIcon from '../icon/Icon.vue'
export default {
  name: 'PktAlert',
  components: {
    PktIcon,
  },
  props: {
    skin: {
      type: String,
      default: 'info',
      validator(value) {
        return ['error', 'success', 'warning', 'info'].includes(value)
      },
    },
    closeAlert: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    ariaLive: {
      type: String,
      default: 'polite',
      validator(value) {
        return ['off', 'polite', 'assertive'].includes(value)
      },
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    closed: false,
  }),
  methods: {
    close() {
      this.closed = true
      this.$emit('on-close', this.closed)
    },
  },
  computed: {
    skinClass() {
      return [`pkt-alert--${this.skin}`]
    },
    open() {
      return !this.closed
    },
    iconName() {
      return this.skin === 'info' ? 'alert-information' : `alert-${this.skin}`
    },
  },
}
</script>
