/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "node_modules/preline/dist/*.{js,ts,jsx,tsx,mdx}",
];

export const darkMode = "class";

export const theme = {
  extend: {
    backgroundImage: {
      "darkheroimage": "url('/images/background/dark_background.jpg')",
    },

    backgroundColor: {
      primary: "var(--color-bg-primary)"
    },

    textColor: {
      primary: "var(--color-text-primary)"
    },

    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
      mono: ["var(--font-plex-mono)", "monospace"]
    },
  },
};

export const plugins = ["@tailwindcss/typography", "@tailwindcss/forms", "preline/plugin"];
