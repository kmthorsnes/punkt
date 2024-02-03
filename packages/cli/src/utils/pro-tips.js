/*
 * Fetch app configs from package.json and possibly punkt.config.json
 *
 * @return object with
 * - status: Boolean, true if everything is ok
 */

import chalk from "chalk";

let result = {
  status: true,
};

const assembleTips = async (pktPath) => {
  let exampleTemplate =
    '@use "[PKTPATH]/scss/abstracts/variables" with (' +
    '\n  $font-path: [PKTPATH]"\n);' +
    '\n\n@use "[PKTPATH]/dist/scss/pkt";';
  const example = exampleTemplate.replace(/\[PKTPATH\]/g, pktPath);

  let tips = `
${chalk.blueBright("🧠 Nyttige tips:")}
Steg 1:
Sjekk at stiene i ${chalk.cyanBright("punkt.config.json")} er korrekte.

Steg 2:
Importer scss i ${chalk.cyanBright("main.scss:")}
${chalk.green(example)}

Steg 3:
Generer svg-sprites med ${chalk.green("punkt svg sprite")}.
Dersom du har valgt å skrive til HTML, legg til elementet
${chalk.green('<div id="pkt-icons-sprite"></div>')}
i ${chalk.cyanBright("index.html")} før du importerer
slik at ikonene har et sted å være.

Steg 4:
Sett opp ${chalk.green("aliaser")} i prosjektet ditt.
Referanser til ${chalk.green("pktCss")} er mye hyggeligere enn
${chalk.green("@oslokommune/punkt-css/dist")}.`;

  return tips;
};

export default async (config) => {
  try {
    const pktPath = config.tags.includes("vite")
      ? "@oslokommune/punkt-css/dist"
      : "~@oslokommune/punkt-css/dist";

    console.log(await assembleTips(pktPath));
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    result.status = false;
  }

  return result;
};
