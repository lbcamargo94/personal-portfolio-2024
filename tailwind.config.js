/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "node_modules/preline/dist/*.js",
];

export const darkMode = "media";

export const theme = {
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },

  extend: {
    backgroundImage: {
      "dark-hero-image": "url('/images/background/dark_background.jpg')",
      "light-hero-image-v01": "url('/images/background/light_background_01.jpg')",
      "light-hero-image-v02": "url('/images/background/light_background_02.jpg')",
      "light-hero-image-v03": "url('/images/background/light_background_03.jpg')",
      "light-hero-image-v04": "url('/images/background/light_background_04.jpg')",
    },

    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
      mono: ["var(--font-plex-mono)", "monospace"]
    },
  },
};

export const plugins = ["@tailwindcss/typography", "preline/plugin", "@tailwindcss/forms"];
