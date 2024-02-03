/*
 * This script is run before a commit is made.
 *
 * It will run the prebuild-create-content script in the
 * @oslokommune/punkt-docs package if certain files are changed.
 *
 * That script will copy content to the docs site.
 *
 */

import { execSync } from "child_process";

function isCI() {
  return process.env.CI !== undefined;
}

function hasChanges() {
  const files = execSync("git diff --cached --name-only --diff-filter=ACM")
    .toString()
    .trim()
    .split("\n");
  const filePattern = /(README\.md|CONTRIBUTING\.md)/;
  return files.some((file) => filePattern.test(file));
}

if (!isCI() && hasChanges()) {
  console.log("Pre-commit hook kjører...");
  execSync(
    "npx lerna run prebuild-create-content --scope=@oslokommune/punkt-docs",
    { stdio: "inherit" }
  );

  execSync("git add .", { stdio: "inherit" });
}
