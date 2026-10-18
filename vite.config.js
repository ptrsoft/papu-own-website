import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// papu-own-website was originally a Create React App project, so the existing
// component files use the `.js` extension while containing JSX. The custom
// plugin below pre-transforms every `src/**/*.js` file through esbuild as
// JSX so we don't have to rename the existing component files. New files
// should prefer `.jsx`.
export default defineConfig({
  plugins: [
    {
      name: "papu-own-website:treat-js-as-jsx",
      enforce: "pre",
      async transform(code, id) {
        if (!id.match(/\/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
  server: {
    host: "::",
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
