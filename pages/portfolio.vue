<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <HeroSection :title="$t('portfolio.title')" :subtitle="$t('portfolio.subtitle')" />

    <!-- Projects Grid -->
    <section id="projects" class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 transform hover:-translate-y-1"
          >
            <!-- Glass effect overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Project image/video -->
            <div class="aspect-video relative overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"
              ></div>
              <iframe
                v-if="project.project_url"
                :src="project.project_url"
                class="w-full h-full relative z-0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div
                v-else
                class="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center relative z-0"
              >
                <UIcon
                  name="i-lucide-globe"
                  class="w-16 h-16 text-primary-500/50 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <!-- Hover overlay -->
              <div
                class="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
              ></div>
            </div>

            <!-- Content -->
            <div class="p-6 relative z-30">
              <!-- Main tech badge -->
              <div class="absolute -top-4 left-6">
                <div
                  class="bg-gradient-to-r from-primary-400 to-primary-500 text-black px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg"
                >
                  {{ project.tech_stack[0] }}
                </div>
              </div>

              <h3
                class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300"
              >
                {{ getTranslation(project)?.title }}
              </h3>
              <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                {{ getTranslation(project)?.description }}
              </p>

              <!-- Tech stack -->
              <div class="flex flex-wrap gap-2 mb-6">
                <UBadge
                  v-for="tech in project.tech_stack.slice(1)"
                  :key="tech"
                  color="primary"
                  variant="outline"
                  size="sm"
                  class="backdrop-blur-sm group-hover:bg-primary-500/10 transition-colors duration-300"
                >
                  {{ tech }}
                </UBadge>
              </div>

              <!-- View button -->
              <a
                v-if="project.project_url"
                :href="project.project_url"
                target="_blank"
                class="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-400 to-primary-500 text-black px-6 py-3 rounded-xl text-sm font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 transform hover:-translate-y-0.5 relative overflow-hidden group/btn"
              >
                <span class="relative z-10">{{ $t('portfolio.projects.view') }}</span>
                <svg
                  class="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
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
                <div
                  class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 bg-gradient-to-r from-primary-500 to-primary-600 transition-transform duration-500"
                ></div>
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

  const translation = project.translations.find((t) => {
    const language = languages.value?.find((l) => l.id === t.language_id)
    return language?.code === currentLocale
  })

  return translation || defaultTranslation
}

watch(locale, () => {
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
