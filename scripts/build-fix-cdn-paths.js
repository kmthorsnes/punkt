/**
 * Build script for svg and font references in files
 *
 * Takes two arguments: base='baseFolder' and mode='operationMode'
 * without start and end slashes
 *
 * Examples:
 * node ./scripts/build-fix-cdn-paths.js base='4.0' mode='packages'
 * node ./scripts/build-fix-cdn-paths.js base='4.0' mode='cdn-latest'
 * node ./scripts/build-fix-cdn-paths.js base='4.0' mode='cdn-versioned'
 *
 * Used in github workflows:
 * - on-push-main.yaml
 *
 * Description:
 * The script replaces all punkt-cdn references that include 'latest'
 * with the current major.minor version number. The reason for this is
 * that we want to tie the packages to a specific version of
 * punkt-cdn to avoid surprises for our users.
 *
 * The 'mode' argument controls which types of URLs the script replaces:
 * - If 'mode' is set to 'packages', the script only replaces icon URLs.
 * - If 'mode' is set to 'cdn-latest', the script replaces relative
 *   font paths with absolute URLs pointing to the latest version, and
 *   it also replaces SASS variable $font-path default value with the
 *   latest version URL.
 * - If 'mode' is set to 'cdn-versioned', the script replaces 'latest'
 *   in both icon and font URLs with the baseFolder, effectively
 *   versioning the CDN paths. It also replaces SASS variable
 *   $font-path 'latest' URL with the versioned URL.
 */

import fs from "fs-extra";
import glob from "fast-glob";

const args = process.argv.slice(2);
let baseFolder = "";
let mode = "";

if (args[0]) {
  let tempArgs = args[0].split("=");
  baseFolder = tempArgs[0] === "base" ? tempArgs[1] : "";
}

if (args[1]) {
  let tempArgs = args[1].split("=");
  mode = tempArgs[0] === "mode" ? tempArgs[1] : "";
}

if (!baseFolder || !mode) {
  console.error("Invalid or missing arguments.");
  process.exit(1);
}

const replaceUrls = (pathsToSearchFor, pathsToReplaceWith, globPaths) => {
  const allFiles = glob.sync(globPaths) || [];

  allFiles.forEach((file) => {
    try {
      const fileContent = fs.readFileSync(file, "utf8");
      let result = fileContent.replace(pathsToSearchFor, pathsToReplaceWith);

      fs.writeFileSync(file, result, "utf8");
      console.log(`File ${file} updated.`);
    } catch (error) {
      console.error(`Error updating file ${file}: ${error}`);
    }
  });

  console.log("CDN references are replaced!");
};

/* *******************************************************************
 * Replace URLs in files for the different modes
 * *******************************************************************
 * */

if (mode === "packages") {
  const iconPathsToSearchFor = new RegExp(
    "https:\\/\\/punkt-cdn\\.oslo\\.kommune\\.no\\/latest\\/",
    "g"
  );
  const iconPathsToReplaceWith = `https://punkt-cdn.oslo.kommune.no/${baseFolder}/`;

  replaceUrls(iconPathsToSearchFor, iconPathsToReplaceWith, [
    "./packages/css/dist/**/*",
    "./packages/react/dist/**/*",
    "./packages/vue2/dist/**/*",
  ]);
} else if (mode === "cdn-latest") {
  const fontPathsToSearchFor = new RegExp('url\\("\\.\\.\\/fonts\\/Oslo', "g");
  const fontPathsToReplaceWith = `url("https://punkt-cdn.oslo.kommune.no/latest/fonts/Oslo`;
  // Set $font-path to a URL ending with 'latest'
  const sassVarToSearchForLatest = new RegExp(
    "\\$font-path: '\\.\\.' !default;",
    "g"
  );
  const sassVarToReplaceWithLatest = `$font-path: "https://punkt-cdn.oslo.kommune.no/latest" !default;`;

  replaceUrls(fontPathsToSearchFor, fontPathsToReplaceWith, [
    "./packages/css/dist/**/*",
  ]);
  replaceUrls(sassVarToSearchForLatest, sassVarToReplaceWithLatest, [
    "./packages/css/dist/scss/**/*",
  ]);
} else if (mode === "cdn-versioned") {
  const iconPathsToSearchFor = new RegExp(
    "https:\\/\\/punkt-cdn\\.oslo\\.kommune\\.no\\/latest\\/",
    "g"
  );
  const iconPathsToReplaceWith = `https://punkt-cdn.oslo.kommune.no/${baseFolder}/`;
  const fontPathsToSearchFor = new RegExp(
    `url\\("https:\\/\\/punkt-cdn\\.oslo\\.kommune\\.no\\/latest\\/fonts\\/Oslo`,
    "g"
  );
  const fontPathsToReplaceWith = `url("https://punkt-cdn.oslo.kommune.no/${baseFolder}/fonts/Oslo`;
  // Replace 'latest' with the baseFolder, assuming this will happen
  // after the 'latest' replacement above
  const sassVarToSearchForBaseFolder = new RegExp(
    '\\$font-path: "https:\\/\\/punkt-cdn\\.oslo\\.kommune\\.no\\/latest" !default;',
    "g"
  );
  const sassVarToReplaceWithBaseFolder = `$font-path: "https://punkt-cdn.oslo.kommune.no/${baseFolder}" !default;`;

  replaceUrls(iconPathsToSearchFor, iconPathsToReplaceWith, [
    "./packages/css/dist/**/*",
  ]);
  replaceUrls(fontPathsToSearchFor, fontPathsToReplaceWith, [
    "./packages/css/dist/**/*",
  ]);
  replaceUrls(sassVarToSearchForBaseFolder, sassVarToReplaceWithBaseFolder, [
    "./packages/css/dist/**/*",
  ]);
} else {
  console.error("Invalid mode argument.");
  process.exit(1);
}
