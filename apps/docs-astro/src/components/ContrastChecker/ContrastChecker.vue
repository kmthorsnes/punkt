<template>
  <div
    class="contrast-checker"
    :style="{ backgroundColor: selectedBgColor, color: selectedTxtColor }"
  >
    <section class="contrast-checker__first-row">
      <div class="contrast-checker__score">
        <div class="contrast-checker__score-level">Aa</div>
        <p
          class="contrast-checker__score pkt-cell pkt-cell--span12 pkt-cell--span6-tablet-up"
        >
          {{ truncatedScore(wcagAAnormal.score) }}
        </p>
      </div>
      <div class="contrast-checker__tags">
        <ContrastResults title="AA stor" :wcagResults="wcagAALarge" />
        <ContrastResults title="AAA stor" :wcagResults="wcagAAALarge" />
        <ContrastResults title="AA normal" :wcagResults="wcagAAnormal" />
        <ContrastResults title="AAA normal" :wcagResults="wcagAAAnormal" />
      </div>
    </section>
    <section class="contrast-checker__second-row">
      <div class="pkt-inputwrapper">
        <label class="pkt-inputwrapper__label" for="exampleSelect1">
          <span>Bakgrunnsfarge</span>

          <select
            class="pkt-input"
            id="selectBgColor"
            v-model="selectedBgColor"
            @change="checkContrast"
          >
            <option
              v-for="color in brandColors"
              :key="color.hex"
              :value="color.hex"
            >
              {{ color.name }} ({{ color.baseVarName }})
            </option>
          </select>
        </label>
      </div>
      <div class="pkt-inputwrapper">
        <label class="pkt-inputwrapper__label" for="exampleSelect1">
          <span>Tekstfarge</span>
          <select
            class="pkt-input"
            v-model="selectedTxtColor"
            @change="checkContrast"
            id="selectTxtColor"
          >
            <option
              v-for="color in brandColors"
              :key="color.hex"
              :value="color.hex"
            >
              {{ color.name }} ({{ color.baseVarName }})
            </option>
          </select>
        </label>
      </div>
    </section>
    <div class="pkt-hr"></div>
    <section class="contrast-checker__third-row">
      <div class="contrast-checker__text-column">
        <p class="contrast-checker__text-title">Stor tekst - 18pt/24px</p>
        <p class="contrast-checker__big-text">
          Oslo er kjent for sin bærekraftige livsstil, med et omfattende
          nettverk av sykkelstier og et førsteklasses kollektivtransportsystem.
        </p>
      </div>
      <div class="contrast-checker__text-column">
        <p class="contrast-checker__text-title">Normal tekst - 16px</p>
        <p class="contrast-checker__normal-text">
          Oslo er kjent for sin bærekraftige livsstil, med et omfattende
          nettverk av sykkelstier og et førsteklasses kollektivtransportsystem.
          Mat- og drikkeopplevelsene er varierte og spenner fra Michelin-stjerne
          restauranter til koselige kafeer som serverer deilige kanelboller og
          kaffe.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
// A11y Color Contrast Checker
// https://github.com/sondr3/a11y-color-contrast
import {
  apcaContrastValue,
  wcag,
  hex,
  wcagContrastValue,
} from "a11y-color-contrast";
import ContrastResults from "./ContrastResults.vue";
import colorsJsonFile from "../../pages/json/colors.json";

