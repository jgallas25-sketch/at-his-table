import { existsSync, statSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../public/images");
const outFile = path.join(__dirname, "../app/lib/imageVersions.json");

const files = [
  "hero-woman-bible.jpg",
  "women-of-every-season.jpg",
  "season-assessment.jpg",
  "faith-planner.jpg",
  "community-group.jpg",
  "testimony-journal.jpg",
];

const versions = {};

for (const file of files) {
  const filePath = path.join(imagesDir, file);
  versions[file] = existsSync(filePath) ? Math.floor(statSync(filePath).mtimeMs) : 0;
}

writeFileSync(outFile, `${JSON.stringify(versions, null, 2)}\n`);
console.log("Updated image cache versions:", outFile);
