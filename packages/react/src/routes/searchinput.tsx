import React, { useState } from 'react'

import { PktSearchInput } from '@/components/searchinput/SearchInput'

export default function SearchInput() {
  const searchSuggestions = [
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
  ]
  const noSuggestions = [
    {
      text: 'Ingen resultater',
    },
  ]
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
  })
  function handleSearch(key: string, value: string) {
    setValues({
      ...values,
      [key]: value,
    })
  }
  return (
    <>
      <main className="page-main pkt-container">
        <h1>SearchInput</h1>

        <section className="component">
          <PktSearchInput label="Søk etter noe" id="search-global" appearance="global" />
          <PktSearchInput
            label="Søk etter noe (full bredde)"
            id="search-global-fullwidth"
            appearance="global"
            fullwidth
          />
          <PktSearchInput
            label="deaktivert søk"
            id="search-global-disabled"
            appearance="global"
            disabled
          />
          <PktSearchInput
            label="Søk med søkeforslag (Skriv noe)"
            id="search-global-results"
            value={values.value1}
            onSearch={(value) => handleSearch('value1', value)}
            suggestions={values.value1 ? searchSuggestions : undefined}
            appearance="global"
          />
          <PktSearchInput
            label="Søk med ingen resultater (Skriv noe)"
            id="search-global-noresults"
            value={values.value2}
            onSearch={(value) => handleSearch('value2', value)}
            suggestions={values.value2 ? noSuggestions : undefined}
            appearance="global"
          />
        </section>
        <section className="component">
          <PktSearchInput
            label="Søk etter noe"
            id="search-local-with-button"
            appearance="local-with-button"
          />
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
            value={values.value3}
            onSearch={(value) => handleSearch('value3', value)}
            suggestions={values.value3 ? searchSuggestions : undefined}
            appearance="local-with-button"
          />
          <PktSearchInput
            label="Søk med ingen resultater (Skriv noe)"
            id="search-local-with-button-noresults"
            value={values.value4}
            onSearch={(value) => handleSearch('value4', value)}
            suggestions={values.value4 ? noSuggestions : undefined}
            appearance="local-with-button"
          />
        </section>
        <section className="component">
          <PktSearchInput label="Søk etter noe" id="search-local" appearance="local" />
          <PktSearchInput
            label="Søk etter noe (full bredde)"
            id="search-local-fullwidth"
            appearance="local"
            fullwidth
          />
          <PktSearchInput
            label="deaktivert søk"
            id="search-local-disabled"
            appearance="local"
            disabled
          />
          <PktSearchInput
            label="Søk med søkeforslag (Skriv noe)"
            id="search-local-results"
            value={values.value5}
            onSearch={(value) => handleSearch('value5', value)}
            suggestions={values.value5 ? searchSuggestions : undefined}
            appearance="local"
          />
          <PktSearchInput
            label="Søk med ingen resultater (Skriv noe)"
            id="search-local-noresults"
            value={values.value6}
            onSearch={(value) => handleSearch('value6', value)}
            suggestions={values.value6 ? noSuggestions : undefined}
            appearance="local"
          />
        </section>
      </main>
    </>
  )
}
