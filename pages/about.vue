<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <HeroSection :title="$t('about.hero.title')" :subtitle="$t('about.hero.subtitle')" />

    <!-- Notre Histoire -->
    <section id="mission" class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('about.mission.title') }}</h2>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800"
          >
            <p class="text-gray-300 mb-6">
              {{ $t('about.mission.description1') }}
            </p>
            <p class="text-gray-300">
              {{ $t('about.mission.description2') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs -->
    <section id="values" class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ $t('about.values.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 text-center"
          >
            <div
              class="w-16 h-16 bg-primary-500 rounded-xl mb-6 mx-auto flex items-center justify-center"
            >
              <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ $t('about.values.innovation.title') }}</h3>
            <p class="text-gray-400">
              {{ $t('about.values.innovation.description') }}
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 text-center"
          >
            <div
              class="w-16 h-16 bg-primary-500 rounded-xl mb-6 mx-auto flex items-center justify-center"
            >
              <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ $t('about.values.collaboration.title') }}</h3>
            <p class="text-gray-400">
              {{ $t('about.values.collaboration.description') }}
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 text-center"
          >
            <div
              class="w-16 h-16 bg-primary-500 rounded-xl mb-6 mx-auto flex items-center justify-center"
            >
              <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ $t('about.values.excellence.title') }}</h3>
            <p class="text-gray-400">
              {{ $t('about.values.excellence.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Équipe -->
    <section id="team" class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ $t('about.team.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800"
          >
            <div class="flex items-center gap-6">
              <div
                class="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl"
              ></div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('about.team.vision.title') }}</h3>
                <p class="text-gray-400">
                  {{ $t('about.team.vision.description') }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800"
          >
            <div class="flex items-center gap-6">
              <div
                class="w-24 h-24 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl"
              ></div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('about.team.mission.title') }}</h3>
                <p class="text-gray-400">
                  {{ $t('about.team.mission.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('about.cta.title') }}</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          {{ $t('about.cta.description') }}
        </p>
        <ULink
          :to="localePath('/contact')"
          class="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
        >
          {{ $t('about.cta.button') }}
        </ULink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
