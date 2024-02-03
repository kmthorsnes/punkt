/*
 * Create or edit punkt.config.json
 *
 * @return object with
 * - status: Boolean, true if everything is ok
 */

import chalk from "chalk";
import fs from "fs-extra";
import inquirer from "inquirer";

let pktPath = "";
const result = {
  status: true,
};
const template = {
  svgsprite: {
    files: [
      "{PATH}/icons/alert-error.svg",
      "{PATH}/icons/alert-information.svg",
      "{PATH}/icons/alert-success.svg",
      "{PATH}/icons/alert-warning.svg",
      "{PATH}/icons/chevron-left.svg",
      "{PATH}/logos/oslologo.svg",
    ],
    output: {
      fileType: "html",
      filePath: "./index.html",
    },
  },
};

const questions = [
  {
    type: "confirm",
    name: "svgFiles",
    message: "Vil du legge til SVG-filene som brukes av komponentene?",
    default() {
      return template.svgsprite.files.length;
    },
  },
  {
    type: "list",
    name: "svgOutputType",
    message: "Velg hvor du vil ha SVG-filene",
    default: template.svgsprite.output.fileType,
    choices: [
      { name: "Inline i HTML", value: "html" },
      { name: "I egen SVG-fil", value: "svg" },
    ],
  },
  {
    type: "input",
    name: "svgFilePath",
    message: "Skriv inn stien til filen",
    default() {
      return template.svgsprite.output.filePath;
    },
  },
];

export default async (config) => {
  try {
    // TODO: if punkt.config.json exists, ask if user wants to overwrite it
    // TODO: if user wants to overwrite it, ask if user wants to keep the svg files

    pktPath = "./node_modules/@oslokommune/punkt-assets/dist";

    console.log(chalk.blueBright("🧩 Pusler sammen config-filen..."));
    console.log(
      "Punkt bruker SVG Sprites for ikoner. " +
        "Vi trenger litt info for å sette den opp."
    );
    const answers = await inquirer.prompt(questions);

    if (answers.svgFiles) {
      // replace path in template
      template.svgsprite.files.forEach((file, index) => {
        template.svgsprite.files[index] = file.replace("{PATH}", pktPath);
      });
    } else {
      // remove svg files from template
      template.svgsprite.files = [];
    }

    template.svgsprite.output.fileType = answers.svgOutputType;
    template.svgsprite.output.filePath = answers.svgFilePath;

    // write to file
    fs.writeFileSync(config.configJsonPath, JSON.stringify(template, null, 2));

    console.log(chalk.green("\nFerdig med å lage config-filen.\n"));
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    result.status = false;
  }

  return result;
};
