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
alt under her skal genereres fra ./packages/assets/CONTRIBUTING.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->

## Hvordan bidra - Assets ⭐

Vi er veldig happy med at du vurderer å bidra! Om du er usikker på noe som helst,
ta kontakt. Eller bare send inn den buggen eller PRen uansett. Verste som skjer
er at vi høflig ber deg endre på noe. **Vi setter pris på alle hyggelige bidrag!**

👋 Happy coding!

## 📝 Forutsetninger

- Node 18.19
- Skal du jobbe med [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) er det nyttig å kunne litt om det.
- Tilgang til [Figma](https://www.figma.com/file/Eej5jm3jIUjeMfzLE0aOTB/Punkt---Origo-designsystem?node-id=0%3A1&t=VDbEaltk80wYiYn3-0) om SVG skal hentes derifra (Krever innlogging og tilgang).

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
    "build-assets": "npx lerna run build --scope=@oslokommune/punkt-assets",
  }
```

## 🛠️ Gjør arbeidet

### Legg til fonter

Ikke noe magisk her, legg til, endre, eller fjerne filer i hht oppgaven.

### Legg til ikoner

Alle ikoner skal være på formatet SVG.

#### Kopier filen

Når vi skal legge til nye ikoner starter det oftest med å gå inn i
designsystem-filen i Figma og gå til siden `Icons`.

Velg `Copy as SVG` på ikonet.

#### Lag ny SVG-fil

Lag ny fil og lim inn SVG-koden. Navnet på filen skal være id som står i Figma. Legg
de først inn i denne folderen:

```sh
assets
  └── svg-source/
      └── apple.svg
```

#### Klargjør filen

Noen ganger vil man få med ting fra Figma man ikke ønsker i SVG-fila. Derfor må man
manuelt sjekke og optimalisere SVG'en med [svgo](https://github.com/svg/svgo).

Når du står på repoets rot, kjør:

```sh
npm run svgo
```

Det som skjer da er at alle filene som ligger i `svg-source` blir optimalisert til folderen
`svg-target`. Du må selv flytte filene over til icons-mappen selv. Dette for at man ikke
ved et uhell skal skrive over eksisterende filer. Innholdet i disse filene blir ignorert av
git.

I optimaliserte SVG-filer, endre alle `fill=` i path til:

```html
<path fill="var(--fg-color, #2A2859)" ....></path>
```

Dette gjør det enklere å endre fill-color i css senere.

```css
.icon > svg {
  --fg-color: red;
}
```

Legg til `data-category` slik at ikonene blir kategorisert i dokumentasjonen.

```html
<svg id="apple" data-category="ui" ....>
  <!--
Tilgjengelige kategorier:
- arrows
- feedback
- plusminus
- ui
- social
- services
- people-and-health
- sign
--></svg>
```

## 🤝 Lag PR

Når du er klar for en PR skriv din GitHub-message som sier hva som er gjort, og evt issue nummer.

Vi bruker [Conventional Commits](https://www.conventionalcommits.org/) for å beskrive commits gjennom
noen regler. Ingen fare om du ikke følger den, vi tar en gjennomgang og evt justerer 😎.

```sh
fix(assets): #NR Rett feil på alert-komponenten              # med issuenummer
fix(assets): Rett feil på alert-komponenten                  # patcher en bug i koden (patch i Semantic Versioning)
feat(assets): Legg til funksjonalitet                        # ny funksjonalitet i koden (minor i Semantic Versioning)
feat(assets)!: Legg til funksjonalitet og endre eksisterende # breaking change i koden (major i Semantic Versioning)
docs: Endre dokumentasjon                                    # Endring i dokumentasjon
```

## 🔢 Publisering og versjonering

Vi tar oss av publisering av pakken og versjonering.

Punkt bruker [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering av pakkene.

<!-- END CONTENT-->
