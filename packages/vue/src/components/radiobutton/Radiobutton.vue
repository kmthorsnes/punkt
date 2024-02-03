<template>
  <div class="pkt-input-check">
    <div :class="[{ 'pkt-input-check__input--tile': hasTile }, 'pkt-input-check__input']">
      <input
        class="pkt-input-check__input-checkbox"
        :class="{ 'pkt-input-check__input-checkbox--error': hasError }"
        type="radio"
        v-bind="$attrs"
        :id="id"
        :name="name"
        :value="label"
        :checked="label === modelValue"
        @change="handleChange"
        :disabled="disabled"
      />
      <label class="pkt-input-check__input-label" :for="id">
        {{ label }}
        <div v-if="checkHelptext" class="pkt-input-check__input-helptext">
          {{ checkHelptext }}
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PktRadioButton',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
      default: '',
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
  emits: ['update:modelValue', 'onChange'],
  methods: {
    handleChange() {
      this.$emit('update:modelValue', this.label)
      this.$emit('onChange', this.label)
    },
  },
}
</script>
