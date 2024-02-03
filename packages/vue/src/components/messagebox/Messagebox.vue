<template>
  <div :class="{ 'pkt-messagebox': true, [skinClass]: true, 'pkt-messagebox--compact': compact }">
    <div class="pkt-messagebox__title">
      {{ title }}
    </div>

    <div class="pkt-messagebox__text"><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'PktMessagebox',
  props: {
    skin: {
      type: String,
      default: 'beige',
      validator(value) {
        return ['beige', 'green', 'red', 'blue'].includes(value);
      },
    },

    title: {
      type: String,
      default: '',
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    skinClass() {
      return [`pkt-messagebox--${this.skin}`]
    },
  },
}
</script>