export default {
  name: "ContrastChecker",
  components: {
    ContrastResults,
  },
  data() {
    return {
      colors: colorsJsonFile,
      selectedBgColor: "",
      selectedTxtColor: "",
      wcagAALarge: null,
      wcagAAALarge: null,
      wcagAAnormal: null,
      wcagAAAnormal: null,
    };
  },
  computed: {
    brandColors() {
      return this.colors.filter((color) => color.category === "brand");
    },
  },
  methods: {
    truncatedScore(score) {
      return this.wcagAAnormal
        ? parseFloat(this.wcagAAnormal.score.toFixed(2))
        : null;
    },
    calculateContrast(bgHex, txtHex) {
      return {
        aaLarge: wcag(hex(txtHex), hex(bgHex), { level: "AA", size: "large" }),
        aaaLarge: wcag(hex(txtHex), hex(bgHex), {
          level: "AAA",
          size: "large",
        }),
        aaNormal: wcag(hex(txtHex), hex(bgHex), {
          level: "AA",
          size: "normal",
        }),
        aaaNormal: wcag(hex(txtHex), hex(bgHex), {
          level: "AAA",
          size: "normal",
        }),
      };
    },
    checkContrast() {
      if (this.selectedBgColor && this.selectedTxtColor) {
        const bgHex = this.selectedBgColor;
        const txtHex = this.selectedTxtColor;
        const contrastResults = this.calculateContrast(bgHex, txtHex);

        this.wcagAALarge = contrastResults.aaLarge;
        this.wcagAAALarge = contrastResults.aaaLarge;
        this.wcagAAnormal = contrastResults.aaNormal;
        this.wcagAAAnormal = contrastResults.aaaNormal;
      } else {
        this.wcagAALarge = null;
        this.wcagAAALarge = null;
        this.wcagAAnormal = null;
        this.wcagAAAnormal = null;
      }
    },
  },
  created() {
    // Set the default values based on the 'hex' property of the selected colors
    const selectedBgColorObject = this.colors.find(
      (color) => color.name === "Dark blue 1000"
    );
    const selectedTxtColorObject = this.colors.find(
      (color) => color.name === "White"
    );

    this.selectedBgColor = selectedBgColorObject
      ? selectedBgColorObject.hex
      : this.colors[0].hex;
    this.selectedTxtColor = selectedTxtColorObject
      ? selectedTxtColorObject.hex
      : this.colors[0].hex;

    this.checkContrast(); // Calculate the initial contrast
  },
};
</script>
<style lang="scss" scoped>
@use "sass:map";
@use "@pkt/scss/abstracts/variables";
@use "@pkt/scss/abstracts/mixins/typography";
@use "@pkt/scss/abstracts/functions";
@use "@pkt/scss/abstracts/mixins/breakpoints" as *;
.contrast-checker {
  display: flex;
  flex-direction: column;
  gap: map-get(variables.$spacing, "size-56");
  padding: map-get(variables.$spacing, "size-40");
  margin-top: map-get(variables.$spacing, "size-32");
  margin-bottom: map-get(variables.$spacing, "size-32");

  @include bp("laptop-up") {
    margin-top: map-get(variables.$spacing, "size-48");
    margin-bottom: map-get(variables.$spacing, "size-48");
  }
  p {
    margin: 0;
  }

  &__first-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    row-gap: map-get(variables.$spacing, "size-24");

    @include bp("laptop-up") {
      align-items: flex-end;
    }
  }
  &__second-row {
    display: flex;
    flex-direction: column;
    gap: map-get(variables.$spacing, "size-24");
  }
  &__third-row {
    display: flex;
    flex-direction: column;
    gap: map-get(variables.$spacing, "size-24");
  }

  @include bp("laptop-up") {
    &__first-row {
      flex-direction: row;
    }
    &__second-row {
      flex-direction: row;
      gap: map-get(variables.$spacing, "size-56");
    }
    &__third-row {
      flex-direction: row;
      gap: map-get(variables.$spacing, "size-56");
    }
  }

  &__score {
    display: flex;
    align-items: baseline;
    gap: map-get(variables.$spacing, "size-8");
    @include typography.get-text("pkt-txt-22");

    &-level {
      font-size: 86px;
      font-style: normal;
      font-weight: 400;
      line-height: 82px; /* 95.349% */
      letter-spacing: -0.4px;
    }
  }
  &__tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: map-get(variables.$spacing, "size-16");
    @include typography.get-text("pkt-txt-14-light");

    @include bp("laptop-up") {
      flex-wrap: nowrap;
    }
  }

  &__tag {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 77.56px;
    gap: map-get(variables.$spacing, "size-8");
  }

  &__text-title {
    @include typography.get-text("pkt-txt-16-medium");
    margin-bottom: map-get(variables.$spacing, "size-24") !important;
  }
  &__big-text {
    @include typography.get-text("pkt-txt-24-light");
  }
  &__normal-text {
    @include typography.get-text("pkt-txt-16-light");
  }
  .pkt-tag {
    color: var(--pkt-color-brand-dark-blue-1000) !important;
  }
  .pkt-tag--red {
    background-color: var(--pkt-color-brand-dark-blue-1000);
    color: white !important;
    .pkt-tag__icon {
      --fg-color: white;
    }
  }
  .pkt-inputwrapper__label {
    color: var(--pkt-color-brand-neutral-white);
  }
}
</style>
