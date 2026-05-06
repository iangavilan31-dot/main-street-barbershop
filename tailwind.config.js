/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Logo-matched: black / cream / charcoal — pure B&W with one whisper of warmth
        ink: {
          DEFAULT: "#0A0A0A",
          950: "#070707",
          900: "#0A0A0A",
          800: "#121212",
          700: "#1A1A1A",
          600: "#2A2A2A",
          500: "#3A3A3A",
          400: "#5A5A5A",
        },
        bone: {
          DEFAULT: "#EFE9DD",
          50: "#FCFAF5",
          100: "#F7F2E8",
          200: "#EFE9DD",
          300: "#E2DAC9",
          400: "#C8BEAA",
          500: "#A89F8A",
          600: "#7E776A",
        },
        // Single accent — a deep heritage wine/oxblood used very sparingly
        wine: {
          DEFAULT: "#5A1410",
          400: "#7A2218",
          500: "#5A1410",
          600: "#3F0D0A",
        },
      },
      fontFamily: {
        display: ['"Inter Tight"', "ui-sans-serif", "system-ui", "sans-serif"],
        editorial: ['"Instrument Serif"', "Georgia", "serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Inter Tight"', '"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        grotesk: ['"Inter Tight"', '"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        widestest: "0.36em",
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "marquee-rev": "marquee-rev 42s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(.2,.8,.2,1) both",
        "ken-burns": "ken-burns 18s ease-in-out infinite alternate",
        "spin-slow": "spin 26s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.0) translate(0%, 0%)" },
          "100%": { transform: "scale(1.12) translate(-2%, -1%)" },
        },
      },
    },
  },
  plugins: [],
};
