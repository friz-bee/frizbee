<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-black to-gray-900">
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">
          Nos
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >Services</span
          >
        </h1>
        <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Des solutions web complètes et professionnelles pour répondre à tous vos besoins
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Site Vitrine -->
          <UCard
            class="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
          >
            <template #header>
              <div class="p-6 bg-pink-500/10">
                <h2 class="text-2xl font-bold mb-2">Site Vitrine</h2>
                <p class="text-gray-400">Présentez votre entreprise avec élégance</p>
              </div>
            </template>
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-pink-400 flex-shrink-0"
                  />
                  <span>Design moderne et responsive</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-pink-400 flex-shrink-0"
                  />
                  <span>Optimisation SEO intégrée</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-pink-400 flex-shrink-0"
                  />
                  <span>Formulaire de contact personnalisé</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-pink-400 flex-shrink-0"
                  />
                  <span>Intégration réseaux sociaux</span>
                </li>
              </ul>
              <UButton to="/contact" color="pink" variant="soft" class="mt-8 w-full">
                Démarrer votre projet
              </UButton>
            </div>
          </UCard>

          <!-- E-commerce -->
          <UCard
            class="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-500/50 transition-all duration-300 transform scale-105"
          >
            <template #header>
              <div class="p-6 bg-green-500/10">
                <div class="flex justify-between items-start">
                  <div>
                    <h2 class="text-2xl font-bold mb-2">E-commerce</h2>
                    <p class="text-gray-400">Solution complète de vente en ligne</p>
                  </div>
                  <UBadge color="green" variant="subtle">Populaire</UBadge>
                </div>
              </div>
            </template>
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-green-400 flex-shrink-0"
                  />
                  <span>Catalogue produits illimité</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-green-400 flex-shrink-0"
                  />
                  <span>Paiement sécurisé multi-gateways</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-green-400 flex-shrink-0"
                  />
                  <span>Gestion des stocks en temps réel</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-green-400 flex-shrink-0"
                  />
                  <span>Tableau de bord administrateur</span>
                </li>
              </ul>
              <UButton to="/contact" color="green" class="mt-8 w-full">
                Démarrer votre projet
              </UButton>
            </div>
          </UCard>

          <!-- Application -->
          <UCard
            class="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
          >
            <template #header>
              <div class="p-6 bg-blue-500/10">
                <h2 class="text-2xl font-bold mb-2">Application</h2>
                <p class="text-gray-400">Solutions sur mesure</p>
              </div>
            </template>
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-blue-400 flex-shrink-0"
                  />
                  <span>Application web personnalisée</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-blue-400 flex-shrink-0"
                  />
                  <span>Intégration API sur mesure</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-blue-400 flex-shrink-0"
                  />
                  <span>Base de données dédiée</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-6 h-6 text-blue-400 flex-shrink-0"
                  />
                  <span>Documentation complète</span>
                </li>
              </ul>
              <UButton to="/contact" color="blue" variant="soft" class="mt-8 w-full">
                Demander un devis
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- SEO Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Optimisation SEO</h2>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800"
          >
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold mb-4">Pourquoi le SEO est important ?</h3>
                <p class="text-gray-300 mb-6">
                  Le référencement naturel (SEO) est crucial pour la visibilité de votre site web.
                  Nous optimisons chaque aspect pour améliorer votre positionnement dans les
                  résultats de recherche.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Structure technique optimisée</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Contenu optimisé pour les moteurs de recherche</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Optimisation des images et médias</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-4">Nos services SEO</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Audit SEO complet</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Optimisation des mots-clés</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Suivi des performances</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Maintenance Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Maintenance & Support</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 text-center"
          >
            <div
              class="w-16 h-16 bg-green-400 rounded-xl mb-6 mx-auto flex items-center justify-center"
            >
              <UIcon name="i-heroicons-wrench-screwdriver" class="w-8 h-8 text-black" />
            </div>
            <h3 class="text-xl font-bold mb-4">Maintenance technique</h3>
            <p class="text-gray-400">
              Mises à jour régulières, corrections de bugs et optimisations de performance
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 text-center"
          >
            <div
              class="w-16 h-16 bg-green-400 rounded-xl mb-6 mx-auto flex items-center justify-center"
            >
              <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-black" />
            </div>
            <h3 class="text-xl font-bold mb-4">Sécurité</h3>
            <p class="text-gray-400">
              Protection contre les menaces, sauvegardes régulières et monitoring
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 text-center"
          >
            <div
              class="w-16 h-16 bg-green-400 rounded-xl mb-6 mx-auto flex items-center justify-center"
            >
              <UIcon name="i-heroicons-chart-bar" class="w-8 h-8 text-black" />
            </div>
            <h3 class="text-xl font-bold mb-4">Analytics</h3>
            <p class="text-gray-400">Suivi des performances et analyses des données utilisateurs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Client Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Accompagnement Client</h2>
          <div
            class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800"
          >
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold mb-4">Notre approche</h3>
                <p class="text-gray-300 mb-6">
                  Nous vous accompagnons à chaque étape de votre projet, de la conception à la mise
                  en ligne et au-delà.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Réunions régulières de suivi</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Support technique réactif</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Formation à l'utilisation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-4">Nos engagements</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Réponse sous 24h</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Solutions personnalisées</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <UIcon
                      name="i-heroicons-check-circle"
                      class="w-5 h-5 text-green-400 flex-shrink-0"
                    />
                    <span>Évolution continue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
          à le concrétiser.
        </p>
        <UButton to="/contact" color="green" size="xl" class="font-semibold">
          Contactez-nous
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Configuration de la page services
</script>
