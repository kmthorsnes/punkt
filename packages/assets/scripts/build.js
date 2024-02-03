/**
 * Build package
 *
 * This script collects all needed files
 * and transforms it to a compontent library ready package to be published
 *
 */

import fs from "fs-extra";
import editJsonFile from "edit-json-file";
import cheerio from "cheerio";

const buildDir = `./dist`;
const srcDir = `./src`;
const scriptDir = `./scripts`;

// Delete dist folder contents. If the directory does not exist, it is created.
const cleanBuildDir = async () => {
  try {
    await fs.emptyDir(buildDir);
    console.log("Build directory cleaned and ready");
  } catch (err) {
    console.error(err);
  }
};

// copy all files to build folder
const copyFiles = async () => {
  try {
    await fs.copy(`${srcDir}`, `${buildDir}`);
    console.log("Package contents copied");
  } catch (err) {
    console.error(err);
  }
};

// create icons.json from icons-folder
const createSassMixins = async () => {
  const iconFilesArray = fs.readdirSync(`${buildDir}/icons`);

  const mixinFileTemplate = fs.readFileSync(
    `${scriptDir}/scss-mixin-template.scss`,
    "utf-8"
  );
  const mixinTemplate =
    `@mixin icon-[ID] ($fg-color: [FG-FALLBACK], $bg-color: [BG-FALLBACK]) {\n` +
    `  $svg: url('data:image/svg+xml,[SVGCONTENT]');\n` +
    `  background-image: pkt-esc-svg($svg);\n` +
    `  background-repeat: no-repeat;\n` +
    `}\n`;
  let newMixinFileContent = mixinFileTemplate;

  const placeholderFileTemplate = fs.readFileSync(
    `${scriptDir}/scss-placeholder-template.scss`,
    "utf-8"
  );
  const placeholderTemplate = `%icon-[ID] { @include icon-[ID]; }\n`;
  let newPlaceholderFileContent = placeholderFileTemplate;

  for (const file of iconFilesArray) {
    const svgFile = fs.readFileSync(`${buildDir}/icons/${file}`, "utf-8");
    const cleanedSvg = minifySvg(svgFile);

    // Extract the fallback value for "--fg-color" and "--bg-color" variables from the SVG string
    const fgColorMatch = cleanedSvg.match(/--fg-color,\s*([^)]+)\)/);
    const fgColorFallback = fgColorMatch ? fgColorMatch[1] : null;
    const bgColorMatch = cleanedSvg.match(/--bg-color,\s*([^)]+)\)/);
    const bgColorFallback = bgColorMatch ? bgColorMatch[1] : null;

    // Replace any "fill" attributes with "var(--fg-color, ...)" or "var(--bg-color, ...)" values with placeholders
    const tunedSvg = cleanedSvg.replace(
      /fill="var\((--fg-color|--bg-color),\s*([^)]+)\)"/g,
      (match, variable, fallback) => {
        const placeholder = variable.includes("--fg-color")
          ? `#{$fg-color}`
          : `#{$bg-color}`;
        return `fill="${placeholder}"`;
      }
    );

    const mixin = mixinTemplate
      .replace("[ID]", findIdFromSvg(tunedSvg))
      .replace("[FG-FALLBACK]", fgColorFallback)
      .replace("[BG-FALLBACK]", bgColorFallback)
      .replace("[SVGCONTENT]", tunedSvg);

    newMixinFileContent += mixin + "\n";

    const placeholder = placeholderTemplate.replaceAll(
      "[ID]",
      findIdFromSvg(tunedSvg)
    );
    newPlaceholderFileContent += placeholder;
  }

  fs.mkdirSync(`${buildDir}/svg-in-scss`);
  fs.writeFileSync(
    `${buildDir}/svg-in-scss/_mixins.scss`,
    newMixinFileContent,
    "utf8"
  );
  fs.writeFileSync(
    `${buildDir}/svg-in-scss/_placeholders.scss`,
    newPlaceholderFileContent,
    "utf8"
  );
  console.log("Icon scss-file created");
};

const minifySvg = function (svg) {
  // Remove unnecessary spaces between properties
  const cleanedSvg = svg.replace(
    /\s*([a-zA-Z-]+)\s*=\s*"([^"]+)"\s*/g,
    ' $1="$2"'
  );

  // Replace whitespace and line breaks between tags with an empty string
  return cleanedSvg.replace(/>\s+</g, "><").replace(/\r?\n|\r/g, "");
};

const findIdFromSvg = function (svg) {
  // Load the SVG string into Cheerio for parsing
  const $ = cheerio.load(svg, { xmlMode: true });

  // Return the value of the "id" attribute from the root <svg> element
  return $("svg").attr("id") || "ERROR";
};

// clean up package.json
let editPackageJson = async () => {
  try {
    let file = editJsonFile(`${buildDir}/package.json`);
    file.unset("dependencies");
    file.unset("devDependencies");
    file.save();
    console.log("package.json rewritten!");
  } catch (err) {
    console.error(err);
  }
};

// clean up build-package folder
(async () => {
  await cleanBuildDir();
  await copyFiles();
  await createSassMixins();
  // await editPackageJson();

  console.log("Build finished!");
})();
