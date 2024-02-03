---
title: Bidra som utvikler
layout: "@layouts/DocLayout.astro"
tabs:
  [
    { "title": "Repo", "href": "bidra/som-utvikler" },
    { "title": "Assets", "href": "bidra/som-utvikler/assets" },
    { "title": "CSS", "href": "bidra/som-utvikler/css" },
    { "title": "CLI", "href": "bidra/som-utvikler/cli" },
    { "title": "React", "href": "bidra/som-utvikler/react" },
    { "title": "Vue", "href": "bidra/som-utvikler/vue" },
    { "title": "Vue2", "href": "bidra/som-utvikler/vue2" },
  ]
priority: 1
---

<!--
alt under her skal genereres fra ./packages/css/CONTRIBUTING.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->

## Hvordan bidra - CSS ⭐

Vi er veldig happy med at du vurderer å bidra! Om du er usikker på noe som helst,
ta kontakt. Eller bare send inn den buggen eller PRen uansett. Verste som skjer
er at vi høflig ber deg endre på noe. **Vi setter pris på alle hyggelige bidrag!**

👋 Happy coding!

## 📝 Forutsetninger

- Node 18.19
- Kunnskap om [Sass (SCSS)](https://sass-lang.com/) og [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).
- Forståelse av [BEM-navnekonvensjoner](http://getbem.com/) som designsystemet følger.
- Skal du jobbe med [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) er det nyttig å kunne litt om det.
- Noen skal ha designet komponenten i [Figma](https://www.figma.com/file/Eej5jm3jIUjeMfzLE0aOTB/Punkt---Origo-designsystem?node-id=0%3A1&t=VDbEaltk80wYiYn3-0) (Krever innlogging og tilgang).

Aller først må du konfigurere git-hooks slik at scripts kjøres ved commits, som for eksempel et script som kopierer innhold fra readme og contributing til dokumentasjonsnettsiden.

Sett opp git hooks:

```sh
git config core.hooksPath scripts/git-hooks
```

### Lerna

Punkt er et monorepo og bruker `lerna`. Det betyr at alle kommandoer kjører
fra repoets rot, og ikke i subrepoene.

Et utdrag fra rot-package.json viser noen scripts som er satt opp for å forenkle
utvikling i dette subrepoet:

```sh
  "scripts": {
    "build-css": "npx lerna run build --scope=@oslokommune/punkt-css",
    "build-css-app": "npx lerna run build-app --scope=@oslokommune/punkt-css",
    "dev-css": "npx lerna run dev --scope=@oslokommune/punkt-css",
  }
```

## 🛠️ Gjør arbeidet

### Bli kjent med koden

```sh
@oslokommune/punkt-css
├── dist/                          # Distribusjonsversjonen av pakken (lagt til i 0.10.0)
|   ├── css/                       # generert css
|   |   ├── components/            # hver komponent separat
|   |   |   ├── alert.css          # komponent alert
|   |   |   └── ...
|   |   ├── pkt.css                # alle moduler
|   |   ├── pkt.min.css            # alle moduler minimert
|   |   ├── pkt-base.css           # base modul
|   |   ├── pkt-base.min.css       # base modul minimert
|   |   ├── pkt-components.css     # komponent modul med alle komponenpkt
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

### SCSS

Skal du jobbe med CSS-rammeverket er dette stedet å starte.

```sh
scss
├── abstracts/        # Variabler, funksjoner, mixins: Sass-verktøy som ikke generer CSS.
|   ├── functions/    # Kodeblokker som returnerer enkeltverdier av en eller annen Sass data type.
|   ├── mixins/       # Kodeblokker som genererer Sass kode som igjen kompilerer til CSS-stiler.
|   ├── placeholders/ # Lik class selectors som ikke genereres uten at de er tatt i bruk (extended).
|   └── variables/    # Variabler eller design tokens som de kalles er fundamentet til rammeverket.
├── base/             # Grunnleggende moduler som farger, grid, fonter, tekststiler, mm.
├── components/       # Både enkle og mer komplekse komponenter. Grunnlag for komponent-bibliotekene.
├── elements/         # HTML-elementer som er stylet, som knapper, lister og tabeller.
└── normalise/        # En ganske liten normalisering for å ha en felles baseline.
```

Abstracts består av konfigurasjonen og hjelpeverktøyene til CSS-rammeverket. Ingenting under denne
folderen skal generere en eneste linje CSS når den er kompilert på egen hånd.

Folderen `/variables` er en samling Sass-variabler skrevet på formen
[Sass maps](https://sass-lang.com/documentation/modules/map). Dette
gir en fin måte å kategorisere variablene og gir mulighet for nested
maps.

Eksempel:

```scss
/* abstracts/variables/_breakpoints.scss */

$breakpoints: (
  "mobile": 0,
  "phablet": 36rem /* ~576px */,
  "tablet": 48rem /* ~768px */,
  "tablet-big": 64rem /* ~1024px */,
  "laptop": 80rem /* ~1280px */,
  "desktop": 100rem /* ~1600px */,
) !default;
```

## 🤝 Lag PR

Når du er klar for en PR skriv din GitHub-message som sier hva som er gjort, og evt issue nummer.

Vi bruker [Conventional Commits](https://www.conventionalcommits.org/) for å beskrive commits gjennom
noen regler. Ingen fare om du ikke følger den, vi tar en gjennomgang og evt justerer 😎.

```sh
fix(css): #NR Rett feil på alert-komponenten              # med issuenummer
fix(css): Rett feil på alert-komponenten                  # patcher en bug i koden (patch i Semantic Versioning)
feat(css): Legg til funksjonalitet                        # ny funksjonalitet i koden (minor i Semantic Versioning)
feat(css)!: Legg til funksjonalitet og endre eksisterende # breaking change i koden (major i Semantic Versioning)
docs: Endre dokumentasjon                                  # Endring i dokumentasjon
```

## 🔢 Publisering og versjonering

Vi tar oss av publisering av pakken og versjonering.

Punkt bruker [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering av pakkene.

<!-- END CONTENT-->
