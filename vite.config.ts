import { defineConfig } from "vite";
import { wedding } from "./src/config/wedding.ts";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export default defineConfig({
  plugins: [
    {
      name: "wedding-meta",
      // Title / share-preview tags come from the same config the card renders.
      transformIndexHtml: (html) =>
        html
          .replaceAll("__TITLE__", esc(wedding.title))
          .replaceAll("__DESCRIPTION__", esc(wedding.description))
          .replaceAll("__OG_IMAGE__", `${wedding.heroPhoto}.webp`),
    },
  ],
  build: { target: "es2020", cssTarget: "safari14" },
});
