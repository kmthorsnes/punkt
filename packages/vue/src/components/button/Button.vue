<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="classes"
    @click="$emit('onClick')"
    @keyup.enter="$emit('onClick')"
    :disabled="disabled"
  >
    <pkt-icon v-if="variant !== 'label-only'" class="pkt-btn__icon" :name="iconName"></pkt-icon>
    <span class="pkt-btn__text">
      <slot>{{ text }}</slot>
    </span>
    <pkt-icon v-if="variant === 'icons-right-and-left'" class="pkt-btn__icon" :name="secondIconName"></pkt-icon>
  </button>
</template>
<script>
import PktIcon from '../icon/Icon.vue'
export default {
  name: 'PktButton',
  components: {
    PktIcon,
  },
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconName: {
      type: String,
      required: false,
      default: 'user',
    },
    secondIconName: {
      type: String,
      required: false,
      default: 'user',
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    skin: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value),
    },
    color: {
      type: String,
      validator: (value) =>
        [
          'blue',
          'blue-outline',
          'green',
          'green-outline',
          'green-dark',
          'green-dark-outline',
          'beige-light',
          'beige-dark-outline',
          'yellow',
          'yellow-outline',
          'red',
          'red-outline',
        ].includes(value),
    },
    // Text will get overwritten by "slot" if we have any DOM children in the button element
    text: {
      type: String,
      required: false,
      default: 'Trykk her',
    },
    variant: {
      type: String,
      default: 'label-only',
      validator: (value) =>
        ['label-only', 'icon-left', 'icon-right', 'icon-only', 'icons-right-and-left'].includes(value),
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value),
    },
  },
  computed: {
    classes() {
      return ['pkt-btn', this.sizeClass, this.skinClass, this.variantClass, this.colorClass]
    },
    sizeClass() {
      return this.size !== 'medium' ? `pkt-btn--${this.size}` : ''
    },
    skinClass() {
      return this.skin !== 'primary' ? `pkt-btn--${this.skin}` : ''
    },
    colorClass() {
      return this.color ? `pkt-btn--${this.color}` : ''
    },
    variantClass() {
      return this.variant !== 'label-only' ? `pkt-btn--${this.variant}` : ''
    },
  },
}
</script>
