/**
 * Prebuild script to find docs version
 *
 * Takes no arguments
 *
 * Examples:
 * node ./scripts/build-set-majorminor-version.js
 *
 * Used in github workflows:
 * - cdn-deploy-manual.yaml
 * - docs-deploy-manual.yaml
 * - on-push-main.yaml
 *
 * Description:
 * Since we don't use a full semver version for docs we need to
 * find the major.minor version from lerna.json and
 * set it as a temporary property in a json file we create and put
 * in ./dist temporary during build process. The reason for putting
 * it in that folder is to not have uncommitted files in the repo
 * after build.
 *
 * This is used for AWS S3 bucket naming and CloudFront function.
 *
 */

import fs from "fs";
import jsonFile from "edit-json-file";

let setNextMajorMinor = async () => {
  try {
    let lernaJson = jsonFile(`./lerna.json`);
    const version = lernaJson.get("version").split(".");
    const majorMinor = version.slice(0, 2).join(".");

    const directory = "./temp";
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }

    let newFile = jsonFile(`${directory}/version.json`);
    newFile.set("majorMinor", majorMinor);
    newFile.save();
    console.log("minorMajor version is set in version.json.");
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  await setNextMajorMinor();

  console.log("Next majorMinor version is updated.");
})();
