// @ts-check

import { defineEcConfig } from "astro-expressive-code";

// https://expressive-code.com/reference/configuration
export default defineEcConfig({
  themes: ["rose-pine", "rose-pine-dawn"],
  themeCssSelector: (theme) =>
    `[data-theme='${theme.name === "rose-pine" ? "dark" : "light"}']`,
  styleOverrides: {
    codeFontFamily: "var(--font-jetbrains-mono)",
    uiFontFamily: "var(--font-atkinson)",
  },
  useDarkModeMediaQuery: false,
});
