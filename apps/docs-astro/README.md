# Velkommen til [Punkt](https://punkt.oslo.kommune.no)

Dette er dokumentasjonsnettsiden til designsystemet Punkt bygget med [Astro](https://astro.build/)
## 🚀 Struktur

### Pages
Astro leter etter `.astro` eller `.md`/`.mdx` filer i `src/pages/` mappen. Hver side blir eksponert som en route basert på filnavnet.

Om man skal bruke astro- eller vue-komponenter i markdownfilen må filen endres til en `mdx`-fil. 
Les mer om [astro mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)

### Components

I `src/components/` ligger Vue og Astro-komponenter.

### Assets

Statiske assets som bilder kan legges i `public/` mappen. Vi har strukturert assets-mappen etter strukturen på nettsiden.

## 🧞 Kommandoer

Denne appen er en del av et monorepo som bruker [Lerna](https://lerna.js.org/).
Dette betyr at alt kan kjøres fra rot (se contribute.md i rotmappen). 
Men her er kommandoene knyttet til denne appen:


| Command                | Action                                             |
|:-----------------------|:---------------------------------------------------|
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

I tillegg har vi laget noen egne scripts for bygging og deploy:

| Command                                | Action                                                                                                                            |
|:---------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| `prebuild-create-content`              | Kjøres ved npm run build. Henter innhold til nettsiden fra andre steder i monorepoet. Eksempel: logoer, ikoner og kopi av readmes |
| `postbuild-update-cf-function`         | Kjøres i workflows `on-push-main.yaml`. Oppdaterer versjonsnummer i Cloudfront function                                           |
| `postbuild-fix-astro-paths`            | Kjøres i workflows `docs-deploy-manual.yaml` `docs-deploy-pr.yaml` `on-push-main.yaml`. Midlertidig fiks for astro image-paths    |
| `prebuild-set-next-majorminor-version` | Kjøres i workflows `docs-deploy-manual.yaml` `on-push-main.yaml`. Henter versjonsnummer i lerna.json                              |

## Bygg og deploy

Vi distribuerer vår nettside gjennom AWS Cloudfront og bruker S3-bucket som fillagring. Nettsiden
er tilgjengelig på https://punkt.oslo.kommune.no under forskjellige foldere.

| Command                   | Action                                                                                                       |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------|
| `on-push-main.yaml`       | Kjøres automatisk ved endringer i `/packages`. Publiserer nettsiden til `/[major.minor]`.                    |
| `docs-deploy-manual.yaml` | Kjøres manuelt. Publiserer til `/[major.minor]` ved main branch, og til `/[branchnavn]` ellers.              |
| `docs-deploy-pr.yaml`     | Kjøres automatisk når PR mot main er `opened`, `synchronize` eller `reopened`. Deployer til `/[branchnavn]`. |
| `docs-deploy-pr-cleanup`  | Kjøres når PR er `closed`. Fjerner mappen i S3 og invaliderer cachen i CloudFront.                           |


## Versjonering
Nettstedet publiseres etter major-minor versjon av pakkene.

## 👀 Les mer om Astro:

- [Astro dokumentasjon](https://docs.astro.build)
- [Astro Discord server](https://astro.build/chat)
