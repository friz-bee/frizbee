// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/i18n'],

  imports: {
    dirs: ['composables/**']
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-27',

  i18n: {
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: [
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json',
        iso: 'fr-FR'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        iso: 'en-US'
      }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'fr'
    }
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  }
})
