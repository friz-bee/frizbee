<script setup lang="ts">
const defaultMeta = useDefaultMeta()
useHead(defaultMeta)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <Navbar />
    <main class="pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>
