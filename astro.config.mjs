// @ts-check

import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import expressiveCode from "astro-expressive-code";
import mermaid from "astro-mermaid";
import tailwindcss from "@tailwindcss/vite";
import { defineHastPlugin } from "satteri";

const externalLinksHastPlugin = defineHastPlugin({
  name: "externalLinks",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      const href = node.properties.href;
      if (typeof href === "string" && href.startsWith("http")) {
        ctx.setProperty(node, "rel", "noopener noreferrer");
        ctx.appendChild(node, {
          type: "text",
          value: " ",
        });
        ctx.appendChild(node, {
          type: "element",
          tagName: "svg",
          properties: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "16",
            height: "16",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: ["inline-block"],
          },
          children: [
            {
              type: "element",
              tagName: "path",
              properties: {
                d: "M15 3h6v6",
              },
              children: [],
            },
            {
              type: "element",
              tagName: "path",
              properties: {
                d: "M10 14 21 3",
              },
              children: [],
            },
            {
              type: "element",
              tagName: "path",
              properties: {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
              },
              children: [],
            },
          ],
        });
      }
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: "https://dsoreilly.me",
  integrations: [
    mermaid({
      theme: "base",
      autoTheme: false,
      mermaidConfig: {
        themeVariables: {
          fontFamily: "var(--font-sans)",
          primaryColor:
            "#ebbcba" /* Rosé Pine Dark Rose - looks good on light and dark */,
          primaryTextColor: "#191724" /* Dark base for readable text */,
          primaryBorderColor: "#b4637a" /* Love */,
          lineColor: "#6e6a86" /* Muted */,
          secondaryColor: "#f6c177" /* Gold */,
          tertiaryColor: "#c4a7e7" /* Iris */,
        },
      },
    }),
    expressiveCode(),
    mdx(),
    sitemap(),
  ],

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Atkinson",
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/atkinson-regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/atkinson-regular-italic.woff2"],
            weight: 400,
            style: "italic",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/atkinson-semibold.woff2"],
            weight: 600,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/fraunces-semibold.woff2"],
            weight: 600,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/fraunces-bold.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/fraunces-extrabold.woff2"],
            weight: 800,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/jetbrains-mono-regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/jetbrains-mono-regular-italic.woff2"],
            weight: 400,
            style: "italic",
            display: "swap",
          },
        ],
      },
    },
  ],

  markdown: {
    processor: satteri({
      hastPlugins: [externalLinksHastPlugin],
      features: {
        wikilinks: true,
      },
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
