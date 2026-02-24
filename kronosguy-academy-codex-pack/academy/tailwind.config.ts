import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#39ff14", // Neon Lime Green
        terminal: {
          dark: "#0a0a0a",
          dim: "#1f2937",
          green: "#39ff14",
          bright: "#4dff2b",
          cursor: "#39ff14"
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"],
      }
    },
  },
  plugins: [],
};
export default config;
