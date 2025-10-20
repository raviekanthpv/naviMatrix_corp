/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "w-[450px]",
    "w-[460px]",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: "#ffffff",
          dark: "#000000",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
        "white-smoke": "#f5f5f5",
        "carbon-black": "#0a0a0a",
      },
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
