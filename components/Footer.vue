<template>
  <footer class="bg-slate-900/90 border-t border-slate-700">
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Logo et description -->
        <div class="col-span-1">
          <ULink :to="localePath('/')" class="block mb-4">
            <NuxtImg src="/img/logofull.png" alt="Frizbee Logo" class="h-12 w-auto" />
          </ULink>
          <p class="text-slate-300 mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="flex gap-4">
            <a href="#" class="text-slate-400 hover:text-amber-400 transition-all duration-300">
              <UIcon name="i-simple-icons-linkedin" class="w-6 h-6" />
            </a>
            <a href="#" class="text-slate-400 hover:text-amber-400 transition-all duration-300">
              <UIcon name="i-simple-icons-twitter" class="w-6 h-6" />
            </a>
            <a href="#" class="text-slate-400 hover:text-amber-400 transition-all duration-300">
              <UIcon name="i-simple-icons-github" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-4 text-white">{{ $t('footer.services') }}</h3>
          <ul class="gap-y-2">
            <li>
              <ULink
                :to="localePath('/services')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.servicesList.websites') }}</ULink
              >
            </li>
            <li>
              <ULink
                :to="localePath('/services')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.servicesList.ecommerce') }}</ULink
              >
            </li>
            <li>
              <ULink
                :to="localePath('/services')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.servicesList.webapps') }}</ULink
              >
            </li>
            <li>
              <ULink
                :to="localePath('/services')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.servicesList.seo') }}</ULink
              >
            </li>
          </ul>
        </div>

        <!-- Liens rapides -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-4 text-white">{{ $t('footer.quickLinks') }}</h3>
          <ul class="gap-y-2">
            <li>
              <ULink
                :to="localePath('/about')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.quickLinksList.about') }}</ULink
              >
            </li>
            <li>
              <ULink
                :to="localePath('/portfolio')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.quickLinksList.portfolio') }}</ULink
              >
            </li>
            <li>
              <ULink
                :to="localePath('/pricing')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.quickLinksList.pricing') }}</ULink
              >
            </li>
            <li>
              <ULink
                :to="localePath('/contact')"
                class="text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ $t('footer.quickLinksList.contact') }}</ULink
              >
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-4 text-white">{{ $t('footer.contact') }}</h3>
          <ul class="gap-y-2">
            <li class="flex items-center gap-2 text-slate-300">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-amber-400" />
              <a
                href="mailto:contact@frizbee.fr"
                class="hover:text-amber-400 transition-all duration-300"
              >contact@frizbee.fr</a
              >
            </li>
            <li class="flex items-center gap-2 text-slate-300">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 text-amber-400" />
              <a
                href="tel:0123456789"
                class="hover:text-amber-400 transition-all duration-300"
              >01 23 45 67 89</a
              >
            </li>
            <li class="flex items-center gap-2 text-slate-300">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-amber-400" />
              <span>{{ $t('footer.location') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
        <p>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
