/**
 * Build svg sprite
 *
 * This script reads the svg-sprite-content.txt file and creates a sprite.svg file
 * before it injects the sprite into the index.html file.
 *
 */

import fs from "fs-extra";
import chalk from "chalk";
import fetchAppConfigs from "../utils/fetch-app-configs.js";
import { transformSvgToSymbol } from "../utils/utils.js";

// feedback to user
const message = {
  pos: chalk.green.bold("Punkt ") + chalk.green("fikset SVG'ene dine 🎉\n "),
  neg:
    chalk.red("Punkt kunne ") +
    chalk.red.bold("ikke ") +
    chalk.red("sprite SVG'ene dine 😢\n "),
};
const spriteTemplate = {
  xml: '<?xml version="1.0" encoding="utf-8"?>\n',
  start: '<svg xmlns="http://www.w3.org/2000/svg">\n',
  end: "</svg>",
};
let status = true;

const svgFilenames = [];
const svgContents = [];
let config = {};
let svgSprite = "";

// find svgs from punkt.config.json
const fetchFileNames = async () => {
  try {
    const configRest = await fetchAppConfigs();
    config = configRest.config;
    status = configRest.status;

    if (
      config.configJson &&
      config.configJson.svgsprite &&
      config.configJson.svgsprite.files
    ) {
      svgFilenames.push(...config.configJson.svgsprite.files);
      console.log(chalk.green("Svg filnavn hentet."));
    } else {
      console.log(
        chalk.red(
          "Kunne ikke finne din punkt.config.json, please gjør en init først 🙏"
        )
      );
      status = false;
    }
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    status = false;
  }
};

// read svg contents
const fetchSvgContents = async () => {
  try {
    svgFilenames.forEach((file) => {
      svgContents.push(fs.readFileSync(file, "utf8"));
    });

    console.log(chalk.green("Svg innhold hentet."));
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    status = false;
  }
};

// build svg sprite
const createSprite = async () => {
  try {
    if (config.configJson.svgsprite.output.fileType === "svg") {
      svgSprite += spriteTemplate.xml;
    }
    svgSprite += spriteTemplate.start;
    svgContents.forEach((svg) => {
      svgSprite += transformSvgToSymbol(svg);
    });
    svgSprite += spriteTemplate.end;
    console.log(chalk.green("Svg sprite laget."));
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    status = false;
  }
};

// write sprite to html
const insertSpriteIntoHtml = async () => {
  try {
    const data = fs.readFileSync(
      config.configJson.svgsprite.output.filePath,
      "utf8"
    );

    // TODO: Ask someone if my regex is correct
    var result = data.replace(
      /<div id="pkt-icons-sprite"(.|\n)*?<\/div>/g,
      '<div id="pkt-icons-sprite" style="display: none">' + svgSprite + "</div>"
    );

    fs.writeFileSync(
      config.configJson.svgsprite.output.filePath,
      result,
      "utf8"
    );

    console.log(chalk.green("Sprite lagt til i html'en."));
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    status = false;
  }
};

// write sprite to its own file
const insertSpriteIntoSvg = async () => {
  try {
    fs.writeFileSync(
      config.configJson.svgsprite.output.filePath,
      svgSprite,
      "utf8"
    );

    console.log(chalk.green("Sprite skrevet til SVG-filen"));
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    status = false;
  }
};

export default function svgsprite() {
  (async () => {
    await fetchFileNames();
    if (status) await fetchSvgContents();
    if (status) await createSprite();
    if (status) {
      if (config.configJson.svgsprite.output.fileType === "html") {
        await insertSpriteIntoHtml();
      } else if (config.configJson.svgsprite.output.fileType === "svg") {
        await insertSpriteIntoSvg();
      }
    }

    console.log(status ? message.pos : message.neg);
  })();
}
