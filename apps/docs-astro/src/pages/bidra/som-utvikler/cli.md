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
alt under her skal genereres fra ./packages/cli/CONTRIBUTING.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->

## Hvordan bidra - CLI ⭐

Vi er veldig happy med at du vurderer å bidra! Om du er usikker på noe som helst,
ta kontakt. Eller bare send inn den buggen eller PRen uansett. Verste som skjer
er at vi høflig ber deg endre på noe. **Vi setter pris på alle hyggelige bidrag!**

Happy coding!

## 📝 Forutsetninger

- Node 18.19 er installert
- Kunnskap om [Commander.js](https://github.com/tj/commander.js) vil nok være nyttig. Her er en basic intro; [Creating a CLI tool with Node.js](https://blog.logrocket.com/creating-a-cli-tool-with-node-js/).
- git hooks er satt opp: `git config core.hooksPath scripts/git-hooks`

### Lerna

Punkt er et monorepo og bruker `lerna`. Det betyr at alle kommandoer kjører
fra repoets rot, og ikke i subrepoene.

Et utdrag fra rot-package.json viser noen scripts som er satt opp for å forenkle
utvikling i dette subrepoet:

```sh
  "scripts": {
    "dev-cli": "npx lerna run dev --scope=@oslokommune/punkt-cli",
  }
```

## 🛠️ Gjør arbeidet

### Bli kjent med koden

```sh
cli
├── src/
|   ├── commands/     # Kode for hver av kommandoene er samlet i egne filer her.
|   └── utils/        # Nyttige funksjoner.
├── playground/       # Inneholder filer for å teste de ulike kommandoene.
└── index.js          # CLI-oppsett med kommandoer og flyt.
```

### Utvikling

Installer appen globalt fra den lokale kildekoden, slik at du teste mens du utvikler:

```sh
npm install -g ./
```

## 🤝 Lag PR

Når du er klar for en PR skriv din GitHub-message som sier hva som er gjort, og evt issue nummer.

Vi bruker [Conventional Commits](https://www.conventionalcommits.org/) for å beskrive commits gjennom
noen regler. Ingen fare om du ikke følger den, vi tar en gjennomgang og evt justerer 😎.

```sh
# fix(cli): #NR Rett feil på initialiseringen             # med issuenummer
fix(cli): Rett feil på initialiseringen                   # patcher en bug i koden (patch i Semantic Versioning)
feat(cli): Legg til funksjonalitet                        # ny funksjonalitet i koden (minor i Semantic Versioning)
feat(cli)!: Legg til funksjonalitet og endre eksisterende # breaking change i koden (major i Semantic Versioning)
docs: Endre dokumentasjon                                 # Endring i dokumentasjon
```

## 🔢 Publisering og versjonering

Vi tar oss av publisering av pakken og versjonering.

Punkt bruker [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering av pakkene.

<!-- END CONTENT-->
