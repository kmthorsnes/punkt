---
title: "For utviklere"
layout: "@layouts/DocLayout.astro"
tabs:
  [
    { "title": "Beskrivelse", "href": "kom-i-gang/for-utviklere" },
    { "title": "Assets", "href": "kom-i-gang/for-utviklere/assets" },
    { "title": "CSS", "href": "kom-i-gang/for-utviklere/css" },
    { "title": "CLI", "href": "kom-i-gang/for-utviklere/cli" },
    { "title": "React", "href": "kom-i-gang/for-utviklere/react" },
    { "title": "Vue", "href": "kom-i-gang/for-utviklere/vue" },
    { "title": "Vue2", "href": "kom-i-gang/for-utviklere/vue2" },
  ]
---

<!--
alt under her skal genereres fra ./packages/css/README.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->
## Bruk av punkt-css

<a href="https://www.npmjs.com/package/@oslokommune/punkt-css" target="_blank"><img src="https://img.shields.io/npm/v/@oslokommune/punkt-css?logo=sass&label=css&style=for-the-badge&color=bf4080" alt="CSS-rammeverk" /></a>

Denne pakken inneholder CSS-rammeverket som gjenspeiler skissene i Figma. Det er ikke automatikk mellom Figma og denne koden, så kode vil som regel henge litt etter hva som oppdateres i Figma.

## 📖 Innhold

```sh
@oslokommune/punkt-css
├── dist/                          # Distribusjonsversjonen av pakken
|   ├── css/                       # generert css
|   |   ├── components/            # hver komponent separat
|   |   |   ├── alert.css          # komponent alert
|   |   |   └── ...
|   |   ├── pkt.css                # alle moduler
|   |   ├── pkt.min.css            # alle moduler minimert
|   |   ├── pkt-base.css           # base modul
|   |   ├── pkt-base.min.css       # base modul minimert
|   |   ├── pkt-components.css     # komponent modul med alle komponenter
|   |   ├── pkt-components.min.css # komponent modul minimert
|   |   ├── pkt-elements.css       # element modul
|   |   ├── pkt-elements.min.css   # element modul minimert
|   |   ├── pkt-normalise.css      # normalisering modul
|   |   └── pkt-normalise.min.css  # normalisering modul minimert
|   └── scss/                      # css-rammeverket med dets moduler
├── CHANGELOG.md                   # alle nevneverdige endringer
├── index.js                       # peker på komplett rammeverk
├── LICENSE                        # MIT lisens
├── package.json                   # all info om prosjektet
└── README.md                      # kom i gang-informasjon
```

## 🚀 Kom i gang - npm

Eksempelet under viser installasjon i en applikasjon med `Vue 3` + `Vite`.

### 1. Installer punkt-css

For å kunne bruke logo, ikoner og fonter med CSS-pakken må du installere punkt-assets

```sh
npm add -D sass                    # Viktig å bruke denne og ikke node-sass
npm add @oslokommune/punkt-assets  # Pakken med svg-ressurser
npm add @oslokommune/punkt-css     # Ja denne
```

### 2. Opprett en scss-fil

```sh
touch ./src/main.scss          # her eller i en egen css-folder
```

### 3. Importer scss-filen

```js
// src/main.js
import './main.scss'
```

### 4. Importer Punkt

```scss
/* src/main.scss

  Overstyr stien til fontene (rammeverkspesifikt)
*/
@use '@oslokommune/punkt-css/dist/scss/abstracts/variables' with (
  $font-path: '@oslokommune/punkt-assets/dist'
);

/* 
  ELLER:
  Overstyr stien til ikonene (rammeverkspesifikt)
  Default er å bruke Punkts CDN for ikoner, men dette kan overstyres til å bruke lokal sti
*/
@use '@oslokommune/punkt-css/dist/scss/abstracts/variables' with (
  $icon-path: '/assets/icons'
);

/*
  Dersom man trenger å overstyre både $font-path og $icon-path kan man gjøre det slik:
*/
@use '@oslokommune/punkt-css/dist/scss/abstracts/variables' with (
  $font-path: '@oslokommune/punkt-assets/dist',
  $icon-path: '/assets/icons'
);

/* Bruk designsystemet */
@use '@oslokommune/punkt-css/dist/scss/pkt';
```

### 5. Fjern lokal css

```scss
/* src/App.vue

Fjern app-spesifikk fontoppsett */
font-family: Avenir, Helvetica, Arial, sans-serif;
```

