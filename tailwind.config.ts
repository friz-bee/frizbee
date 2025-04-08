import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite'
      }
    }
  },
  plugins: []
} satisfies Config 