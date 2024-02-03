<template>
  <div class="pkt-input-check">
    <div
      :class="[
        'pkt-input-check__input',
        { 'pkt-input-check__input--tile': hasTile },
        { 'pkt-input-check__input--tile-disabled': disabled && hasTile },
      ]"
    >
      <label
        v-if="label && labelPosition === 'left'"
        :class="['pkt-input-check__input-label', { 'pkt-sr-only': hideLabel }]"
        :for="id"
        >{{ label }}
        <div v-if="checkHelptext" class="pkt-input-check__input-helptext">
          {{ checkHelptext }}
        </div>
      </label>
      <input
        v-bind="$attrs"
        class="pkt-input-check__input-checkbox"
        :class="{ 'pkt-input-check__input-checkbox--error': hasError }"
        type="checkbox"
        :role="isSwitch ? 'switch' : 'checkbox'"
        :id="id"
        :checked="computedChecked || defaultChecked"
        @change="handleChange"
        :disabled="disabled"
      />
      <label
        v-if="label && labelPosition === 'right'"
        :class="['pkt-input-check__input-label', { 'pkt-sr-only': hideLabel }]"
        :for="id"
        >{{ label }}
        <div v-if="checkHelptext" class="pkt-input-check__input-helptext">
          {{ checkHelptext }}
        </div>
      </label>
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
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    hasTile: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: false,
    },
    labelPosition: {
      type: String,
      default: 'right',
    },
    hideLabel: {
      // ‼️ Hides label *and* help text
      type: Boolean,
      default: false,
    },
    checkHelptext: {
      type: String,
      required: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    isSwitch: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'onChange'],
  computed: {
    computedChecked: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue)
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