### 6. Legg på klasse på sidetittel

```scss
/* src/main.scss

Legg til responsiv header */
@use 'sass:map';
@use '@oslokommune/punkt-css/dist/scss/abstracts/variables';
/* Legg merke til at breakpoints hentes inn uten namespace: */
@use '@oslokommune/punkt-css/dist/scss/abstracts/mixins/breakpoints' as *;
@use '@oslokommune/punkt-css/dist/scss/abstracts/mixins/typography';

.h1 {
  @include typography.get-text('pkt-txt-28');
  margin-bottom: map.get(variables.$spacing, 'size-30');

  @include bp('tablet-up') {
    @include typography.get-text('pkt-txt-36');
  }
}
```

```html
<!-- src/components/HelloWorld.vue

Legg til den nye klassen -->
<h1 class="h1">{{ msg }}</h1>
```

### 7. Legg til OsloLogo

```html
<!-- src/App.vue

Legg til logo -->
<img
  class="oslologo"
  alt="Oslo kommune logo"
  src="@oslokommune/punkt-assets/dist/logos/oslologo.svg"
/>

<style lang="scss">
  /* Legg til moduler */
  @use 'sass:map';
  @use '@oslokommune/punkt-css/dist/scss/abstracts/variables';

  /* Legg til klassen for logoen */
  .oslologo {
    margin-bottom: map.get(variables.$spacing, 'size-30');
    height: 12rem;
  }
</style>
```

## 🏎️ Kom i gang - cdn

