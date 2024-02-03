/*
 * Fetch app configs from package.json and possibly punkt.config.json
 *
 * @return object with
 * - status: Boolean, true if everything is ok
 */

import chalk from "chalk";
import { execa } from "execa";
import inquirer from "inquirer";
import ora from "ora";

const result = {
  status: true,
};
const questionPool = [
  {
    type: "confirm",
    name: "addAssets",
    message: "Assets (fonter, logoer, ikoner)",
    default() {
      return true;
    },
  },
  {
    type: "confirm",
    name: "addCss",
    message: "Css-rammeverk",
    default() {
      return true;
    },
  },
  {
    type: "confirm",
    name: "addVue",
    message: "Vue komponenter",
    default() {
      return false;
    },
  },
  {
    type: "confirm",
    name: "addVue2",
    message: "Vue 2 komponenter",
    default() {
      return false;
    },
  },
  {
    type: "confirm",
    name: "addReact",
    message: "React komponenter",
    default() {
      return false;
    },
  },
];

export default async () => {
  // TODO: if user has some packages already installed, ask if user wants to reinstall them
  // TODO: if user hasn't installed Sass, ask if user wants to install it (and sass-loader on webpack)
  // TODO: add better error handling

  try {
    console.log(chalk.blueBright("📦 Velg hvilke deler du vil installere:"));
    const answers = await inquirer.prompt(questionPool);

    if (
      answers &&
      (answers.addAssets ||
        answers.addCss ||
        answers.addVue ||
        answers.addVue2 ||
        answers.addReact)
    ) {
      console.log("\nInstallerer Punkt-pakker...");
    }

    if (answers && answers.addAssets) {
      const spinner0 = ora("Installerer punkt-assets").start();
      const { stdout, stderr } = await execa("npm", [
        "install",
        "@oslokommune/punkt-assets",
      ]);
      spinner0.succeed();
    }
    if (answers && answers.addCss) {
      const spinner1 = ora("Installerer punkt-css").start();
      const { stdout, stderr } = await execa("npm", [
        "install",
        "@oslokommune/punkt-css",
      ]);
      spinner1.succeed();
    }
    if (answers && answers.addVue2) {
      const spinner2 = ora("Installerer punkt-vue2").start();
      const { stdout, stderr } = await execa("npm", [
        "install",
        "@oslokommune/punkt-vue2",
      ]);
      spinner2.succeed();
    }
    if (answers && answers.addVue) {
      const spinner2 = ora("Installerer punkt-vue").start();
      const { stdout, stderr } = await execa("npm", [
        "install",
        "@oslokommune/punkt-vue",
      ]);
      spinner2.succeed();
    }
    if (answers && answers.addReact) {
      const spinner3 = ora("Installerer punkt-react").start();
      const { stdout, stderr } = await execa("npm", [
        "install",
        "@oslokommune/punkt-react",
      ]);
      spinner3.succeed();
    }

    if (
      answers &&
      (answers.addAssets ||
        answers.addCss ||
        answers.addVue ||
        answers.addVue2 ||
        answers.addReact)
    ) {
      console.log(chalk.green("\n✅ Punkt-pakker er installert!"));
    } else {
      console.log(chalk.yellow("\n❎ Ingen Punkt-pakker ble installert."));
    }
  } catch (err) {
    console.error(chalk.red("\nUh-oh! " + err));
    result.status = false;
  }

  return result;
};
