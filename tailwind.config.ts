import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          dark: '#191414',
          green: '#1DB954',
        },
      },
    },
  },
  plugins: [],
}

export default config
