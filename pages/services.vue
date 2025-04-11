<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <HeroSection :title="$t('services.hero.title')" :subtitle="$t('services.hero.subtitle')" />

    <!-- Services Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- E-commerce -->
          <UCard
            class="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-500/50 transition-all duration-300"
          >
            <template #header>
              <div class="p-6 bg-green-500/10">
                <h2 class="text-2xl font-bold mb-2">{{ $t('services.ecommerce.title') }}</h2>
                <p class="text-gray-400">{{ $t('services.ecommerce.description') }}</p>
              </div>
            </template>
            <div class="p-6">
              <ul class="gap-y-4">
                <li v-for="i in [1, 2, 3, 4]" :key="i" class="flex items-start gap-3 py-0.5">
                  <UIcon
                    name="i-lucide-check-circle"
                    class="w-5 h-5 text-green-400 flex-shrink-0"
                  />
                  <span>{{ $t(`services.ecommerce.features.${i}`) }}</span>
                </li>
              </ul>
              <UButton
                :to="localePath('/contact')"
                color="green"
                variant="soft"
                class="mt-8 w-full"
              >
                {{ $t('services.cta.startProject') }}
              </UButton>
            </div>
          </UCard>

          <!-- Site Vitrine -->
          <UCard
            class="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-pink-500/50 transition-all duration-300 transform scale-105"
          >
            <template #header>
              <div class="p-6 bg-pink-500/10">
                <div class="flex justify-between items-start">
                  <div>
                    <h2 class="text-2xl font-bold mb-2">{{ $t('services.showcase.title') }}</h2>
                    <p class="text-gray-400">{{ $t('services.showcase.description') }}</p>
                  </div>
                  <UBadge color="pink" variant="subtle">{{ $t('services.popular') }}</UBadge>
                </div>
              </div>
            </template>
            <div class="p-6">
              <ul class="gap-y-4">
                <li v-for="i in [1, 2, 3, 4]" :key="i" class="flex items-start gap-3 py-0.5">
                  <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span>{{ $t(`services.showcase.features.${i}`) }}</span>
                </li>
              </ul>
              <UButton :to="localePath('/contact')" color="pink" class="mt-8 w-full">
                {{ $t('services.cta.startProject') }}
              </UButton>
            </div>
          </UCard>

          <!-- Application -->
          <UCard
            class="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
          >
            <template #header>
              <div class="p-6 bg-blue-500/10">
                <h2 class="text-2xl font-bold mb-2">{{ $t('services.app.title') }}</h2>
                <p class="text-gray-400">{{ $t('services.app.description') }}</p>
              </div>
            </template>
            <div class="p-6">
              <ul class="gap-y-4">
                <li v-for="i in [1, 2, 3, 4]" :key="i" class="flex items-start gap-3 py-0.5">
                  <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>{{ $t(`services.app.features.${i}`) }}</span>
                </li>
              </ul>
              <UButton :to="localePath('/contact')" color="blue" variant="soft" class="mt-8 w-full">
                {{ $t('services.cta.requestQuote') }}
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- SEO Section -->
    <section class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('services.seo.title') }}</h2>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-primary-500/50"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="grid grid-rows-[auto_1fr_auto] gap-6">
                <h3 class="text-xl font-bold">{{ $t('services.seo.why.title') }}</h3>
                <p class="text-gray-300">
                  {{ $t('services.seo.why.description') }}
                </p>
                <ul class="gap-y-3">
                  <li v-for="i in [1, 2, 3]" :key="i" class="flex items-start gap-3 py-0.5">
                    <UIcon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-primary-500 flex-shrink-0"
                    />
                    <span>{{ $t(`services.seo.why.points.${i}`) }}</span>
                  </li>
                </ul>
              </div>
              <div class="grid grid-rows-[auto_1fr] gap-6">
                <h3 class="text-xl font-bold">{{ $t('services.seo.services.title') }}</h3>
                <ul class="gap-y-3">
                  <li v-for="i in [1, 2, 3]" :key="i" class="flex items-start gap-3 py-0.5">
                    <UIcon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-primary-500 flex-shrink-0"
                    />
                    <span>{{ $t(`services.seo.services.list.${i}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Maintenance Section -->
    <section class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ $t('services.maintenance.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="i in [1, 2, 3]"
            :key="i"
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-secondary-500/50 text-center"
          >
            <div
              class="w-16 h-16 bg-secondary-500 rounded-xl mb-6 mx-auto flex items-center justify-center"
            >
              <UIcon
                :name="$t(`services.maintenance.items.${i}.icon`)"
                class="w-8 h-8 text-black"
              />
            </div>
            <h3 class="text-xl font-bold mb-4">
              {{ $t(`services.maintenance.items.${i}.title`) }}
            </h3>
            <p class="text-gray-400">
              {{ $t(`services.maintenance.items.${i}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Client Section -->
    <section class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('services.client.title') }}</h2>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-primary-500/50"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="grid grid-rows-[auto_1fr_auto] gap-6">
                <h3 class="text-xl font-bold">{{ $t('services.client.approach.title') }}</h3>
                <p class="text-gray-300">
                  {{ $t('services.client.approach.description') }}
                </p>
                <ul class="gap-y-3">
                  <li v-for="i in [1, 2, 3]" :key="i" class="flex items-start gap-3 py-0.5">
                    <UIcon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-primary-500 flex-shrink-0"
                    />
                    <span>{{ $t(`services.client.approach.points.${i}`) }}</span>
                  </li>
                </ul>
              </div>
              <div class="grid grid-rows-[auto_1fr] gap-6">
                <h3 class="text-xl font-bold">
                  {{ $t('services.client.commitments.title') }}
                </h3>
                <ul class="gap-y-3">
                  <li v-for="i in [1, 2, 3]" :key="i" class="flex items-start gap-3 py-0.5">
                    <UIcon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-primary-500 flex-shrink-0"
                    />
                    <span>{{ $t(`services.client.commitments.list.${i}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 border-t border-slate-700">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('services.cta.title') }}</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          {{ $t('services.cta.description') }}
        </p>
        <UButton :to="localePath('/contact')" color="primary" size="xl" class="font-semibold">
          {{ $t('services.cta.button') }}
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
