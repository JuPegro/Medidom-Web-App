/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  theme: {
    extend: {
      colors: {
        'primary-300': '#6EC3FF',
        'primary-200': '#004E86',
        'primary-100': '#0070C0',
        'text-100': '#333333',
        'text-200': '#737373',
        'accent-100': '#FFC000',
        'accent-200': '#B38600',
        'bg-100': '#F5F5F5',
        'bg-200': '#E9E9E9',
        'bg-300': '#FFFFFF',
        '': '#',

      },
    }
  },
  plugins: [],
}