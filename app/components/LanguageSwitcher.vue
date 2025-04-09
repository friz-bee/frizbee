<template>
  <div class="relative inline-block">
    <UButton
      :label="$i18n.locale === 'fr' ? 'FR' : 'EN'"
      color="gray"
      variant="solid"
      class="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white"
      @click="isOpen = !isOpen"
    >
      <span>{{ $i18n.locale === 'fr' ? 'FR' : 'EN' }}</span>
      <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
    </UButton>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-1 w-24 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50"
    >
      <a
        v-for="locale in availableLocales"
        :key="locale.code"
        href="#"
        class="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-white"
        :class="{ 'bg-gray-50 dark:bg-gray-700': $i18n.locale === locale.code }"
        @click.prevent="setLocale(locale.code)"
      >
        {{ locale.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)

const availableLocales = computed(() => {
  return locales.value.map(l => ({
    code: l.code,
    name: l.name
  }))
})

// Fermer le menu si on clique en dehors
onClickOutside(isOpen, () => {
  isOpen.value = false
})
</script> 