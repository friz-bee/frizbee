<template>
  <div class="relative">
    <!-- Hero Section -->
    <section class="min-h-screen relative overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>

      <!-- Main content -->
      <div class="container mx-auto px-4 pt-6">
        <div class="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <!-- Left side content -->
          <div class="z-10">
            <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              {{ $t('home.hero.title') }}
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-lg">
              {{ $t('home.hero.subtitle') }}
            </p>
            <div class="flex gap-4">
              <NuxtLink
                to="/contact"
                class="bg-green-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-300 transition"
              >
                {{ $t('home.hero.cta') }}
              </NuxtLink>
              <NuxtLink
                to="/services"
                class="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-black transition"
              >
                {{ $t('nav.services') }}
              </NuxtLink>
            </div>
            <div class="mt-8">
              <NuxtLink
                to="/a-propos"
                class="inline-flex items-center text-green-400 hover:text-green-300 transition"
              >
                {{ $t('home.about.cta') }}
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Right side 3D element -->
          <div class="relative z-10">
            <div class="relative w-full h-[500px]">
              <!-- Animated glow effect -->
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"
              ></div>

              <!-- 3D-like circular elements -->
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-gray-700 rounded-full"
              ></div>
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-gray-600 rounded-full animate-spin-slow"
              ></div>
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-400/50 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service cards -->
      <div class="absolute bottom-0 left-0 w-full overflow-x-hidden pb-32 pt-12">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            <div
              class="bg-gradient-to-br from-pink-500/10 to-pink-500/20 p-6 rounded-xl backdrop-blur-sm border border-pink-500/20 transform hover:rotate-0 transition-transform duration-300 w-full md:w-[340px] -rotate-6"
            >
              <h3 class="text-xl font-bold mb-2">{{ $t('services.web.title') }}</h3>
              <p class="text-gray-300">{{ $t('services.web.description') }}</p>
              <NuxtLink
                to="/tarifs"
                class="inline-block text-pink-400 mt-4 hover:text-pink-300 transition-colors"
              >
                {{ $t('home.services.pricing') }} →
              </NuxtLink>
            </div>
            <div
              class="bg-gradient-to-br from-green-500/10 to-green-500/20 p-6 rounded-xl backdrop-blur-sm border border-green-500/20 transform hover:rotate-0 transition-transform duration-300 w-full md:w-[340px] rotate-3"
            >
              <h3 class="text-xl font-bold mb-2">{{ $t('services.ecommerce.title') }}</h3>
              <p class="text-gray-300">{{ $t('services.ecommerce.description') }}</p>
              <NuxtLink
                to="/tarifs"
                class="inline-block text-green-400 mt-4 hover:text-green-300 transition-colors"
              >
                {{ $t('home.services.pricing') }} →
              </NuxtLink>
            </div>
            <div
              class="bg-gradient-to-br from-blue-500/10 to-blue-500/20 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 transform hover:rotate-0 transition-transform duration-300 w-full md:w-[340px] rotate-6"
            >
              <h3 class="text-xl font-bold mb-2">{{ $t('services.apps.title') }}</h3>
              <p class="text-gray-300">{{ $t('services.apps.description') }}</p>
              <NuxtLink
                to="/tarifs"
                class="inline-block text-blue-400 mt-4 hover:text-blue-300 transition-colors"
              >
                {{ $t('home.services.pricing') }} →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('home.services.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm">
            <div class="w-12 h-12 bg-green-400 rounded-lg mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ $t('home.services.expertise.title') }}</h3>
            <p class="text-gray-400">
              {{ $t('home.services.expertise.description') }}
            </p>
          </div>
          <div class="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm">
            <div class="w-12 h-12 bg-green-400 rounded-lg mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ $t('home.services.support.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.services.support.description') }}</p>
          </div>
          <div class="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm">
            <div class="w-12 h-12 bg-green-400 rounded-lg mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ $t('home.services.performance.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.services.performance.description') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 15s linear infinite;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
