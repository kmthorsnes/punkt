<template>
  <PktInputWrapper
    class="pkt-select"
    :forId="id"
    :label="label"
    :helptext="helptext"
    :helptextDropdown="helptextDropdown"
    :helptextDropdownButton="helptextDropdownButton"
    :optionalTag="optionalTag"
    :optionalText="optionalText"
    :requiredTag="requiredTag"
    :requiredText="requiredText"
    :hasError="hasError"
    :errorMessage="errorMessage"
    :disabled="disabled"
    :inline="inline"
    :ariaDescribedby="ariaDescribedby"
    :useWrapper="useWrapper"
    @toggleHelpText="$emit('toggleHelpText')"
  >
    <select
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{
        'pkt-input': true,
        'pkt-input--fullwidth': fullwidth,
      }"
      :aria-invalid="hasError"
      :aria-errormessage="hasError ? `${id}-error` : ''"
      :aria-labelledby="labelledBy"
      :disabled="disabled"
      :id="id"
      :name="name || id"
      :value="modelValue"
    >
      <slot></slot>
    </select>
  </PktInputWrapper>
</template>

<script>
import PktIcon from '../icon/Icon.vue'
import PktAlert from '../alert/Alert.vue'
import PktButton from '../button/Button.vue'
import PktInputWrapper from '../inputwrapper/InputWrapper.vue'

export default {
  name: 'PktSelect',
  components: { PktIcon, PktAlert, PktButton, PktInputWrapper },
  props: {
    label: {
      type: String,
      required: true,
      default: 'input',
    },
    helptext: {
      type: String,
      required: false,
    },
    helptextDropdown: {
      type: String,
      required: false,
    },
    helptextDropdownButton: {
      type: String,
      required: false,
    },
    optionalTag: {
      type: Boolean,
      required: false,
      default: false,
    },
    optionalText: {
      type: String,
      required: false,
    },
    requiredTag: {
      type: Boolean,
      required: false,
      default: false,
    },
    requiredText: {
      type: String,
      required: false,
    },
    hasError: {
      type: Boolean,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    ariaLabelledby: {
      type: String,
      required: false,
    },
    ariaDescribedby: {
      type: String,
      required: false,
    },
    useWrapper: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    labelledBy() {
      this.ariaLabelledby || `${this.id}-label`
    },
  },
}
</script>
