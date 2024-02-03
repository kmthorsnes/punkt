<template>
  <page-main class="pkt-container">
    <h1>Checkbox</h1>

    <section class="component">
      <pkt-checkbox id="singleCheckbox" label="Checkbox" v-model="singleCheckboxValue" />
      <p>Single checkbox value: {{ singleCheckboxValue }}</p>
    </section>

    <section class="component">
      <pkt-checkbox
        id="checkboxWithHelptext"
        label="Checkbox med hjelpetekst"
        checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert."
        @onChange="handleCustomChange"
      />
    </section>

    <section class="component">
      <pkt-checkbox
        id="checkboxWithDefaultChecked"
        label="Checkbox med default checked og disabled"
        disabled
        defaultChecked
      />
    </section>
    <section class="component">
      <pkt-checkbox
        id="checkboxWithDefaultChecked"
        label="Checkbox med default checked og disabled"
        disabled
        hasTile
        defaultChecked
      />
    </section>

    <section class="component">
      <pkt-checkbox id="checkboxWithTile" label="Checkbox med tile" hasTile />
    </section>

    <section class="component">
      <h2>Med inputwrapper</h2>
      <pkt-input-wrapper
        label="Etikett"
        helptext="Dette er tekst over avmerkingsboksene."
        optionalTag
        optionalText="Valgfritt"
        forId="checkboxGroup3"
        hasFieldset
      >
        <pkt-checkbox
          v-for="(item, index) in checkboxGroup"
          :key="index"
          :id="item.id"
          :label="item.label"
          v-model="item.checked"
          @change="handleChange(item.id)"
          :hasTile="false"
          :checkHelptext="item.checkHelptext"
        >
        </pkt-checkbox>
      </pkt-input-wrapper>

      <p>Group Checkbox Values:</p>
      <ul>
        <li v-for="(item, index) in checkboxGroup" :key="index">{{ item.label }}: {{ item.checked }}</li>
      </ul>
    </section>

    <section class="component">
      <h2>Med error og dropdown</h2>
      <pkt-input-wrapper
        label="Etikett"
        helptext="Dette er tekst over checkboxene"
        helptextDropdown="Bruk dette tekstfeltet til å skrive mer informasjon om inputfeltet."
        helptextDropdownButton="Les mer"
        optionalTag
        optionalText="Valgfritt"
        :hasError="true"
        errorMessage="Dette er en feilmelding"
        forId="checkboxGroup3"
        hasFieldset
      >
        <pkt-checkbox
          v-for="(item, index) in checkboxGroup3"
          :key="index"
          :id="item.id"
          :label="item.label"
          v-model="item.checked"
          @change="handleChange(item.id)"
          :hasTile="false"
          :hasError="!item.checked"
        >
        </pkt-checkbox>
      </pkt-input-wrapper>

      <p>Group Checkbox Values:</p>
      <ul>
        <li v-for="(item, index) in checkboxGroup3" :key="index">{{ item.label }}: {{ item.checked }}</li>
      </ul>
    </section>

    <section class="component">
      <h2>Disabled</h2>
      <pkt-input-wrapper
        label="Disabled checkbox group"
        helptext="This is a checkbox group"
        helptextDropdown="This is a dropdown helptext"
        helptextDropdownButton="This is a dropdown button"
        requiredTag
        requiredText="Required"
        :hasError="true"
        errorMessage="This is an error message"
        :disabled="true"
        forId="checkboxGroup2"
        hasFieldset
      >
        <pkt-checkbox
          v-for="(item, index) in checkboxGroup2"
          :key="index"
          :id="item.id"
          :label="item.label"
          v-model="item.checked"
          @change="handleCheckboxChange(item.id)"
          :hasFieldset="true"
          :hasTile="true"
          disabled
        >
        </pkt-checkbox>
      </pkt-input-wrapper>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktCheckbox } from '@/components/checkbox'
import { PktInputWrapper } from '@/components/inputwrapper'

export default {
  name: 'Checkbox',
  components: {
    PktCheckbox,
    PageMain,
    PktInputWrapper,
  },
  data() {
    return {
      singleCheckboxValue: false,
      defaultSingleCheckboxValue: true,
      checkboxGroup: [
        {
          id: 'checkbox1',
          label: 'Apples',
          checked: false,
          checkHelptext: 'Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert.',
        },
        { id: 'checkbox2', label: 'Banana', checked: false },
        { id: 'checkbox3', label: 'Orange', checked: false },
      ],
      checkboxGroup2: [
        { id: 'checkbox4', label: 'Apples', checked: false },
        { id: 'checkbox5', label: 'Banana', checked: false },
        { id: 'checkbox6', label: 'Orange', checked: false },
      ],
      checkboxGroup3: [
        { id: 'checkbox7', label: 'Apples', checked: false },
        { id: 'checkbox8', label: 'Banana', checked: false },
        { id: 'checkbox9', label: 'Orange', checked: false },
      ],
    }
  },
  methods: {
    handleCustomChange(newValue) {
      console.log(`Custom onChange event triggered with value ${newValue}`)
    },
    handleChange(id) {
      const checkbox = this.checkboxGroup.find((item) => item.id === id)
      if (checkbox) {
        console.log(`Checkbox ${checkbox.label} is checked: ${checkbox.checked}`)
      }
    },
  },
}
</script>

<style lang="scss"></style>
