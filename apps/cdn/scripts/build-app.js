import fs from "fs-extra";
import mustache from "mustache";

const args = process.argv.slice(2);
let filePath = "./tests/mock-cdn-files.txt";
const templateFilePath = "./index.mustache";
const buildDir = `./dist`;
const srcDir = `./public`;

if (args[0]) {
  let tempArgs = args[0].split("=");
  filePath = tempArgs[0] === "file" ? tempArgs[1] : "";
}

// Delete dist folder contents. If the directory does not exist, it is created.
const cleanBuildDir = async () => {
  try {
    await fs.emptyDir(buildDir);
    console.log("Build directory cleaned and ready");
  } catch (err) {
    console.error(err);
  }
};

// copy all files to build folder
const copyFiles = async () => {
  try {
    await fs.copy(`${srcDir}`, `${buildDir}`);
    console.log("CDN contents copied");
  } catch (err) {
    console.error(err);
  }
};

const parseS3Objects = async () => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");
  const versions = {};

  lines.forEach((line) => {
    const match = line.match(/(\d+\.\d+)\/(.+)/);
    if (match) {
      const version = match[1];
      const file = match[2];

      if (!versions[version]) {
        versions[version] = [];
      }
      versions[version].push(file);
    }
  });

  return versions;
};

const generateHTMLfiles = async (versions, versionsList) => {
  const template = fs.readFileSync(templateFilePath, "utf-8");

  versionsList.forEach((version, index) => {
    const data = {
      currentVersion: version,
      versions: versionsList.map((v) => ({
        value: v,
        isSelected: v === version,
      })),
      files: [],
    };

    if (data.versions.length > 0) {
      data.files = versions[version].map((file) => ({
        name: `https://punkt-cdn.oslo.kommune.no/${version}/${file}`,
        url: `https://punkt-cdn.oslo.kommune.no/${version}/${file}`,
        category: file.split("/")[0],
      }));
    }

    const output = mustache.render(template, data);

    // Create the folder if it doesn't exist
    if (!fs.existsSync(`${buildDir}/${version}`)) {
      fs.mkdirSync(`${buildDir}/${version}`, { recursive: true });
    }
    if (index === 0) {
      fs.writeFileSync(`${buildDir}/index.html`, output);
    }
    fs.writeFileSync(`${buildDir}/${version}/index.html`, output);
  });
};

const main = async () => {
  await cleanBuildDir();
  await copyFiles();

  const versions = await parseS3Objects();
  const versionsList = Object.keys(versions).sort((a, b) => {
    const aParts = a.split(".").map(Number);
    const bParts = b.split(".").map(Number);

    for (let i = 0; i < aParts.length; i++) {
      if (aParts[i] < bParts[i]) {
        return 1;
      } else if (aParts[i] > bParts[i]) {
        return -1;
      }
    }
    return 0;
  });

  await generateHTMLfiles(versions, versionsList);
};

(async () => {
  await main();

  console.log("Changelog updated.");
})();
