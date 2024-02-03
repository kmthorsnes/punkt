---
title: Hvordan følge WCAG
categoryName: universellutforming
description: ""
layout: "@layouts/DocLayout.astro"
---

## Hvordan

[UU-tilsynet](https://www.uutilsynet.no/) gjennomfører tilsyn og det kan ende i dagbøter så høye som 150 000 kroner for brudd på regelverket. Derfor er det viktig å ha en metodisk tilnærming til universell utforming helt fra start. Har man en strategi for hvordan unngå brudd på WCAG fra start vil ikke jobben etter et tilsyn eller en klage fra bruker bli så stor.

UU-tilsynet deler tilsynsrapportene om man er nysgjerrig på hvordan dette foregår, se [UU-tilsynets sider](https://www.uutilsynet.no/tilsynsrapportar/rapportarkiv/270?field_global_taxonomy_target_id=9&field_year_target_id=All)

Alle som jobber med å utvikle digitale løsninger har et ansvar for at løsningen er tilgjengelig for alle. En produkteier eller teamlead sørger for at det er fokus på og tid til universell utforming. Innholdsdesigneren, designere og utviklere passer på at løsningen er mulig å oppfatte, mulig å betjene, forståelig og robust. Test jevnlig, både med verktøy og brukere.

Husk at et Punkt løser ikke alt. Det er fortsatt viktig å teste komponenter i en helhet. Og ingen er feilfrie, alle har UU-feil, men det blir enklere å rette opp i feilene når vi har dette som en rutine.

Så hva skal vi passe på for at løsningen følger WCAG? Kort fortalt.

## Mulig å oppfatte

<p class="ingress">
Vi må sørge for at alle oppfatter innholdet vi presenterer i løsningen.
</p>

### Bilde, animasjon, lyd og video

- Ikke-tekstlig innhold, som for eksempel video, lyd og bilde må ha et tekstalternativ som samsvarer med det vi skal formidle slik at informasjon er tilgjengelig for en skjermleser. Det er ikke nødvendig med tekstalternativ på dekorativt innhold.
- Unngå bilder som tekst. `Alt-tekst` hjelper ikke de som trenger større skrift, konverteringer eller oversettelser. Hva om bruker trenger å kopiere teksten?
- Kan brukeren kjapt og enkelt stoppe, pause eller skjule animasjoner, video og lyd? Dette må også være like kjapt og enkelt med tastatur.
- Unngå å starte lyd og video automatisk, la brukeren bestemme.
- Brukeren skal kunne slå av animasjoner selv. Brukere kan slå av animasjoner i sitt operativsystem, men ikke anta at brukeren vet at denne muligheten finnes.

#### Designere

- Innhold skal ikke blinke mer enn tre ganger per sekund for å unngå anfall og svimmelhet. Dette kan være veldig alvorlig for brukeren og derfor skal dette ikke skje.

#### Utviklere

- Skriv korte og konkrete alternative tekster. Beskriv hva du formidler i bildet, ikke motivet i seg selv.
- `alt`-attributtet skal alltid være med. Men om bildet ikke skal leses opp av skjermleser la `alt` være tom. Om `alt` ikke er i img-taggen vil innholdet i `src` leses opp, noe som er veldig forstyrrende.

```html
<img alt="" class="dekor" src="bildeavdekoren-2-copy.jpg" />
```

### Semantikk, tekst og struktur

For at brukeren skal kunne oppfatte og forstå innholdet i løsningen er det viktig å ha et forhold til logisk
navngiving og struktur.

- Har vi god tekststruktur på siden?
- Blir løsningen presentert i en logisk rekkefølge? Blir titler og tekst presentert i riktig rekkefølge?
- Kan innholdet vises i liggende og stående retning?
- Er strukturen slik vi ønsker?
- Bruk tabeller når informasjonen krever en tabell, ikke for visuell effekt.
- Tekst skal kunne bli endret til 400% størrelse ved 1280 piksler bredde uten tap av innhold eller funksjon. Dette kan du teste manuelt ved å zoome nettleseren og se om du får med deg innholdet på tiltenkt måte.

#### Designer

- Lenkede bilder og tekst bør være visuelt synlig klikkbare

#### Utvikler

- Bruk semantisk HTML
- Bruk logisk HTML-struktur, for eksempel rekkefølgen på header-tagger skal være i riktig rekkefølger
- Bruk WAI-ARIA med logiske navn og roller hvis HTML-semtantikken ikke strekker til, men vær forsiktig med bruken av ARIA, vit hva den gjør.
- Unngå å bruke HTML-elementer for visuelle endringer, dette skal CSS brukes til. For eksempel ikke bruk `<br>` for å lage avsnitt.
- Husk at skjermleser er avhengig av at språk er satt riktig i HTML. `<html lang="nb">`

#### Les mer:

- [Visuell utforming av tabell](https://www.uutilsynet.no/veiledning/tabeller/225#visuell_utforming)
- [Kode tabell riktig](https://www.uutilsynet.no/veiledning/tabeller/225)
- [Les mer om WAI-ARIA](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Mer om struktur](https://www.uutilsynet.no/veiledning/tekst-og-struktur/226)

### Farger og kontrast

- Ikke illustrer et budskap som bygger utelukkende på farge. I tillegg til farge, bruk ikoner og tekstalternativer.
- Bruker vi høy nok kontrastverdi? Kontrastverdien for tekst og bakgrunn skal være 4.5:1
- Fokusmarkering ved tastaturnavigering skal være tydelig i alle nettlerere.

#### Les mer:

- [Om bruk av farger](https://www.uutilsynet.no/veiledning/bruk-av-farger/206)
- [Om kontrast](https://www.uutilsynet.no/veiledning/kontrast/48)

### Tilbakemeldinger og skjema

- Sørg for at alle kan fullføre et skjema.
- Er det gode veiledningstekster?
- Er det tydelige og tilgjengelige feilmeldinger?
- Er feilmeldinger forståelige slik at brukeren vet hvordan feil kan løses?
- Er obligatoriske felt i et skjema merket?
- Får alle med seg statusbeskjeder?

#### Les mer:

- [Om skjema](https://www.uutilsynet.no/veiledning/skjema/38)
- [Nytt skjemakrav i WCAG 2.1](https://www.uutilsynet.no/veiledning/135-identifiser-formal-med-inndata/1238)
- [Om statusbeskjeder](https://www.uutilsynet.no/wcag-standarden/413-statusbeskjeder-niva-aa/152)

## Mulig å betjene

<p class="ingress">
Alle skal kunne betjene løsningen vår.
Gjør det mulig for brukerne å navigere, finne innhold og vite hvor de befinner seg.
<p/>

### Navigasjon

Løsningen skal kunne navigeres med tastatur.

- Er alle interaktive elementer tilgjengelig og i synlig fokus?
- Er det noen steder brukeren blir stående fast i et element? Eller elementer som aldri er tilgjengelig for tastatur eller skjermleser?
- Tenk brukeropplevelse, for eksempel lag snarveier i navigeringen om det blir for lang vei til hovedinnhold
- Er det minst to metoder for å finne innhold på nettstedet vårt? Som for eksempel meny og søk? Og er det enkelt å finne og gjennomføre et søk og navigere seg rundt?
- Popup-komponenter, alerts eller informasjon som dukker opp underveis i brukerreisen skal ha direkte fokus slik at alle får den med seg. Popup'er skal også ha godt synlig kryss for å kunne fjerne den.
- Sørg for at brukeren får med seg innholdet i en toast som bare er tilgjengelig i kort periode.
- Gir vi brukeren nok tid til å oppfatte og betjene løsningen?

For å teste ut om løsningen er mulig å betjene ved hjelp av tastatur må dette testes manuelt. Dette kan du gjøre slik:

- Tab er fremover
- Tab + shift er bakover
- Space for å ta et valg
- Enter for å aktivere funksjon
- Bruk piltaster for å navigere

#### Designer

- Alle lenkers mål og funksjon skal fremgå tydelig av lenketeksten.
- Lenker skal ha synlig fokus ved tastatunavigasjon. Alle elementer som er tilgjenglig med tastaturnavigasjon, skal lenkene få fokus når de er aktive.

#### Utvikler

- Sørg for at scrollable komponenter er tilgjengelig for tastaturnavigering med tabindex
- Sørg for at rekkefølgen ved tastaturnavigering er riktig. Siden tastaturnavigeringen følger kodestruktur kan det noen ganger bli feil, gjør kildekoden bedre eller bruk tabindex(hvis du må) for å overstyre rekkefølge.

#### Les mer

- [Om tastaturnavigasjon](https://www.uutilsynet.no/veiledning/tastaturnavigasjon/37)
- [Om å gi tid](https://www.uutilsynet.no/wcag-standarden/22-nok-tid/720)

```html
<div style="overflow-y: auto" tabindex="0">
  <div style="height: 2000px">
    <p>Innhold</p>
  </div>
</div>
```

## Forståelig

<p class="ingress">
Brukeren skal kunne forstå hvordan løsningen skal brukes og forstå den informasjonen vi formidler.
</p>

### Forutsigbar og leselig

- Er løsningen vår forutsigbar og helhetlig? Det kan bety at innhold ikke endrer seg drastisk om bruker har endret verdi i for eksempel et skjema.
- Sørg for å hjelpe bruker til å rette opp feil.
- For sider som medfører juridiske forpliktelser må det være mulig å kunne angre, kontrollere eller bekrefte dataene som sendes inn.

#### Designer

- Er funksjonalitet på tvers av hele løsningen utformet likt?

#### Utvikler

- Sørg for at språket til innholdet på alle websider er angitt i koden og at alle deler av innholdet som er på et annet språk enn resten av siden er markert i koden.

#### Les mer:

- [Om språk i koden](https://www.uutilsynet.no/veiledning/sprak-i-koden/223)

```html
<html lang="nb">
  <p>Dette er norsk tekst <span lang="”en”">This is english.</span> Her er det norsk igjen.</p>
</html>
```

## Robust

<p class="ingress">
Løsningn må være robust og kompatibel. Alle sider skal være uten store kodefeil. Komponenter har navn og roller satt i koden.
</p>

- Sørg for å bruke verktøy som analyserer koden for syntaksfeil
  eller kjør koden gjennom en kodevalidator.

### Les mer:

- [Om kompatibel kode](https://www.uutilsynet.no/wcag-standarden/41-kompatibel/728)
