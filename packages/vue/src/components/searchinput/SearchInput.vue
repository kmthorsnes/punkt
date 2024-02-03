<template>
  <component
    :is="action ? 'form' : 'div'"
    :class="`pkt-searchinput pkt-searchinput--${appearance} ${fullwidth ? 'pkt-searchinput--fullwidth' : ''}`"
    @submit="$emit('onSearch', modelValue)"
    :action="action ? action : undefined"
    :method="action ? method : undefined"
    role="search"
  >
    <component
      :is="label ? 'label' : 'div'"
      :for="label ? id : undefined"
      :class="{ 'pkt-inputwrapper__label': label }"
    >
      <template v-if="label">{{ label }}</template>
      <div :class="appearance === 'local' ? 'pkt-input__container' : 'pkt-searchinput__field'">
        <input
          v-bind="$attrs"
          @input="$emit('update:modelValue', $event.target.value)"
          :class="{ 'pkt-input': true, 'pkt-input--fullwidth': fullwidth }"
          type="search"
          :name="name || id"
          :id="id"
          :placeholder="placeholder"
          :value="modelValue"
          :disabled="disabled"
          @keypress.enter.prevent="$emit('onSearch', modelValue)"
          autocomplete="off"
          aria-autocomplete="list"
          :aria-controls="`${id}-suggestions`"
        />
        <PktButton
          :class="{ 'pkt-searchinput__button': true, 'pkt-input-icon': appearance === 'local' }"
          variant="icon-only"
          iconName="magnifying-glass-big"
          type="submit"
          :skin="appearance === 'local' ? 'tertiary' : 'primary'"
          :color="appearance === 'global' ? 'yellow' : undefined"
          :disabled="disabled"
          @click.prevent="$emit('onSearch', modelValue)"
          @keypress.enter.prevent="$emit('onSearch', modelValue)"
          >{{ label || placeholder }}</PktButton
        >
      </div>
    </component>
    <ul v-if="suggestions" :id="`${id}-suggestions`" class="pkt-searchinput__suggestions" aria-live="assertive">
      <li v-for="(suggestion, index) in suggestions" :key="`search-suggestion-${index}`">
        <component
          :is="suggestion.href ? 'a' : suggestion.onClick ? 'button' : 'div'"
          :href="suggestion.href || undefined"
          :class="{
            'pkt-link-button': !!suggestion.onClick,
            'pkt-searchinput__suggestion': true,
            'pkt-searchinput__suggestion--has-hover': !!suggestion.href || !!suggestion.onClick,
          }"
          :type="suggestion.onClick ? 'button' : undefined"
          @click="handleSuggestionClick(suggestion.onClick, index)"
          @keypress.enter="handleSuggestionClick(suggestion.onClick, index)"
        >
          <h3 v-if="suggestion.title" class="pkt-searchinput__suggestion-title">{{ suggestion.title }}</h3>
          <p v-if="suggestion.text" class="pkt-searchinput__suggestion-text">{{ suggestion.text }}</p>
        </component>
      </li>
    </ul>
  </component>
</template>

<script>
import PktButton from '../button/Button.vue'
import PktIcon from '../icon/Icon.vue'
export default {
  name: 'PktSearchInput',
  components: { PktButton, PktIcon },
  props: {
    appearance: {
      type: String,
      default: 'local',
      validator: (v) => ['local', 'local-with-button', 'global'].includes(v),
    },
    suggestions: {
      /*
      [{
        title: String,
        text: String (optional),
        href: String (optional),
        onClick: Function (optional),
      }]
      */
      type: Array,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      default: 'Søk…',
    },
    modelValue: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    action: {
      type: String,
      required: false,
    },
    method: {
      type: String,
      default: 'get',
      validator: (v) => ['get', 'post', 'dialog'].includes(v),
    },
  },
  emits: ['update:modelValue', 'onSearch', 'onSuggestionClick'],
  methods: {
    handleSuggestionClick(cb, i) {
      if (cb) {
        cb()
      } else {
        this.$emit('onSuggestionClick', i)
      }
    },
  },
}
</script>
