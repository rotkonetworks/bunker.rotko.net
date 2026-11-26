import { defineConfig, presetUno } from "unocss";

// No icon preset and no web-font preset: both fetch from third-party CDNs.
// Icons are inline SVG; fonts are self-hosted in public/fonts (see styles.css).
export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      ink: "#0B0E11",
      ink2: "#14181D",
      ink3: "#1E242B",
      bnb: "#F0B90B",
      paper: "#F3EFE4",
      paper2: "#E6E0D0",
      text: "#F3EFE4",
      muted: "#C8C2B4",
      inkmuted: "#3A3F45",
      danger: "#FF6B7D",
      ok: "#5BD68A",
    },
    fontFamily: {
      sans: '"Atkinson Hyperlegible", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
      stencil: '"Big Shoulders Stencil Display", Impact, sans-serif',
    },
  },
  shortcuts: {
    wrap: "max-w-6xl mx-auto px-4 sm:px-6",
  },
});
