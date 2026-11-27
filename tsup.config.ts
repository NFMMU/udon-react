import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["esm"],
    dts: true,
    clean: true,
    external: ["react", "react-dom"],
  },
  {
    entry: { "tailwind-preset": "src/tailwind-preset.ts" },
    format: ["esm"],
    dts: true,
    external: [],
  },
  {
    entry: { tokens: "src/tokens.css" },
    loader: { ".css": "copy" },
  },
]);
