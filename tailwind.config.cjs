/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        theme: {
          base: "hsl(var(--color-theme) / <alpha-value>)",
          100: "hsl(var(--color-theme-100) / <alpha-value>)",
          200: "hsl(var(--color-theme-200) / <alpha-value>)",
          400: "hsl(var(--color-theme-400) / <alpha-value>)",
          500: "hsl(var(--color-theme-500) / <alpha-value>)",
          600: "hsl(var(--color-theme-600) / <alpha-value>)",
          800: "hsl(var(--color-theme-800) / <alpha-value>)",
          900: "hsl(var(--color-theme-900) / <alpha-value>)",
        },
        danger: "hsl(var(--color-danger) / <alpha-value>)",
        success: "hsl(var(--color-success) / <alpha-value>)",
        info: "hsl(var(--color-info) / <alpha-value>)",
      },
    },
  },
};
