<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <HeroSection :title="$t('portfolio.title')" :subtitle="$t('portfolio.subtitle')" />

    <!-- Projects Grid -->
    <section id="projects" class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- Egenr Project -->
          <div
            class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/10"
          >
            <div class="aspect-video relative overflow-hidden">
              <img
                src="/img/egenr.png"
                alt="Egenr Preview"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2">Egenr</h3>
              <p class="text-gray-300 mb-3 text-sm">
                {{ $t('portfolio.projects.egenr.description') }}
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs"
                >Vue.js</span
                >
                <span class="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded-full text-xs"
                >API</span
                >
                <span class="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs"
                >AI</span
                >
              </div>
              <a
                href="https://egenr.fr"
                target="_blank"
                class="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-400 to-primary-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-md"
              >
                {{ $t('portfolio.projects.view') }}
                <svg
                  class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quoi Regarder Project -->
          <div
            class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-secondary-500/50 transition-all duration-300 shadow-lg hover:shadow-secondary-500/10"
          >
            <div class="aspect-video relative overflow-hidden">
              <img
                src="/img/quoi-regarder.png"
                alt="Quoi Regarder Preview"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2">Quoi Regarder</h3>
              <p class="text-gray-300 mb-3 text-sm">
                {{ $t('portfolio.projects.quoiRegarder.description') }}
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs"
                >Vue.js</span
                >
                <span class="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded-full text-xs"
                >TMDB API</span
                >
                <span class="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs"
                >UI/UX</span
                >
              </div>
              <a
                href="https://quoi-regarder.fr"
                target="_blank"
                class="inline-flex items-center justify-center w-full bg-gradient-to-r from-secondary-400 to-secondary-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:from-secondary-500 hover:to-secondary-600 transition-all duration-300 shadow-md"
              >
                {{ $t('portfolio.projects.view') }}
                <svg
                  class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 border-t border-slate-700">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">{{ $t('portfolio.cta.title') }}</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ $t('portfolio.cta.description') }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
        >
          {{ $t('portfolio.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>
