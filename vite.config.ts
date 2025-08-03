/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "./dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => (format === "es" ? "index.js" : "index.cjs"),
    },
  },
  test: {
    watch: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@@": path.resolve(__dirname),
    },
  },
});
