/**
 * Script that cleans the monorepo of node_modules and
 * package-lock.json files, before installing all dependencies
 *
 * Takes no arguments
 *
 * Example:
 * npm run clean
 *
 */

import { exec } from "child_process";
import fs from "fs";

let cleanUp = async () => {
  // Define a promise-based version of exec to use with async/await
  const execPromisified = (command) =>
    new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.warn(error);
          reject(error);
        }
        resolve(stdout ? stdout : stderr);
      });
    });

  try {
    // Run the commands one after another
    console.log("Cleaning npm cache...");
    console.log(await execPromisified("npm cache clean -f"));

    console.log("Running lerna clean...");
    console.log(await execPromisified("npx lerna clean --yes"));

    // Check if package-lock.json exists before trying to delete
    if (fs.existsSync("package-lock.json")) {
      console.log("Removing package-lock.json...");
      console.log(await execPromisified("rm -rf package-lock.json"));
    }

    // Check if node_modules exists before trying to delete
    if (fs.existsSync("node_modules")) {
      console.log("Removing node_modules...");
      console.log(await execPromisified("rm -r node_modules"));
    }

    console.log("Installing npm packages...");
    console.log(await execPromisified("npm install"));
  } catch (error) {
    console.error(`Exec error: ${error}`);
  }
};

(async () => {
  await cleanUp();
  console.log("Cleaned and installed from scratch!");
})();
