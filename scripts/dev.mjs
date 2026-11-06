import { spawn } from "node:child_process";

const sandbox =
  process.env.LOVABLE_SANDBOX === "1" || Boolean(process.env.DEV_SERVER__PROJECT_PATH);

const onPassenger = Boolean(process.env.PASSENGER_APP_ENV);
const port = process.env.PORT;
const production =
  process.env.NODE_ENV === "production" || onPassenger || (Boolean(port) && port !== "8080");

function run(args) {
  const child = spawn(process.execPath, args, { stdio: "inherit" });
  child.on("exit", (code) => process.exit(code ?? 1));
}

// Hosting panels often run "npm run dev". That starts Vite on [::]:8080, which
// GoDaddy blocks. On a host, boot the production server instead.
if (!sandbox && production) {
  console.log("Hosting environment detected. Starting the production server...");
  run(["app.js"]);
} else {
  run([
    "node_modules/vite/bin/vite.js",
    "dev",
    "--host",
    "0.0.0.0",
    "--port",
    port && !sandbox ? port : "8080",
    "--strictPort",
    "false",
  ]);
}
