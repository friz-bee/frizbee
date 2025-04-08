<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-black to-gray-900">
    <!-- Hero Section -->
    <section class="relative pt-12 pb-8">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">
          Nos <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tarifs</span>
        </h1>
        <p class="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Des solutions adaptées à tous vos besoins, avec un accompagnement personnalisé
        </p>
      </div>
    </section>

    <!-- Pricing Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Site Vitrine -->
          <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-pink-500/50 transition-all duration-300">
            <div class="p-8 bg-pink-500/10">
              <h2 class="text-2xl font-bold mb-2">Site Vitrine</h2>
              <p class="text-gray-400">Idéal pour présenter votre activité</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-pink-400">990€</span>
                <span class="text-gray-400"> / site</span>
              </div>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Design moderne et responsive</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Jusqu'à 5 pages personnalisées</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Formulaire de contact</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Optimisation SEO de base</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hébergement 1 an inclus</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="mt-8 w-full inline-flex justify-center items-center px-6 py-3 border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white rounded-xl transition-colors">
                Démarrer votre projet
              </NuxtLink>
            </div>
          </div>

          <!-- E-commerce -->
          <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-green-500/50 transition-all duration-300 transform scale-105">
            <div class="p-8 bg-green-500/10">
              <div class="flex justify-between items-start">
                <div>
                  <h2 class="text-2xl font-bold mb-2">E-commerce</h2>
                  <p class="text-gray-400">Solution complète de vente en ligne</p>
                </div>
                <span class="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm">Populaire</span>
              </div>
              <div class="mt-4">
                <span class="text-3xl font-bold text-green-400">1990€</span>
                <span class="text-gray-400"> / site</span>
              </div>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Catalogue produits illimité</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Système de paiement sécurisé</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Gestion des stocks</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dashboard administrateur</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Formation utilisation incluse</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="mt-8 w-full inline-flex justify-center items-center px-6 py-3 bg-green-400 text-black hover:bg-green-300 rounded-xl transition-colors">
                Démarrer votre projet
              </NuxtLink>
            </div>
          </div>

          <!-- Application -->
          <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
            <div class="p-8 bg-blue-500/10">
              <h2 class="text-2xl font-bold mb-2">Application</h2>
              <p class="text-gray-400">Solutions sur mesure</p>
              <div class="mt-4">
                <span class="text-3xl font-bold text-blue-400">Sur devis</span>
              </div>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Application web personnalisée</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Intégration API sur mesure</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Base de données dédiée</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Maintenance et support</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Documentation complète</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="mt-8 w-full inline-flex justify-center items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl transition-colors">
                Demander un devis
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Tous nos projets incluent</h2>
        <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div class="text-center">
            <div class="w-12 h-12 bg-green-400 rounded-xl mb-4 mx-auto flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Support technique</h3>
            <p class="text-gray-400 text-sm">Assistance dédiée pendant 1 an</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-green-400 rounded-xl mb-4 mx-auto flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Personnalisation</h3>
            <p class="text-gray-400 text-sm">Design adapté à votre image</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-green-400 rounded-xl mb-4 mx-auto flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Performance</h3>
            <p class="text-gray-400 text-sm">Sites optimisés et rapides</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-green-400 rounded-xl mb-4 mx-auto flex items-center justify-center">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Sécurité</h3>
            <p class="text-gray-400 text-sm">Protection contre les menaces</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Vous avez des questions ?</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          Notre équipe est là pour vous aider à choisir la solution la plus adaptée à vos besoins.
        </p>
        <NuxtLink to="/contact" class="inline-block bg-green-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-300 transition">
          Contactez-nous
        </NuxtLink>
      </div>
    </section>
  </div>
</template> 