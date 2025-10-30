/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(w|h|p|m)-\[.*\]/,
    },
    'translate-y-0',
    '-translate-y-full',
    'opacity-0',
    'opacity-100',
    'transform'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: "#ffffff",
          dark: "#000000",
        },
        text: {
          dark: "#000000",
          light: "rgb(212 211 203 / <alpha-value>)",
        },
        section: {
          light: "rgb(212 211 203 / <alpha-value>)",
          dark: "rgb(10 10 10 / <alpha-value>)",
        },
        "carbon-black": "#0a0a0a",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      orbitron: ["var(--font-orbitron)", "sans-serif"],
      spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".blockBreakerBottomBorder": {
          borderBottomWidth: "1px",
          borderColor: "transparent",
          backgroundImage:
            "linear-gradient(to right, #4b5563, #9ca3af, #4b5563)", // gray-600 → gray-400 → gray-600
          backgroundSize: "100% 1px",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        },
      });
    },
  ],
};
