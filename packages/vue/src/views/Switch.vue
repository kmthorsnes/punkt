<template>
  <page-main class="pkt-container">
    <h1>Switch</h1>

    <section class="component">
      <PktCheckbox isSwitch id="singleSwitch" label="Switch" v-model="singleSwitchValue" />
      <p>Med <code>labelPosition</code> kan man legge label til venstre:</p>
      <PktCheckbox isSwitch id="singleSwitch2" label="Switch" labelPosition="left" v-model="singleSwitchValue" />
      <p>Switch kan også presenteres med en skjult label:</p>
      <PktCheckbox isSwitch hideLabel id="singleSwitch3" label="Switch" v-model="singleSwitchValue" />
      <p>Single switch value: {{ singleSwitchValue }}</p>
    </section>

    <section class="component">
      <PktCheckbox
        isSwitch
        id="switchWithHelptext"
        label="Switch med hjelpetekst"
        checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert."
        @onChange="handleCustomChange"
      />
    </section>

    <section class="component">
      <PktCheckbox
        isSwitch
        id="switchWithHelptext2"
        label="Switch med hjelpetekst"
        checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert."
        labelPosition="left"
        @onChange="handleCustomChange"
      />
    </section>

    <section class="component">
      <PktCheckbox
        isSwitch
        id="switchWithDefaultChecked"
        label="Switch med default checked og disabled"
        disabled
        defaultChecked
      />
    </section>
    <section class="component">
      <PktCheckbox
        isSwitch
        id="switchWithDefaultChecked2"
        label="Switch med default checked og disabled"
        disabled
        hasTile
        defaultChecked
      />
    </section>

    <section class="component">
      <PktCheckbox isSwitch id="switchWithTile" label="Switch med tile" hasTile />
    </section>

    <section class="component">
      <h2>Med inputwrapper</h2>
      <pkt-input-wrapper
        label="Etikett"
        helptext="Dette er tekst over avmerkingsboksene."
        optionalTag
        optionalText="Valgfritt"
        forId="switchGroup3"
        hasFieldset
      >
        <PktCheckbox
          isSwitch
          v-for="(item, index) in switchGroup"
          :key="index"
          :id="item.id"
          :label="item.label"
          v-model="item.checked"
          @change="handleChange(item.id)"
          :hasTile="false"
          :checkHelptext="item.checkHelptext"
        >
        </PktCheckbox>
      </pkt-input-wrapper>

      <p>Group Switch Values:</p>
      <ul>
        <li v-for="(item, index) in switchGroup" :key="index">{{ item.label }}: {{ item.checked }}</li>
      </ul>
    </section>

    <section class="component">
      <h2>Med error og dropdown</h2>
      <pkt-input-wrapper
        label="Etikett"
        helptext="Dette er tekst over bryterne"
        helptextDropdown="Bruk dette tekstfeltet til å skrive mer informasjon om inputfeltet."
        helptextDropdownButton="Les mer"
        optionalTag
        optionalText="Valgfritt"
        :hasError="true"
        errorMessage="Dette er en feilmelding"
        forId="switchGroup3"
        hasFieldset
      >
        <PktCheckbox
          isSwitch
          v-for="(item, index) in switchGroup3"
          :key="index"
          :id="item.id"
          :label="item.label"
          v-model="item.checked"
          @change="handleChange(item.id)"
          :hasTile="false"
          :hasError="!item.checked"
        >
        </PktCheckbox>
      </pkt-input-wrapper>

      <p>Group Switch Values:</p>
      <ul>
        <li v-for="(item, index) in switchGroup3" :key="index">{{ item.label }}: {{ item.checked }}</li>
      </ul>
    </section>

    <section class="component">
      <h2>Disabled</h2>
      <pkt-input-wrapper
        label="Disabled switch group"
        helptext="This is a switch group"
        helptextDropdown="This is a dropdown helptext"
        helptextDropdownButton="This is a dropdown button"
        requiredTag
        requiredText="Required"
        :hasError="true"
        errorMessage="This is an error message"
        :disabled="true"
        forId="switchGroup2"
        hasFieldset
      >
        <PktCheckbox
          isSwitch
          v-for="(item, index) in switchGroup2"
          :key="index"
          :id="item.id"
          :label="item.label"
          v-model="item.checked"
          @change="handleSwitchChange(item.id)"
          :hasFieldset="true"
          :hasTile="true"
          disabled
        >
        </PktCheckbox>
      </pkt-input-wrapper>
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktCheckbox } from '@/components/checkbox'
import { PktInputWrapper } from '@/components/inputwrapper'

export default {
  name: 'Switch',
  components: {
    PktCheckbox,
    PageMain,
    PktInputWrapper,
  },
  data() {
    return {
      singleSwitchValue: false,
      defaultSingleSwitchValue: true,
      switchGroup: [
        {
          id: 'switch1',
          label: 'Apples',
          checked: false,
          checkHelptext: 'Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert.',
        },
        { id: 'switch2', label: 'Banana', checked: false },
        { id: 'switch3', label: 'Orange', checked: false },
      ],
      switchGroup2: [
        { id: 'switch4', label: 'Apples', checked: false },
        { id: 'switch5', label: 'Banana', checked: false },
        { id: 'switch6', label: 'Orange', checked: false },
      ],
      switchGroup3: [
        { id: 'switch7', label: 'Apples', checked: false },
        { id: 'switch8', label: 'Banana', checked: false },
        { id: 'switch9', label: 'Orange', checked: false },
      ],
    }
  },
  methods: {
    handleCustomChange(newValue) {
      console.log(`Custom onChange event triggered with value ${newValue}`)
    },
    handleChange(id) {
      const switchEl = this.switchGroup.find((item) => item.id === id)
      if (switchEl) {
        console.log(`Switch ${switchEl.label} is checked: ${switchEl.checked}`)
      }
    },
  },
}
</script>
