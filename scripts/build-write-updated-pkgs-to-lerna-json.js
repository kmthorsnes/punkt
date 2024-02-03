/**
 * This script will write updated packages to lerna.json
 *
 * Example:
 * node ./scripts/build-write-updated-pkgs-to-lerna-json.js [--debug]
 *
 * Options:
 *   --debug    Use mock data instead of actual data for testing purposes
 *
 */

import jsonFile from "edit-json-file";
import minimatch from "minimatch";
import { simpleGit } from "simple-git";
const git = simpleGit();
const ignoreChanges = jsonFile("lerna.json").get("ignoreChanges") || [];

const debugMode = process.argv.includes("--debug");

const updateChangedModulesSinceLastTag = async (packages) => {
  let diffSummary;
  let updatedPkgs = packages;

  if (debugMode) {
    console.log("DEBUG MODE: Henter mock filendringer");
    try {
      const module = await import("./changelog-mock-diffsummary.js");
      diffSummary = module.mockDiffsummaryResponse;
    } catch (error) {
      console.log("Error importing mock diffsummary response", error);
    }
  } else {
    const lastTag = await git.tags(["--sort=-taggerdate", "--merged"]);
    diffSummary = await git.diffSummary([
      `HEAD..${lastTag.latest}`,
      "--name-only",
    ]);
  }

  // Fjern alle filer som matcher glob mønstrene i lerna.json ignoreChanges
  const filteredFiles = diffSummary.files.filter((fileObj) => {
    return !ignoreChanges.some((pattern) => minimatch(fileObj.file, pattern));
  });

  updatedPkgs = updatedPkgs.map((module) => {
    const hasChanges = filteredFiles.some((fileObj) =>
      fileObj.file.includes(module.moduleFolderPath)
    );
    return { ...module, hasChanges };
  });

  return updatedPkgs;
};

const writeChangedPkgsToLernaJson = async (packages) => {
  const lernaJson = jsonFile("lerna.json");
  const changedPackages = packages.filter((pkg) => pkg.hasChanges);
  lernaJson.set(
    "changedPackages",
    changedPackages.map((pkg) => pkg.moduleFolderPath)
  );
  lernaJson.save();

  return changedPackages;
};

(async () => {
  const packages = await updateChangedModulesSinceLastTag([
    {
      hasChanges: false,
      moduleFolderPath: "packages/assets/",
    },
    {
      hasChanges: false,
      moduleFolderPath: "packages/cli/",
    },
    {
      hasChanges: false,
      moduleFolderPath: "packages/css/",
    },
    {
      hasChanges: false,
      moduleFolderPath: "packages/react/",
    },
    {
      hasChanges: false,
      moduleFolderPath: "packages/vue/",
    },
    {
      hasChanges: false,
      moduleFolderPath: "packages/vue2/",
    },
  ]);

  const changedPackages = await writeChangedPkgsToLernaJson(packages);

  if (changedPackages.length > 0) {
    console.log("changedPackages", changedPackages);
    console.log("Saved to lerna.json!");
  } else {
    console.log("No changes since last tag!");
  }
})();
