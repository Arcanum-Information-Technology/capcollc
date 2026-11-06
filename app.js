import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

loadEnvFile(path.resolve(".env"));

if (!process.env.HOST) {
  process.env.HOST = "0.0.0.0";
}

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
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
