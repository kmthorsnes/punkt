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
alt under her skal genereres fra ./packages/vue2/CONTRIBUTING.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->

## Hvordan bidra - Vue ⭐

Vi er veldig happy med at du vurderer å bidra! Om du er usikker på noe som helst,
ta kontakt. Eller bare send inn den buggen eller PRen uansett. Verste som skjer
er at vi høflig ber deg endre på noe. **Vi setter pris på alle hyggelige bidrag!**

## 📝 Forutsetninger

- nodejs 18.19
- Kunnskap om [Sass (SCSS)](https://sass-lang.com/) og [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).
- Forståelse av [BEM-navnekonvensjoner](http://getbem.com/) som designsystemet følger.
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
    "build-vue": "npx lerna run build --scope=@oslokommune/punkt-vue",
    "build-vue-app": "npx lerna run build-app --scope=@oslokommune/punkt-vue",
    "dev-vue": "npx lerna run dev --scope=@oslokommune/punkt-vue",
  }
```

### Figma

Sørg for at noen har designet komponenten i [Figma](https://www.figma.com/file/Eej5jm3jIUjeMfzLE0aOTB/Punkt---Origo-designsystem?node-id=0%3A1&t=VDbEaltk80wYiYn3-0)
(Krever innlogging og tilgang).

## 🛠️ Gjør arbeidet

### Filstruktur

Under components lag en folder med komponentnavnet. Lag to filer, en for
vue-komponenten og en for eksport av komponenten. Prefixen `Pkt` skal ikke
være med på navngivingen, men skal navngis i komponenten og eksporteres
med det.

```sh
vue/
└── src/
    └── components/
        └── alert/
            ├── index.js
            └── Alert.vue
```

Husk å legge til komponenten i index.js som ligger i components-mappen.

```js
// components/index.js

import Alert from "./Alert.vue";
import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Alert);
  },
};

use(Plugin);

export default Plugin;

export { Alert as PktAlert };
```

### Lokal utviklingsserver

For å teste komponenten din kan du legge den til i `views` og `router`, kjør følgende (fra root):

```sh
$ npm run dev-vue
```

### SCSS

Det enkleste er å starte og utvikle komponenten som en normal vue-komponent,
med SCSS i `<style>`. Når du er fornøyd flytt SCSS til `punkt-css`:

```sh
css/
└── src/
    └── scss/
        └── components/
            └── _alert.scss
```

Fra mappen `css` kjør:

```sh
$ npm run build-package
```

Da skal CSS'en være tilgjengelig for deg i `vue`

## 🤝 Lag PR

Når du er klar for en PR skriv din GitHub-message som sier hva som er gjort, og evt issue nummer.

Vi bruker [Conventional Commits](https://www.conventionalcommits.org/) for å beskrive commits gjennom
noen regler. Ingen fare om du ikke følger den, vi tar en gjennomgang og evt justerer 😎.

```sh
fix(vue): #NR Rett feil på alert-komponenten              # med issuenummer
fix(vue): Rett feil på alert-komponenten                  # patcher en bug i koden (patch i Semantic Versioning)
feat(vue): Legg til funksjonalitet                        # ny funksjonalitet i koden (minor i Semantic Versioning)
feat(vue)!: Legg til funksjonalitet og endre eksisterende # breaking change i koden (major i Semantic Versioning)
docs: Endre dokumentasjon                                  # Endring i dokumentasjon
```

## 🔢 Publisering og versjonering

Vi tar oss av publisering av pakken og versjonering.

Punkt bruker [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering av pakkene.

<!-- END CONTENT-->
