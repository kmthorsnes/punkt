/**
 * Dette Node.js-skriptet oppdaterer en versions.json-fil. Hvis den
 * nåværende versjonen ikke finnes i versions.json, legger skriptet
 * den til og lagrer endringene.
 *
 * Skriptet bruker følgende argumenter:
 * - json=<versionsFilePath>: Valgfritt. Angir banen til versions.json
 *   som skal oppdateres. Hvis ikke angitt, vil skriptet se etter
 *   versions.json i rotmappen.
 * - lerna=<lernaFilePath>: Valgfritt. Angir banen til lerna.json som
 *   skal leses for å hente den nåværende versjonen. Hvis ikke angitt,
 *   vil skriptet se etter lerna.json i rotmappen. Om version=<version>
 *   er angitt, vil dette argumentet ignoreres.
 * - version=<version>: Valgfritt. Angir den nåværende versjonen. Hvis
 *   ikke angitt, vil skriptet lese versjonen fra lerna.json.
 *
 * For å kjøre skriptet, bruk kommandoen:
 *
 * node updateVersions.js [json=<versionsFilePath>] [lerna=<lernaFilePath>] [version=<version>]
 *
 * ---
 * Eksempler:
 * node update-cdn-versions-json.js version=2.0 json=./path/to/versions.json
 * npm run update-cdn-versions-json -- lerna=./path/to/lerna.json
 * npx lerna run update-cdn-versions-json --scope=@oslokommune/punkt-cdn -- version=2.0
 *
 */

import jsonFile from "edit-json-file";

// Get the arguments from process.argv, skipping the first two
// (node executable and script path)
const args = process.argv.slice(2);
let changed = false;

// Function to parse command line arguments
const parseArguments = async (args) => {
  const parsedArgs = {
    json: "../../versions.json",
    version: null,
    lerna: "../../lerna.json",
  };

  args.forEach((arg) => {
    const [key, value] = arg.split("=");

    if (key === "json") {
      parsedArgs.json = value;
    } else if (key === "lerna") {
      parsedArgs.lerna = value;
    } else if (key === "version") {
      parsedArgs.version = value;
    }
  });

  return parsedArgs;
};

const updateVersionsList = async (versionsList, versionToBeAdded) => {
  let list = versionsList;
  if (!list.includes(versionToBeAdded)) {
    list.push(versionToBeAdded);
    changed = true;
  }
  return list;
};

const getCurrentVersion = async (file) => {
  const currentVersion = file.get("version").split(".");
  return currentVersion.slice(0, 2).join(".");
};

const main = async () => {
  // Parse the arguments
  const parsedArgs = await parseArguments(args);

  // Get current version form arguments or lerna.json
  let versionToBeAdded;
  if (parsedArgs.version) {
    versionToBeAdded = parsedArgs.version;
  } else {
    const lernaFile = jsonFile(parsedArgs.lerna);
    if (lernaFile.get("version") !== undefined) {
      versionToBeAdded = await getCurrentVersion(lernaFile);
    }
  }

  // Fetch the current versions.json file
  const versionsFile = jsonFile(parsedArgs.json);
  const currentVersionsList = versionsFile.get("versions");

  if (currentVersionsList !== undefined && versionToBeAdded !== undefined) {
    // Update the versions list
    console.log("current versions.json:", currentVersionsList);
    console.log("version to be added:", versionToBeAdded);

    const updatedVersionsList = await updateVersionsList(
      currentVersionsList,
      versionToBeAdded
    );

    // sort the list, smallest version first
    updatedVersionsList.sort((a, b) => {
      const aParts = a.split(".").map(Number);
      const bParts = b.split(".").map(Number);

      for (let i = 0; i < aParts.length; i++) {
        if (aParts[i] < bParts[i]) {
          return -1;
        } else if (aParts[i] > bParts[i]) {
          return 1;
        }
      }

      return 0;
    });

    versionsFile.set("versions", updatedVersionsList);
    versionsFile.save();

    if (changed) {
      console.log("versions.json er oppdatert!");
    } else {
      console.log("versions.json allerede ship shape!");
    }
  } else {
    console.log("Finner ikke versions.json eller lerna.json! Please fix!");
  }
};

(async () => {
  await main();
})();
