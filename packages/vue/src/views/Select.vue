<template>
  <page-main class="pkt-container pkt-container--laptop">
    <h1>Select</h1>

    <section class="component">
      <PktSelect v-model="selected" id="testinput1" label="Select">
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
      <PktSelect
        v-model="selected"
        id="testinput2"
        label="Select inline"
        helptext="Dette er tekst over tekstfeltet"
        inline
      >
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
      <PktSelect
        v-model="selected"
        id="testinput2'"
        label="Select inline"
        helptext="Dette er tekst over tekstfeltet"
        inline
      >
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
      <PktSelect
        v-model="selected"
        id="testinput3"
        label="Select med tag"
        helptext="Dette er tekst over tekstfeltet"
        requiredTag
      >
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
      <PktSelect
        v-model="selected"
        id="testinput4"
        label="Select med tag"
        helptext="Dette er tekst over tekstfeltet"
        optionalTag
      >
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
      <PktSelect
        v-model="selected"
        id="testinput9"
        label="Select med error"
        helptext="Dette er tekst over tekstfeltet"
        errorMessage="Dette er en feilmelding"
        hasError
      >
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
      <PktSelect
        v-model="selected"
        id="testinput10"
        label="Select med dropdown"
        helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
        helptextDropdown="Dette er teksten i dropdown"
      >
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
      <PktSelect
        v-model="selected"
        id="testinput11"
        label="Select disabled"
        helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
        helptextDropdown="Dette er teksten i dropdown"
        disabled
      >
        <option>Frukt…</option>
        <option>Apples</option>
        <option>Oranges</option>
        <option>Grapes</option>
        <option>Pears</option>
        <option>Durians</option>
      </PktSelect>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktSelect } from '@/components/select'

export default {
  name: 'Select',
  components: {
    PktSelect,
    PageMain,
  },
  data() {
    return {
      selected: 'Frukt…',
    }
  },
}
</script>
