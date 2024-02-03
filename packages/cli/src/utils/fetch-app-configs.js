/*
 * Fetch app configs from package.json and possibly punkt.config.json
 *
 * @return object with
 * - config: Object with all configs
 * - status: Boolean, true if everything is ok
 */

import fs from "fs-extra";
import chalk from "chalk";
import { readPackageUp } from "read-pkg-up";

const result = {
  config: {
    packageJson: null,
    configJson: null,
    configJsonPath: "./punkt.config.json",
    tags: [],
  },
  status: true,
};

const analyseProject = async () => {
  let tags = [];
  const deps = result.config.packageJson.packageJson.dependencies || {};
  const ddeps = result.config.packageJson.packageJson.devDependencies || {};

  if (deps.vue) tags.push("vue");
  if (deps.react) tags.push("react");
  if (deps["@oslokommune/punkt-assets"]) tags.push("assets");
  if (deps["@oslokommune/punkt-css"]) tags.push("css");
  if (deps["@oslokommune/punkt-vue"]) tags.push("vue");
  if (deps["@oslokommune/punkt-vue2"]) tags.push("vue2");
  if (deps["@oslokommune/punkt-react"]) tags.push("react");
  if (ddeps.webpack || ddeps["@vue/cli-service"]) tags.push("webpack");
  if (ddeps.vite) tags.push("vite");
  if (ddeps.rollup) tags.push("rollup");
  if (ddeps.sass) tags.push("sass");

  return tags;
};

export default async () => {
  try {
    console.log(
      chalk.blueBright("\n🔍 Ser etter eksisterende config-filer...")
    );

    result.config.packageJson = (await readPackageUp()) || null;
    result.config.configJsonPath = result.config.packageJson.path.replace(
      "package.json",
      "punkt.config.json"
    );

    if (fs.existsSync(result.config.configJsonPath)) {
      result.config.configJson = JSON.parse(
        fs.readFileSync(result.config.configJsonPath, "utf8")
      );
      console.log("Fant en eksisterende punkt.config.json.");
    } else {
      console.log(
        "Filen punkt.config.json eksisterer " + chalk.yellow("ikke") + " enda."
      );
    }
    console.log("\n");

    result.config.tags = await analyseProject();
  } catch (err) {
    console.error(chalk.red("Uh-oh! " + err));
    result.status = false;
  }

  return result;
};
