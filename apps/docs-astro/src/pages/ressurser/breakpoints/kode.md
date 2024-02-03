---
title: Breakpoints
layout: "@layouts/DocLayout.astro"
tabs:
  [
    { 'title': 'Beskrivelse', 'href': 'ressurser/breakpoints' },
    { 'title': 'Kode', 'href': 'ressurser/breakpoints/kode' },
  ]
---

## Variabler

Breakpointsene er tilgjengelige som et Sass map i `abstracts/variables/_breakpoints.scss`.

```scss
$breakpoints: (
  'mobile': 0,
  'phablet': 36rem /* ~576px */,
  'tablet': 48rem /* ~768px */,
  'tablet-big': 64rem /* ~1024px */,
  'laptop': 80rem /* ~1280px */,
  'desktop': 100rem /* ~1600px */,
) !default;
```

## SCSS mixin

Det finnes ulike media queries tilgjengelig for bruk ved bruk av SCSS mixin.

### Min-width

Dette er den vanligste måten å bruke media queries på i Punkt sine Sass-filer.

```scss
@use '@oslokommune/punkt-css/scss/abstracts/mixins/breakpoints' as *;

@include bp('mobile-up') {
  // Unødvendig, tar alle skjermstørrelser
  ...;
}
@include bp('phablet-up') { /* 576 og opp */
  ...;
}
@include bp('tablet-up') { /* 768px og opp */
  ...;
}
@include bp('tablet-big-up') { /* 1024px og opp */
  ...;
}
@include bp('laptop-up') { /* 1280px og opp */
  ...;
}
@include bp('desktop-up') { /* 1600px og opp */
  ...;
}

// Eksempel
.eksempel {
  width: 100%;

  @include bp('tablet-up') {
    width: $pageWidth;
  }
}
```

### Enkeltbreakpoints

Det er også mulighet for å angi et enkelt område av skjermstørrelse.

```scss
@use "@oslokommune/punkt-css/scss/abstracts/mixins/breakpoints" as *;

@include bp('mobile') { /* opp til 575px */
  ...;
}
@include bp('phablet') { /* 576 til 767px */
  ...;
}
@include bp('tablet') { /* 768px til 1023px */
  ...;
}
@include bp('tablet-big') { /* 1024px til 1279px */
  ...;
}
@include bp('laptop') { /* 1280px til 1599px */
  ...;
}
@include bp('desktop') { /* 1600px og opp */
  ...;
}

// Eksempel
.eksempel {
  width: 100%;

  @include bp('tablet') {
    width: $pageWidth;
  }
}
```
