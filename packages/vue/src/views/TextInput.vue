<template>
  <page-main class="pkt-container pkt-container--laptop">
    <h1>Textinput</h1>

    <section class="component">
      <pkt-textinput id="testinput1" label="Tekstinput"> </pkt-textinput>
      <pkt-textinput id="testinput1fullwidth" label="Tekstinput full bredde" fullwidth> </pkt-textinput>

      <pkt-textinput
        id="testinput2"
        label="Tekstinput med hjelpetext"
        helptext="Dette er tekst over tekstfeltet"
      ></pkt-textinput>

      <pkt-textinput
        id="testinput33"
        label="Tekstinput inline"
        helptext="Dette er tekst over tekstfeltet"
        inline
      ></pkt-textinput>

      <pkt-textinput
        id="testinput44"
        label="Tekstinput inline"
        helptext="Dette er tekst over tekstfeltet"
        inline
      ></pkt-textinput>

      <pkt-textinput
        id="testinput3"
        label="Tekstinput med tag"
        helptext="Dette er tekst over tekstfeltet"
        requiredTag
      ></pkt-textinput>

      <pkt-textinput
        id="testinput4"
        label="Tekstinput med tag"
        helptext="Dette er tekst over tekstfeltet"
        optionalTag
      ></pkt-textinput>

      <pkt-textinput
        id="testinput5"
        label="Tekstinput med prefix"
        helptext="Dette er tekst over tekstfeltet"
        prefix="+47"
      ></pkt-textinput>

      <pkt-textinput
        id="testinput6"
        label="Tekstinput med suffix"
        helptext="Dette er tekst over tekstfeltet"
        suffix="kr"
      ></pkt-textinput>

      <pkt-textinput
        id="testinput7"
        label="Tekstinput med suffix og ikon"
        helptext="Dette er tekst over tekstfeltet"
        suffix="Suffix"
        iconNameRight="close"
      ></pkt-textinput>

      <pkt-textinput
        id="testinput72"
        label="Tekstinput med prefix, suffix og ikon"
        helptext="Dette er tekst over tekstfeltet"
        prefix="Prefix"
        suffix="Suffix"
        iconNameRight="close"
      ></pkt-textinput>

      <pkt-textinput
        id="testinput8"
        label="Tekstinput med ikon"
        helptext="Dette er tekst over tekstfeltet"
        iconNameRight="close"
      ></pkt-textinput>

      <pkt-textinput
        id="testinput8"
        label="Tekstinput med søk"
        helptext="Her kan du søke etter meningen med livet."
        placeholder="Søk…"
        type="search"
      ></pkt-textinput>

      <pkt-textinput
        id="testinput9"
        label="Tekstinput med error"
        helptext="Dette er tekst over tekstfeltet"
        iconNameRight="close"
        errorMessage="Dette er en feilmelding"
        hasError
      ></pkt-textinput>

      <pkt-textinput
        id="testinput10"
        label="Tekstinput med dropdown"
        helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
        iconNameRight="close"
        helptextDropdown="Dette er hjelpetekst"
        optionalTag
      ></pkt-textinput>

      <pkt-textinput
        id="testinput12"
        label="Tekstinput med dropdown"
        helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
        iconNameRight="close"
        helptextDropdown="Dette er hjelpetekst"
        suffix="Suffix"
        errorMessage="Dette er en feilmelding"
        hasError
      ></pkt-textinput>

      <pkt-textinput
        id="testinput11"
        label="Tekstinput disabled med custom dropdownknapp"
        helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
        iconNameRight="close"
        helptextDropdown="Dette er hjelpetekst"
        helptextDropdownButton="Denne knappen åpner hjelpetekst"
        disabled
      ></pkt-textinput>

      <pkt-textinput id="testinput13" label="Tekstinput enkel disabled" disabled></pkt-textinput>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktTextinput } from '@/components/textinput'

export default {
  name: 'Textinput',
  components: {
    PktTextinput,
    PageMain,
  },
}
</script>

<style lang="scss"></style>
