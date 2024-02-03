# Velkommen til [Punkt CDN](https://punkt-cdn.oslo.kommune.no)

Punkt har sin CDN på https://punkt-cdn.oslo.kommune.no hvor innholdet er versjonert. For at brukerne
skal kunne navigere innholdet i hver versjon, genereres det her noen brukervennlige nettsider som 
verktøy for å gi oversikt og finne frem.

## Bygg og deploy

Hver gang det gjøres en endring i `packages/**` så kjøres workflow `on-push-main.yaml`. I den filen
er det en jobb som heter **cdn**. I denne bygges og deployes innholdet til CDN for hver `major.minor`
versjon ved hjelp av AWS CLI og node.js.

Neste steg i GH workflow-jobben bruker AWS CLI til å skrive alle filstiene på CDNen til en tekstfil. Denne
brukes som input til et egetlaget node.js byggescript i denne modulen, som genererer statiske html-sider
for hver versjon. 

Deretter lastes disse `index.html`-filene opp til CDN i neste steg i GH workflow, sammen med favicons mm,
før CloudFront distribusjonen (cache) invalidiseres for de nye filene.

Det finnes også en manuell workflow `cdn-deploy-manual.yaml` som kan kjøres for å deploye til siste 
versjon til CDN, sammen med de statiske html-sidene.

## 🔢 Versjonering
Punkt bruker [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for versjonering av pakkene.

## 👮 Lisens
`Punkt` er distribuert under [MIT-lisens](https://github.com/oslokommune/punkt/blob/main/packages/cli/LICENSE) for åpen kildekode.

![NPM License](https://img.shields.io/npm/l/@oslokommune/punkt-cli?style=for-the-badge)
