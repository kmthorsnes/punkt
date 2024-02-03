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
alt under her skal genereres fra ./packages/vue/README.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->

## Bruk av punkt-vue

<a href="https://www.npmjs.com/package/@oslokommune/punkt-vue" target="_blank"><img src="https://img.shields.io/npm/v/@oslokommune/punkt-vue?logo=vue.js&label=vue&style=for-the-badge&color=42b883" alt="Vue komponenter" /></a>

Dette repoet inneholder Punkt sine UI-komponenter for Vue 3. Komponentene er laget for å fungere sammen med `@oslokommune/punkt-assets` og `@oslokommune/punkt-css`.

## 📝 Forutsetninger

Peer dependencies:

- nodejs `18.19`
- vue `>= 3.0.0`
- @oslokommune/punkt-assets `>= 1.0`
- @oslokommune/punkt-css `>= 1.0`

## 🚀 Kom i gang - npm

### 1. Installer komponentbiblioteket

```sh
npm add @oslokommune/punkt-vue
```

### 2. Importer komponentene

```js
/* src/main.js

Velg å installere hele bundlen */
import { createApp } from "vue";
import PktVue from "@oslokommune/punkt-vue";

const app = createApp({});

app.use(PktVue);

/* eller kun individuelle komponenter (med ikoner)*/
import { createApp } from "vue";
import { PktHeader, PktFooter, PktIcon } from "@oslokommune/punkt-vue";

const app = createApp({});

app.component("pkt-header", PktHeader);
app.component("pkt-footer", PktFooter);
app.component("pkt-icon", PktIcon);
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

`Punkt` er distribuert under [MIT-lisens](https://github.com/oslokommune/punkt/blob/main/packages/vue/LICENSE) for åpen kildekode.

![NPM License](https://img.shields.io/npm/l/@oslokommune/punkt-vue?style=for-the-badge)

<!-- END CONTENT-->
