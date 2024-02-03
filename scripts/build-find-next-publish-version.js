/**
 * Build script to find next publish version
 *
 * Takes no arguments, as it looks at lerna.json for current version
 *
 * Options:
 *   --debug    Use mock data instead of actual data for testing
 *
 * If the optional --debug flag is provided, the script will use mock
 * data instead of actual data. This is useful for testing the script
 * without modifying the actual changelog file.
 *
 *
 * Examples:
 * node ./scripts/build-find-next-publish-version.js
 * node ./scripts/build-find-next-publish-version.js --debug
 *
 * Used in github workflows:
 * - on-push-main.yaml
 *
 * Description:
 * This script is used to find the next publish version, and uses
 * reusable util functions from scripts/utils.js
 *
 * The logic is as follows:
 * 1. Get all commits since last tag
 * 2. Parse commits to find commit messages that contain a task that
 *    will trigger conventional commit bumping.
 * 3. Find the next version based on the tasks found in commits.
 * 4. Update lerna.json with parameters for next publish version, both
 *    full semver and major.minor version. This is used in github
 *    workflows.
 *
 */

import {
  getCommitsSinceLastTag,
  parseCommitsSinceLastTag,
  findCurrentVersion,
  findNextVersion,
  findMajorMinorVersion,
  updateLernaJson,
} from "./utils.js";

const debugMode = process.argv.includes("--debug");

(async () => {
  const commits = await getCommitsSinceLastTag(debugMode);
  const tasks = await parseCommitsSinceLastTag(commits);
  const currentVersion = await findCurrentVersion("./lerna.json");
  const nextVersion = await findNextVersion(tasks, currentVersion);
  const lernaJsonUpdated = await updateLernaJson({
    full: nextVersion,
    majorMinor: await findMajorMinorVersion(nextVersion),
    path: "./lerna.json",
  });

  if (lernaJsonUpdated) {
    console.log("Next publish version written to lerna.json.");
  } else {
    console.log("Everything went sideways, lerna.json not updated.");
  }
})();
