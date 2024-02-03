/**
 * Build dev app
 *
 * Just clean up package.json a bit
 *
 */

import editJsonFile from "edit-json-file";

// clean up package.json
let editPackageJson = async () => {
  try {
    let file = editJsonFile(`./package.json`);
    const vueVersion = file.get("devDependencies.vue");
    file.set("dependencies.vue", vueVersion);
    file.unset("devDependencies.vue");
    file.save();
    console.log("package.json rewritten!");
  } catch (err) {
    console.error(err);
  }
};

// Build css-dev-app
(async () => {
  //await editPackageJson();

  console.log("Build finished!");
})();
