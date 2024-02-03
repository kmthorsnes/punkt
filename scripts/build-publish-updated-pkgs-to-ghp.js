/**
 * This script will look for changed packages already written to
 * lerna.json earlier in the build process, and publish them to
 * GitHub Packages.
 *
 * Example:
 * node ./scripts/build-publish-updated-pkgs-to-ghp.js
 *
 */

import jsonFile from "edit-json-file";
import { exec } from "child_process";

(async () => {
  const changedPackages = jsonFile("lerna.json").get("changedPackages") || [];

  // Start with the base command
  let command = "npm publish";

  // Append each package to the command
  changedPackages.forEach((pkg) => {
    command += ` -w=${pkg}`;
  });

  console.log("command: ", command);

  // Execute the command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      throw error;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log("Published packages to GitHub Packages!");
  });
})();
