<template>
  <div :class="['pkt-inputwrapper', disabledClass, inlineClass, errorClass]">
    <template v-if="useWrapper">
      <component
        :is="hasFieldset ? 'fieldset' : hasDropDown ? 'div' : 'label'"
        :for="!hasFieldset ? forId : undefined"
        class="pkt-inputwrapper__label"
        :class="{
          'pkt-inputwrapper__fieldset': hasFieldset,
          'pkt-inputwrapper__legend': hasFieldset,
        }"
        :aria-describedby="hasDropDown ? undefined : ariaDescribedby"
      >
        <component
          :class="{
            'pkt-inputwrapper__legend': hasFieldset,
          }"
          :is="hasFieldset ? 'legend' : hasDropDown ? 'h2' : 'span'"
          :id="`${forId}-label`"
          >{{ label }}<span v-if="tagText !== ''" :class="tagClass()">{{ tagText }}</span></component
        >
        <div v-if="helptext" class="pkt-inputwrapper__helptext" :id="`${forId}-helptext`" v-html="helptext"></div>

        <template v-if="hasDropDown">
          <pkt-button
            skin="tertiary"
            size="small"
            variant="icon-right"
            :icon-name="isHelpTextOpen ? 'chevron-thin-up' : 'chevron-thin-down'"
            class="pkt-inputwrapper__helptext-expandable pkt-link pkt-link--icon-right"
            @onClick="toggleHelpText"
          >
            <span v-html="dropdownButton"></span>
          </pkt-button>

          <div
            class="pkt-inputwrapper__helptext"
            :class="{
              'pkt-inputwrapper__helptext-expandable-open': isHelpTextOpen,
              'pkt-inputwrapper__helptext-expandable-closed': !isHelpTextOpen,
            }"
          >
            <span v-html="helptextDropdown"></span>
          </div>

          <label v-if="!hasFieldset" :for="forId" class="pkt-sr-only" :aria-describedby="describedBy">{{
            label
          }}</label>
        </template>
        <slot />
      </component>
    </template>
    <template v-else>
      <label
        v-if="!hasFieldset"
        :for="forId"
        class="pkt-sr-only"
        :aria-describedby="describedBy"
        :id="`${forId}-label`"
        >{{ label }}</label
      >
      <slot />
    </template>
    <div v-if="hasError && errorMessage">
      <pkt-alert skin="error" aria-live="assertive" :id="`${forId}-error`" compact>{{ errorMessage }}</pkt-alert>
    </div>
  </div>
</template>

<script>
import PktAlert from '../alert/Alert.vue'
import PktButton from '../button/Button.vue'

export default {
  name: 'pktInputwrapper',
  components: { PktAlert, PktButton },
  inheritAttrs: false,
  props: {
    forId: {
      type: String,
      required: true,
    },
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
      default: 'Valgfritt',
    },
    requiredTag: {
      type: Boolean,
      required: false,
      default: false,
    },
    requiredText: {
      type: String,
      default: 'Må fylles ut',
    },
    hasError: {
      type: Boolean,
      required: false,
    },
    errorMessage: {
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
    ariaDescribedby: {
      type: String,
      required: false,
    },
    useWrapper: {
      type: Boolean,
      default: true,
    },
    hasFieldset: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isHelpTextOpen: false,
    }
  },
  methods: {
    toggleHelpText() {
      this.isHelpTextOpen = !this.isHelpTextOpen
      this.$emit('toggleHelpText', this.isHelpTextOpen)
    },
    tagClass() {
      return this.optionalTag
        ? 'pkt-tag pkt-tag--small pkt-tag--thin-text pkt-tag--blue-light'
        : this.requiredTag
        ? 'pkt-tag pkt-tag--small pkt-tag--thin-text pkt-tag--beige'
        : ''
    },
  },
  computed: {
    tagText() {
      return this.optionalTag ? this.optionalText : this.requiredTag ? this.requiredText : ''
    },
    disabledClass() {
      return this.disabled ? 'pkt-inputwrapper--disabled' : ''
    },
    inlineClass() {
      return this.inline ? 'pkt-inputwrapper--inline' : ''
    },
    errorClass() {
      return this.hasError ? 'pkt-inputwrapper--error' : ''
    },
    hasDropDown() {
      return !!this.helptextDropdown && this.helptextDropdown !== ''
    },
    dropdownButton() {
      return this.helptextDropdownButton || 'Les mer <span class="pkt-sr-only">om inputfeltet</span>'
    },
    describedBy() {
      this.ariaDescribedby ? this.ariaDescribedby : this.helptext ? `${this.forId}-helptext` : undefined
    },
  },
}
</script>
