<template>
  <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <HeroSection :title="$t('pricing.title')" :subtitle="$t('pricing.subtitle')" />

    <!-- Pricing Grid -->
    <section id="plans" class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- E-commerce -->
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
          >
            <div class="p-8 bg-green-500/10">
              <h2 class="text-2xl font-bold mb-2">{{ $t('pricing.plans.ecommerce.title') }}</h2>
              <p class="text-gray-400">{{ $t('pricing.plans.ecommerce.description') }}</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-green-400">1990€</span>
                <span class="text-gray-400"> / {{ $t('pricing.plans.perSite') }}</span>
              </div>
            </div>
            <div class="p-8">
              <ul class="gap-y-4">
                <li v-for="i in [1, 2, 3, 4]" :key="i" class="flex items-start gap-3 py-0.5">
                  <svg
                    class="w-6 h-6 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{{ t(`pricing.plans.ecommerce.features.${i}`) }}</span>
                </li>
              </ul>
              <ULink
                :to="localePath('/contact')"
                class="mt-8 w-full inline-flex justify-center items-center px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-xl transition-all duration-300"
              >
                {{ $t('pricing.plans.startProject') }}
              </ULink>
            </div>
          </div>

          <!-- Site Vitrine -->
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-pink-500/50 transition-all duration-300 transform scale-105 shadow-lg hover:shadow-pink-500/10"
          >
            <div class="p-8 bg-pink-500/10">
              <div class="flex justify-between items-start">
                <div>
                  <h2 class="text-2xl font-bold mb-2">{{ $t('pricing.plans.showcase.title') }}</h2>
                  <p class="text-gray-400">{{ $t('pricing.plans.showcase.description') }}</p>
                </div>
                <span class="bg-pink-400/20 text-pink-400 px-3 py-1 rounded-full text-sm">{{
                  $t('pricing.plans.popular')
                }}</span>
              </div>
              <div class="mt-4">
                <span class="text-3xl font-bold text-pink-400">990€</span>
                <span class="text-gray-400"> / {{ $t('pricing.plans.perSite') }}</span>
              </div>
            </div>
            <div class="p-8">
              <ul class="gap-y-4">
                <li v-for="i in [1, 2, 3, 4]" :key="i" class="flex items-start gap-3 py-0.5">
                  <svg
                    class="w-6 h-6 text-pink-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{{ t(`pricing.plans.showcase.features.${i}`) }}</span>
                </li>
              </ul>
              <ULink
                :to="localePath('/contact')"
                class="mt-8 w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-black hover:from-pink-500 hover:to-pink-600 rounded-xl transition-all duration-300 shadow-md"
              >
                {{ $t('pricing.plans.startProject') }}
              </ULink>
            </div>
          </div>

          <!-- Application -->
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
          >
            <div class="p-8 bg-blue-500/10">
              <h2 class="text-2xl font-bold mb-2">{{ $t('pricing.plans.app.title') }}</h2>
              <p class="text-gray-400">{{ $t('pricing.plans.app.description') }}</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-blue-400">{{
                  $t('pricing.plans.app.price')
                }}</span>
              </div>
            </div>
            <div class="p-8">
              <ul class="gap-y-4">
                <li v-for="i in [1, 2, 3, 4]" :key="i" class="flex items-start gap-3 py-0.5">
                  <svg
                    class="w-6 h-6 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{{ t(`pricing.plans.app.features.${i}`) }}</span>
                </li>
              </ul>
              <ULink
                :to="localePath('/contact')"
                class="mt-8 w-full inline-flex justify-center items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl transition-all duration-300"
              >
                {{ $t('pricing.plans.requestQuote') }}
              </ULink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ $t('pricing.features.title') }}</h2>
        <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div v-for="i in [0, 1, 2, 3]" :key="i" class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl mb-4 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">{{ $t(`pricing.features.items.${i}.title`) }}</h3>
            <p class="text-gray-400 text-sm">{{ $t(`pricing.features.items.${i}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('pricing.cta.title') }}</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          {{ $t('pricing.cta.description') }}
        </p>
        <ULink
          :to="localePath('/contact')"
          class="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
        >
          {{ $t('pricing.cta.button') }}
        </ULink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('pricing.title'),
  meta: [
    { name: 'description', content: t('pricing.subtitle') },
    { property: 'og:title', content: t('pricing.title') },
    { property: 'og:description', content: t('pricing.subtitle') },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
