/**
 * Build npm package
 *
 * Just clean up package.json a bit
 *
 */

import editJsonFile from "edit-json-file";

// clean up package.json
let editPackageJson = async () => {
  try {
    let file = editJsonFile(`./package.json`);
    file.unset("devDependencies");
    file.save();
    console.log("package.json rewritten!");
  } catch (err) {
    console.error(err);
  }
};

// Build css-dev-app
(async () => {
  await editPackageJson();

  console.log("Build finished!");
})();
