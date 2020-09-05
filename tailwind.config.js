const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          a: {
            color: '#FF3B41',
            '&:hover': {
              color: '#4D1214',
            },
          },
        },
      },
    },
    extend: {
      colors: {
        red: {
          50: '#FFF5F6',
          100: '#FFEBEC',
          200: '#FFCED0',
          300: '#FFB1B3',
          400: '#FF767A',
          500: '#FF3B41',
          600: '#E6353B',
          700: '#992327',
          800: '#731B1D',
          900: '#4D1214',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  purge: ["./src/**/*.js"],
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
}
