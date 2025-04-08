<template>
  <div class="min-h-screen bg-black text-white">
    <nav class="fixed w-full top-0 bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="text-2xl font-bold flex items-center gap-2">
            <img src="/img/logo.png" alt="Frizbee Logo" class="w-8 h-8" />
            FRIZBEE
          </NuxtLink>
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="hover:text-green-400 transition">Accueil</NuxtLink>
            <NuxtLink to="/services" class="hover:text-green-400 transition">Services</NuxtLink>
            <NuxtLink to="/a-propos" class="hover:text-green-400 transition">À propos</NuxtLink>
            <NuxtLink to="/realisations" class="hover:text-green-400 transition">Réalisations</NuxtLink>
            <NuxtLink to="/tarifs" class="hover:text-green-400 transition">Tarifs</NuxtLink>
          </div>
          <NuxtLink to="/contact" class="bg-green-400 text-black px-6 py-2 rounded-full hover:bg-green-300 transition">
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </nav>
    <main class="pt-16">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-black border-t border-gray-800">
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Logo et description -->
          <div class="col-span-1">
            <NuxtLink to="/" class="block mb-4">
              <img src="/img/logofull.png" alt="Frizbee Logo" class="h-12 w-auto" />
            </NuxtLink>
            <p class="text-gray-400 mb-4">
              Solutions web innovantes pour donner vie à vos projets digitaux.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-green-400 transition">
                <UIcon name="i-simple-icons-linkedin" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-green-400 transition">
                <UIcon name="i-simple-icons-twitter" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-green-400 transition">
                <UIcon name="i-simple-icons-github" class="w-6 h-6" />
              </a>
            </div>
          </div>

          <!-- Services -->
          <div class="col-span-1">
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/services" class="text-gray-400 hover:text-green-400 transition">Sites Vitrines</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-gray-400 hover:text-green-400 transition">E-commerce</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-gray-400 hover:text-green-400 transition">Applications Web</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-gray-400 hover:text-green-400 transition">SEO & Maintenance</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Liens rapides -->
          <div class="col-span-1">
            <h3 class="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/a-propos" class="text-gray-400 hover:text-green-400 transition">À propos</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/realisations" class="text-gray-400 hover:text-green-400 transition">Réalisations</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/tarifs" class="text-gray-400 hover:text-green-400 transition">Tarifs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-400 hover:text-green-400 transition">Contact</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="col-span-1">
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-gray-400">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
                <a href="mailto:contact@frizbee.fr" class="hover:text-green-400 transition">contact@frizbee.fr</a>
              </li>
              <li class="flex items-center gap-2 text-gray-400">
                <UIcon name="i-heroicons-phone" class="w-5 h-5" />
                <a href="tel:0123456789" class="hover:text-green-400 transition">01 23 45 67 89</a>
              </li>
              <li class="flex items-center gap-2 text-gray-400">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Frizbee. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Configuration de base
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

html {
  font-family: 'Space Grotesk', sans-serif;
  scroll-behavior: smooth;
}
</style>