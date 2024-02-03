<template>
  <span>
    <template v-if="closeTag && iconName">
      <button
        v-show="open"
        :class="[buttonClass, skinClass, sizeClass, textStyleClass]"
        :type="type"
        role="button"
        :aria-label="ariaLabel"
        @keyup.enter="close"
        @click="close"
      >
        <pkt-icon class="pkt-tag__icon" :name="iconName"></pkt-icon>
        <slot></slot>
        <pkt-icon class="pkt-tag__close-btn" name="close"></pkt-icon>
      </button>
    </template>

    <template v-else-if="closeTag">
      <button
        v-show="open"
        :class="[buttonClass, skinClass, sizeClass, textStyleClass]"
        :type="type"
        role="button"
        :aria-label="ariaLabel"
        @keyup.enter="close"
        @click="close"
      >
        <pkt-icon class="pkt-tag__close-btn" name="close"></pkt-icon>
        <slot></slot>
      </button>
    </template>

    <template v-else-if="iconName">
      <span class="pkt-tag" :class="[skinClass, sizeClass, textStyleClass]"
        ><pkt-icon class="pkt-tag__icon" :name="iconName"></pkt-icon>
        <slot></slot>
      </span>
    </template>

    <template v-else>
      <span class="pkt-tag" :class="[skinClass, sizeClass, textStyleClass]">
        <slot></slot>
      </span>
    </template>
  </span>
</template>
<script>
import PktIcon from '../icon/Icon.vue';

export default {
  name: 'PktTag',
  components: { PktIcon },
  props: {
    skin: {
      type: String,
      default: 'blue',
      validator(value) {
        return ['blue', 'green', 'red', 'beige', 'yellow', 'grey', 'blue-light'].includes(value);
      },
    },
    textStyle: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['thin-text', 'normal-text'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
    closeTag: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value),
    },
    ariaLabel: {
      type: String,
      default: 'close',
    },
  },
  data: () => ({
    closed: false,
  }),
  methods: {
    close() {
      this.closed = true;
      this.$emit('on-close', this.closed);
    },
  },
  computed: {
    skinClass() {
      return [`pkt-tag--${this.skin}`];
    },
    sizeClass() {
      return [`pkt-tag--${this.size}`];
    },
    textStyleClass() {
      return [`pkt-tag--${this.textStyle}`];
    },
    buttonClass() {
      return [
        'pkt-tag',
        'pkt-btn',
        'pkt-btn--tertiary',
        {
          'pkt-btn--icons-right-and-left': this.iconName && this.closeTag,
          'pkt-btn--icon-right': this.closeTag && !this.iconName,
        },
      ];
    },
    open() {
      return !this.closed;
    },
  },
};
</script>
