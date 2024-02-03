/**
 * This script updates the changelog with the latest changes,
 * on pullrequest open or update.
 *
 * It does so by interacting with git to get the list of changed files to figure
 * out which packages have changed. It then uses the commit messages to figure
 * out what the changes are.
 *
 * It will then update the changelog for each package that has changed.
 *
 * Usage: npm run build-update-changelog [--debug]
 *
 * Options:
 *   --debug    Use mock data instead of actual data for testing purposes
 *
 * If the optional --debug flag is provided, the script will use mock data instead of actual data.
 * This is useful for testing the script without modifying the actual changelog file.
 *
 * Example:
 * npm run update-changelog -- --debug
 *
 * ---
 *
 * Changelog format (from https://www.conventionalcommits.org):
 * <type>(<scope>): #<issue-number> <description>
 *
 * [optional body]
 *
 * [optional footer(s)]
 *
 * Types:
 * - feat: A new feature
 * - fix: A bug fix
 * - docs: Documentation only changes - our website
 * - chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
 * - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 *
 * Scope:
 * - assets (@oslokommune/punkt-assets package)
 * - cdn  (website)
 * - cli  (@oslokommune/punkt-cli package)
 * - css (@oslokommune/punkt-css package)
 * - docs (website)
 * - react (@oslokommune/punkt-react package)
 * - vue (@oslokommune/punkt-vue package)
 * - vue2 (@oslokommune/punkt-vue2 package)
 * - all (all of the above)
 *
 * Issue number:
 * - The GitHub issue number that this commit is related to.
 *
 * Description:
 * - A short description of the change.
 *
 * Optional body:
 * - A longer description of the change, can be multiple paragraphs.
 *
 * Optional footer:
 * - A list of breaking changes, if any. Follows the same format as the title.
 * ---
 *
 * Examples:
 *
 * feat(assets): #123 Add new icon
 *
 * fix(assets, css): #456 Fix broken icon
 *
 * docs: #789 Update Alert component docs <-- not scoped to a package
 *
 * feat(react): #123 Add new prop to Button component
 *
 * Big update to the Button component, with new props and a new look.
 *
 * BREAKING CHANGE: The `onClick` prop is now required.
 *
 * fix(react): #124 Fix broken Button component on long text
 *
 */

import { simpleGit } from "simple-git";
import fs from "fs-extra";
import jsonFile from "edit-json-file";
import minimatch from "minimatch";
import mustache from "mustache";
import {
  getCommitsSinceLastTag,
  parseCommitsSinceLastTag,
  findCurrentVersion,
  findNextVersion,
} from "./utils.js";

const debugMode = process.argv.includes("--debug");
const git = simpleGit();

let basicModuleInfo = [
  {
    changelogFilePath: "CHANGELOG.md",
    hasChanges: false,
    name: "root",
    root: true,
  },
  {
    changelogFilePath: "apps/cdn/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "apps/cdn/",
    name: "cdn",
  },
  {
    changelogFilePath: "apps/docs-astro/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "apps/docs-astro/",
    name: "docs",
  },
  {
    changelogFilePath: "packages/assets/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "packages/assets/",
    name: "assets",
  },
  {
    changelogFilePath: "packages/cli/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "packages/cli/",
    name: "cli",
  },
  {
    changelogFilePath: "packages/css/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "packages/css/",
    name: "css",
  },
  {
    changelogFilePath: "packages/react/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "packages/react/",
    name: "react",
  },
  {
    changelogFilePath: "packages/vue/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "packages/vue/",
    name: "vue",
  },
  {
    changelogFilePath: "packages/vue2/CHANGELOG.md",
    hasChanges: false,
    moduleFolderPath: "packages/vue2/",
    name: "vue2",
  },
];

const updateChangedModulesSinceLastTag = async (modules, ignoreChanges) => {
  let diffSummary;
  let updatedModules = modules;

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

  updatedModules.forEach((module) => {
    const hasChanges = filteredFiles.some((fileObj) =>
      fileObj.file.includes(module.moduleFolderPath)
    );
    module.hasChanges = hasChanges;
  });

  return updatedModules;
};

