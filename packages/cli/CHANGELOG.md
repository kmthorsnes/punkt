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


## [10.0.0](https://github.com/oslokommune/punkt/compare/9.6.0...10.0.0) (2023-12-19)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Tving publisering etter feilet bygg. 


### Chores
* Prøver igjen å tvinge bygget (#1372). 
* Tving publisering etter feilet bygg (#1370). 


---


## [10.0.0](https://github.com/oslokommune/punkt/compare/9.6.0...10.0.0) (2023-12-19)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
* Tving publisering etter feilet bygg (#1370). 


---


## [10.0.0](https://github.com/oslokommune/punkt/compare/9.6.0...10.0.0) (2023-12-19)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [5.1.9](https://github.com/oslokommune/punkt/compare/5.1.8...5.1.9) (2023-07-14)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
* Bump dependencies #918. 


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
* [670](https://github.com/oslokommune/punkt/issues/670) Generer changelog automatisk (#746). Changelog genereres nå automatisk utifra commits, så lenge de følger Convential commits malen.
  
  Dette er dokumentert i [CONTRIBUTING.md](https://github.com/oslokommune/punkt/blob/main/CONTRIBUTING.md) og i [scriptet som gjør dette ved publisering](https://github.com/oslokommune/punkt/blob/main/scripts/update-changelog.js).


---


## [3.0.0](https://github.com/oslokommune/punkt/compare/v2.0.1...v3.0.0) (2023-03-13)

Versjon 3 inneholder endringer på Alert-komponenten både i css og Vue2, og finnes nå også i React.

Det er ingen endringer for CLI i denne versjonen.


## [2.0.1](https://github.com/oslokommune/punkt/compare/v2.0.0...v2.0.1) (2023-03-07)


### Bug Fixes

* Endre flat-button i alert ([#697](https://github.com/oslokommune/punkt/issues/697)) ([c98aa2a](https://github.com/oslokommune/punkt/commit/c98aa2aa647a8c200013e2770ba5b0e7d17c7a26))



## [2.0.0](https://github.com/oslokommune/punkt/compare/v1.0.2...v2.0.0) (2023-03-07)

**Note:** Version bump only for package @oslokommune/punkt-cli


## [1.0.1](https://github.com/oslokommune/punkt/compare/v1.0.0...v1.0.1) (2023-02-27)


### Bug Fixes

* Rette opp i changelogs etter overgang til v1 ([#680](https://github.com/oslokommune/punkt/issues/680)) ([8136c6d](https://github.com/oslokommune/punkt/commit/8136c6db1fa405394fbd886847f253a0b46b8c49))



## [1.0.0](https://github.com/oslokommune/punkt/compare/v0.23.0...v1.0.0) (2023-02-27)

Helt nytt oppsett for Punkt v1, nytt AWS-oppsett, nye domener, med å ta i bruke lerna for monorepo, nye GH workflow, og ny måte å kjøre oppgaver på.

**cli** Oversette til norsk, tilrettelegge for Lerna, endre alt til Punkt-setting.





# [0.23.0](https://github.com/oslokommune/punkt/compare/v0.22.4...v0.23.0) (2023-02-27)


* build!: Publisere Punkt v1 igjen :rocket: (#678) ([cb3bf71](https://github.com/oslokommune/punkt/commit/cb3bf7104db6507a5ce4d45982141c1c2eba3659)), closes [#678](https://github.com/oslokommune/punkt/issues/678)

## BREAKING CHANGES

* Helt nytt oppsett for Punkt v1, nytt AWS-oppsett, nye domener, med å ta i bruke lerna for monorepo, nye GH workflow, og ny måte å kjøre oppgaver på.





## [0.22.4](https://github.com/oslokommune/punkt/compare/v0.22.3...v0.22.4) (2023-02-27)

**Note:** Version bump only for package @oslokommune/punkt-cli





## [0.22.3](https://github.com/oslokommune/punkt/compare/v0.22.2...v0.22.3) (2023-02-26)


### Bug Fixes

* **cli:** [#514](https://github.com/oslokommune/punkt/issues/514) Tilpass CLI til Punkt-oppsettet ([#671](https://github.com/oslokommune/punkt/issues/671)) ([ddbf8a9](https://github.com/oslokommune/punkt/commit/ddbf8a979880649d808c7ce386748eb303149cb5)), closes [#485](https://github.com/oslokommune/punkt/issues/485) [#537](https://github.com/oslokommune/punkt/issues/537) [#552](https://github.com/oslokommune/punkt/issues/552)





# Changelog

Alle nevneverdige endringer av prosjektet dokumenteres her.

## [0.0.7] - 2022-05-05

- `forbedret` Fiks feil i regex [#343](https://github.com/oslokommune/oslo-designsystem/issues/343)

## [0.0.6] - 2022-05-02

- `forbedret` Erstatt replaceAll() med regex [#343](https://github.com/oslokommune/oslo-designsystem/issues/343)

## [0.0.5] - 2022-05-02

- `forbedret` Støtt tidligere nodejs-versjoner [#343](https://github.com/oslokommune/oslo-designsystem/issues/343)

## [0.0.4] - 2022-05-02

- `forbedret` Støtt tidligere nodejs-versjoner [#343](https://github.com/oslokommune/oslo-designsystem/issues/343) 

## [0.0.3] - 2022-04-25

- `rettet` Default SVG paths er feil [#316](https://github.com/oslokommune/oslo-designsystem/issues/316) 


## [0.0.2] - 2022-04-25

- `rettet` Fjernet noen barnesykdommer [#316](https://github.com/oslokommune/oslo-designsystem/issues/316) 


## [0.0.1] - 2022-04-25

- `ny` Lag løsning for SVG Sprites [#316](https://github.com/oslokommune/oslo-designsystem/issues/316)
