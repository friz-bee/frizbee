<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-black to-gray-900">
    <!-- Hero Section -->
    <section class="relative pt-6 pb-8">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">
          Nos <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Réalisations</span>
        </h1>
        <p class="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Découvrez nos projets web qui transforment les idées en expériences numériques exceptionnelles
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- Egenr Project -->
          <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-400/10">
            <div class="aspect-video relative overflow-hidden">
              <img src="/img/egenr.png" alt="Egenr Preview" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2">Egenr</h3>
              <p class="text-gray-300 mb-3 text-sm">
                Une plateforme innovante de génération de contenu qui révolutionne la création de textes avec l'intelligence artificielle.
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-2 py-1 bg-green-400/10 text-green-400 rounded-full text-xs">Vue.js</span>
                <span class="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs">API</span>
                <span class="px-2 py-1 bg-purple-400/10 text-purple-400 rounded-full text-xs">AI</span>
              </div>
              <a href="https://egenr.fr" target="_blank" class="inline-flex items-center justify-center w-full bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-300 transition-colors">
                Voir le projet
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quoi Regarder Project -->
          <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-400/10">
            <div class="aspect-video relative overflow-hidden">
              <img src="/img/quoi-regarder.png" alt="Quoi Regarder Preview" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2">Quoi Regarder</h3>
              <p class="text-gray-300 mb-3 text-sm">
                Une application intuitive qui aide les utilisateurs à découvrir leur prochain film ou série grâce à des recommandations personnalisées.
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-2 py-1 bg-green-400/10 text-green-400 rounded-full text-xs">Vue.js</span>
                <span class="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs">TMDB API</span>
                <span class="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs">UI/UX</span>
              </div>
              <a href="https://quoi-regarder.fr" target="_blank" class="inline-flex items-center justify-center w-full bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-300 transition-colors">
                Voir le projet
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transformez votre vision en réalité avec Frizbee. Contactez-nous pour discuter de votre projet.
        </p>
        <NuxtLink to="/contact" class="inline-block bg-green-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-300 transition">
          Démarrer votre projet
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Configuration de la page réalisations
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style> 