<template>
  <PktInputWrapper
    class="pkt-textinput"
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
    <div class="pkt-input__container">
      <div v-if="prefix" class="pkt-input-prefix">{{ prefix }}</div>
      <input
        v-bind="$attrs"
        v-on="{
          ...$listeners,
          input: (event) => $emit('input', event.target.value),
        }"
        :class="{
          'pkt-input': true,
          'pkt-input--fullwidth': fullwidth,
        }"
        :type="type"
        :name="name || id"
        :id="id"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :value="value"
        :disabled="disabled"
        :aria-invalid="hasError"
        :aria-errormessage="hasError ? `${id}-error` : ''"
        :aria-labelledby="labelledBy"
        ref="input"
      />
      <p v-if="suffix" class="pkt-input-suffix">
        {{ suffix }}
        <pkt-icon v-if="iconNameRight" class="pkt-input-suffix-icon" :name="iconNameRight" />
        <pkt-icon v-else-if="shouldShowSearchIcon" class="pkt-input-suffix-icon" name="magnifying-glass-big" />
      </p>
      <pkt-icon v-else-if="iconNameRight" class="pkt-input-icon" :name="iconNameRight" />
      <pkt-icon v-else-if="shouldShowSearchIcon" class="pkt-input-icon" name="magnifying-glass-big" />
    </div>
  </PktInputWrapper>
</template>

<script>
import PktIcon from '../icon/Icon.vue'
import PktAlert from '../alert/Alert.vue'
import PktInputWrapper from '../inputwrapper/InputWrapper.vue'

export default {
  name: 'PktTextinput',
  components: { PktIcon, PktAlert, PktInputWrapper },
  inheritAttrs: false,
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
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    autocomplete: {
      type: String,
      required: false,
      default: 'off',
    },
    value: {
      type: String,
      required: false,
    },
    suffix: {
      type: String,
      required: false,
    },
    prefix: {
      type: String,
      required: false,
    },
    iconNameRight: {
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
    omitSearchIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    labelledBy() {
      this.ariaLabelledby || `${this.id}-label`
    },
    shouldShowSearchIcon() {
      return this.type === 'search' && !this.iconNameRight && !this.omitSearchIcon
    },
  },
}
</script>
