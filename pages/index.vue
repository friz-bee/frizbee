<template>
  <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                  class="text-slate-600"
                />
              </pattern>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <rect width="50" height="50" fill="url(#smallGrid)" />
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  class="text-slate-500"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-700/50 rounded-full animate-spin-slow opacity-20"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-700/50 rounded-full animate-spin-slow-reverse opacity-20"
        ></div>
      </div>

      <!-- Main content -->
      <div class="container mx-auto px-4 pt-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          <!-- Left side content -->
          <div class="z-10 text-center lg:text-left">
            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight"
            >
              <span class="text-white">{{
                $t('home.hero.title').split($t('home.hero.highlight'))[0]
              }}</span>
              <span class="relative">
                <span
                  class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
                >{{ $t('home.hero.highlight') }}</span
                >
                <svg
                  class="absolute -bottom-4 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5"
                    stroke="url(#gradient)"
                    stroke-width="2"
                    fill="none"
                  />
                  <linearGradient id="gradient">
                    <stop offset="0%" stop-color="rgb(var(--color-primary-400))" />
                    <stop offset="100%" stop-color="rgb(var(--color-secondary-400))" />
                  </linearGradient>
                </svg>
              </span>
              <span class="text-white">{{
                $t('home.hero.title').split($t('home.hero.highlight'))[1]
              }}</span>
            </h1>
            <p class="text-lg sm:text-xl text-slate-300 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
              {{ $t('home.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ULink
                :to="localePath('/contact')"
                class="group relative bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/20 transform hover:scale-105 overflow-hidden"
              >
                <span class="relative z-10">{{ $t('home.hero.cta') }}</span>
                <div
                  class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-amber-500 to-amber-600 transition-transform duration-500"
                ></div>
              </ULink>
              <ULink
                :to="localePath('/services')"
                class="group relative border-2 border-sky-500 text-sky-400 px-8 py-4 rounded-full text-lg font-semibold hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-sky-500/20 overflow-hidden"
              >
                <span class="relative z-10">{{ $t('nav.services') }}</span>
                <div
                  class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-sky-500 transition-transform duration-500"
                ></div>
              </ULink>
            </div>
            <div class="mt-8 lg:mt-12 text-center lg:text-left">
              <ULink
                :to="localePath('/about')"
                class="group inline-flex items-center text-sky-400 hover:text-sky-300 transition-all duration-300"
              >
                {{ $t('home.about.cta') }}
                <svg
                  class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
              </ULink>
            </div>
          </div>

          <!-- Right side 3D element -->
          <div class="relative z-10 hidden lg:block">
            <div class="relative w-full h-[500px]">
              <!-- Animated glow effects -->
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
              ></div>
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-pulse delay-700"
              ></div>

              <!-- 3D-like circular elements -->
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-slate-700/50 rounded-full"
              ></div>
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-slate-600/50 rounded-full animate-spin-slow"
              ></div>
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-sky-500/50 rounded-full animate-spin-slow-reverse"
              ></div>

              <!-- Floating elements -->
              <div
                class="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl animate-float"
              ></div>
              <div
                class="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-amber-500 to-pink-500 rounded-full animate-float-delay"
              ></div>
              <div
                class="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-lg animate-float-delay-2"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service cards -->
      <div id="service-cards" class="w-full overflow-x-hidden pb-16 lg:pb-32 pt-8 lg:pt-12">
        <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8">
            <UCard
              class="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-green-500/50 bg-green-500/20 transition-all duration-500 w-full lg:w-[340px] -rotate-0 lg:-rotate-6 hover:-translate-y-2 hover:rotate-0"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500"
                  >
                    <svg
                      class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold text-white">
                    {{ $t('services.ecommerce.title') }}
                  </h3>
                </div>
                <p class="text-sm sm:text-base text-gray-300">
                  {{ $t('services.ecommerce.description') }}
                </p>
                <ULink
                  :to="localePath('/pricing')"
                  class="inline-flex items-center text-green-400 mt-3 sm:mt-4 group-hover:text-green-300 transition-colors hover:text-green-300"
                >
                  {{ $t('home.hero.services.pricing') }}
                  <svg
                    class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
                </ULink>
              </div>
            </UCard>

            <UCard
              class="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-pink-500/50 bg-pink-500/20 transition-all duration-500 w-full lg:w-[340px] rotate-0 lg:rotate-3 hover:-translate-y-2 hover:rotate-0"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500"
                  >
                    <svg
                      class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold text-white">
                    {{ $t('services.showcase.title') }}
                  </h3>
                </div>
                <p class="text-sm sm:text-base text-gray-300">
                  {{ $t('services.showcase.description') }}
                </p>
                <ULink
                  :to="localePath('/pricing')"
                  class="inline-flex items-center text-pink-400 mt-3 sm:mt-4 group-hover:text-pink-300 transition-colors hover:text-pink-300"
                >
                  {{ $t('home.hero.services.pricing') }}
                  <svg
                    class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
                </ULink>
              </div>
            </UCard>

            <UCard
              class="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-blue-500/50 bg-blue-500/20 transition-all duration-500 w-full lg:w-[340px] rotate-0 lg:rotate-6 hover:-translate-y-2 hover:rotate-0"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div class="relative z-10">
                <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500"
                  >
                    <svg
                      class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold text-white">
                    {{ $t('services.app.title') }}
                  </h3>
                </div>
                <p class="text-sm sm:text-base text-gray-300">
                  {{ $t('services.app.description') }}
                </p>
                <ULink
                  :to="localePath('/pricing')"
                  class="inline-flex items-center text-blue-400 mt-3 sm:mt-4 group-hover:text-blue-300 transition-colors hover:text-blue-300"
                >
                  {{ $t('home.hero.services.pricing') }}
                  <svg
                    class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
                </ULink>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-12 lg:py-20 relative border-t border-slate-700">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center text-white">
          {{ $t('home.services.title') }}
        </h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
        >
          <div
            class="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-pink-500/50 transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            <div
              class="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6"
            >
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3
              class="text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors"
            >
              {{ $t('home.services.expertise.title') }}
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors">
              {{ $t('home.services.expertise.description') }}
            </p>
          </div>

          <div
            class="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-500/50 transition-all duration-500 shadow-lg hover:shadow-xl md:translate-y-0 lg:translate-y-2"
          >
            <div
              class="w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6"
            >
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors"
            >
              {{ $t('home.services.support.title') }}
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors">
              {{ $t('home.services.support.description') }}
            </p>
          </div>

          <div
            class="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            <div
              class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6"
            >
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors"
            >
              {{ $t('home.services.performance.title') }}
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors">
              {{ $t('home.services.performance.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 15s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin 12s linear infinite reverse;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-delay-2 {
  animation: float 6s ease-in-out infinite;
  animation-delay: 4s;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
