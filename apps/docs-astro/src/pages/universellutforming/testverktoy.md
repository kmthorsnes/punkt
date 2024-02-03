---
title: Testverktøy
description: ""
categoryName: universellutforming
layout: "@layouts/DocLayout.astro"
---

## Manuelle tester

Testing for universell utforming innebærer både manuelle prosesser,brukertesting, kjøring av ulike verktøy, automatisk ved bruk av Github-actions og nettleser-extensions. Det finnes mange ulike testverktøy der ute og ingen tar for seg alt, så her er det bra å dobbeltsjekke med flere verktøy.

### Brukertesting

Kjør brukertester med folk! Finn brukere med ulike utgangspunkt for å bruke løsningen din. Spesielt viktig er å teste med skjermleserbrukere og tastaturbrukere.

### Simulering

For å simulere ulike funksjonsnedsettelser test med disse verktøyene:

- [Funkify](https://www.funkify.org/?v=f003c44deab6)
- [Web disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla)
- [Silktide chrome extension](https://silktide.com/resources/tools/)

Skjermleserverktøy har som andre verktøy flere alternativer som fungerer litt annerledes enn andre. Det er også ulike verktøy for ulike nettlesere og operativsystemer. De mest kjente skjermlesere er JAWS, VoiceOver og NVDA, men som sagt de passer ikke alle.

- [Liste over skjermlesere](https://en.wikipedia.org/wiki/List_of_screen_readers)
- [Silktide chrome-extension](https://silktide.com/resources/tools/) har også skjermleser.

Test om innholdet blir fremstilt på en logisk og tiltenkt måte. Pass på at ikke skjermleseren hopper over viktig informasjon eller funksjoner.

### Navigering

For å teste ut om løsningen er mulig å betjene ved hjelp av tastatur må dette testes manuelt. Dette kan du gjøre slik:

- Tab er fremover
- Tab + shift er bakover
- Space for å ta et valg
- Enter for å aktivere funksjon
- Bruk piltaster for å navigere

## Automatiske tester

Mange tester er nettleser-extensions som gjør det enkelt å kjøre både
under utvikling og for andre når nettsiden er ute. En viktig ting å tenke på når man bruker automatiske tester er at de finner bare [ca 30% av feilene.](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/) Det er derfor viktig å legge inn manuelle tester og brukertesteing som en del av testprosessen.

### Browser-extenstions

Sjekk mange WCAG-krav med Wave. Denne er for alle som liker brukervennlige verktøy:

- [Wave](https://wave.webaim.org/)

Andre verktøy tester mer enn Wave og er litt mer teknisk, anbefales for utviklere:

- [Axe](https://www.deque.com/axe/devtools/), gratis men betalt versjon for dypere tester.
- [Siteimprove](https://siteimprove.com/nb-no/core-platform/integrations/browser-extensions/) - denne bruker UU-tilsynet, gratis men betalt versjon for dypere tester.
- [Google lighthouse](https://developers.google.com/web/tools/lighthouse/) - denne sjekker mindre krav enn andre verktøy, men den er gratis og åpen.
- [ARC toolkit - chrome-extension](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce/related)
- [Playwright](https://playwright.dev/)

Og sjekk fargekontraster med:

- [A11y fargekontrastsjekker](https://color.a11y.com/)
- [Contrast checker](https://webaim.org/resources/contrastchecker/) fra WebAIM
- [Stark](https://www.figma.com/community/plugin/732603254453395948/Stark) plugin i Figma
- Developer tools i nettlesere

### axe cli

Vi kan anbefale å installere [axe-cli](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/cli) for rask test av WCAG-kravene under utviklingsprosessen.

Du vil trenge Node og NPM.
Installer globalt eller i ditt prosjekt:

```sh
$ npm install @axe-core/cli -g
```

Kjør prosjektet ditt og test siden du ønsker å teste, man kan legge til flere paths for å teste flere sider:

```sh
$ axe http://localhost:3000 http://localhost:3000/komponenter/badge
```

Du vil få feilmeldinger i terminal med en link til en side som hjelper deg med å fikse feilen.

```sh
  Violation of "landmark-no-duplicate-banner" with 1 occurrences!
    Ensures the document has at most one banner landmark. Correct invalid elements at:
     - #pkt-header
    For details, see: https://dequeuniversity.com/rules/axe/4.4/landmark-no-duplicate-banner
```

### Jest axe

Du kan lage egne UU-tester med [jest-axe](https://github.com/nickcolley/jest-axe)

Disse kan inkluderes som en GitHub action. Les mer om dette i denne artikkelen om [automatisering av uu-testing](https://www.adrianbolonio.com/en/accessibility-github-actions/).

### Cypress axe

Du kan lage cypress-tester med [cypress axe](https://developers.google.com/web/tools/lighthouse/)
Disse kan inkluderes som en GitHub action. Les mer om dette i denne artikkelen om [automatisering av uu-testing](https://www.adrianbolonio.com/en/accessibility-github-actions/).

### Robust løsning

En robust løsning er om koden er uten store syntaksfeil, at man bruker [HTML5-semantikk](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics), og [ARIA-roller](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) om HTML5 ikke er tilstrekkelig.

Bruk verktøy for å analysere koden for syntaksfeil, for eksempel ESLint.
Eller kjør kode eller ferdig nettside med:

- [W3C Markup Validator](https://validator.w3.org/)

#### Les mer

- [NAV sitt testoppsett](https://github.com/navikt/uu-testing)
- [Sjekkliste](https://www.uutilsynet.no/tilgjengelighetserklaering/wcag-sjekkliste-utfylling-av-tilgjengelighetserklaering/1333)
