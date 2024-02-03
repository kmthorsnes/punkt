/*
 * Build activities for the CLI
 *
 * Not in use at the moment, but could be
 * used to update the version number in the index.js file.
 *
 */

import fs from "fs-extra";
import chalk from "chalk";
import { readPackageUp } from "read-pkg-up";

// Need to update the version from package.json on build
const updateVersion = async () => {
  const indexFile = "./index.js";
  try {
    const { packageJson } = (await readPackageUp()) || null;
    const data = fs.readFileSync(indexFile, "utf8");

    // TODO: Ask someone if my regex is correct
    var result = data.replace(
      /\/\/ START VERSION(.|\n)*?\/\/ END VERSION/g,
      "// START VERSION\n" +
        'const cliVersion = "' +
        packageJson.version +
        '";' +
        "\n// END VERSION"
    );

    fs.writeFileSync(indexFile, result, "utf8");

    console.log(chalk.green("Version number updated in index.js"));
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
  }
};

(async () => {
  console.log(chalk.blueBright("\n🔧 Building project"));

  await updateVersion();

  console.log("\nBuild finished!");
})();
