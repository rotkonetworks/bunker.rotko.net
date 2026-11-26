import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [UnoCSS(), solidPlugin()],
  build: {
    target: "es2020",
    // Keep every asset as a file: the CSP allows 'self' only, no data: fonts.
    assetsInlineLimit: 0,
  },
});
