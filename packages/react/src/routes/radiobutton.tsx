import React, { useRef } from 'react'

import { PktInputWrapper, PktRadioButton } from '..'

export default function Radio() {
  const radioRef = useRef<HTMLInputElement | null>(null)

  const handleRadioChange = (id: string, label: string, checked: boolean) => {
    console.log(`Checkbox with id ${id} and label "${label}" checked:`, checked)
  }

  return (
    <>
      <main className="page-main pkt-container">
        <h1>Radio</h1>

        <section className="component">
          <h2>Med inputwrapper</h2>
          <PktInputWrapper
            label="Etikett"
            helptext="Dette er tekst over avmerkingsboksene."
            optionalTag
            optionalText="Valgfritt"
            forId="radioGroup3"
            hasFieldset
          >
            <PktRadioButton
              key="radioGroupInputwrapper"
              name="radiogroup"
              id="radioGroupInputwrapper"
              label="Radio med inputwrapper"
              checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer
                            detaljert."
              onChange={() =>
                handleRadioChange(
                  'radioGroupInputwrapper',
                  'Radio med inputwrapper',
                  radioRef.current?.checked || false,
                )
              }
              ref={radioRef}
            />
            <PktRadioButton
              key="radioGroupInputwrapper2"
              id="radioGroupInputwrapper2"
              label="Radio med inputwrapper"
              name="radiogroup"
              onChange={() =>
                handleRadioChange(
                  'radioGroupInputwrapper2',
                  'Radio med inputwrapper',
                  radioRef.current?.checked || false,
                )
              }
              ref={radioRef}
            />
            <PktRadioButton
              key="radioGroupInputwrapper3"
              id="radioGroupInputwrapper3"
              label="Radio med inputwrapper"
              name="radiogroup"
              onChange={() =>
                handleRadioChange(
                  'radioGroupInputwrapper3',
                  'Radio med inputwrapper',
                  radioRef.current?.checked || false,
                )
              }
              ref={radioRef}
            />
          </PktInputWrapper>
        </section>

        <section className="component">
          <h2>Med inputwrapper</h2>
          <PktInputWrapper
            label="Etikett"
            helptext="Dette er tekst over radiobutton"
            helptextDropdown="Bruk dette tekstfeltet til å skrive mer informasjon om inputfeltet."
            helptextDropdownButton="Les mer"
            optionalTag
            optionalText="Valgfritt"
            forId="radioGroupInput3"
            hasFieldset
            hasError
            errorMessage="Dette er en feilmelding"
          >
            <PktRadioButton
              key="radioError"
              id="radioError"
              label="Radio med error"
              name="radioError"
              checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer
                            detaljert."
              onChange={() =>
                handleRadioChange(
                  'radioError',
                  'Radio med error',
                  radioRef.current?.checked || false,
                )
              }
              ref={radioRef}
              hasTile
              hasError
            />
            <PktRadioButton
              key="radioError2"
              id="radioError2"
              label="Radio med inputwrapper"
              name="radioError"
              onChange={() =>
                handleRadioChange(
                  'radioError2',
                  'Radio med error',
                  radioRef.current?.checked || false,
                )
              }
              ref={radioRef}
              hasTile
              hasError
            />
            <PktRadioButton
              key="radioError3"
              id="radioError3"
              label="Radio med error"
              name="radioError"
              onChange={() =>
                handleRadioChange(
                  'radioError3',
                  'Radio med error',
                  radioRef.current?.checked || false,
                )
              }
              ref={radioRef}
              hasTile
              hasError
            />
          </PktInputWrapper>
        </section>
      </main>
    </>
  )
}
