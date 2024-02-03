<template>
  <div v-if="showToolbar" class="color-tokens__toolbar">
    <div class="color-tokens__toolbar-darkmode">
      <label class="color-tokens__label" for="color-tokens-toolbar-mode-toggle">
        Light
      </label>
      <input
        type="checkbox"
        class="color-tokens__toolbar__checkbox"
        id="color-tokens-toolbar-mode-toggle"
        v-model="isDarkMode"
      />
      <p>Dark</p>
    </div>
  </div>
  <div v-for="(categoryColors, category) in organizedColors" :key="category">
    <div class="color-tokens" :data-mode="isDarkMode ? 'dark' : 'light'">
      <div
        class="color-tokens__variant-wrapper"
        v-for="(variantColors, variant) in categoryColors"
        :key="variant"
      >
        <p class="color-tokens__color-variant-txt">
          {{ formatColorVariant(variant) }}
        </p>
        <section
          class="pkt-grid pkt-grid--gap-size-24 pkt-grid--rowgap-size-40"
        >
          <div
            v-for="(color, index) in variantColors"
            class="color-tokens__card pkt-cell pkt-cell--span12 pkt-cell--span6-tablet-up"
            :key="`colors-${color.baseVarName}-${index}`"
            @click="copyColor(color.baseVarName)"
          >
            <div
              :class="[
                'color-tokens__circle',
                color.circle === 'border'
                  ? `pkt-color-border-${color.baseVarName}`
                  : `pkt-color-bg-${color.baseVarName}`,
              ]"
            ></div>
            <div class="color-tokens__text">
              <p>
                {{ color.name }}
                <span class="pkt-icon">
                  <svg viewBox="0 0 32 32" aria-hidden="true">
                    <use href="#copy"></use>
                  </svg>
                </span>
              </p>
              <p class="pkt-color-txt-brand-dark-blue-700">
                --pkt-color-{{ color.baseVarName }}
              </p>
              <p class="pkt-color-txt-brand-dark-blue-700">
                {{ isDarkMode ? color.darkHex : color.hex }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import colorsJsonFile from "../pages/json/colors.json";

export default {
  name: "colors",
  data() {
    return {
      colors: colorsJsonFile,
      isDarkMode: false,
    };
  },

  props: {
    category: {
      type: String,
      default: "",
    },
    showToolbar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filteredColors() {
      return this.colors.filter((color) => color.category === this.category);
    },
    organizedColors() {
      const organized = {};
      this.filteredColors.forEach((color) => {
        const category = color.category;
        const variant = color.variant;
        if (!organized[category]) {
          organized[category] = {};
        }
        if (!organized[category][variant]) {
          organized[category][variant] = [];
        }
        organized[category][variant].push(color);
      });
      return organized;
    },
  },
  methods: {
    formatColorVariant(colorVariant) {
      const formattedVariant =
        colorVariant.charAt(0).toUpperCase() + colorVariant.slice(1);
      return formattedVariant.replace(/-/g, " ");
    },
    copyColor(colorValue) {
      const el = document.createElement("textarea");
      const prefix = "--pkt-color-";
      el.value = prefix + colorValue;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
  },
};
</script>

<style lang="scss">
@use "sass:map";
@use "@pkt/scss/abstracts/variables";
@use "@pkt/scss/abstracts/mixins/typography";
@use "@pkt/scss/abstracts/functions";

.color-tokens {
  padding: map-get(variables.$spacing, "size-40");
  border: 2px solid var(--pkt-color-border-subtle);
  background-color: var(--pkt-color-background-default);
  color: var(--pkt-color-text-body-default);

  &__color-variant-txt {
    margin: 0;
    padding: 0;
    font-size: map-get(variables.$font-size, "size-24");
    font-weight: map-get(variables.$font-weight, "medium");
  }
  &__variant-wrapper:not(:first-of-type) {
    margin-top: map-get(variables.$spacing, "size-56");
  }

  &__card {
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: copy;
  }

  &__circle {
    width: 5.4375rem;
    height: 5.4375rem;
    border-radius: 50%;
    flex-shrink: 0;
    border: 2px solid var(--pkt-color-background-transparent);
  }

  &__text {
    @include typography.get-text("pkt-txt-16-light");
    margin-left: 1.5rem;
  }

  p {
    margin: 0;
    padding: 0;
  }
  .pkt-grid {
    margin-bottom: 0;
    margin-top: map-get(variables.$spacing, "size-40");
  }
  .pkt-icon {
    --fg-color: var(--pkt-color-text-body-default);
  }
  &__toolbar {
    display: flex;
    margin: map.get(variables.$spacing, "size-8")
      map.get(variables.$spacing, "size-32");
    right: 2rem;
    top: 2.25rem;
    justify-content: flex-end;

    &-darkmode {
      display: flex;
      align-items: center;
      gap: map.get(variables.$spacing, "size-8");
    }

    &__checkbox {
      --s: 1rem;

      height: var(--s);
      padding: calc(var(--s) / 10);
      box-sizing: content-box;
      aspect-ratio: 2;
      border-radius: var(--s);
      background: radial-gradient(farthest-side, #fff 97%, #0000) left/var(--s)
          100% content-box no-repeat,
        grey;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      transition: 0.3s;

      &:checked {
        background-position: right;
        background-color: var(--pkt-color-brand-dark-blue-1000);
      }
    }
  }
}
</style>
