import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GoDaddy and similar hosts reject Vite's default bind on [::]:8080 (EACCES).
// Use IPv4 and the platform PORT when one is provided.
const port = Number(process.env.PORT) || 8080;

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port,
    strictPort: false,
  },
  preview: {
    host: "0.0.0.0",
    port,
    strictPort: false,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "src/server.ts" },
  },
  nitro: {
    preset: "node-server",
    ignore: ["app.js"],
  },
});



