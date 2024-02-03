/**
 * Postbuild script for Astro
 *
 * Takes one argument: base='baseFolder' without start and end slashes
 *
 * Examples:
 * npx lerna run postbuild-fix-astro-paths --scope=@oslokommune/punkt-docs -- base='2.1'
 * node postbuild-fix-astro-paths.js base='docs-astro'
 *
 * Used in github workflows:
 * - docs-deploy-manual.yaml
 * - docs-deploy-pr.yaml
 * - on-push-main.yaml
 *
 * Description:
 * Temporary fix! This script fixes Astro 2.0.2 shortcomings regarding base folder
 * for images in markdown and mdx. Remove when Astro has support for this!
 *
 */

import fs from "fs-extra";
import glob from "fast-glob";

const args = process.argv.slice(2);
let baseFolder = "";

if (args[0]) {
  let tempArgs = args[0].split("=");
  baseFolder = tempArgs[0] === "base" ? tempArgs[1] : "";
}

// Fetch all astro-generated html-files
const fetchAndReplace = async () => {
  const imgSrcToSearchFor = new RegExp('<img src="/assets/', "g");
  const imgSrcToReplaceWith = `<img src="/${baseFolder}/assets/`;

  const hrefToSearchFor = new RegExp(`href="/(?!${baseFolder})`, "g");
  const hrefToReplaceWith = `href="/${baseFolder}/`;

  const allHtmlFiles = glob.sync(["./dist/**/*.html"]) || [];

  allHtmlFiles.forEach((file) => {
    const htmlContent = fs.readFileSync(file, "utf8");
    let result = htmlContent
      .replace(imgSrcToSearchFor, imgSrcToReplaceWith)
      .replace(hrefToSearchFor, hrefToReplaceWith);

    fs.writeFileSync(file, result, "utf8");
    console.log(`File ${file} updated.`);
  });

  console.log("Astro image paths are replaced!");
};
(async () => {
  await fetchAndReplace();
})();
