/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Professional dark/light mode palette
        'kg-dark': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        'kg-accent': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'kg-success': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
        'kg-warning': {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        'kg-error': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.kg-dark.700'),
            a: {
              color: theme('colors.kg-accent.600'),
              '&:hover': {
                color: theme('colors.kg-accent.700'),
              },
            },
            code: {
              color: theme('colors.kg-accent.600'),
              backgroundColor: theme('colors.kg-dark.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.kg-dark.900'),
              color: theme('colors.kg-dark.100'),
            },
            h1: {
              color: theme('colors.kg-dark.900'),
            },
            h2: {
              color: theme('colors.kg-dark.800'),
            },
            h3: {
              color: theme('colors.kg-dark.800'),
            },
            strong: {
              color: theme('colors.kg-dark.900'),
            },
            blockquote: {
              color: theme('colors.kg-dark.700'),
              borderLeftColor: theme('colors.kg-accent.500'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.kg-dark.200'),
            a: {
              color: theme('colors.kg-accent.400'),
              '&:hover': {
                color: theme('colors.kg-accent.300'),
              },
            },
            code: {
              color: theme('colors.kg-accent.300'),
              backgroundColor: theme('colors.kg-dark.800'),
            },
            pre: {
              backgroundColor: theme('colors.kg-dark.950'),
              color: theme('colors.kg-dark.100'),
            },
            h1: {
              color: theme('colors.kg-dark.100'),
            },
            h2: {
              color: theme('colors.kg-dark.200'),
            },
            h3: {
              color: theme('colors.kg-dark.200'),
            },
            strong: {
              color: theme('colors.kg-dark.100'),
            },
            blockquote: {
              color: theme('colors.kg-dark.300'),
              borderLeftColor: theme('colors.kg-accent.500'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        gutter: '1.5rem',
        'gutter-lg': '2rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-in': 'slideIn 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
