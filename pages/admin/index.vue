<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">{{ $t('admin.dashboard.title') }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium">{{ $t('admin.dashboard.stats.languages') }}</h3>
            <UIcon name="i-lucide-globe" class="w-5 h-5 text-primary-500" />
          </div>
        </template>
        <div class="text-3xl font-bold">{{ stats.languages }}</div>
        <div class="text-sm text-gray-500 mt-1">
          {{ $t('admin.dashboard.stats.languagesDescription') }}
        </div>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium">{{ $t('admin.dashboard.stats.projects') }}</h3>
            <UIcon name="i-lucide-folder" class="w-5 h-5 text-primary-500" />
          </div>
        </template>
        <div class="text-3xl font-bold">{{ stats.projects }}</div>
        <div class="text-sm text-gray-500 mt-1">
          {{ $t('admin.dashboard.stats.projectsDescription') }}
        </div>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium">{{ $t('admin.dashboard.stats.translations') }}</h3>
            <UIcon name="i-lucide-file-text" class="w-5 h-5 text-primary-500" />
          </div>
        </template>
        <div class="text-3xl font-bold">{{ stats.translations }}</div>
        <div class="text-sm text-gray-500 mt-1">
          {{ $t('admin.dashboard.stats.translationsDescription') }}
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})

const stats = ref({
  languages: 0,
  projects: 0,
  translations: 0
})

onMounted(async () => {
  try {
    const response = await fetch('/api/stats')
    if (!response.ok) throw new Error('Failed to fetch stats')
    stats.value = await response.json()
  } catch (error) {
    console.error('Error fetching stats:', error)
  }
})
</script>
