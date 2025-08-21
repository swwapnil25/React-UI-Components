import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite + React + Tailwind + Vitest setup
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',   // 👈 tell Vite to use PostCSS
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
