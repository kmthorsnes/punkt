<template>
  <section class="element-summary">
    <h2>Varianter</h2>
    <table>
      <tbody>
        <tr
          class="element-summary__tr"
          v-for="(variant, index) in element.variants"
          :key="`docs-element-${_uid}-variant-${index}`"
        >
          <th class="element-summary__th pb-size-5" scope="row">
            {{ variant.name }}
          </th>
          <td class="pb-size-5">
            <span
              v-for="(item, key) in variant.items"
              :key="`variant-${index}-${key}`"
              :class="[
                'element-summary__tag',
                { 'element-summary__tag--active': isItemDefault(item) },
              ]"
            >
              {{ filterDefaultTxt(item) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "element-summary",
  props: {
    element: {
      type: Object,
      default: function () {
        return { variants: [] };
      },
    },
  },
  methods: {
    isItemDefault(txt) {
      return txt.includes("(default)");
    },
    filterDefaultTxt(txt) {
      return txt.replace(" (default)", "");
    },
  },
};
</script>

<style lang="scss">
@use "sass:map";
@use "@pkt/scss/abstracts/variables";

.element-summary {
  &__tr {
    vertical-align: top;
  }

  &__th {
    font-weight: normal;
    text-align: left;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__tag {
    background: #ddd;
    border-radius: 1px;
    display: inline-block;
    height: 1.5em;
    line-height: 1em;
    margin: 0 0 0.4rem 0.4rem;
    padding: 0.25em 0.4em;
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }

    &--active {
      font-weight: map-get(variables.$font-weight, "medium");
    }
  }
}
</style>
