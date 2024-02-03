<template>
  <page-main class="pkt-container">
    <h1>Radiobutton</h1>

    <section class="component">
      <pkt-input-wrapper
        label="Etikett"
        helptext="Dette er tekst over avmerkingsboksene."
        optionalTag
        optionalText="Valgfritt"
        forId="radioGroup3"
        hasFieldset
      >
        <pkt-radiobutton
          v-for="fruit in optionsFruits"
          :id="fruit.value"
          :value="fruit.value"
          :key="fruit.value"
          name="fruits"
          :label="fruit.label"
          v-model="selectedFruit"
          @change="handleRadioChange"
          checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert."
        />
        <p>The choice: {{ selectedFruit }}</p>
      </pkt-input-wrapper>
    </section>

    <section class="component">
      <h2>Med tile</h2>
      <pkt-input-wrapper
        label="Etikett"
        helptext="Dette er tekst over avmerkingsboksene."
        optionalTag
        optionalText="Valgfritt"
        forId="radioGroup3"
        hasFieldset
      >
        <pkt-radiobutton
          v-for="fruit in optionsFruits2"
          :id="fruit.value"
          :value="fruit.value"
          :key="fruit.value"
          name="fruits2"
          :label="fruit.label"
          v-model="selectedFruit2"
          @onChange="handleRadioChange"
          hasTile
        />
        <p>The choice: {{ selectedFruit2 }}</p>
      </pkt-input-wrapper>
    </section>

    <section class="component">
      <h2>Med error og dropdown</h2>
      <pkt-input-wrapper
        label="Etikett"
        helptext="Dette er tekst over radioknappene."
        helptextDropdown="Bruk dette tekstfeltet til å skrive mer informasjon om inputfeltet."
        helptextDropdownButton="Les mer"
        optionalTag
        optionalText="Valgfritt"
        :hasError="hasError"
        errorMessage="Dette er en feilmelding"
        forId="radioGroup3"
        hasFieldset
      >
        <pkt-radiobutton
          v-for="fruit in optionsFruits3"
          :id="fruit.value"
          :value="fruit.value"
          :key="fruit.value"
          name="fruits3"
          :label="fruit.label"
          v-model="selectedFruit3"
          :hasError="hasError"
          @change="handleRadioChange"
        />
        <p>The choice: {{ selectedFruit3 }}</p>
      </pkt-input-wrapper>
    </section>
    <section class="component">
      <pkt-input-wrapper
        label="Disabled radio group"
        helptext="This is a radio group"
        helptextDropdown="This is a dropdown helptext"
        helptextDropdownButton="This is a dropdown button"
        requiredTag
        requiredText="Required"
        :disabled="true"
        forId="radioGroup2"
        hasFieldset
      >
        <pkt-radiobutton
          v-for="fruit in optionsFruits4"
          :id="fruit.value"
          :value="fruit.value"
          :key="fruit.value"
          name="fruits3"
          :label="fruit.label"
          v-model="selectedFruit4"
          @change="handleRadioChange"
          disabled
        />
        <p>The choice: {{ selectedFruit4 }}</p>
      </pkt-input-wrapper>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktRadiobutton } from '@/components/radiobutton'
import { PktInputWrapper } from '@/components/inputwrapper'

export default {
  name: 'Radiobutton',
  components: {
    PageMain,
    PktInputWrapper,
    PktRadiobutton,
  },
  data() {
    return {
      selectedFruit: '',
      selectedFruit2: '',
      selectedFruit3: '',
      selectedFruit4: '',
      optionsFruits: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Banana', value: 'Banana' },
        { label: 'Orange', value: 'Orange' },
      ],
      optionsFruits2: [
        { label: 'Grapes', value: 'Grapes' },
        { label: 'Kiwi', value: 'Kiwi' },
        { label: 'Mango', value: 'Mango' },
      ],
      optionsFruits3: [
        { label: 'Papaya', value: 'Papaya' },
        { label: 'Grapefruit', value: 'Grapefruit' },
        { label: 'Dragonfruit', value: 'Dragonfruit' },
      ],
      optionsFruits4: [
        { label: 'Blueberry', value: 'Blueberry' },
        { label: 'Strawberry', value: 'Strawberry' },
        { label: 'Raspberry', value: 'Raspberry' },
      ],
    }
  },
  computed: {
    hasError() {
      return this.selectedFruit3 === 'Papaya'
    },
  },
  methods: {
    handleRadioChange(newValue) {
      console.log(`Selected fruit: ${newValue}`)
    },
  },
}
</script>
