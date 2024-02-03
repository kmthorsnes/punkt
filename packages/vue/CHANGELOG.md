# Changelog

Punkt følger [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering,
og skriver commits ca etter [Conventional Commits](https://conventionalcommits.org). 

---

## [11.4.0](https://github.com/oslokommune/punkt/compare/11.3.0...11.4.0) (2024-01-31)

### ⚠ BREAKING CHANGES
Ingen

### Features
* Switch-variant av Checkbox (#1448). * feat(css): Switch (#1444)
  * docs:#1417 dokumentasjon switch toggle (#1446)
  * feat(react,vue): Switch added to Checkbox and test sites (#1447)
  * Kodedokumentasjon Switch og Checkbox
  
  ---------
  
  Co-authored-by: Victoria Nerem <118815886+vicnerem@users.noreply.github.com>


### Bug Fixes
Ingen

### Chores
Ingen

---


## [11.3.0](https://github.com/oslokommune/punkt/compare/11.2.2...11.3.0) (2024-01-26)

### ⚠ BREAKING CHANGES
Ingen

### Features
* new variant &quot;compact&quot; of Alert and Messagebox (#1438). * feat(css,docs): compact/slim alert
  
  - Oppdaterer local dev eksempel med slim/kompakt
  - Justerer css for 'lukk'-knapp i slim versjon av alert
  - Legg til slim alert i kode dokumentasjonen
  
  * feat(docs,css):  slim->compact, messagebox
  
  - Lagt inn MessageBox slim kode i css
  - Lagt inn eksempel i dev pure css & html
  - Endre fra slim til compact (da det er denne betegnelsen vi bruker i docs og høres litt finere ut)
  - Legg til compact props i react, vue og vue2 komponenten og oppdater dev eksempel


### Bug Fixes
Ingen

### Chores
Ingen

---


## [11.2.0](https://github.com/oslokommune/punkt/compare/11.1.1...11.2.0) (2024-01-25)

### ⚠ BREAKING CHANGES
Ingen

### Features
* Tabs (#1435). 


### Bug Fixes
Ingen

### Chores
Ingen

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


## [9.5.0](https://github.com/oslokommune/punkt/compare/9.4.1...9.5.0) (2023-11-29)

### ⚠ BREAKING CHANGES
Ingen

### Features
* SearchInput. 


### Bug Fixes
Ingen

### Chores
* remove ceciliehrr as codeowner. 


---


## [9.4.0](https://github.com/oslokommune/punkt/compare/9.3.4...9.4.0) (2023-11-06)

### ⚠ BREAKING CHANGES
Ingen

### Features
* Nye designtokens - farger. Nye fargevariabler kan leses om på vår nettside.
  Vi ønsker å gi dere litt tid på å bytte til nye fargevariabler så de gamle vil være tilgjengelige en liten stund fremover.
  Mappingen av gamle til nye fargevariabler vil bli tilgjengelig på vår wiki-side på GitHub.
  
  * docs(docs): #1171 docs disabled
  
  * chore(all): #1184 Erstatt fargevariabler
  
  * docs(docs,css) #1185 Dokumentere farger
  
  * docs(docs): Contrastchecker


### Bug Fixes
Ingen

### Chores
Ingen

---


## [9.3.4](https://github.com/oslokommune/punkt/compare/9.3.3...9.3.4) (2023-11-02)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* PktInputWrapper: Fjerne &#x60;for&#x60; og &#x60;label&#x60; dersom &#x60;hasFieldset&#x60; (#1286). PktInputWrapper: Fjerne `for` og `label` dersom `hasFieldset`


### Chores
Ingen

---


## [9.3.1](https://github.com/oslokommune/punkt/compare/9.3.0...9.3.1) (2023-10-30)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* [1276](https://github.com/oslokommune/punkt/issues/1276) Sjekk om userMenu er null ved clickOutside (#1277). Co-authored-by: Peter Motzfeldt <peter.motzfeldt@origo.oslo.kommune.no>


### Chores
Ingen

---


## [9.2.7](https://github.com/oslokommune/punkt/compare/9.2.6...9.2.7) (2023-10-18)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* [1231](https://github.com/oslokommune/punkt/issues/1231) Radiobutton &amp; checkbox har alle klasser i :class. 


### Chores
Ingen

---


## [9.2.3](https://github.com/oslokommune/punkt/compare/9.2.2...9.2.3) (2023-10-12)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Ikke print ut tom aria-describedby når verdien mangler (#1222). Ikke print ut tom aria-describedby når verdien mangler


### Chores
Ingen

---


## [9.2.0](https://github.com/oslokommune/punkt/compare/9.1.0...9.2.0) (2023-10-10)

### ⚠ BREAKING CHANGES
Ingen

### Features
* Props til inputs endret, required &#x3D;&gt; requiredTag, optional &#x3D;&gt; optionalTag (#1218). * feat(react,vue2,docs): Props til inputs endret, required => required, optional => optionalTag
  
  Pluss fikset hjelpetekst i radio og checkbox, og useWrapper i komponenter som bruker inputWrapper


### Bug Fixes
Ingen

### Chores
Ingen

---


## [9.1.0](https://github.com/oslokommune/punkt/compare/9.0.1...9.1.0) (2023-10-05)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [1202](https://github.com/oslokommune/punkt/issues/1202) Valgfrie lenker i footer. Du har nå mulighet til å legge egen href i lenkene Personverns og informasjonskapsler, og tilgjengelighet.
  Nye props i PktFooter og PktFooterSimple:
  personvernOgInfoLink?: string
  tilgjengelighetLink?: string


### Bug Fixes
Ingen

### Chores
Ingen

---


## [9.0.1](https://github.com/oslokommune/punkt/compare/9.0.0...9.0.1) (2023-10-04)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Eksporter select. 


### Chores
Ingen

---


## [9.0.0](https://github.com/oslokommune/punkt/compare/8.0.12...9.0.0) (2023-10-04)

### ⚠ BREAKING CHANGES
* Checkbox and radiobutton #1126. BREAKING CHANGE: 
  * CSS: Checkbox og radiobuttons har fått ny struktur og nye klassenavn
  * React: Radiogroup er fjernet og vi bruker Inputwrapper for å lage grupper av checkbox og radiobuttons
  
  Les mer om ny Checkbox og radiobuttons i vår dokumentasjon


### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [8.0.12](https://github.com/oslokommune/punkt/compare/8.0.11...8.0.12) (2023-10-03)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* InputWrapper: Vi må støtte HTML i hjelpetekster (#1195). 


### Chores
Ingen

---


## [8.0.11](https://github.com/oslokommune/punkt/compare/8.0.10...8.0.11) (2023-10-02)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
* Fieldset in inputwrapper. 


---


## [8.0.8](https://github.com/oslokommune/punkt/compare/8.0.7...8.0.8) (2023-10-02)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [8.0.7](https://github.com/oslokommune/punkt/compare/8.0.6...8.0.7) (2023-10-02)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [8.0.6](https://github.com/oslokommune/punkt/compare/8.0.5...8.0.6) (2023-09-25)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* emit toggleHelpText når man åpner utvidet hjelpetekst i skjemaelementer (#1177). emit toggleHelpText når man åpner utvidet hjelpetekst i skjemaelementer


### Chores
Ingen

---


## [8.0.4](https://github.com/oslokommune/punkt/compare/8.0.3...8.0.4) (2023-09-20)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Overstyre størrelse på input og textarea med &#x60;size&#x60;, &#x60;cols&#x60;, &#x60;rows&#x60; og prop &#x60;fullwidth&#x60;. 


### Chores
Ingen

---


## [8.0.3](https://github.com/oslokommune/punkt/compare/8.0.2...8.0.3) (2023-09-19)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* aria-peker til feilmelding når skjemaelementer har feil (#1167). 


### Chores
Ingen

---


## [8.0.2](https://github.com/oslokommune/punkt/compare/8.0.1...8.0.2) (2023-09-19)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Overstyre tekststrenger for Valgfritt og Påkrevd i InputWrapper (#1166). * Overstyre tekststrenger for Valgfritt og Påkrevd i InputWrapper
  
  Pluss `biologisk => folkeregistrert` korreksjon i Skjemapraksis
  
  * optional- og required-tekster: Specs og kodedokumentasjon


### Chores
Ingen

---


## [8.0.0](https://github.com/oslokommune/punkt/compare/7.2.0...8.0.0) (2023-09-19)

### ⚠ BREAKING CHANGES
* PktSelect (#1163). Helt ny PktSelect, samt forbedring av hvordan de forskjellige inputene deler stiler.
  
  BREAKING CHANGE: Gammel klasse `.pkt-select` vil ikke lenger virke som ønsket. Anbefales å enten bruke komponent PktSelect eller bruke ny klasse `.pkt-input`


### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [7.2.0](https://github.com/oslokommune/punkt/compare/7.1.7...7.2.0) (2023-09-13)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [1114](https://github.com/oslokommune/punkt/issues/1114) New breadcrumbs. Se vår nettsiden for mer informasjon om bruk av breadcrumbs


### Bug Fixes
Ingen

### Chores
Ingen

---


## [7.1.7](https://github.com/oslokommune/punkt/compare/7.1.6...7.1.7) (2023-09-13)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
* Fjerne Alert fra ekspanderende hjelpetekst i InputWrapper. 


---


## [7.1.5](https://github.com/oslokommune/punkt/compare/7.1.4...7.1.5) (2023-09-12)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Forenklet TextInput en god del, samt la til støtte for prefix, suffix og icon samtidig. 


### Chores
Ingen

---


## [7.1.1](https://github.com/oslokommune/punkt/compare/7.1.0...7.1.1) (2023-09-08)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Minifix for devapps. 


### Chores
Ingen

---


## [7.1.0](https://github.com/oslokommune/punkt/compare/7.0.0...7.1.0) (2023-09-08)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [1093](https://github.com/oslokommune/punkt/issues/1093) Backlink. Se dokumentasjonsnettstedet om Backlink


### Bug Fixes
Ingen

### Chores
Ingen

---


## [7.0.0](https://github.com/oslokommune/punkt/compare/6.0.6...7.0.0) (2023-09-07)

### ⚠ BREAKING CHANGES
* PktTextarea #1058, PktInputwrapper, og endringer PktTextinput. BREAKING CHANGE: Textarea er helt ny og erstatter funksjonaliteten til den gamle. Det må regnes med litt endring i implementasjon.


### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [6.0.4](https://github.com/oslokommune/punkt/compare/6.0.3...6.0.4) (2023-08-30)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Tillat funksjon som logoLink i Header. 


### Chores
Ingen

---


## [6.0.3](https://github.com/oslokommune/punkt/compare/6.0.2...6.0.3) (2023-08-30)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
* [1030](https://github.com/oslokommune/punkt/issues/1030) Button colors. 


---


## [6.0.2](https://github.com/oslokommune/punkt/compare/6.0.1...6.0.2) (2023-08-28)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Fiks alternativ lenkestil for knapper (#1079). * fix(css,react,vue2): Fiks alternativ lenkestil for knapper
  
  * Fiks test


### Chores
Ingen

---


## [6.0.1](https://github.com/oslokommune/punkt/compare/6.0.0...6.0.1) (2023-08-24)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Pålogget org &#x3D;&gt; Representerer, pluss headermenyposisjon (#1072). * fix(all): Pålogget org => Representerer, pluss headermenyposisjon
  
  * Headerposisjon


### Chores
Ingen

---


## [6.0.0](https://github.com/oslokommune/punkt/compare/5.2.3...6.0.0) (2023-08-22)

### ⚠ BREAKING CHANGES
* PktHeader #921 (#1067). BREAKING CHANGE: Denne komponenten endrer en hel del fra tidligere versjon. Det meste er endret, og du bør regne med å måtte sette sammen data du sender inn til komponenten på en annen måte enn du har gjort tidligere. Se vår nettside for spesifikasjoner og mer informasjon.


### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [5.2.0](https://github.com/oslokommune/punkt/compare/5.1.21...5.2.0) (2023-08-11)

### ⚠ BREAKING CHANGES
Ingen

### Features
* Feature textinput #758 (#1016). * feat(css): #968 Input (#987)
  
  * feat(vue2, css): #969 Input
  
  * feat(react): #970 Input (#993)
  
  * feat(docs): #973 Textinput dokumentasjon for kode
  
  * test input
  
  * fix(css): input active
  
  * Fiks states - css
  
  * dokumentere mer
  
  * docs:#972 dokumentasjon textinput (#1022)
  
  * docs:#927 Lagt til dokumentasjon
  
  * docs:#927 Bilder
  
  * docs:#927 Oppdatert teksten
  
  * docs:#927 Lagt til bildekode
  
  * docs:#972 endret størrelse på bilder
  
  * docs:#972 Endret rekkefølge anatomi
  
  * docs:#972 Tekst universell utforming og mdx
  
  * docs:#972 Fikset filnavn
  
  * docs: Endret midlertidig tekst
  
  * Endringer slik at både hjelpetekst og utvidet hjelpetekst kan vises samtidig
  
  * Dokumentasjonendringer for TextInput og fiks av brukne lenker
  
  * 758 dokumentasjon input (#1034)
  
  * docs:#758 byttet ut til bilde
  
  * docs:#758 Bilde av alle versjoner
  
  * docs:#758 riktig filtype
  
  * Textinput => Text input
  
  * Oppdater status
  
  ---------
  
  Co-authored-by: Victoria Nerem <118815886+vicnerem@users.noreply.github.com>
  Co-authored-by: Jan Schjetne <jan.schjetne@origo.oslo.kommune.no>


### Bug Fixes
Ingen

### Chores
Ingen

---


## [5.1.21](https://github.com/oslokommune/punkt/compare/5.1.20...5.1.21) (2023-07-26)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Legg til attrs og listeners på button #870. 


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


## [5.1.7](https://github.com/oslokommune/punkt/compare/5.1.6...5.1.7) (2023-06-28)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
Ingen

### Chores
* [918](https://github.com/oslokommune/punkt/issues/918) Oppdatere dependencies. * chore(all): #918 Semver from 7.4.0 to 7.5.3
  
  * chore(vue2, react): #918 @astrojs/react and vue from 2.1.0 to 2.2.1
* bump semver from 7.5.1 to 7.5.2. Bumps [semver](https://github.com/npm/node-semver) from 7.5.1 to 7.5.2.
  - [Release notes](https://github.com/npm/node-semver/releases)
  - [Changelog](https://github.com/npm/node-semver/blob/main/CHANGELOG.md)
  - [Commits](https://github.com/npm/node-semver/compare/v7.5.1...v7.5.2)
  
  ---
  updated-dependencies:
  - dependency-name: semver
    dependency-type: direct:development
  ...
  
  Signed-off-by: dependabot[bot] <support@github.com>
  Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>


---


## [5.1.6](https://github.com/oslokommune/punkt/compare/5.1.5...5.1.6) (2023-06-22)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* [962](https://github.com/oslokommune/punkt/issues/962) Fiks icon cache. 


### Chores
Ingen

---


## [5.1.3](https://github.com/oslokommune/punkt/compare/5.1.2...5.1.3) (2023-06-19)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Mangler &#x60;slot&#x60; på Tag uten ikon eller lukkeknapp (#957). 


### Chores
Ingen

---


## [5.1.1](https://github.com/oslokommune/punkt/compare/5.1.0...5.1.1) (2023-06-13)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* chevron-thin-left på backlink&#x2F;breadcrumb. #953


### Chores
Ingen

---


## [5.1.0](https://github.com/oslokommune/punkt/compare/5.0.11...5.1.0) (2023-06-12)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [846](https://github.com/oslokommune/punkt/issues/846) Ny komponent tag. Tag erstatter Badge, men badge blir fortsatt liggende i CSS, men denne skal altså slettes.


### Bug Fixes
Ingen

### Chores
Ingen

---


## [5.0.9](https://github.com/oslokommune/punkt/compare/5.0.8...5.0.9) (2023-06-06)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* [938](https://github.com/oslokommune/punkt/issues/938) Sjekk om fetch eksisterer før vi kaller det i PktIcon (#939). 


### Chores
Ingen

---


## [5.0.4](https://github.com/oslokommune/punkt/compare/5.0.3...5.0.4) (2023-06-01)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Fiks størrelser på ikoner og ikon i knapper (#907). 
* Fiks størrelser på ikoner og visning av ikon i knapper. 


### Chores
Ingen

---


## [5.0.2](https://github.com/oslokommune/punkt/compare/5.0.1...5.0.2) (2023-05-31)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Fix publish to gh. 


### Chores
Ingen

---


## [5.0.1](https://github.com/oslokommune/punkt/compare/5.0.0...5.0.1) (2023-05-30)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Fiks publisering til gh packages. 


### Chores
Ingen

---


## [5.0.0](https://github.com/oslokommune/punkt/compare/4.3.2...5.0.0) (2023-05-30)

### ⚠ BREAKING CHANGES
* [809](https://github.com/oslokommune/punkt/issues/809) Endre SVG oppsett (#851). BREAKING CHANGE: Ny dokumentasjon straks vi har testet dette ferdig

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

### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [4.3.0](https://github.com/oslokommune/punkt/compare/4.2.1...4.3.0) (2023-05-24)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [869](https://github.com/oslokommune/punkt/issues/869) External Linkcard. 


### Bug Fixes
Ingen

### Chores
Ingen

---


## [4.3.0](https://github.com/oslokommune/punkt/compare/4.2.0...4.3.0) (2023-05-23)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Legg til type i PktButton slik at skjema ikke sendes inn … (#875). * fix(vue2,react): Legg til type i PktButton slik at skjema ikke sendes inn av en vanlig knapp
  * fix(vue2,react): type="button" på lukkeknappen i PktAlert


### Chores
Ingen

---


## [4.2.0](https://github.com/oslokommune/punkt/compare/4.1.0...4.2.0) (2023-05-16)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [852](https://github.com/oslokommune/punkt/issues/852) Legg til openInNewTab - Linkcard. Lagt til ny prop i Linkcard: openInNewTab.
  Om du ønsker at linken skal åpnes i ny fane send openInNewTab = true. Da vil det legges til en target="_blank" og rel="noopener noreferrer"


### Bug Fixes
Ingen

### Chores
Ingen

---


## [4.1.0](https://github.com/oslokommune/punkt/compare/4.0.1...4.1.0) (2023-05-16)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [850](https://github.com/oslokommune/punkt/issues/850) openInNewTab prop - Footer. Lagt til ny prop i Footer og FooterSimple: openInNewTab.
  Om du ønsker at linken skal åpnes i ny fane send openInNewTab = true. Da vil det legges til en target="_blank" og rel="noopener noreferrer"


### Bug Fixes
Ingen

### Chores
Ingen

---


## [4.0.1](https://github.com/oslokommune/punkt/compare/4.0.0...4.0.1) (2023-05-09)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Fix export footersimple. 


### Chores
Ingen

---


## [4.0.0](https://github.com/oslokommune/punkt/compare/3.4.2...4.0.0) (2023-05-08)

### ⚠ BREAKING CHANGES
* [792](https://github.com/oslokommune/punkt/issues/792) Footer. Nye komponenter:
  - pkt-footer
  - pkt-footer-simple
  
  BREAKING CHANGE: Gammel pkt-footer er nå blitt pkt-footer-simple


### Features
Ingen

### Bug Fixes
Ingen

### Chores
Ingen

---


## [3.2.1](https://github.com/oslokommune/punkt/compare/3.2.0...3.2.1) (2023-04-20)

### ⚠ BREAKING CHANGES
Ingen

### Features
Ingen

### Bug Fixes
* Legge til manglende changelogs (#804). Changelogs ble ikke generert for v3.2.0 pga en feil. Denne releasen er kun for å bumpe versjonen og få changelogs på plass.


### Chores
Ingen

---


## [3.2.0](https://github.com/oslokommune/punkt/compare/3.1.2...3.2.0) (2023-04-20)

### ⚠ BREAKING CHANGES
Ingen

### Features
* [760](https://github.com/oslokommune/punkt/issues/760) Link og linkcard
To nyheter denne gangen; link og linkcard.

Link har fått en overhaling, og har fått mulighet til å skille
visuelt på intern og ekstern lenke. Focus state er nå mer synlig.
Link finnes kun i CSS. Les mer på
https://punkt.oslo.kommune.no/3.2/komponenter/link/

Link card er en spesialvariant av en lenke som inneholder ikon,
lenketekst og mer informasjon under lenketeksten. Komponenten
finnes både i CSS, React og Vue2. Les mer på
https://punkt.oslo.kommune.no/3.2/komponenter/linkcard/

---------
Co-authored-by: Cecilie Hansen Rørås <cecilie.roras@origo.oslo.kommune.no>
Co-authored-by: Ole Aasen <ole.aasen@origo.oslo.kommune.no>
Co-authored-by: Victoria Nerem <118815886+vicnerem@users.noreply.github.com>

### Bug Fixes
Ingen


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
* [670](https://github.com/oslokommune/punkt/issues/670) Generer changelog automatisk (#746). Changelog genereres nå automatisk utifra commits, så lenge de følger Convential commits malen.
  
  Dette er dokumentert i [CONTRIBUTING.md](https://github.com/oslokommune/punkt/blob/main/CONTRIBUTING.md) og i [scriptet som gjør dette ved publisering](https://github.com/oslokommune/punkt/blob/main/scripts/update-changelog.js).


---


## [3.1.0](https://github.com/oslokommune/punkt/compare/v3.0.2...v3.1.0) (2023-03-20)

### Features
* [#721](https://github.com/oslokommune/punkt/issues/721) Lag Messagebox i Vue2

## [3.0.2](https://github.com/oslokommune/punkt/compare/v3.0.1...v3.0.2) (2023-03-16)

### Bug Fixes
* [#735](https://github.com/oslokommune/punkt/issues/735) Rett feil i visning av innlogget bruker i Header komponent
Rettet referanse til css-klassen `pkt-truncate-text` fra `truncate-text`.
## [3.0.0](https://github.com/oslokommune/punkt/compare/v2.0.3...v3.0.0) (2023-03-13)

Versjon 3 inneholder endringer på Alert-komponenten både i css og Vue2, og finnes nå også i React.

### ⚠ BREAKING CHANGES
* [#705](https://github.com/oslokommune/punkt/issues/705) Endre Vue2 for Alert

Går bort fra å ha named slots, `title`og `date` er nå props istedet.

Se mer informasjon på [nettsiden](https://punkt.oslo.kommune.no/3.0/komponenter/alert/kode/).

## [2.0.3](https://github.com/oslokommune/punkt/compare/v2.0.2...v2.0.3) (2023-03-09)

### Bug Fixes
* **css:** [#703](https://github.com/oslokommune/punkt/issues/703) Rett feil på button icon-only ([#704](https://github.com/oslokommune/punkt/issues/704)) ([504daf9](https://github.com/oslokommune/punkt/commit/504daf9b71136742dac8f0c5300417b0f2ccbc91))

## [2.0.1](https://github.com/oslokommune/punkt/compare/v2.0.0...v2.0.1) (2023-03-07)
### Bug Fixes
* Endre flat-button i alert ([#697](https://github.com/oslokommune/punkt/issues/697)) ([c98aa2a](https://github.com/oslokommune/punkt/commit/c98aa2aa647a8c200013e2770ba5b0e7d17c7a26))



## [2.0.0](https://github.com/oslokommune/punkt/compare/v1.0.2...v2.0.0) (2023-03-07)


### ⚠ BREAKING CHANGES

* #595 Button (#696)
Buttons har fått ny styling og buttonskins har gått fra 5 til 3:

- Primary: Ny styling
- Secondary: Ny styling
- Tertiary: **breaking** har fått stylingen til flat-button

- Flat: **breaking** fjernet
- Primary-confirm: **breaking** fjernet

**Migrering**:
- Endre Flat til Tertiary
- Endre gammel Tertiary til Secondary (du kan overstyre fargen selv)
### Features

* [#595](https://github.com/oslokommune/punkt/issues/595) Button ([#696](https://github.com/oslokommune/punkt/issues/696)) ([8870dd7](https://github.com/oslokommune/punkt/commit/8870dd732251160f06d59691064045b111c19ed7))



## [1.0.2](https://github.com/oslokommune/punkt/compare/v1.0.1...v1.0.2) (2023-02-27)


### Bug Fixes

* **vue2:** Fiks feil i lisens-referanse ([#681](https://github.com/oslokommune/punkt/issues/681)) ([353b3b7](https://github.com/oslokommune/punkt/commit/353b3b7bae251e4b14e9d533797331a8c6a7155c))



## [1.0.1](https://github.com/oslokommune/punkt/compare/v1.0.0...v1.0.1) (2023-02-27)


### Bug Fixes

* Rette opp i changelogs etter overgang til v1 ([#680](https://github.com/oslokommune/punkt/issues/680)) ([8136c6d](https://github.com/oslokommune/punkt/commit/8136c6db1fa405394fbd886847f253a0b46b8c49))



## [1.0.0](https://github.com/oslokommune/punkt/compare/v0.23.0...v1.0.0) (2023-02-27)

Helt nytt oppsett for Punkt v1, nytt AWS-oppsett, nye domener, med å ta i bruke lerna for monorepo, nye GH workflow, og ny måte å kjøre oppgaver på.

**vue2** Skrive om til å bruke vite.js, sette opp ny dev-app som publiseres, forbedre og rette feil i NPM pakken.





# [0.23.0](https://github.com/oslokommune/punkt/compare/v0.22.4...v0.23.0) (2023-02-27)


* build!: Publisere Punkt v1 igjen :rocket: (#678) ([cb3bf71](https://github.com/oslokommune/punkt/commit/cb3bf7104db6507a5ce4d45982141c1c2eba3659)), closes [#678](https://github.com/oslokommune/punkt/issues/678)


## BREAKING CHANGES

* Helt nytt oppsett for Punkt v1, nytt AWS-oppsett, nye domener, med å ta i bruke lerna for monorepo, nye GH workflow, og ny måte å kjøre oppgaver på.


## [0.22.4](https://github.com/oslokommune/punkt/compare/v0.22.3...v0.22.4) (2023-02-27)

**Note:** Version bump only for package @oslokommune/punkt-vue2



## [0.22.2](https://github.com/oslokommune/punkt/compare/v0.22.1...v0.22.2) (2023-02-26)


### Bug Fixes

* **react:** Sett opp react-lib og publiseringsflyter ([#660](https://github.com/oslokommune/punkt/issues/660)) ([1bb89c7](https://github.com/oslokommune/punkt/commit/1bb89c764e1fd0e100cd7c2d6d820d958273609e))





## [0.22.1](https://github.com/oslokommune/punkt/compare/v0.22.0...v0.22.1) (2023-02-23)

**Note:** Version bump only for package @oslokommune/punkt-vue2





# [0.22.0](https://github.com/oslokommune/punkt/compare/v0.21.7...v0.22.0) (2023-02-23)

**Note:** Version bump only for package @oslokommune/punkt-vue2





## [0.21.7](https://github.com/oslokommune/punkt/compare/v0.21.6...v0.21.7) (2023-02-23)


### Bug Fixes

* **vue2:** [#536](https://github.com/oslokommune/punkt/issues/536) Forbedre Vue2 pakken ([#654](https://github.com/oslokommune/punkt/issues/654)) ([1ff0d3a](https://github.com/oslokommune/punkt/commit/1ff0d3a004806a7bf47538357f12e754e0c5c71b))





# Changelog

Alle nevneverdige endringer av prosjektet dokumenteres her.

## [0.12.2] - 2022-11-28
- `forbedret` Lagt til emit "on-close". Dette for å kunne dele verdien om alert er closed eller ikke. Erstattet close-ikon med ods-flat-button. [#488](https://github.com/oslokommune/oslo-designsystem/issues/488)

## [0.12.1] - 2022-09-19
- `rettet` Fjernet WAI-ARIA-atributter. Disse må settes etter hvilken kontekst man bruker alert-komponenten i. Les mer hos [uu-tilsynet](https://www.uutilsynet.no/veiledning/413-statusbeskjeder/1268)
[#407](https://github.com/oslokommune/oslo-designsystem/issues/407)

## [0.12.0] - 2022-08-25
- `forbedret` Breaking changes på alert - fjernet liten alert, forenklet strukturen og fjernet tile som klasse
 [#388](https://github.com/oslokommune/oslo-designsystem/issues/388)

## [0.11.0] - 2022-08-18
`forbedret` Oppdater header [#390](https://github.com/oslokommune/oslo-designsystem/issues/390)

## [0.10.0] - 2022-08-17
`forbedret` Oppdater footer [#389](https://github.com/oslokommune/oslo-designsystem/issues/389)
Linkene har fått ikon,  ny klasse: `ods-footer__link-icon`
## [0.9.1] - 2022-06-09

- `rettet` Rett masse småfeil på BackLink og bruk nylaget scss-modul [#377](https://github.com/oslokommune/oslo-designsystem/issues/377)

## [0.9.0] - 2022-06-09

- `nytt` Lag ny komponent BackLink [#377](https://github.com/oslokommune/oslo-designsystem/issues/377)

## [0.8.0] - 2022-06-01

- `forbedret` Oppdater footer i hht nytt design [#360](https://github.com/oslokommune/oslo-designsystem/issues/360)

## [0.7.0] - 2022-05-28

- `forbedret` Oppdater header i hht nytt design [#361](https://github.com/oslokommune/oslo-designsystem/issues/361)

## [0.6.1] - 2022-05-28

- `rettet` Rett event på close-button i Alert-komponenten.

## [0.6.0] - 2022-05-28

- `nytt` Lag svg-icon komponent i Vue [#268](https://github.com/oslokommune/oslo-designsystem/issues/268)

## [0.5.0] - 2022-03-14

- `endret` Oppdatert alert-komponenten - ny struktur og variant(tiles)

## [0.4.0] - 2022-03-14

- `nytt` Lagt til alert-komponent

## [0.3.1] - 2022-03-09

- `forbedret` Oppdater Knapp-komponent i Vue [#235](https://github.com/oslokommune/oslo-designsystem/issues/235) 

## [0.3.0] - 2022-02-25

- `nytt` Lag header-komponent i Vue [#209](https://github.com/oslokommune/oslo-designsystem/issues/209) 
- `forbedret` Breadcrumbs og footer er forbedret og gjennomgått 
  design review. 
- `endret` Styling av komponentene er flyttet til css-rammeverket 
  for gjenbruk.

## [0.2.0] - 2022-02-10

- `nytt` Lag breadcrumbs-komponent i Vue [#208](https://github.com/oslokommune/oslo-designsystem/issues/208)

## [0.1.0] - 2022-02-10

- `nytt` Lag footer-komponent i Vue [#210](https://github.com/oslokommune/oslo-designsystem/issues/210)
