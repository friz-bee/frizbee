<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <HeroSection :title="$t('portfolio.title')" :subtitle="$t('portfolio.subtitle')" />

    <!-- Projects Grid -->
    <section id="projects" class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/10"
          >
            <div class="aspect-video relative overflow-hidden">
              <iframe
                v-if="project.project_url"
                :src="project.project_url"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div
                v-else
                class="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center"
              >
                <UIcon name="i-lucide-globe" class="w-12 h-12 text-primary-500/50" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2">{{ getTranslation(project)?.title }}</h3>
              <p class="text-gray-300 mb-3 text-sm">
                {{ getTranslation(project)?.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <UBadge
                  v-for="tech in project.tech_stack"
                  :key="tech"
                  color="primary"
                  variant="outline"
                  size="sm"
                >
                  {{ tech }}
                </UBadge>
              </div>
              <a
                v-if="project.project_url"
                :href="project.project_url"
                target="_blank"
                class="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-400 to-primary-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-md"
              >
                {{ $t('portfolio.projects.view') }}
                <svg
                  class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 border-t border-slate-700">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">{{ $t('portfolio.cta.title') }}</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ $t('portfolio.cta.description') }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
        >
          {{ $t('portfolio.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('portfolio.title'),
  meta: [
    { name: 'description', content: t('portfolio.subtitle') },
    { property: 'og:title', content: t('portfolio.title') },
    { property: 'og:description', content: t('portfolio.subtitle') },
    { property: 'og:type', content: 'website' }
  ]
})

const localePath = useLocalePath()
const { locale } = useI18n()
const { data: projects } = await useFetch<Project[]>('/api/projects')
const { data: languages } = await useFetch<Language[]>('/api/languages')

const getTranslation = (project: Project) => {
  const currentLocale = locale.value
  const defaultTranslation = project.translations[0]

  // Try to find translation for current locale
  const translation = project.translations.find((t) => {
    const language = languages.value?.find((l) => l.id === t.language_id)
    return language?.code === currentLocale
  })

  return translation || defaultTranslation
}

// Force update when locale changes
watch(locale, () => {
  // This will trigger a re-render of the component
  projects.value = [...(projects.value || [])]
})
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

iframe {
  transform: scale(0.25);
  transform-origin: 0 0;
  width: 400%;
  height: 400%;
}
</style>
