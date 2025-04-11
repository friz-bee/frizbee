<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">{{ $t('admin.dashboard.title') }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium">{{ $t('admin.dashboard.stats.admins') }}</h3>
            <UIcon name="i-lucide-users" class="w-5 h-5 text-primary-500" />
          </div>
        </template>
        <div class="text-3xl font-bold">{{ stats.admins }}</div>
        <div class="text-sm text-gray-500 mt-1">
          {{ $t('admin.dashboard.stats.adminsDescription') }}
        </div>
      </UCard>

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
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { error: showError } = useNotifications()
const { fetch } = useApi()

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})

const stats = ref({
  languages: 0,
  projects: 0,
  translations: 0,
  admins: 0
})

const loading = ref(false)

const fetchStats = async () => {
  try {
    loading.value = true
    const data = await fetch<typeof stats.value>('/api/stats')
    stats.value = data
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.dashboard.errors.fetch'), t('admin.dashboard.errors.unknown'))
    } else {
      showError(t('admin.dashboard.errors.fetch'), t(`admin.dashboard.errors.${err.data.message}`))
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchStats()
})
</script>
