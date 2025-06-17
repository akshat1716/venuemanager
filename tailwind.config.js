/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5800',
        dark: '#1E1E2F',
        card: '#2A2A3B',
        panel: '#252535',
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
        },
        status: {
          active: '#22C55E',
          inactive: '#EF4444',
        },
        border: {
          light: '#3F3F46',
        },
      },
      fontSize: {
        h1: ['32px', '40px'],
        h2: ['24px', '32px'],
        body: ['14px', '20px'],
        button: ['16px', '24px'],
        placeholder: ['14px', '20px'],
      },
      borderRadius: {
        card: '8px',
        input: '6px',
        badge: '12px',
      },
      spacing: {
        gutter: '20px',
        margin: '24px',
      },
    },
  },
  plugins: [],
}