const updateChangelogWithNewEntry = (filePath, newContent) => {
  const changelogFile = fs.readFileSync(filePath, "utf8");

  // Find the position of the first delimiter
  const delimiter = "---\n";
  const delimiterPos = changelogFile.indexOf(delimiter);

  // Insert the content after the heading
  const updatedContent =
    changelogFile.slice(0, delimiterPos + delimiter.length) +
    newContent +
    changelogFile.slice(delimiterPos + delimiter.length);

  fs.writeFileSync(filePath, updatedContent);
};

const updateRootChangelog = async ({
  modules,
  currentVersion,
  nextVersion,
  tasks,
}) => {
  let template = fs.readFileSync(
    "./scripts/changelog-template-root.md",
    "utf8"
  );

  modules.forEach((module) => {
    if (!module.root) return false;

    const templateData = {
      version: nextVersion,
      compareUrl: `https://github.com/oslokommune/punkt/compare/${currentVersion}...${nextVersion}`,
      issueUrl: "https://github.com/oslokommune/punkt/issues",
      date: new Date().toISOString().split("T")[0],
      breakingChanges: tasks.filter((task) => task.bump === "major"),
      features: tasks.filter((task) => task.bump === "minor"),
      bugFixes: tasks.filter(
        (task) =>
          task.bump === "patch" && task.type !== "chore" && task.type !== "docs"
      ),
      chores: tasks.filter(
        (task) => task.type === "chore" || task.type === "docs"
      ),
    };

    const renderedPackageChangelog = mustache.render(template, templateData);

    updateChangelogWithNewEntry(
      module.changelogFilePath,
      renderedPackageChangelog
    );
  });
};

const updateModuleChangelogs = async ({
  modules,
  currentVersion,
  nextVersion,
  tasks,
}) => {
  let template = fs.readFileSync(
    "./scripts/changelog-template-module.md",
    "utf8"
  );

  modules.forEach((module) => {
    if (module.root || module.hasChanges === false) return false;

    const templateData = {
      version: nextVersion,
      compareUrl: `https://github.com/oslokommune/punkt/compare/${currentVersion}...${nextVersion}`,
      issueUrl: "https://github.com/oslokommune/punkt/issues",
      date: new Date().toISOString().split("T")[0],
      breakingChanges: tasks.filter(
        (task) =>
          (task.scope.includes(module.name) || task.scope.includes("all")) &&
          task.bump === "major"
      ),
      features: tasks.filter(
        (task) =>
          (task.scope.includes(module.name) || task.scope.includes("all")) &&
          task.bump === "minor"
      ),
      bugFixes: tasks.filter(
        (task) =>
          (task.scope.includes(module.name) || task.scope.includes("all")) &&
          task.bump === "patch" &&
          task.type !== "chore" &&
          task.type !== "docs"
      ),
      chores: tasks.filter(
        (task) =>
          (task.scope.includes(module.name) || task.scope.includes("all")) &&
          (task.type === "chore" || task.type === "docs")
      ),
    };
    const renderedPackageChangelog = mustache.render(template, templateData);

    updateChangelogWithNewEntry(
      module.changelogFilePath,
      renderedPackageChangelog
    );
  });
};

const hasChangesInPackages = (modules) => {
  return modules.some((module) => {
    const isRoot = module.root === true;
    const hasChanges = module.hasChanges === true;
    const isPackage = isRoot
      ? false
      : module.moduleFolderPath.startsWith("packages");
    return hasChanges && isPackage;
  });
};

const main = async () => {
  const commits = await getCommitsSinceLastTag(debugMode);
  const tasks = await parseCommitsSinceLastTag(commits);
  const currentVersion = await findCurrentVersion("./lerna.json");
  const nextVersion = await findNextVersion(tasks, currentVersion);
  const ignoreChanges = jsonFile("lerna.json").get("ignoreChanges") || [];
  const modules = await updateChangedModulesSinceLastTag(
    basicModuleInfo,
    ignoreChanges
  );

  if (hasChangesInPackages(modules)) {
    const obj = {
      currentVersion,
      nextVersion,
      tasks,
      modules,
    };
    await updateRootChangelog(obj);
    await updateModuleChangelogs(obj);
    console.log("Changelog updated.");
  } else {
    console.log("No changes in packages. Skipping changelog update.");
  }
};

(async () => {
  await main();
})();
