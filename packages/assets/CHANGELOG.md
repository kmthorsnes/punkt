# Changelog

Punkt følger [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering,
og skriver commits ca etter [Conventional Commits](https://conventionalcommits.org).

---

## [11.0.0](https://github.com/oslokommune/punkt/compare/10.0.0...11.0.0) (2023-12-20)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Oppdater node- og vite-versjoner, samt litt feilretting (#1376). 
* Tving publisering etter feilet bygg. 


### Chores
* Legg til vue i allowedScopes (#1373). * Legg til vue i allowedScopes
* Prøver igjen å tvinge bygget (#1372). 
* Tving publisering etter feilet bygg (#1370). 


---


## [9.5.3](https://github.com/oslokommune/punkt/compare/9.5.2...9.5.3) (2023-12-07)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

Ingen

### Chores

- Nytt ikon Sort (#1337). \* chore(assets,docs): Nytt ikon Sort

  - Update allIcons.svg

  - Fiks boks

---

## [9.2.2](https://github.com/oslokommune/punkt/compare/9.2.1...9.2.2) (2023-10-12)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

Ingen

### Chores

- [1223](https://github.com/oslokommune/punkt/issues/1223) Nytt ikon - link.

---

## [9.2.1](https://github.com/oslokommune/punkt/compare/9.2.0...9.2.1) (2023-10-11)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

Ingen

### Chores

- [1217](https://github.com/oslokommune/punkt/issues/1217) Legg til drag-ikon.

---

## [5.1.19](https://github.com/oslokommune/punkt/compare/5.1.18...5.1.19) (2023-07-24)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

- [777](https://github.com/oslokommune/punkt/issues/777) id svg.

### Chores

Ingen

---

## [5.1.18](https://github.com/oslokommune/punkt/compare/5.1.17...5.1.18) (2023-07-24)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

- cache control manual.
- cache control.
- fix cache.

### Chores

- [777](https://github.com/oslokommune/punkt/issues/777) Legg til favicons.

---

## [5.1.5](https://github.com/oslokommune/punkt/compare/5.1.4...5.1.5) (2023-06-21)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

- fix key icon.

### Chores

Ingen

---

## [5.1.4](https://github.com/oslokommune/punkt/compare/5.1.3...5.1.4) (2023-06-21)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

Ingen

### Chores

- Nye ikoner. Nye ikoner:
  - receipt
  - code
  - key

---

## [5.0.2](https://github.com/oslokommune/punkt/compare/5.0.1...5.0.2) (2023-05-31)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

- Fix publish to gh.

### Chores

Ingen

---

## [5.0.1](https://github.com/oslokommune/punkt/compare/5.0.0...5.0.1) (2023-05-30)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

- Fiks publisering til gh packages.

### Chores

Ingen

---

## [5.0.0](https://github.com/oslokommune/punkt/compare/4.3.2...5.0.0) (2023-05-30)

### ⚠ BREAKING CHANGES

- [809](https://github.com/oslokommune/punkt/issues/809) Endre SVG oppsett (#851). BREAKING CHANGE:

Nytt:

- Ikoner kommer med komponentene
- Oppdatert PktIcon-komponent
- Ny CSS-klasse `pkt-icon`
- Fjernet data: import av ikoner i CSS

Punkt CLI skal vedlikeholdes men ikke videreutvikles, så det er fortsatt mulig å bruke svg-oppsettet ved bruk av CLI. Men vi vil anbefale å bruke ikon-komponenten vår som dynamisk henter ikoner slik at du kan slippe å tenke på at ikoner en gang i blant må oppdateres.

Les mer om ikoner her:
https://punkt.oslo.kommune.no/5.0/ressurser/ikoner/kode/

**Hva må du gjøre?**

Alle som bruker klasser/komponenter som inneholder ikoner:
Import av ikoner i CSS henter vi nå fra vår CDN.

- Dere som har satt opp CSP må legge inn https://punkt-cdn.oslo.kommune.no/ i deres CSP.

**Vue2 og React**

Ikonene kommer nå inkludert med komponentene ved bruk av PktIcon.
Hvis du har brukt Punkt CLI til å legge til ikoner/logo i komponenter kan du nå fjerne punkt.config.json og dens svg'er. Hvis du har konfigurert CSP må du legge til CDN i din CSP. https://punkt-cdn.oslo.kommune.no/

PktIcon har blitt oppdatert med nye props.

**CSS**

Ny klasse: pkt-icon, legg inn en span med pkt-icon og ellers andre klasser som du kan ha liggende rett i svg.

Før:

```
<div class="pkt-alert">
<div class="pkt-alert__icon">
<svg viewBox="0 0 32 32" aria-hidden="true">
      <use href="#alert-information"></use>
</svg>
</div>
<div class="pkt-alert__text">
    Bruk dette tekstfeltet til å skrive en kort varsling.
  </div>
</div>
```

Nå:

```
<div class="pkt-alert">
<span class="pkt-icon pkt-alert__icon">
  <svg viewBox="0 0 32 32" aria-hidden="true">
      <use href="#alert-information"></use>
    </svg>
  </span>
  <div class="pkt-alert__text">
    Bruk dette tekstfeltet til å skrive en kort varsling.
  </div>
</div>
```

### Features

Ingen

### Bug Fixes

Ingen

### Chores

Ingen

---

## [4.3.2](https://github.com/oslokommune/punkt/compare/4.3.1...4.3.2) (2023-05-26)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

- [873](https://github.com/oslokommune/punkt/issues/873) Mangler CSS-variabel på deler av lock-unlocked.svg (#876).
- Mangler CSS-variabel på deler av lock-unlocked.svg.

### Chores

Ingen

---

## [3.1.2](https://github.com/oslokommune/punkt/compare/3.1.1...3.1.2) (2023-03-30)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

Ingen

### Chores

Ingen

---

## [3.1.1](https://github.com/oslokommune/punkt/compare/3.1.0...3.1.1) (2023-03-23)

### ⚠ BREAKING CHANGES

Ingen

### Features

Ingen

### Bug Fixes

Ingen

### Chores

- [670](https://github.com/oslokommune/punkt/issues/670) Generer changelog automatisk (#746). Changelog genereres nå automatisk utifra commits, så lenge de følger Convential commits malen.

  Dette er dokumentert i [CONTRIBUTING.md](https://github.com/oslokommune/punkt/blob/main/CONTRIBUTING.md) og i [scriptet som gjør dette ved publisering](https://github.com/oslokommune/punkt/blob/main/scripts/update-changelog.js).

---

## [3.0.0](https://github.com/oslokommune/punkt/compare/v2.0.3...v3.0.0) (2023-03-13)

Versjon 3 inneholder endringer på Alert-komponenten både i css og Vue2, og finnes nå også i React.

### Features

- [#685](https://github.com/oslokommune/punkt/issues/685) Endre ikoner for Alert
- [#685](https://github.com/oslokommune/punkt/issues/685) Eksperimentell svg-icon-mixin
- [#632](https://github.com/oslokommune/punkt/issues/632) Legg inn script for svgo

## [2.0.1](https://github.com/oslokommune/punkt/compare/v2.0.0...v2.0.1) (2023-03-07)

### Bug Fixes

- Endre flat-button i alert ([#697](https://github.com/oslokommune/punkt/issues/697)) ([c98aa2a](https://github.com/oslokommune/punkt/commit/c98aa2aa647a8c200013e2770ba5b0e7d17c7a26))

## [2.0.0](https://github.com/oslokommune/punkt/compare/v1.0.2...v2.0.0) (2023-03-07)

**Note:** Version bump only for package @oslokommune/punkt-assets

## [1.0.1](https://github.com/oslokommune/punkt/compare/v1.0.0...v1.0.1) (2023-02-27)

### Bug Fixes

- Rette opp i changelogs etter overgang til v1 ([#680](https://github.com/oslokommune/punkt/issues/680)) ([8136c6d](https://github.com/oslokommune/punkt/commit/8136c6db1fa405394fbd886847f253a0b46b8c49))

## [1.0.0](https://github.com/oslokommune/punkt/compare/v0.23.0...v1.0.0) (2023-02-27)

Helt nytt oppsett for Punkt v1, nytt AWS-oppsett, nye domener, med å ta i bruke lerna for monorepo, nye GH workflow, og ny måte å kjøre oppgaver på.

**assets** Legge til flere ikoner, rette feil, generelle forbedringer.

# [0.23.0](https://github.com/oslokommune/punkt/compare/v0.22.4...v0.23.0) (2023-02-27)

- build!: Publisere Punkt v1 igjen :rocket: (#678) ([cb3bf71](https://github.com/oslokommune/punkt/commit/cb3bf7104db6507a5ce4d45982141c1c2eba3659)), closes [#678](https://github.com/oslokommune/punkt/issues/678)

## BREAKING CHANGES

- Helt nytt oppsett for Punkt v1, nytt AWS-oppsett, nye domener, med å ta i bruke lerna for monorepo, nye GH workflow, og ny måte å kjøre oppgaver på.

## [0.22.4](https://github.com/oslokommune/punkt/compare/v0.22.3...v0.22.4) (2023-02-27)

**Note:** Version bump only for package @oslokommune/punkt-assets

## [0.22.2](https://github.com/oslokommune/punkt/compare/v0.22.1...v0.22.2) (2023-02-26)

### Bug Fixes

- **react:** Sett opp react-lib og publiseringsflyter ([#660](https://github.com/oslokommune/punkt/issues/660)) ([1bb89c7](https://github.com/oslokommune/punkt/commit/1bb89c764e1fd0e100cd7c2d6d820d958273609e))

## [0.22.1](https://github.com/oslokommune/punkt/compare/v0.22.0...v0.22.1) (2023-02-23)

**Note:** Version bump only for package @oslokommune/punkt-assets

# [0.22.0](https://github.com/oslokommune/punkt/compare/v0.21.7...v0.22.0) (2023-02-23)

**Note:** Version bump only for package @oslokommune/punkt-assets

## [0.21.4](https://github.com/oslokommune/punkt/compare/v0.21.3...v0.21.4) (2023-02-15)

**Note:** Version bump only for package @oslokommune/punkt-assets

# [0.21.0](https://github.com/oslokommune/punkt/compare/v0.20.20...v0.21.0) (2023-01-22)

### Bug Fixes

- **repo:** trigger github workflow ([1dee054](https://github.com/oslokommune/punkt/commit/1dee054bfba646fa59ab81a5b65f71aa80aa78d7))

### Features

- **repo:** forbedre publisering ([#542](https://github.com/oslokommune/punkt/issues/542)) ([df21831](https://github.com/oslokommune/punkt/commit/df2183152fab23a50fa3ae8223e118bdfcd55269))

# Changelog

Alle nevneverdige endringer av prosjektet dokumenteres her.
