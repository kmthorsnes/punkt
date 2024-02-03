<template>
  <PktInputWrapper
    class="pkt-textarea"
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
    <textarea
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{
        'pkt-input': true,
        'pkt-input--fullwidth': fullwidth,
        'pkt-input--counter-error': counterMaxLength && modelValue?.length > counterMaxLength,
      }"
      :aria-invalid="hasError"
      :aria-errormessage="hasError ? `${id}-error` : ''"
      :aria-labelledby="labelledBy"
      :disabled="disabled"
      :id="id"
      :name="name || id"
      :placeholder="placeholder"
      :rows="rows"
      :value="modelValue"
    />
    <div v-if="counter" class="pkt-input__counter" aria-live="polite" aria-atomic="true">
      {{ modelValue?.length || 0 }}<template v-if="counterMaxLength">/{{ counterMaxLength }}</template>
    </div>
  </PktInputWrapper>
</template>

<script>
import PktIcon from '../icon/Icon.vue'
import PktAlert from '../alert/Alert.vue'
import PktButton from '../button/Button.vue'
import PktInputWrapper from '../inputwrapper/InputWrapper.vue'

export default {
  name: 'PktTextarea',
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
    placeholder: {
      type: String,
      required: false,
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
    counter: {
      type: Boolean,
      default: false,
    },
    counterMaxLength: {
      type: Number,
      required: false,
    },
    rows: {
      type: Number,
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
