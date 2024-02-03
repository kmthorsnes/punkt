/* Utils
 *
 */

import jsonFile from "edit-json-file";
import semver from "semver";
import { simpleGit } from "simple-git";

/* Dette er det vi tillater, i hht Conventional Commits
 * Det er lov med flere scopes i en commit
 *
 */
export const allowedTaskTypes = ["feat", "fix", "docs", "chore", "style"];
export const allowedScopes = [
  "assets",
  "cdn",
  "cli",
  "css",
  "docs",
  "react",
  "vue",
  "vue2",
  "all",
];

/*
 * Henter ut gjeldende versjon fra lerna.json
 *
 * input: "./lerna.json"
 * output: "1.2.3"
 *
 */
export const findCurrentVersion = async (pathToLernaJson) => {
  const filePath = pathToLernaJson || "./lerna.json";
  return jsonFile(filePath).get("version");
};

/*
 * Tar inn en commit og returnerer et objekt med informasjon om oppgaven.
 *
 * Eksempel output:
 * {
 *   title: "Add new icon",
 *   body: "Paragraph",
 *   commit: "feat(assets): #123 Add new icon\n\nParagraph",
 *   issue: "123",
 *   type: "feat",
 *   scope: "assets",
 *   bump: "minor"
 * }
 *
 */
const objectifyTask = (commitStr) => {
  const matches = commitStr.match(/(.*?)(?:\(([^)]*)\))?:\s?(.*)/i);

  let title = "";
  let body = "";
  let scope = [];
  let scopeStr = "";
  let type = "fix";
  let issue = "";

  if (matches) {
    // Extract type, scope, and title
    type =
      matches[1] && allowedTaskTypes.includes(matches[1].toLowerCase())
        ? matches[1].toLowerCase()
        : "fix";
    scope = matches[2]
      ? matches[2]
          .split(",")
          .map((s) => s.trim())
          .filter((s) => allowedScopes.includes(s))
      : [];
    scopeStr = scope.length > 0 ? `${scope.join(", ")}` : "";
    title = matches[3] || matches[0];

    // Extract body
    const bodyMatches = commitStr.match(/.*?:\s?.*\n([\s\S]*)/);
    body =
      bodyMatches && bodyMatches[1]
        ? bodyMatches[1].trim().replaceAll("\n", "\n  ")
        : "";
  } else {
    const lines = commitStr.split("\n");
    title = lines[0];
    body = lines.slice(1).join("\n").trim().replaceAll("\n", "\n  ");
  }

  if (type === "docs" && scope.length === 0) {
    scope.push("docs");
    scopeStr = "docs";
  }

  // Trekk ut semver bump
  let bump = "patch";
  if (type === "feat") {
    bump = "minor";
  }
  if (commitStr.toUpperCase().includes("BREAKING CHANGE:")) {
    bump = "major";
  }
  const issueNumberRegex = title.match(/^([#][0-9]{3,})/);
  if (issueNumberRegex) {
    issue = issueNumberRegex[0].replace("#", "");
    title = title.replace(issueNumberRegex[0], "").trim(); // Fjern issue fra tittelen
  }

  // Sett sammen oppgaveobjektet
  const structuredObject = {
    commit: commitStr,
    title: title,
    body: body,
    type: type,
    issueNumber: issue,
    scope: scope,
    scopeStr: scopeStr,
    bump: bump,
  };

  return structuredObject;
};

/*
 * Henter ut alle commits siden siste tag, og
 * returnerer disse som en liste med objekter.
 *
 */
export const getCommitsSinceLastTag = async (debugMode) => {
  const git = simpleGit();
  let commitResponse;

  if (debugMode) {
    console.log("DEBUG MODE: Bruker mock commit respons");
    try {
      const module = await import("./changelog-mock-commit-response.js");
      commitResponse = module.mockCommitResponse;
    } catch (error) {
      console.log("Error importing mock commit response", error);
    }
  } else {
    // Hent siste tag vha simple-git
    // const lastTag = await git.tags(["--sort=-creatordate"]);
    const lastTag = await git.tags(["--sort=-taggerdate", "--merged"]);

    // Hent alle commitene siden siste tag
    commitResponse = await git.log({
      from: lastTag.latest,
      to: "HEAD",
    });
  }

  return commitResponse.all;
};

/*
 * Tar imot en array med commits, og returnerer en liste med oppgaver.
 *
 */
export const parseCommitsSinceLastTag = async (commits) => {
  let tasksInCommits = [];

  commits.forEach((commit) => {
    const message = `${commit.message}\n${commit.body}`;

    // Finn alle tillatte oppgaver i hver commit vha regex
    const taskTypePattern = allowedTaskTypes.join("|");
    const pattern = new RegExp(`^(${taskTypePattern})(\\([^)]*\\))?:`, "gmi");
    const resultat = [...message.matchAll(pattern)];

    // Trekk ut de matchede delene og teksten mellom dem
    const parts = [];
    let start = 0;
    for (const match of resultat) {
      parts.push(message.slice(start, match.index));
      start = match.index;
    }
    parts.push(message.slice(start));

    // Filtrer ut tomme strenger
    const filteredParts = parts.filter((part) => part.trim() !== "");

    // Lag et objekt av hver oppgave
    for (const part of filteredParts) {
      tasksInCommits.push(objectifyTask(part.trim()));
    }
  });

  return tasksInCommits;
};

/*
 * Går gjennom alle oppgavene og finner ut hvilken semver bump som skal gjøres.
 * Returnerer en string med neste versjon.
 *
 * input: [{bump: "major"}, {bump: "minor"}, {bump: "patch"}], "1.2.3"
 * output: "2.0.0"
 *
 */
export const findNextVersion = async (tasks, currentVersion) => {
  if (!semver.valid(currentVersion)) return false;

  const isBumpType = (type) => tasks.some((task) => task.bump === type);
  const bumpType = isBumpType("major")
    ? "major"
    : isBumpType("minor")
    ? "minor"
    : "patch";

  return semver.inc(currentVersion, bumpType);
};

/*
 * Tar inn en versjon og returnerer major.minor
 * Eksempel: "1.2.3" => "1.2"
 *
 * input: "1.2.3"
 * output: "1.2"
 *
 */
export const findMajorMinorVersion = async (version) => {
  if (!semver.valid(version)) return false;

  return version.split(".").slice(0, 2).join(".");
};

/*
 * Oppdaterer lerna.json med to parametere:
 * - fullVersion: full versjon for publish
 * - majorMinorVersion: major.minor versjonen for docs, cli, etc.
 *
 * input: { full: "1.2.3", majorMinor: "1.2", path: "./lerna.json" }
 * output: true/false
 *
 */
export const updateLernaJson = async ({ full, majorMinor, path }) => {
  const filePath = path || "./lerna.json";

  try {
    let file = jsonFile(filePath);
    file.set("nextVersion", full);
    file.set("nextMajorMinor", majorMinor);
    file.save();
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
