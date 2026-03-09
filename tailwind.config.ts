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
        brand: {
          bg: '#050505',
          surface: '#07242b',
          primary: '#ff6a00',
          primaryHover: '#ff8a1c',
          text: '#f5f7f8',
          muted: '#bfc7cc'
        }
      },
      boxShadow: {
        brand: '0 18px 42px rgba(255,106,0,.18)',
        soft: '0 10px 24px rgba(0,0,0,.35)'
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 100 100\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23n)\" opacity=\".16\"/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
} satisfies Config;
