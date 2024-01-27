/** @type {import('tailwindcss').Config} */

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "node_modules/preline/dist/*.js",
];

export const darkMode = "class";

export const theme = {
  extend: {
    backgroundColor: {
      primary: "var(--color-bg-primary)"
    },

    textColor: {
      primary: "var(--color-text-primary)"
    },

    boxShadow: {
      primary: "var(--color-shadow-primary)"
    },

    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
      mono: ["var(--font-plex-mono)", "monospace"]
    },
  },
};

export const plugins = ["@tailwindcss/typography", "@tailwindcss/forms", "preline/plugin"];
