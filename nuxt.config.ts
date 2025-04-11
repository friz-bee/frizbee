// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@prisma/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxt/image'
  ],

  app: {
    head: {
      titleTemplate: '%s - Frizbee',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },

  imports: {
    dirs: ['composables/**', 'models/**']
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',

  auth: {
    baseURL: process.env.NUXT_AUTH_ORIGIN,
    globalAppMiddleware: {
      isEnabled: false
    },
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/api/admin/login', method: 'post' },
        signOut: { path: '/api/admin/logout', method: 'post' },
        signUp: false,
        getSession: { path: '/api/admin/session', method: 'get' }
      },
      token: {
        type: 'Bearer',
        maxAgeInSeconds: 60 * 60 * 24 * 7
      },
      pages: {
        login: '/admin/login'
      },
      session: {
        dataType: {
          id: 'number',
          email: 'string',
          username: 'string',
          role: 'string'
        }
      },
      credentials: {
        email: { type: 'string', required: true },
        password: { type: 'string', required: true }
      }
    }
  },

  runtimeConfig: {
    jwtSecret: process.env.NUXT_JWT_SECRET,
    public: {
      authOrigin: process.env.NUXT_AUTH_ORIGIN
    }
  },

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
  },

  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js'
      }
    }
  }
})