Ved å inkludere Punkts css via vår cdn på
[punkt-cdn.oslo.kommune.no](https://punkt-cdn.oslo.kommune.no/),
er du kjapt igang uten noe byggesteg.

Link til ønsket CSS-fil i `<head>`-taggen din. Vi anbefaler å bruke
`pkt.min.css` for å få den minifiserte versjonen av hele css-rammeverket.
Du kan også velge å importere enkelte moduler, eller bare base-modulen.

Se tilgjengelige filer på [cdn](https://punkt-cdn.oslo.kommune.no/).

```html
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Punkt</title>
    <link href="https://punkt-cdn.oslo.kommune.no/latest/css/pkt.min.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Velkommen til Oslo Origo</h1>
    <img
      src="https://punkt-cdn.oslo.kommune.no/latest/logos/oslologo.svg"
      alt="Oslo kommune logo"
      height="64"
    />
  </body>
</html>
```

## 🟪 Ikoner

Du kan selv velge hvordan du tar i bruk ikoner. Men vi har et ikon-oppsett for SVG-sprites ved bruk av vårt [CLI-verktøy](/kom-i-gang/for-utviklere/cli).

Våre CSS-klasser som inneholder et ikon importerer ikonet fra vår CDN. Om du har en content security policy(CSP) satt opp må du åpne for https://punkt-cdn.oslo.kommune.no/ i din CSP.

Les mer om ikoner [her.](/ressurser/ikoner/kode)

## 🎨 CSS-rammeverket

- Modulært - import modulene du selv ønsker.
- Må bruke css-klasser - ingen overstyring utenom å bruke OsloSans.
- Komponentbibliotekene bruker samme css.
- Sass abstracts gir ekstra nytteverdi for deg som bruker.

### Innhold

| Kategori   | Beskrivelse                                                                              |
| :--------- | :--------------------------------------------------------------------------------------- |
| Abstracts  | Variabler, funksjoner, mixins: Alle Sass-verktøy som brukes på tvers av rammeverket      |
| Normalise  | Normalisering for å ha en felles baseline                                                |
| Base       | Grunnleggende moduler som farger, grid, spacing, hjelpeklasser, mm.                      |
| Elements   | HTML-elementer som er stylet, som knapper, lister og tabeller.                           |
| Components | Komponenter som kombinerer elementer og komponenter for å lage mer komplekse komponenter |

### Abstracts

Abstracts består av `/variables`, `/functions`, og `/mixins` og samler
alle globale Sass variabler og verktøy på tvers av rammeverket. Disse
er et fundament for resten av rammeverket.

Ingenting under denne folderen skal generere en eneste linje CSS når
den er kompilert på egen hånd. Disse er bare Sass hjelpeverktøy.

#### Variables

Folderen `/variables` er en samling Sass-variabler skrevet på formen
[Sass maps](https://sass-lang.com/documentation/modules/map). Dette
gir en fin måte å kategorisere variablene og gir mulighet for nested
maps.

```scss
/* abstracts/variables/_breakpoints.scss */

$breakpoints: (
  'mobile': 0,
  'phablet': 36rem /* ~576px */,
  'tablet': 48rem /* ~768px */,
  'tablet-big': 64rem /* ~1024px */,
  'laptop': 80rem /* ~1280px */,
  'desktop': 100rem /* ~1600px */,
) !default;
```

For prekompilerte `.css` er hver kategori pakket i en fil, mens for
`.scss` kan hver modul brukes hver for seg.

#### Functions

Nedenfor er et eksempel på bruk av en SCSS `map-get`-funksjon. Den brukes til å hente ut verdier fra våre variabler.

Man kan hente verdier med denne funksjonen fra:

- [breakpoints](/ressurser/breakpoints)
- [colors](/ressurser/colors/kode)
- [spacing](/ressurser/spacing)
- [typografi](/ressurser/typografi/kode)

```scss
@use 'sass:map';
@use '@oslokommune/punkt-css/scss/abstracts/variables';

.wrapper {
  max-width: map.get(variables.$breakpoints, 'phablet');
  padding: map.get(variables.$spacing, 'size-24');
  background-color: map.get(variables.$pkt-colors, 'color-red');
  font-size: map.get(variables.$font-size, 'size-54');
}
```

#### Mixins

Mixins er nyttige når du ønsker å gjenbruke en gruppe av CSS-regler på flere steder i stilsettet ditt.
Se eksempel nedenfor på hva som finnes i Punkt:

**Breakpoints**

```scss
@use '@oslokommune/punkt-css/scss/abstracts/mixins/breakpoints' as *;

@include bp('phablet') { /* 576 til 767px */
  ...;
}
```

**Typografi**

```scss
@use '@oslokommune/punkt-css/dist/scss/abstracts/mixins/typography' as *;

.page-header {
  @include get-text('pkt-txt-40-light');
  margin-top: 0.6em;
  margin-bottom: 0.4em;
}
```

Les mer om [breakpoints](/ressurser/breakpoints) og [typografi](/ressurser/typografi).

### Normalise

De fleste applikasjoner i dag bruker en eller annen form for normalisering eller reset. Dette gjør vi for å gi en mer konsistent utseende og oppførsel av HTML-elementer på tvers av ulike nettlesere.
Nettlesere har sin egen innebygde stil, og disse stilene varierer fra nettleser til nettleser. For eksempel kan margins, padding og linjehøyde variere.

Normaliseringen vi gjør i Punkt er forsøkt gjort så liten som mulig.

[Se i koden](https://github.com/oslokommune/punkt/blob/main/packages/css/src/scss/normalise/_index.scss) for hva som er normalisert i Punkt.

### Base

Vår base har Oslo kommune-stiler som typografi, farger, spacing og hjelpeklasser som for eksempel synlighet og screen-readers-only.

Les mer om:

- [Farger](/ressurser/colors)
- [Typografi](/ressurser/typografi)
- [Spacing](/ressurser/spacing)
- [Grid](/ressurser/grid)
- [Hjelpeklasser](/ressurser/hjelpeklasser)

### Elements

I et designsystem refererer elementer og komponenter til forskjellige nivåer av gjenbrukbarhet og abstraksjon i koden.
Elementer er de minste byggeklossene i vårt designsystem, som for eksempel pkt-list eller pkt-section.

```html
<div class="pkt-section--grey p-size-20">
  <p class="pkt-txt-18-medium">Lista:</p>
  <ul class="pkt-list">
    <li>listelement</li>
  </ul>
</div>
```

### Components

Komponenter er sammensatte elementer som består av en gruppe av elementer og/eller andre komponenter. De representerer en mer kompleks visuell enhet, som en knapp eller en alert-boks. Komponenter har vanligvis flere egenskaper og kan ha flere avhengigheter, og dermed har de en mer kompleks struktur enn elementer.

Alle våre komponenter er dokumentert [under komponenter](/komponenter/om-komponenter).

## 🔢 Versjonering

Punkt bruker [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering av pakkene.

## 👮 Lisens

`Punkt` er distribuert under [MIT-lisens](https://github.com/oslokommune/punkt/blob/main/packages/css/LICENSE) for åpen kildekode.

![NPM License](https://img.shields.io/npm/l/@oslokommune/punkt-css?style=for-the-badge)
<!-- END CONTENT-->
