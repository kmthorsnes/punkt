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
alt under her skal genereres fra ./packages/vue2/README.md,
alle endringer du gjør vil overskrives
-->

<!-- START CONTENT -->

## Bruk av punkt-vue2

<a href="https://www.npmjs.com/package/@oslokommune/punkt-vue2" target="_blank"><img src="https://img.shields.io/npm/v/@oslokommune/punkt-vue2?logo=vue.js&label=vue2&style=for-the-badge&color=42b883" alt="Vue komponenter" /></a>

Dette repoet inneholder Punkt sine UI-komponenter for Vue 2.6+. Vue 3 støttes ikke på dette
tidspunktet. Komponentene er laget for å fungere sammen med `@oslokommune/punkt-assets` og `@oslokommune/punkt-css`.

Se punkt-vue2 i bruk i en [Vite-app med vue2-plugin](https://stackblitz.com/edit/vitejs-vite-cvnmev?file=src/main.js)

## 📝 Forutsetninger

Peer dependencies:

- nodejs `18.19`
- vue `>= 2.6.12 < 3.0.0`
- @oslokommune/punkt-assets `>= 1.0`
- @oslokommune/punkt-css `>= 1.0`

## 🚀 Kom i gang - npm

### 1. Installer komponentbiblioteket

```sh
npm add @oslokommune/punkt-vue2
```

### 2. Importer komponentene

```js
/* src/main.js

Velg å installere hele bundlen */
import Vue from "vue";
import PktVue from "@oslokommune/punkt-vue2";

Vue.use(PktVue);

/* eller kun individuelle komponenter (med ikoner)*/
import Vue from "vue";
import { PktHeader, PktFooter, PktIcon } from "@oslokommune/punkt-vue2";

Vue.component("pkt-header", PktHeader);
Vue.component("pkt-footer", PktFooter);
Vue.component("pkt-icon", PktIcon);
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

`Punkt` er distribuert under [MIT-lisens](https://github.com/oslokommune/punkt/blob/main/packages/vue2/LICENSE) for åpen kildekode.

![NPM License](https://img.shields.io/npm/l/@oslokommune/punkt-vue2?style=for-the-badge)

<!-- END CONTENT-->
