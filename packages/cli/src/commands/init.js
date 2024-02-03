/**
 * Initialises Punkt Design System
 *
 * This script creates a punkt.config.js file in the root directory of an app,
 * which sets a few things needed to run other scripts.
 *
 */

import chalk from "chalk";
import createAppConfig from "../utils/create-app-config.js";
import fetchAppConfigs from "../utils/fetch-app-configs.js";
import installPackages from "../utils/install-packages.js";
import proTips from "../utils/pro-tips.js";

// feedback to user
const message = {
  pos: chalk.green.bold("Punkt ") + chalk.green("er nå satt opp!"),
  neg:
    chalk.red("Punkt kunne ") +
    chalk.red.bold("ikke ") +
    chalk.red("bli satt opp!"),
};
let config = {};
let status = true;

export default function init() {
  console.log(chalk.blueBright.bold("Initialiserer Punkt..."));

  (async () => {
    const fetchAppConfigsRes = await fetchAppConfigs();
    status = fetchAppConfigsRes.status;
    config = fetchAppConfigsRes.config;

    if (status) {
      const createAppConfigRes = await createAppConfig(config);
      status = createAppConfigRes.status;
    }
    if (status) {
      const installPackagesRes = await installPackages(config);
      status = installPackagesRes.status;
    }
    if (status) {
      const proTipsRes = await proTips(config);
      status = proTipsRes.status;
    }

    console.log("\n");
    console.log(status ? message.pos : message.neg);
  })();
}
