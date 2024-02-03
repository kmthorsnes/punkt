import React, { useRef } from 'react'

import { PktCheckbox, PktInputWrapper } from '..'

export default function Checkbox() {
  const checkboxRef = useRef<HTMLInputElement | null>(null)

  const handleCheckboxChange = (id: string, label: string, checked: boolean) => {
    console.log(`Checkbox with id ${id} and label "${label}" checked:`, checked)
  }

  return (
    <>
      <main className="page-main pkt-container">
        <h1>Checkbox</h1>

        <section className="component">
          <PktCheckbox
            id="checboxSingle"
            label="Checkbox"
            onChange={() =>
              handleCheckboxChange(
                'checboxSingle',
                'Checkbox',
                checkboxRef.current?.checked || false,
              )
            }
            ref={checkboxRef}
          />
        </section>

        <section className="component">
          <PktCheckbox
            id="checkboxHelptext"
            label="Checkbox med hjelpetekst"
            checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert."
            onChange={() =>
              handleCheckboxChange(
                'checkboxHelptext',
                'Checkbox med hjelpetekst',
                checkboxRef.current?.checked || false,
              )
            }
            ref={checkboxRef}
          />
        </section>

        <section className="component">
          <PktCheckbox
            id="checkboxWithDefaultChecked"
            label="Checkbox med default checked og disabled"
            disabled
            defaultChecked
            onChange={() =>
              handleCheckboxChange(
                'checkboxGroupInputwrapper',
                'Checkbox med inputwrapper',
                checkboxRef.current?.checked || false,
              )
            }
          />
          <PktCheckbox
            id="checkboxWithDefaultChecked2"
            label="Checkbox med tile, default checked og disabled"
            disabled
            hasTile
            defaultChecked
            onChange={() =>
              handleCheckboxChange(
                'checkboxGroupInputwrapper2',
                'Checkbox med inputwrapper tile disabled',
                checkboxRef.current?.checked || false,
              )
            }
          />
        </section>

        <section className="component">
          <h2>Med inputwrapper</h2>
          <PktInputWrapper
            label="Etikett"
            helptext="Dette er tekst over avmerkingsboksene."
            optionalTag
            optionalText="Valgfritt"
            forId="checkboxGroup3"
            hasFieldset
          >
            <PktCheckbox
              key="checkboxGroupInputwrapper"
              id="checkboxGroupInputwrapper"
              label="Checkbox med inputwrapper"
              checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer
                            detaljert."
              onChange={() =>
                handleCheckboxChange(
                  'checkboxGroupInputwrapper',
                  'Checkbox med inputwrapper',
                  checkboxRef.current?.checked || false,
                )
              }
              ref={checkboxRef}
            />
            <PktCheckbox
              key="checkboxGroupInputwrapper2"
              id="checkboxGroupInputwrapper2"
              label="Checkbox med inputwrapper"
              onChange={() =>
                handleCheckboxChange(
                  'checkboxGroupInputwrapper2',
                  'Checkbox med inputwrapper',
                  checkboxRef.current?.checked || false,
                )
              }
              ref={checkboxRef}
            />
            <PktCheckbox
              key="checkboxGroupInputwrapper3"
              id="checkboxGroupInputwrapper3"
              label="Checkbox med inputwrapper"
              onChange={() =>
                handleCheckboxChange(
                  'checkboxGroupInputwrapper3',
                  'Checkbox med inputwrapper',
                  checkboxRef.current?.checked || false,
                )
              }
              ref={checkboxRef}
            />
          </PktInputWrapper>
        </section>

        <section className="component">
          <h2>Med inputwrapper</h2>
          <PktInputWrapper
            label="Etikett"
            helptext="Dette er tekst over checkboxene"
            helptextDropdown="Bruk dette tekstfeltet til å skrive mer informasjon om inputfeltet."
            helptextDropdownButton="Les mer"
            optionalTag
            optionalText="Valgfritt"
            forId="checkboxGroup3"
            hasFieldset
            hasError
            errorMessage="Dette er en feilmelding"
          >
            <PktCheckbox
              key="checkboxError"
              id="checkboxError"
              label="Checkbox med error"
              checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer
                            detaljert."
              onChange={() =>
                handleCheckboxChange(
                  'checkboxError',
                  'Checkbox med error',
                  checkboxRef.current?.checked || false,
                )
              }
              ref={checkboxRef}
              hasTile
              hasError
            />
            <PktCheckbox
              key="checkboxError2"
              id="checkboxError2"
              label="Checkbox med inputwrapper"
              onChange={() =>
                handleCheckboxChange(
                  'checkboxError2',
                  'Checkbox med error',
                  checkboxRef.current?.checked || false,
                )
              }
              ref={checkboxRef}
              hasTile
              hasError
            />
            <PktCheckbox
              key="checkboxError3"
              id="checkboxError3"
              label="Checkbox med error"
              onChange={() =>
                handleCheckboxChange(
                  'checkboxError3',
                  'Checkbox med error',
                  checkboxRef.current?.checked || false,
                )
              }
              ref={checkboxRef}
              hasTile
              hasError
            />
          </PktInputWrapper>
        </section>
      </main>
    </>
  )
}
