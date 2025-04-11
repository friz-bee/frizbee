<template>
  <footer class="bg-slate-900/90 border-t border-slate-700">
    <div class="container mx-auto px-4 py-8 sm:py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo et description -->
        <div class="col-span-1">
          <ULink :to="localePath('/')" class="block mb-4">
            <NuxtImg src="/img/logofull.png" alt="Frizbee Logo" class="h-10 sm:h-12 w-auto" />
          </ULink>
          <p class="text-sm sm:text-base text-slate-300 mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="flex gap-4">
            <UButton
              to="#"
              color="gray"
              variant="ghost"
              icon="i-simple-icons-linkedin"
              class="text-slate-400 hover:text-amber-400"
            />
            <UButton
              to="#"
              color="gray"
              variant="ghost"
              icon="i-simple-icons-twitter"
              class="text-slate-400 hover:text-amber-400"
            />
            <UButton
              to="#"
              color="gray"
              variant="ghost"
              icon="i-simple-icons-github"
              class="text-slate-400 hover:text-amber-400"
            />
          </div>
        </div>

        <!-- Services -->
        <div class="col-span-1">
          <h3 class="text-base sm:text-lg font-semibold mb-4 text-white">
            {{ $t('footer.services') }}
          </h3>
          <ul class="space-y-2">
            <li v-for="(service, index) in services" :key="index">
              <ULink
                :to="localePath('/services')"
                class="text-sm sm:text-base text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ service }}</ULink
              >
            </li>
          </ul>
        </div>

        <!-- Liens rapides -->
        <div class="col-span-1">
          <h3 class="text-base sm:text-lg font-semibold mb-4 text-white">
            {{ $t('footer.quickLinks') }}
          </h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in quickLinks" :key="index">
              <ULink
                :to="localePath(link.path)"
                class="text-sm sm:text-base text-slate-300 hover:text-amber-400 transition-all duration-300"
              >{{ link.label }}</ULink
              >
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-span-1">
          <h3 class="text-base sm:text-lg font-semibold mb-4 text-white">
            {{ $t('footer.contact') }}
          </h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-slate-300">
              <UIcon name="i-lucide-mail" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <a
                href="mailto:contact@frizbee.fr"
                class="text-sm sm:text-base hover:text-amber-400 transition-all duration-300"
              >contact@frizbee.fr</a
              >
            </li>
            <li class="flex items-center gap-2 text-slate-300">
              <UIcon name="i-lucide-phone" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <a
                href="tel:0123456789"
                class="text-sm sm:text-base hover:text-amber-400 transition-all duration-300"
              >01 23 45 67 89</a
              >
            </li>
            <li class="flex items-center gap-2 text-slate-300">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span class="text-sm sm:text-base">{{ $t('footer.location') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-slate-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-slate-400">
        <p class="text-sm sm:text-base">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const services = [
  'footer.servicesList.websites',
  'footer.servicesList.ecommerce',
  'footer.servicesList.webapps',
  'footer.servicesList.seo'
].map((service) => t(service))

const quickLinks = [
  { path: '/about', label: t('footer.quickLinksList.about') },
  { path: '/portfolio', label: t('footer.quickLinksList.portfolio') },
  { path: '/pricing', label: t('footer.quickLinksList.pricing') },
  { path: '/contact', label: t('footer.quickLinksList.contact') }
]
</script>
