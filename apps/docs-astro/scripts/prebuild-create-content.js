/**
 * Prebuild script to create content for the website
 *
 * Takes no arguments
 *
 * Examples:
 * npx lerna run prebuild-create-content --scope=@oslokommune/punkt-docs
 * node prebuild-create-content.js
 *
 * Used in build script:
 * - "prebuild-create-content": "node ./scripts/prebuild-create-content.js",
 * - "build": "npm run prebuild-create-content && astro build",
 *
 * Description:
 * This script creates content needed for website from other places
 * in the monorepo.
 *
 */

import fs from "fs-extra";
import { parseSync } from "svgson";

const assetsDir = "../../node_modules/@oslokommune/punkt-assets/dist";
const jsonContentDir = `./src/pages/json`;

// create icons.json from icons-folder
const createIconsJson = async () => {
  const iconFilesArray = fs.readdirSync(`${assetsDir}/icons`);
  const newFileContent = [];
  const options = {
    spaces: 2,
    EOL: "\n",
  };

  for (const file of iconFilesArray) {
    const svgFile = fs.readFileSync(`${assetsDir}/icons/${file}`, "utf-8");
    const svgFileObj = parseSync(svgFile);
    const iconId = svgFileObj.attributes.id || "";
    const iconCategory = svgFileObj.attributes["data-category"] || "none";

    newFileContent[newFileContent.length] = {
      id: iconId,
      fn: file,
      cat: iconCategory,
    };
  }

  fs.writeJsonSync(`${jsonContentDir}/icons.json`, newFileContent, options);
  console.log("Icon json-file created");
};

// create icons.json from icons-folder
const getAllIcons = async () => {
  const spriteTemplate = {
    start: '<svg xmlns="http://www.w3.org/2000/svg">',
    end: "</svg>",
  };

  const iconFilesArray = fs.readdirSync(`${assetsDir}/icons`);
  let newFileContent = "";

  newFileContent += spriteTemplate.start;

  for (const file of iconFilesArray) {
    const svgFile = fs.readFileSync(`${assetsDir}/icons/${file}`, "utf-8");
    newFileContent += transformSvgToSymbol(svgFile);
  }
  newFileContent += spriteTemplate.end;

  fs.writeFileSync(`${jsonContentDir}/allIcons.svg`, newFileContent, "utf8");
  console.log("All icon svg-file created");
};

const transformSvgToSymbol = function (svg) {
  let str = svg;
  str = str
    .replace("<svg", "<symbol")
    .replace("</svg>", "</symbol>")
    .replace(/ xmlns="(.|\n)*?"/g, "")
    .replace(/ data-category="(.|\n)*?"/g, "");
  return str;
};

// Copy content from READMEs and CONTRIBUTINGs
const copyDevContent = async () => {
  const contentFilesArray = fs.readJsonSync(
    `${jsonContentDir}/content-to-copy.json`,
    "utf-8"
  );

  for (const content of contentFilesArray) {
    try {
      const contentToCopy = fs.readFileSync(content.from, "utf8");
      const targetFile = fs.readFileSync(content.to, "utf8");

      var result = targetFile.replace(
        /<!-- START CONTENT -->(.|\n)*?<!-- END CONTENT-->/g,
        "<!-- START CONTENT -->\n" + contentToCopy + "<!-- END CONTENT-->"
      );

      fs.writeFileSync(content.to, result, "utf8");

      console.log("Content copied to " + content.to);
    } catch (err) {
      console.error("Uh-oh! " + err);
    }
  }
};

// create logos.json from logos-folder
const createLogosJson = async () => {
  const logoFilesArray = fs.readdirSync(`${assetsDir}/logos`);
  const newFileContent = [];
  const options = {
    spaces: 2,
    EOL: "\n",
  };

  for (const file of logoFilesArray) {
    newFileContent[newFileContent.length] = {
      id: file.split(".")[0],
      fn: file,
      ext: file.slice(((file.lastIndexOf(".") - 1) >>> 0) + 2),
    };
  }

  fs.writeJsonSync(`${jsonContentDir}/logos.json`, newFileContent, options);
  console.log("Logo json-file created");
};

(async () => {
  await createIconsJson();
  await createLogosJson();
  await copyDevContent();
  await getAllIcons();
  console.log("Content creation finished!");
})();
