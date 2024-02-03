---
title: Breakpoints
categoryName: ressurser
layout: "@layouts/DocLayout.astro"
tabs:
  [
    { 'title': 'Beskrivelse', 'href': 'ressurser/breakpoints' },
    { 'title': 'Kode', 'href': 'ressurser/breakpoints/kode' },
  ]
priority: 8
---

<p class="ingress">
Breakpoints er størrelser som avgjør hvordan den responsive layouten oppfører seg på tvers av enheter og skjermstørrelser.
</p>

- **Breakpoints** er kjernen i responsiv design.
- Lag **mobil først design** ved hjelp av media queries.
- Gjør det **enkelt** å skrive media queries med navngitte breakpoints eller tilpassede verdier i rem.


Det er 6 standard breakpoints tilgjengelig.

| Breakpoint | Dimensjon     | Pixler      |
| :--------- | :------------ | :---------- |
| mobile     | opp til 36rem | ~576px      |
| phablet    | fra 36rem     | fra ~576px  |
| tablet     | fra 48rem     | fra ~768px  |
| tablet-big | fra 64rem     | fra ~1024px |
| laptop     | fra 80rem     | fra ~1280px |
| desktop    | fra 100rem    | fra ~1600px |

## Figma

I Figma vil du ha tilgang på 7 ulike grids for størrelser fra mobil til desktop.
I desktop varianten finner vi to versjoner, i Origo har vi ulike behov derfor finner du en variant for admin-panel og nettsidene. Når siden går over 1600px anbefaler vi at sidene av griden får hvit luft/spacing. I 

Disse størrelsene finnes i Figma:

| Type               | Dimensjon | Kolonner |
| :----------------- | :-------- | :------- |
| Adminpanel Desktop | 1600px    | 12       |
| Desktop            | 1600px    | 12       |
| Laptop             | 1280px    | 12       |
| Tablet-big         | 1024px    | 8        |
| Tablet             | 768px     | 8        |
| Phablet            | 576px     | 8        |
| Mobile             | 360px     | 4        |


