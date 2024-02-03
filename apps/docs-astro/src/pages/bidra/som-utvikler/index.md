---
title: Bidra som utvikler
categoryName: bidra
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
alt under her skal genereres fra ./CONTRIBUTING.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->
## Hvordan bidra - Repoet ⭐

Takk for at du vil bidra til å gjøre designsystemet bedre. Her definerer vi hvordan.

Dette repoet inneholder subrepoer som har ulike fremgangsmåter for å bidra. Så hvor ønsker du å hjelpe?

- [assets](/bidra/som-utvikler/assets) - Ressurser
- [css](/bidra/som-utvikler/css) - CSS-rammeverket
- [vue](/bidra/som-utvikler/vue) - Vue 3 komponenter
- [vue2](/bidra/som-utvikler/vue2) - Vue 2 komponenter
- [react](/bidra/som-utvikler/react) - React komponenter

## Forutsetninger

Aller først må du konfigurere git-hooks slik at scripts kjøres ved commits, som for eksempel et script som kopierer innhold fra readme og contributing til dokumentasjonsnettsiden.

Sett opp git hooks:

```sh
git config core.hooksPath scripts/git-hooks
```

### Lerna

Vi bruker Lerna for å gjøre utvikling i et monorepo smidigere.
Les mer om [Lerna](https://lerna.js.org/).

Kjør kommandoer fra rot.
Kommandoer:

```sh
npx nx graph                    # Oversikt over avhengighetene
npx lerna add-caching           # Konfigurer caching
npm run build                   # Bygger alle pakkene og docs
npm run build-assets            # Bygger bare punkt-assets
npm run build-css               # Bygger bare punkt-css
npm run build-css-app           # Bygger bare punkt-css devapp
npm run build-react             # Bygger bare punkt-react
npm run build-react-app         # Bygger bare punkt-react devapp
npm run build-vue               # Bygger bare punkt-vue
npm run build-vue-app           # Bygger bare punkt-vue devapp
npm run build-vue2              # Bygger bare punkt-vue2
npm run build-vue2-app          # Bygger bare punkt-vue2 devapp
npm run build-docs              # Bygger bare punkt-docs
npm run dev-cli                 # Kjører punkt-cli dev-serveren
npm run dev-css                 # Kjører punkt-css dev-serveren
npm run dev-docs                # Kjører docs dev-serveren
npm run dev-react               # Kjører punkt-react dev-serveren
npm run dev-vue                 # Kjører punkt-vue dev-serveren
npm run dev-vue2                # Kjører punkt-vue2 dev-serveren
npm run publish                 # Versjonering og publisering til npm - ikke private pakker
npm run svgo                    # Optimaliserer svg-filer i gitte foldere i assets
npm run test                    # Kjører alle testene til pakkene og docs
npm run update-changelog        # Oppdaterer changelogs
npm run watch                   # npx lerna run --parallel watch
npm run watch-css               # npx lerna run watch --scope=@oslokommune/punkt-css
```

## 🤝 Lag PR

Når du er klar for en PR skriv din GitHub-message som sier hva som er gjort, og evt issue nummer.

Vi bruker [Conventional Commits](https://www.conventionalcommits.org/) for å beskrive commits gjennom
noen regler. Ingen fare om du ikke følger den, vi tar en gjennomgang og evt justerer 😎.

<type>(<omfang>): #<oppgavenummer> <beskrivelse>

[valgfri ytterligere beskrivelse av endringen]

### Type

- feat: En ny funksjon
- fix: En feilretting
- docs: Kun endringer i dokumentasjon - vår nettside
- chore: Endringer i byggeprosessen eller hjelpeverktøy og biblioteker
- style: Endringer som ikke påvirker betydningen av koden (mellomrom, formatering, osv)

### Omfang

- assets (@oslokommune/punkt-assets på NPM)
- cli (@oslokommune/punkt-cli på NPM)
- css (@oslokommune/punkt-css på NPM)
- react (@oslokommune/punkt-react på NPM)
- vue (@oslokommune/punkt-vue på NPM)
- vue2 (@oslokommune/punkt-vue2 på NPM)
- all (alle ovennevnte)

### Oppgavenummer

GitHub oppgavenummer som denne commit er relatert til.

### Beskrivelse

En kort beskrivelse av endringen.

### Ytterligere beskrivelse (valgfri)

En lengre beskrivelse av endringen, kan være flere avsnitt.

### Eksempler

```sh
fix(vue): #NR Rett feil på alert-komponenten               # med issuenummer
fix(vue): Rett feil på alert-komponenten                   # patcher en bug i koden (patch i Semantic Versioning)
feat(vue): Legg til funksjonalitet                         # ny funksjonalitet i koden (minor i Semantic Versioning)
feat(vue)!: Legg til funksjonalitet og endre eksisterende  # breaking change i koden (major i Semantic Versioning)
docs: Endre dokumentasjon                                  # Endring i dokumentasjon
```

## Bugs

Hvis du finner en bug sjekk om den allerede diskuteres på [Github discussion](https://github.com/oslokommune/punkt/discussions). Hvis ikke kan du [opprette et issue her](https://github.com/oslokommune/punkt/issues). Bruk labels `bug` og hvilken del av repoet det gjelder, for eksempel `assets` eller `docs`.

## Nye ideer?

Hvis du vil diskutere nye features eller muligheten for å endre på eksisterende funksjonalitet++, [dra hit](https://github.com/oslokommune/punkt/discussions). Tag gjerne diskusjonen du lager med en av de eksisterende kategoriene.

Hvis diskusjonen ender med at arbeid på designsystemet skal utføres, så lager **vi (Origo)** et issue, som lenker til diskusjonen. Hvis deler av arbeidet skal utføres på noe som eksisterer i dette repoet, så skal det også opprettes en PR i det **oppgaven påbegynnes** - ikke i det den er ferdig!

## Ta kontakt

Vi kan også nåes på Slack hos oslokommune.slack.com på [#origo-punkt](https://oslokommune.slack.com/archives/C01EWV9U07R) for en hyggelig prat. 👋🏼
<!-- END CONTENT-->
