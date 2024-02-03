/*
 * Postbuild activities for CloudFront function
 *
 * Takes one argument: 'basefolder' without start and end slashes
 *
 * Examples:
 * npx lerna run postbuild-update-cf-function --scope=@oslokommune/punkt-docs -- base='2.0'
 * node postbuild-update-cf-function.js '0.21'
 *
 * Used in github workflows:
 * - on-push-main.yaml
 *
 * Description:
 * This script needs to run when a version bump is done for the packages and
 * consequently the docs. It updates the version number in the CloudFront
 * function.
 *
 */

import fs from "fs-extra";

const cfFunctionTemplateFile = "./scripts/cf-functions-punkt-docs-redirects.js";
const cfFunctionOutputFile = "./temp/cf-functions-punkt-docs-redirects.js";
const outputFolder = "./temp";

// check if directory exists
if (!fs.existsSync(outputFolder)) {
  // if not, create the directory
  fs.mkdirSync(outputFolder);
}

const args = process.argv.slice(2);
let baseFolder = "";

if (args[0]) {
  let tempArgs = args[0].split("=");
  baseFolder = tempArgs[0] === "base" ? tempArgs[1] : "";
}

// Check if the argument was passed
if (!baseFolder) {
  console.error("No URL argument provided");
  process.exit(1);
}

// Need to update the version from package.json on build
const updateVersion = async () => {
  try {
    const data = fs.readFileSync(cfFunctionTemplateFile, "utf8");
    const result = data.replace(
      /\/\/ START VERSION(.|\n)*?\/\/ END VERSION/g,
      "// START VERSION\n" +
        '  var nextMajorMinor = "/' +
        baseFolder +
        '/";' +
        "\n  // END VERSION"
    );

    fs.writeFileSync(cfFunctionOutputFile, result, "utf8");

    console.log("Version number updated CloudFront function");
  } catch (err) {
    console.error("Uh-oh! " + err);
  }
};

(async () => {
  await updateVersion();

  console.log("\nBuild finished!");
})();
