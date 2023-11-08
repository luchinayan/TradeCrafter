import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue':"#3772FF",
        'primary-purple':"#9757D7",
        'primary-orange':"#FF6838",
        'primary-green':"#82CE9D",
        'secondary-sky':"#4BC9F0",
        'secondary-beige':"#E4D7CF",
        'secondary-yellow':"#FFD166",
        'secondary-purple':"#CDB4DB",
        'neutral-b-1':"#141416",
        'neutral-b-2':"#23262F",
        'neutral-b-3':"#353945",
        'neutral-s-1':"#777E90",
        'neutral-s-2':"#B1B5C3",
        'neutral-s-3':"#E6E8EC",
        'neutral-s-4':"#F4F5F6"
      }
    },
  },
  plugins: [],
}
export default config
