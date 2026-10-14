import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

if (!process.env.HOST) {
  process.env.HOST = "0.0.0.0";
}

const targetPath = "./.output/server/index.mjs";
const serverEntry = path.resolve(targetPath);

if (!fs.existsSync(serverEntry)) {
  console.log("Production build not found. Running build step...");
  try {
    execSync("npm run build", { stdio: "inherit" });
  } catch (buildErr) {
    console.error("Build failed:", buildErr);
    process.exit(1);
  }
}

console.log(`Starting production server on ${process.env.HOST}:${process.env.PORT || 3000}...`);

import(/* vite-ignore */ targetPath).catch((err) => {
  console.error("Failed to start server from .output/server/index.mjs:", err);
  process.exit(1);
});
