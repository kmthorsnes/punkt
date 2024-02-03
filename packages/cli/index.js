#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import svgsprite from "./src/commands/svg-sprite.js";
import init from "./src/commands/init.js";
import fs from "fs";

const loadJSON = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const packageJson = loadJSON("./package.json");

const program = new Command();

program.configureHelp({
  helpWidth: 70,
  subcommandTerm: (cmd) => cmd.name(), // Just show the name, instead of short usage.
});

program
  .name("punkt")
  .usage("<kommando> <underkommando> [options]")
  .helpOption(false)
  .description(
    "💝 Velkommen til Punkt designsystem 💝\n \n" +
      "Kjør " +
      chalk.green("punkt init") +
      " for å bli guided gjennom oppsettet av en \n" +
      chalk.cyanBright("punkt.config.js") +
      " fil in the rot-mappen. Kjapt og enkelt!\n \n" +
      "Du kan endre denne config-filen manuelt etterpå. " +
      "Kjør kommandoen \n" +
      chalk.green("punkt") +
      " eller " +
      chalk.green("punkt <kommando>") +
      " for å få oversikt over alle \n" +
      "tilgjengelige kommandoer og underkommandoer.\n "
  )
  .version(packageJson.version);

program.command("init").description("Sett opp Punkt").action(init);

const svg = program
  .command("svg")
  .usage("<kommando> [options]")
  .description("Ta kontroll på SVG'ene dine.");

svg.command("sprite").description("generér SVG sprite ⭐").action(svgsprite);

/*
TODO: add command for svg cleanup
svg
  .command("cleanup")
  .description("clean up your SVG according to punkt standards");
*/
/*
TODO: add command for documentation
const docs = program
  .command("docs")
  .usage("<command> [options]")
  .description("see documentation");

docs.command("list").description("list documentation files");
docs.command("alert").description("alert component");
*/
program.parse();
