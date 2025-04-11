<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: 'Admin Panel',
  meta: [
    { name: 'description', content: 'Administration panel for Frizbee' },
    { property: 'og:title', content: 'Admin Panel' },
    { property: 'og:description', content: 'Administration panel for Frizbee' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Sidebar -->
    <AdminSidebar />

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Top Bar -->
      <header class="bg-white dark:bg-gray-800 shadow">
        <div class="px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <h1 class="text-xl font-semibold">
                <slot name="header" />
              </h1>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
