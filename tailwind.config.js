/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Ensures all relevant files within the app directory are scanned
  ],
  theme: {
    extend: {
      colors: {
        slateBlue: '#4A4E69',       // Primary
        mutedMauve: '#9A8C98',      // Secondary
        softCoral: '#F28482',       // Accent
        white: '#FFFFFF',
        offWhite: '#F8F7F9',
        nearBlack: '#22223B',
        successGreen: '#84A98C',    // Success
        warningOrange: '#F7B267',   // Warning
        errorRed: '#E56B6F',        // Error
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],    // Primary font (default sans)
        display: ['var(--font-poppins)', 'sans-serif'], // Secondary font (for headings/special text)
      },
      borderRadius: {
        'soft': '8px', // Example for soft corners
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.05)', // Example for subtle depth
      },
      animation: {
        reveal: 'reveal 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
