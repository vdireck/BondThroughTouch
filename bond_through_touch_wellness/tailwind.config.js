/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/**/*.js",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep spiritual authority, grounding wisdom
        primary: {
          DEFAULT: "#410357", // deep-plum-900
          50: "#f5f0f7",
          100: "#e8ddef",
          200: "#d1bbe0",
          300: "#b599d1",
          400: "#9877c2",
          500: "#7c55b3",
          600: "#5f3390",
          700: "#410357",
          800: "#310242",
          900: "#21012d",
        },
        // Secondary Colors - Feminine power, intuitive action moments
        secondary: {
          DEFAULT: "#724978", // mauve-600
          50: "#f7f3f8",
          100: "#ede5ef",
          200: "#dbcbdf",
          300: "#c9b1cf",
          400: "#b797bf",
          500: "#a57daf",
          600: "#724978",
          700: "#5a3a5f",
          800: "#422b46",
          900: "#2a1c2d",
        },
        // Accent Colors - Healing energy, gentle interactive highlights
        accent: {
          DEFAULT: "#cea4f7", // lavender-300
          50: "#faf7fe",
          100: "#f4eefd",
          200: "#e9ddfb",
          300: "#cea4f7",
          400: "#b87df3",
          500: "#a256ef",
          600: "#8c2feb",
          700: "#6f1ec5",
          800: "#52169e",
          900: "#350e77",
        },
        // Background Colors - Warm sanctuary canvas, natural comfort
        background: {
          DEFAULT: "#e8dcc4", // sand-200
          50: "#fdfcf9",
          100: "#f9f6ed",
          200: "#e8dcc4",
          300: "#d7c29b",
          400: "#c6a872",
          500: "#b58e49",
          600: "#947320",
          700: "#6d5518",
          800: "#463710",
          900: "#1f1908",
        },
        // Surface Colors - Elevated content areas, subtle depth
        surface: {
          DEFAULT: "#f4f0e8", // warm-white-100
          50: "#fefdfb",
          100: "#f4f0e8",
          200: "#e9e1d1",
          300: "#ded2ba",
          400: "#d3c3a3",
          500: "#c8b48c",
          600: "#a89466",
          700: "#7d6e4c",
          800: "#524832",
          900: "#272218",
        },
        // Text Colors - Clear reading, warm authority
        text: {
          primary: "#2d1b35", // deep-purple-900
          secondary: "#5a4a61", // muted-purple-600
          tertiary: "#8a7a91", // muted-purple-400
        },
        // Semantic Colors
        success: {
          DEFAULT: "#7c9885", // sage-green-500
          light: "#a8c4b0",
          dark: "#5a7a63",
        },
        warning: {
          DEFAULT: "#d4a574", // warm-tan-400
          light: "#e4c5a0",
          dark: "#b8864e",
        },
        error: {
          DEFAULT: "#b8756b", // terracotta-500
          light: "#d19d95",
          dark: "#9a5a51",
        },
      },
      fontFamily: {
        headline: ['Satisfy', 'cursive'],
        body: ['Barlow', 'sans-serif'],
        cta: ['Barlow', 'sans-serif'],
        accent: ['Satisfy', 'cursive'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(65, 3, 87, 0.08)',
        elevated: '0 8px 32px rgba(65, 3, 87, 0.12)',
        deep: '0 12px 48px rgba(65, 3, 87, 0.16)',
        'sanctuary-soft': '0 4px 20px rgba(65, 3, 87, 0.08)',
        'sanctuary-elevated': '0 8px 32px rgba(65, 3, 87, 0.12)',
        'sanctuary-deep': '0 12px 48px rgba(65, 3, 87, 0.16)',
        'sacred-glow': '0 0 40px rgba(206, 164, 247, 0.3), 0 0 80px rgba(206, 164, 247, 0.15)',
      },
      borderColor: {
        subtle: 'rgba(114, 73, 120, 0.15)',
        medium: 'rgba(114, 73, 120, 0.25)',
        strong: 'rgba(114, 73, 120, 0.35)',
      },
      transitionDuration: {
        base: '350ms',
        fast: '200ms',
        slow: '500ms',
      },
      transitionTimingFunction: {
        'sanctuary': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 350ms ease-out forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(1rem)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        sanctuary: '12px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sanctuary': '1rem',
        'sanctuary-lg': '1.5rem',
      },
    },
  },
  plugins: [],
}