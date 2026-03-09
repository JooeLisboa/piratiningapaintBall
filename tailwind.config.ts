import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          950: '#060806',
          900: '#101510',
          800: '#1a261a',
          700: '#253625',
          500: '#4a6a3a'
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706'
        }
      },
      boxShadow: {
        glow: '0 12px 35px rgba(245, 158, 11, 0.18)'
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 100 100\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23n)\" opacity=\".2\"/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
} satisfies Config;
