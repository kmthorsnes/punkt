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
alt under her skal genereres fra ./packages/react/README.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->

## Bruk av punkt-react

<a href="https://www.npmjs.com/package/@oslokommune/punkt-react" target="_blank"><img src="https://img.shields.io/npm/v/@oslokommune/punkt-react?logo=react&label=react&style=for-the-badge&color=61dafb" alt="React komponenter" /></a>

Dette repoet inneholder Punkt sine UI-komponenter for React. Komponentene er laget for å fungere sammen med `@oslokommune/punkt-assets` og `@oslokommune/punkt-css`.

Se punkt-react i bruk i en [Vite-app med React og TypeScript](https://stackblitz.com/edit/vitejs-vite-ep2eyk?file=src/App.tsx).

## 📝 Forutsetninger

Peer dependencies:

- nodejs `18.19`
- react `>= 18`
- @oslokommune/punkt-assets `>= 1.0`
- @oslokommune/punkt-css `>= 1.0`

## 🚀 Kom i gang - npm

### 1. Installer komponentbiblioteket

```sh
npm add @oslokommune/punkt-react
```

### 2. Importer komponentene

```js
// src/App.tsx

import { PktButton, PktInput } from "@oslokommune/punkt-react";

...

  <PktInput label="First name" id="firstName" />
  <PktButton skin="primary" variant="icon-left" iconName="user">
    Testbutton
  </PktButton>

```

## 🟪 Ikoner

Alle våre komponenter bruker PktIcon-komponenten for å importere
ikonene via vår [CDN](https://punkt-cdn.oslo.kommune.no/).

Om du har en content security policy(CSP) satt opp må du åpne for https://punkt-cdn.oslo.kommune.no/ i din CSP.

Les mer om ikoner [her.](/ressurser/ikoner/kode)

## 🧩 Komponentbiblioteket

For beskrivelse av hvordan ta i bruk hver enkelt komponent se [om komponenter](/komponenter/om-komponenter).

## 🔢 Versjonering

Punkt bruker [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering av pakkene.

## 👮 Lisens

`Punkt` er distribuert under [MIT-lisens](https://github.com/oslokommune/punkt/blob/main/packages/react/LICENSE) for åpen kildekode.

![NPM License](https://img.shields.io/npm/l/@oslokommune/punkt-react?style=for-the-badge)

<!-- END CONTENT-->
