import type { Config } from "tailwindcss";

/**
 * Tailwind 設定に追加して使うプリセット。
 *   import udon from "@nfmmu/udon-react/tailwind-preset";
 *   export default { presets: [udon], content: [...] } satisfies Config;
 */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        udon: {
          bg: "var(--udon-bg)",
          panel: "var(--udon-panel)",
          line: "var(--udon-line)",
          "line-strong": "var(--udon-line-strong)",
          text: "var(--udon-text)",
          muted: "var(--udon-muted)",
          primary: "var(--udon-primary)",
          secondary: "var(--udon-secondary)",
          accent: "var(--udon-accent)",
          success: "var(--udon-success)",
          info: "var(--udon-info)",
        },
      },
      borderRadius: {
        "udon-sm": "var(--udon-radius-sm)",
        "udon-md": "var(--udon-radius-md)",
        "udon-lg": "var(--udon-radius-lg)",
      },
      fontFamily: {
        "udon-heading": "var(--udon-font-heading)",
        "udon-body": "var(--udon-font-body)",
        "udon-mono": "var(--udon-font-mono)",
      },
      boxShadow: {
        "udon-sm": "var(--udon-shadow-sm)",
        "udon-md": "var(--udon-shadow-md)",
      },
    },
  },
};

export default preset;
