import React, { useRef } from 'react'

import { PktCheckbox, PktInputWrapper } from '..'

export default function Switch() {
  const checkboxRef = useRef<HTMLInputElement | null>(null)

  const handleCheckboxChange = (id: string, label: string, checked: boolean) => {
    console.log(`Switch with id ${id} and label "${label}" checked:`, checked)
  }

  return (
    <>
      <main className="page-main pkt-container">
        <h1>Switch</h1>

        <section className="component">
          <PktCheckbox
            isSwitch
            id="checboxSingle"
            label="Switch"
            onChange={() =>
              handleCheckboxChange(
                'checboxSingle',
                'Checkbox',
                checkboxRef.current?.checked || false,
              )
            }
            ref={checkboxRef}
          />
          <p>
            Med <code>labelPosition</code> kan man legge label til venstre:
          </p>
          <PktCheckbox
            isSwitch
            id="checboxSingle2"
            label="Switch"
            labelPosition="left"
            onChange={() =>
              handleCheckboxChange(
                'checboxSingle2',
                'Checkbox',
                checkboxRef.current?.checked || false,
              )
            }
            ref={checkboxRef}
          />
          <p>Switch kan også presenteres med en skjult label:</p>
          <PktCheckbox
            isSwitch
            id="checboxSingle3"
            label="Switch"
            hideLabel
            onChange={() =>
              handleCheckboxChange(
                'checboxSingle3',
                'Checkbox',
                checkboxRef.current?.checked || false,
              )
            }
            ref={checkboxRef}
          />
        </section>

        <section className="component">
          <PktCheckbox
            isSwitch
            id="checkboxHelptext"
            label="Switch med hjelpetekst"
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
            isSwitch
            id="checkboxHelptext2"
            label="Switch med hjelpetekst til venstre og default checked"
            labelPosition="left"
            checkHelptext="Denne valgfrie teksten kan brukes til å beskrive etiketten mer detaljert."
            defaultChecked
            onChange={() =>
              handleCheckboxChange(
                'checkboxHelptext2',
                'Checkbox med hjelpetekst',
                checkboxRef.current?.checked || false,
              )
            }
            ref={checkboxRef}
          />
        </section>

        <section className="component">
          <PktCheckbox
            isSwitch
            id="checkboxWithDefaultChecked"
            label="Switch med default checked og disabled"
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
        </section>

        <section className="component">
          <PktCheckbox
            isSwitch
            id="checkboxWithDefaultChecked2"
            label="Switch med tile, default checked og disabled"
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
              isSwitch
              key="checkboxGroupInputwrapper"
              id="checkboxGroupInputwrapper"
              label="Switch med inputwrapper"
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
              isSwitch
              key="checkboxGroupInputwrapper2"
              id="checkboxGroupInputwrapper2"
              label="Switch med inputwrapper"
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
              isSwitch
              key="checkboxGroupInputwrapper3"
              id="checkboxGroupInputwrapper3"
              label="Switch med inputwrapper"
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
              isSwitch
              key="checkboxError"
              id="checkboxError"
              label="Switch med error"
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
              isSwitch
              key="checkboxError2"
              id="checkboxError2"
              label="Switch med inputwrapper"
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
              isSwitch
              key="checkboxError3"
              id="checkboxError3"
              label="Switch med error"
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
