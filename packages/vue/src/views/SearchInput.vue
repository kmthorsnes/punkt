<template>
  <page-main class="pkt-container pkt-container--laptop">
    <h1>SearchInput</h1>

    <section class="component">
      <PktSearchInput label="Søk etter noe" id="search-global" appearance="global" />
      <PktSearchInput label="Søk etter noe (full bredde)" id="search-global-fullwidth" appearance="global" fullwidth />
      <PktSearchInput label="deaktivert søk" id="search-global-disabled" appearance="global" disabled />
      <PktSearchInput
        label="Søk med søkeforslag (Skriv noe)"
        id="search-global-results"
        v-model="values.value1"
        :suggestions="!!values.value1 ? results : undefined"
        appearance="global"
      />
      <PktSearchInput
        label="Søk med ingen resultater (Skriv noe)"
        id="search-global-noresults"
        v-model="values.value2"
        :suggestions="!!values.value2 ? noResults : undefined"
        appearance="global"
      />
    </section>
    <section class="component">
      <PktSearchInput label="Søk etter noe" id="search-local-with-button" appearance="local-with-button" />
      <PktSearchInput
        label="Søk etter noe (full bredde)"
        id="search-local-with-button-fullwidth"
        appearance="local-with-button"
        fullwidth
      />
      <PktSearchInput
        label="deaktivert søk"
        id="search-local-with-button-disabled"
        appearance="local-with-button"
        disabled
      />
      <PktSearchInput
        label="Søk med søkeforslag (Skriv noe)"
        id="search-local-with-button-results"
        v-model="values.value3"
        :suggestions="!!values.value3 ? results : undefined"
        appearance="local-with-button"
      />
      <PktSearchInput
        label="Søk med ingen resultater (Skriv noe)"
        id="search-local-with-button-noresults"
        v-model="values.value4"
        :suggestions="!!values.value4 ? noResults : undefined"
        appearance="local-with-button"
      />
    </section>
    <section class="component">
      <PktSearchInput label="Søk etter noe" id="search-local" appearance="local" />
      <PktSearchInput label="Søk etter noe (full bredde)" id="search-local-fullwidth" appearance="local" fullwidth />
      <PktSearchInput label="deaktivert søk" id="search-local-disabled" appearance="local" disabled />
      <PktSearchInput
        label="Søk med søkeforslag (Skriv noe)"
        id="search-local-results"
        v-model="values.value5"
        :suggestions="!!values.value5 ? results : undefined"
        appearance="local"
      />
      <PktSearchInput
        label="Søk med ingen resultater (Skriv noe)"
        id="search-local-noresults"
        v-model="values.value6"
        :suggestions="!!values.value6 ? noResults : undefined"
        appearance="local"
      />
    </section>
  </page-main>
</template>

<script>
import PageMain from '@/dev-components/PageMain.vue'
import { PktSearchInput } from '@/components/searchinput'

export default {
  name: 'SearchInput',
  data() {
    return {
      results: [
        {
          title: 'Tittel på søkeresultatet 1',
          text: 'Søkeresultatet kan ha undertekst som beskriver søkeresultatet nærmere. Denne kan gå over flere linjer før den brått kuttes av.',
          href: 'https://oslo.kommune.no',
        },
        {
          title: 'Tittel på søkeresultatet 2',
          text: 'Søkeresultatet kan ha undertekst som beskriver søkeresultatet nærmere. Denne kan gå over flere linjer før den brått kuttes av.',
          href: 'https://oslo.kommune.no',
        },
        {
          title: 'Tittel på søkeresultatet 3',
          text: 'Søkeresultatet kan ha undertekst som beskriver søkeresultatet nærmere. Denne kan gå over flere linjer før den brått kuttes av. Søkeresultatet kan ha undertekst som beskriver søkeresultatet nærmere. Denne kan gå over flere linjer før den brått kuttes av.',
          href: 'https://oslo.kommune.no',
        },
        {
          title: 'Tittel på søkeresultatet 4',
          text: 'Søkeresultatet kan ha undertekst som beskriver søkeresultatet nærmere. Denne kan gå over flere linjer før den brått kuttes av.',
          href: 'https://oslo.kommune.no',
        },
        {
          title: 'Tittel på søkeresultatet 5',
          text: 'Søkeresultatet kan ha undertekst som beskriver søkeresultatet nærmere. Denne kan gå over flere linjer før den brått kuttes av.',
          href: 'https://oslo.kommune.no',
        },
        {
          title: 'Tittel på søkeresultatet 6 med funksjon',
          text: 'Søkeresultatet kan ha undertekst som beskriver søkeresultatet nærmere. Denne kan gå over flere linjer før den brått kuttes av.',
          onClick: () => console.log('Dette ble et klikk gitt!'),
        },
      ],
      noResults: [
        {
          text: 'Ingen resultater',
        },
      ],
      values: {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
      },
    }
  },
  components: {
    PktSearchInput,
    PageMain,
  },
  methods: {
    simulateClick() {
      console.log('Dette ble et klikk gitt!')
    },
  },
}
</script>

<style lang="scss">
.pkt-searchinput {
  margin-bottom: 2rem;
}
</style>
