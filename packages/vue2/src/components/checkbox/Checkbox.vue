<template>
  <div class="pkt-input-check">
    <div :class="[{ 'pkt-input-check__input--tile': hasTile }, 'pkt-input-check__input']">
      <input
        class="pkt-input-check__input-checkbox"
        :class="{ 'pkt-input-check__input-checkbox--error': hasError }"
        type="checkbox"
        v-bind="$attrs"
        :id="id"
        :checked="computedChecked || defaultChecked"
        @change="handleChange"
        :disabled="disabled"
      />
      <label class="pkt-input-check__input-label" :for="id"
        >{{ label }}
        <div v-if="checkHelptext" class="pkt-input-check__input-helptext">
          {{ checkHelptext }}
        </div></label
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'PktCheckbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    defaultChecked: {
      type: Boolean,
      required: false,
      default: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasTile: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
    },
    checkHelptext: {
      type: String,
      required: false,
    },
    hasError: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    computedChecked: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
        this.$emit('change', newValue)
        this.$emit('onChange', newValue)
      },
    },
  },
  methods: {
    handleChange(event) {
      this.computedChecked = event.target.checked
    },
  },
}
</script>
