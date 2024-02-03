<template>
  <div class="docs-logos mt-size-20 mb-size-60">
    <button
      v-for="(logo, index) in filteredLogos"
      :class="['docs-logos__item']"
      :key="`logos-${logo.id}-${index}`"
      title="Klikk for å kopiere logo url på CDN"
      @click="copyLogoUrl(logoCdnUrl(logo.fn))"
    >
      <span v-if="logo.ext === 'svg'" class="docs-logos__asset">
        <svg viewBox="0 0 32 32">
          <use href="#oslologo"></use>
        </svg>
      </span>
      <span v-else-if="logo.ext === 'ico'" class="docs-logos__asset">
        <img
          src="/assets/logos/favicon.ico"
          aria-hidden="true"
          :alt="logo.fn"
        />
      </span>
      <span v-else class="docs-logos__asset">
        <img
          :src="getLogoPath(logo.fn)"
          class="docs-logos__img"
          aria-hidden="true"
          :alt="logo.fn"
        />
      </span>
      <span class="docs-logos__id">{{ logo.fn }}</span>
    </button>
  </div>
</template>

<script>
import logosJsonFile from "../pages/json/logos.json";

export default {
  name: "Logos",
  data() {
    return {
      logosArray: logosJsonFile,
    };
  },

  computed: {
    filteredLogos() {
      return this.logosArray;
    },
  },

  methods: {
    getLogoPath(fn) {
      return `https://punkt-cdn.oslo.kommune.no/latest/logos/${fn}?raw`;
    },
    logoCdnUrl(fn) {
      return `https://punkt-cdn.oslo.kommune.no/latest/logos/${fn}`;
    },
    copyLogoUrl(logoName) {
      const el = document.createElement("textarea");
      el.value = logoName;
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

.docs-logos {
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

  &__asset {
    align-items: center;
    display: flex;
    height: 4rem;
    margin-bottom: map.get(variables.$spacing, "size-12");

    & > svg {
      height: 100%;
    }
  }

  &__img {
    max-height: 100%;
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
