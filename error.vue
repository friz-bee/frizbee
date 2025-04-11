<template>
  <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
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

    <!-- Logo -->
    <div class="absolute top-8 left-8 z-20">
      <ULink :to="localePath('/')" class="block">
        <NuxtImg src="/img/logo.png" alt="Frizbee" class="h-12 w-auto" />
      </ULink>
    </div>

    <!-- Main content -->
    <div class="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-9xl font-bold mb-4 text-white">
          {{ error.statusCode }}
        </h1>
        <h2 class="text-3xl font-bold mb-4 text-white">
          {{ $t(`error.${error.statusCode}.title`) || $t('error.title') }}
        </h2>
        <p class="text-2xl text-slate-300 mb-8">
          {{
            error.message || $t(`error.${error.statusCode}.message`) || $t('error.defaultMessage')
          }}
        </p>
        <ULink
          :to="localePath('/')"
          class="group relative bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/20 transform hover:scale-105 overflow-hidden inline-block"
        >
          <span class="relative z-10">{{ $t('error.button') }}</span>
          <div
            class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-amber-500 to-amber-600 transition-transform duration-500"
          ></div>
        </ULink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

defineProps({
  error: Object as () => NuxtError
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 15s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin 12s linear infinite reverse;
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
