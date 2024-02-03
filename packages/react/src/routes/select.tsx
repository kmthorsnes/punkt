import { PktSelect } from '@/components/select/Select'

export default function Select() {
  return (
    <>
      <main className="page-main pkt-container">
        <h1>Select</h1>

        <section className="component">
          <PktSelect id="testinput1" label="Select">
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
          <PktSelect
            id="testinput2"
            label="Select inline"
            helptext="Dette er tekst over tekstfeltet"
            inline
          >
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
          <PktSelect
            id="testinput21"
            label="Select inline"
            helptext="Dette er tekst over tekstfeltet"
            inline
          >
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
          <PktSelect
            id="testinput3"
            label="Select med tag"
            helptext="Dette er tekst over tekstfeltet"
            requiredTag
          >
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
          <PktSelect
            id="testinput4"
            label="Select med tag"
            helptext="Dette er tekst over tekstfeltet"
            optionalTag
          >
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
          <PktSelect
            id="testinput9"
            label="Select med error"
            helptext="Dette er tekst over tekstfeltet"
            errorMessage="Dette er en feilmelding"
            hasError
          >
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
          <PktSelect
            id="testinput10"
            label="Select med dropdown"
            helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
            helptextDropdown="Dette er teksten i dropdown"
          >
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
          <PktSelect
            id="testinput11"
            label="Select disabled"
            helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
            helptextDropdown="Dette er teksten i dropdown"
            disabled
          >
            <option selected>Frukt…</option>
            <option>Apples</option>
            <option>Oranges</option>
            <option>Grapes</option>
            <option>Pears</option>
            <option>Durians</option>
          </PktSelect>
        </section>
      </main>
    </>
  )
}
