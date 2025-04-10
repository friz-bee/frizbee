// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/i18n', '@prisma/nuxt', '@sidebase/nuxt-auth'],

  imports: {
    dirs: ['composables/**', 'models/**']
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',

  auth: {
    baseURL: process.env.AUTH_ORIGIN,
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
    admin: {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      username: process.env.ADMIN_USERNAME
    },
    jwtSecret: process.env.JWT_SECRET,
    public: {
      authOrigin: process.env.AUTH_ORIGIN
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
