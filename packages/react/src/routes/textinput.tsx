import { PktTextinput } from '@/components/textinput/Textinput'

export default function Textinput() {
  return (
    <>
      <main className="page-main pkt-container">
        <h1>Textinput</h1>

        <section className="component">
          <PktTextinput id="testinput1" label="Textinput" placeholder="Placeholder" />
          <PktTextinput
            id="testinput1fullwidth"
            label="Textinput full bredde"
            placeholder="Placeholder"
            fullwidth
          />
          <PktTextinput
            id="testinput2"
            label="Tekstinput inline"
            helptext="Dette er tekst over tekstfeltet"
            inline
          ></PktTextinput>
          <PktTextinput
            id="testinput2"
            label="Tekstinput inline"
            helptext="Dette er tekst over tekstfeltet"
            inline
          ></PktTextinput>
          <PktTextinput
            id="testinput3"
            label="Tekstinput med tag"
            helptext="Dette er tekst over tekstfeltet"
            requiredTag
          ></PktTextinput>
          <PktTextinput
            id="testinput4"
            label="Tekstinput med tag"
            helptext="Dette er tekst over tekstfeltet"
            optionalTag
          ></PktTextinput>
          <PktTextinput
            id="testinput5"
            label="Tekstinput med prefix"
            helptext="Dette er tekst over tekstfeltet"
            prefix="+47"
          ></PktTextinput>
          <PktTextinput
            id="testinput6"
            label="Tekstinput med suffix"
            helptext="Dette er tekst over tekstfeltet"
            suffix="kr"
          ></PktTextinput>
          <PktTextinput
            id="testinput7"
            label="Tekstinput med suffix og ikon"
            helptext="Dette er tekst over tekstfeltet"
            suffix="Suffix"
            iconNameRight="close"
          ></PktTextinput>
          <PktTextinput
            id="testinput72"
            label="Tekstinput med prefix, suffix og ikon"
            helptext="Dette er tekst over tekstfeltet"
            prefix="Prefix"
            suffix="Suffix"
            iconNameRight="close"
          ></PktTextinput>
          <PktTextinput
            id="testinput8"
            label="Tekstinput med ikon"
            helptext="Dette er tekst over tekstfeltet"
            iconNameRight="close"
          ></PktTextinput>
          <PktTextinput
            id="testinput8"
            label="Tekstinput med søk"
            helptext="Her kan du søke etter meningen med livet."
            placeholder="Søk…"
            type="search"
          ></PktTextinput>
          <PktTextinput
            id="testinput9"
            label="Tekstinput med error"
            helptext="Dette er tekst over tekstfeltet"
            iconNameRight="close"
            errorMessage="Dette er en feilmelding"
            hasError
          ></PktTextinput>
          <PktTextinput
            id="testinput10"
            label="Tekstinput med dropdown"
            helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
            iconNameRight="close"
            helptextDropdown="Dette er teksten i dropdown"
          ></PktTextinput>
          <PktTextinput
            id="testinput11"
            label="Tekstinput disabled"
            helptext="Bruk dette tekstfeltet til å skrive en kort varsling."
            iconNameRight="close"
            helptextDropdown="Dette er teksten i dropdown"
            disabled
          ></PktTextinput>
        </section>
      </main>
    </>
  )
}
