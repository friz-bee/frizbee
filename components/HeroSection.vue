<template>
  <section
    class="min-h-[50vh] relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-16"
  >
    <div class="container mx-auto px-4 relative z-10">
      <h1 class="text-4xl md:text-6xl font-bold mb-8 text-center">
        <span class="text-white">{{ title.substring(0, title.lastIndexOf(' ')) }}</span>
        <span
          class="pl-3 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
        >
          {{ title.substring(title.lastIndexOf(' ') + 1) }}
        </span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
        {{ subtitle }}
      </p>
    </div>

    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>

      <!-- Animated dots -->
      <div class="absolute inset-0">
        <div
          class="absolute top-[20%] left-[15%] w-2 h-2 bg-amber-400/70 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute top-[70%] left-[30%] w-3 h-3 bg-amber-400/50 rounded-full animate-ping animation-delay-700"
        ></div>
        <div
          class="absolute top-[40%] right-[20%] w-2 h-2 bg-sky-400/70 rounded-full animate-pulse animation-delay-1000"
        ></div>
        <div
          class="absolute top-[80%] right-[25%] w-3 h-3 bg-sky-400/50 rounded-full animate-ping animation-delay-1500"
        ></div>
      </div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
                class="text-slate-600"
              />
            </pattern>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="url(#smallGrid)" />
              <path
                d="M 40 0 L 0 0 0 40"
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
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>()
</script>

<style scoped>
.animation-delay-700 {
  animation-delay: 700ms;
}
.animation-delay-1000 {
  animation-delay: 1000ms;
}
.animation-delay-1500 {
  animation-delay: 1500ms;
}
</style>
