import React, { useState } from 'react'

import { PktTextarea } from '@/components/textarea/Textarea'

export default function Textarea() {
  const [counterFieldValue, setCounterFieldValue] = useState('Dette er verdi')
  return (
    <>
      <main className="page-main pkt-container">
        <h1>Textarea</h1>

        <section className="component">
          <PktTextarea id="testinput1" label="Tekstarea"></PktTextarea>

          <PktTextarea
            id="testinput2"
            label="Tekstarea med hjelpetext"
            helptext="Dette er tekst over tekstfeltet"
          ></PktTextarea>

          <PktTextarea
            id="testinput33"
            label="Tekstarea inline"
            helptext="Dette er tekst over tekstfeltet"
            inline
          ></PktTextarea>

          <PktTextarea
            id="testinput44"
            label="Tekstarea inline"
            helptext="Dette er tekst over tekstfeltet"
            inline
          ></PktTextarea>

          <PktTextarea
            id="testinput3"
            label="Tekstarea med tag"
            helptext="Dette er tekst over tekstfeltet"
            requiredTag
          ></PktTextarea>

          <PktTextarea
            id="testinput4"
            label="Tekstarea med tag"
            helptext="Dette er tekst over tekstfeltet"
            optionalTag
          ></PktTextarea>

          <PktTextarea
            id="testinput5"
            label="Tekstarea med teller"
            helptext="Dette er tekst over tekstfeltet"
            counter
            counterMaxLength={25}
            value={counterFieldValue}
            onChange={(e) => setCounterFieldValue(e.target.value)}
          ></PktTextarea>

          <PktTextarea
            id="testinput5"
            label="Tekstarea med 50 rader"
            helptext="Dette er tekst over tekstfeltet"
            rows={50}
          ></PktTextarea>

          <PktTextarea
            id="testinput9"
            label="Tekstarea med error"
            helptext="Dette er tekst over tekstfeltet"
            errorMessage="Dette er en feilmelding"
            hasError
          ></PktTextarea>

          <PktTextarea
            id="testinput10"
            label="Tekstarea med dropdown"
            helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
            helptextDropdown="Dette er hjelpetekst"
            optionalTag
          ></PktTextarea>

          <PktTextarea
            id="testinput12"
            label="Tekstarea med dropdown"
            helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
            helptextDropdown="Dette er hjelpetekst"
            errorMessage="Dette er en feilmelding"
            hasError
          ></PktTextarea>

          <PktTextarea
            id="testinput11"
            label="Tekstarea disabled med custom dropdownknapp"
            helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
            helptextDropdown="Dette er hjelpetekst"
            helptextDropdownButton="Denne knappen åpner hjelpetekst"
            disabled
          ></PktTextarea>

          <PktTextarea id="testinput13" label="Tekstarea enkel disabled" disabled></PktTextarea>
        </section>
      </main>
    </>
  )
}
