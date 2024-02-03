<template>
  <div class="docs-icons mt-size-20 mb-size-60">
    <DemoIconsSprite />
    <button
      v-for="(icon, index) in filteredIcons(category)"
      :class="['docs-icons__item']"
      :key="`icons-${icon.id}-${index}`"
      title="Klikk for å kopiere ikonnavnet"
      @click="copyIconId(icon.id)"
    >
      <span class="docs-icons__icon">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <use :href="'#' + icon.id"></use>
        </svg>
      </span>
      <span class="docs-icons__id">{{ icon.id }}</span>
    </button>
  </div>
</template>

<script>
import iconsJsonFile from "../pages/json/icons.json";
import DemoIconsSprite from "../components/SvgSprite.vue";

export default {
  components: {
    DemoIconsSprite,
  },
  data() {
    return {
      iconsArray: iconsJsonFile,
    };
  },

  props: {
    category: {
      type: String,
      default: "",
    },
  },

  methods: {
    filteredIcons(cat) {
      return this.iconsArray.filter((icon) => icon.cat === cat);
    },
    copyIconId(iconId) {
      const el = document.createElement("textarea");
      el.value = iconId;
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
@use "@pkt/scss/abstracts/mixins/breakpoints" as *;

.docs-icons {
  display: grid;
  column-gap: map.get(variables.$spacing, "size-16");
  row-gap: map.get(variables.$spacing, "size-24");
  grid-template-columns: 1fr;
  width: 100%;
  @include typography.get-text("pkt-txt-14-light");

  @include bp("phablet-up") {
    grid-template-columns: repeat(2, 1fr);
  }
  @include bp("tablet-up") {
    grid-template-columns: repeat(3, 1fr);
  }
  @include bp("laptop-up") {
    column-gap: map.get(variables.$spacing, "size-32");
    grid-template-columns: repeat(4, 1fr);
  }

  &__item {
    align-items: center;
    background-color: var(--pkt-color-brand-neutrals-100);
    border: 0;
    border-radius: 0;
    cursor: copy;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: map.get(variables.$spacing, "size-16");

    &:focus {
      outline: 2px solid var(--pkt-color-brand-warm-blue-1000);
    }
  }

  &__icon {
    height: 2rem;
    width: 2rem;
    margin-bottom: map.get(variables.$spacing, "size-12");
  }

  &__id {
    background-color: var(--pkt-color-brand-neutrals-200);
    border: 2px solid var(--pkt-color-grays-gray-100);
    color: var(--pkt-color-brand-dark-blue-1000);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    padding: map.get(variables.$spacing, "size-12");
    max-width: 200px;
    text-align: center;
  }
}
</style>
