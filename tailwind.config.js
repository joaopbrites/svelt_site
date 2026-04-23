/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,js,ts}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        graffiti: ['Bangers', 'Impact', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#bf3030',   // tinta vermelha suja
          cyan: '#b8960c',   // amarelo envelhecido / impressão velha
          purple: '#6a3fa0', // roxo desbotado
          green: '#2e7a44',  // verde escuro / militar
          yellow: '#9a7010', // âmbar escuro
        },
        dark: {
          bg: '#0d0d08',
          surface: '#131310',
          elevated: '#1a1a14',
          border: '#28281c',
        },
        paper: '#c5bba0',
      },
      boxShadow: {
        panel: '5px 5px 0px rgba(0,0,0,0.75)',
        'panel-sm': '3px 3px 0px rgba(0,0,0,0.65)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        blink: 'blink 1s step-end infinite',
        'slide-in': 'slideIn 0.4s ease forwards',
        glitch: 'glitch 5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glitch: {
          '0%, 88%, 100%': { transform: 'translate(0)' },
          '90%': { transform: 'translate(-3px, 1px)' },
          '92%': { transform: 'translate(3px, -1px)' },
          '94%': { transform: 'translate(-2px, 2px)' },
          '96%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}
