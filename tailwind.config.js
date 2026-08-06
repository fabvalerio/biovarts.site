/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./blog/**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(96.2% 0.004 264 / <alpha-value>)",
        foreground: "oklch(20.5% 0.031 258 / <alpha-value>)",
        surface: "oklch(100% 0 0 / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(24.3% 0.036 258 / <alpha-value>)",
          foreground: "oklch(97.5% 0.003 258 / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(92.8% 0.006 258 / <alpha-value>)",
          foreground: "oklch(24.3% 0.036 258 / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(93.8% 0.005 258 / <alpha-value>)",
          foreground: "oklch(51.8% 0.021 258 / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(61.2% 0.052 240 / <alpha-value>)",
          foreground: "oklch(99% 0 0 / <alpha-value>)",
        },
        border: "oklch(88.6% 0.006 258 / <alpha-value>)",
        input: "oklch(88.6% 0.006 258 / <alpha-value>)",
        ring: "oklch(61.2% 0.052 240 / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  // custom.css already defines base resets; avoid Preflight clashes
  corePlugins: {
    preflight: false,
  },
};
