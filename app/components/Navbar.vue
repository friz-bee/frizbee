<template>
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
          <NuxtLink
            to="/realisations"
            class="hover:text-green-400 transition"
          >Réalisations</NuxtLink
          >
          <NuxtLink to="/tarifs" class="hover:text-green-400 transition">Tarifs</NuxtLink>
        </div>
        <NuxtLink
          to="/contact"
          class="bg-green-400 text-black px-6 py-2 rounded-full hover:bg-green-300 transition"
        >
          Nous contacter
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
