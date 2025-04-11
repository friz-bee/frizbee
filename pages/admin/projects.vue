<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">{{ $t('admin.projects.title') }}</h1>
      <UButton icon="i-lucide-plus" color="primary" @click="openAddModal">
        {{ $t('admin.projects.add') }}
      </UButton>
    </div>

    <UTable
      :data="projects"
      :columns="columns"
      :loading="loading"
      class="bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <template #empty-state>
        <div class="flex flex-col items-center justify-center py-6">
          <UIcon name="i-lucide-folder" class="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" />
          <p class="text-gray-500 dark:text-gray-400">{{ $t('admin.projects.empty') }}</p>
        </div>
      </template>
    </UTable>

    <UModal
      v-model:open="isAddProjectModalOpen"
      :title="editingProject ? $t('admin.projects.edit') : $t('admin.projects.add')"
      :description="$t('admin.projects.modalDescription')"
      @close="closeModal"
    >
      <template #body>
        <UForm :schema="schema" :state="form" class="gap-y-4" @submit="saveProject">
          <FormInput
            v-model="form.slug"
            :label="$t('admin.projects.slug')"
            name="slug"
            :placeholder="$t('admin.projects.slugPlaceholder')"
            required
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-link" class="size-6" />
            </template>
          </FormInput>

          <FormInput
            v-model="form.project_url"
            :label="$t('admin.projects.projectUrl')"
            name="project_url"
            :placeholder="$t('admin.projects.projectUrlPlaceholder')"
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-globe" class="size-6" />
            </template>
          </FormInput>

          <FormTextarea
            v-model="form.tech_stack"
            :label="$t('admin.projects.techStack')"
            name="tech_stack"
            :placeholder="$t('admin.projects.techStackPlaceholder')"
            :rows="3"
            admin
          />

          <div class="space-y-6">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-medium">{{ $t('admin.projects.translations') }}</h3>
              <UButton
                icon="i-lucide-plus"
                color="primary"
                variant="outline"
                :disabled="form.translations.length >= languages.length"
                @click="addTranslation"
              >
                {{ $t('admin.projects.addTranslation') }}
              </UButton>
            </div>

            <div
              v-for="(translation, index) in form.translations"
              :key="index"
              class="space-y-4 p-4 border rounded-lg"
            >
              <div class="flex justify-between items-center">
                <h4 class="text-md font-medium">
                  {{ $t('admin.projects.translation') }} -
                  {{ languages.find((lang) => lang.value === translation.language_id)?.label }}
                </h4>
                <UButton
                  v-if="form.translations.length > 1"
                  icon="i-lucide-trash"
                  color="red"
                  variant="ghost"
                  @click="removeTranslation(index)"
                />
              </div>

              <UFormField :label="$t('admin.projects.language')">
                <USelectMenu
                  v-model="translation.language_id"
                  :items="
                    languages.filter(
                      (lang) =>
                        !form.translations.some(
                          (t) => t.language_id === lang.value && t !== translation
                        )
                    )
                  "
                  value-key="value"
                  :placeholder="$t('admin.projects.selectLanguage')"
                  class="w-full"
                />
              </UFormField>

              <FormInput
                v-model="translation.title"
                :label="$t('admin.projects.title')"
                :name="`translations[${index}].title`"
                :placeholder="$t('admin.projects.titlePlaceholder')"
                required
                admin
              />

              <FormTextarea
                v-model="translation.description"
                :label="$t('admin.projects.description')"
                :name="`translations[${index}].description`"
                :placeholder="$t('admin.projects.descriptionPlaceholder')"
                :rows="4"
                admin
              />
            </div>
          </div>

          <div class="flex justify-end gap-4 mt-4">
            <UButton color="neutral" variant="outline" @click="closeModal">
              {{ $t('admin.projects.cancel') }}
            </UButton>
            <UButton type="submit" color="primary" :loading="isSubmitting">
              {{ $t('admin.projects.save') }}
            </UButton>
          </div>
        </UForm>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui/dist/module'
import { UDropdownMenu, UButton, UModal, USelectMenu, UBadge } from '#components'

const { t } = useI18n()

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})
const adminMeta = useAdminMeta(t('admin.projects.title'))
useHead(adminMeta)

const { state: form, setState, schema, reset } = useProjectForm()
const { error: showError, success: showSuccess } = useNotifications()
const { fetch } = useApi()

const loading = ref(false)
const isSubmitting = ref(false)
const projects = ref<Project[]>([])
const languages = ref<{ label: string; value: number }[]>([])
const isAddProjectModalOpen = ref(false)
const editingProject = ref<Project | null>(null)

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'id',
    header: () => t('admin.projects.id'),
    cell: ({ row }) => `#${row.getValue('id')}`,
    size: 100
  },
  {
    accessorKey: 'slug',
    header: () => t('admin.projects.slug'),
    cell: ({ row }) => row.getValue('slug'),
    size: 200
  },
  {
    accessorKey: 'translations',
    header: () => t('admin.projects.title'),
    cell: ({ row }) => {
      const translations = row.getValue('translations') as ProjectTranslation[]
      return translations[0]?.title || '-'
    },
    size: 200
  },
  {
    accessorKey: 'tech_stack',
    header: () => t('admin.projects.techStack'),
    cell: ({ row }) => {
      const techStack = row.getValue('tech_stack') as string[]
      return h(
        'div',
        { class: 'flex flex-wrap gap-2' },
        techStack?.map((tech) =>
          h(
            UBadge,
            {
              color: 'primary',
              variant: 'outline'
            },
            tech.trim()
          )
        ) || '-'
      )
    },
    size: 200
  },
  {
    accessorKey: 'actions',
    header: () => h('div', { class: 'text-center' }, t('admin.projects.actions')),
    cell: ({ row }) =>
      h('div', { class: 'flex justify-center items-center' }, [
        h(
          UDropdownMenu,
          {
            content: { align: 'end' },
            items: [
              {
                label: t('admin.projects.edit'),
                icon: 'i-lucide-edit',
                onSelect: () => editProject(row.original)
              },
              {
                label: t('admin.projects.delete'),
                icon: 'i-lucide-trash',
                color: 'error',
                onSelect: () => deleteProject(row.original)
              }
            ],
            'aria-label': 'Actions dropdown'
          },
          () => [
            h(UButton, {
              color: 'gray',
              variant: 'ghost',
              icon: 'i-lucide-more-vertical',
              class:
                'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700',
              'aria-label': 'Actions dropdown'
            })
          ]
        )
      ]),
    size: 100
  }
]

const fetchProjects = async () => {
  try {
    loading.value = true
    const data = await fetch<Project[]>('/api/projects')
    projects.value = data
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.projects.errors.fetch'), t('admin.projects.errors.unknown'))
    } else {
      showError(t('admin.projects.errors.fetch'), t(`admin.projects.errors.${err.data.message}`))
    }
  } finally {
    loading.value = false
  }
}

const fetchLanguages = async () => {
  try {
    loading.value = true
    const data = await fetch<Language[]>('/api/languages')
    languages.value = data.map((lang) => ({
      label: lang.name,
      value: lang.id
    }))
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.languages.errors.fetch'), t('admin.languages.errors.unknown'))
    } else {
      showError(t('admin.languages.errors.fetch'), t(`admin.languages.errors.${err.data.message}`))
    }
  } finally {
    loading.value = false
  }
}

const editProject = (project: Project) => {
  editingProject.value = project
  setState({
    slug: project.slug,
    tech_stack: project.tech_stack.join(', '),
    project_url: project.project_url || '',
    translations: project.translations
  })
  isAddProjectModalOpen.value = true
}

const deleteProject = async (project: Project) => {
  try {
    await fetch(`/api/projects/${project.id}`, {
      method: 'DELETE'
    })
    await fetchProjects()
    showSuccess(t('admin.projects.success.delete'), t('admin.projects.success.deleteMessage'))
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.projects.errors.delete'), t('admin.projects.errors.unknown'))
    } else {
      showError(t('admin.projects.errors.delete'), t(`admin.projects.errors.${err.data.message}`))
    }
  }
}

const saveProject = async () => {
  try {
    isSubmitting.value = true
    const url = editingProject.value ? `/api/projects/${editingProject.value.id}` : '/api/projects'

    const method = editingProject.value ? 'PUT' : 'POST'

    const projectData = {
      slug: form.slug,
      tech_stack: form.tech_stack.split(',').map((tech) => tech.trim()),
      project_url: form.project_url,
      translations: form.translations
    }

    await fetch<Project>(url, {
      method,
      body: projectData
    })

    await fetchProjects()
    closeModal()
    showSuccess(
      t('admin.projects.success.save'),
      editingProject.value
        ? t('admin.projects.success.updateMessage')
        : t('admin.projects.success.createMessage')
    )
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.projects.errors.save'), t('admin.projects.errors.unknown'))
    } else {
      showError(t('admin.projects.errors.save'), t(`admin.projects.errors.${err.data.message}`))
    }
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  isAddProjectModalOpen.value = false
  editingProject.value = null
  reset()
}

const openAddModal = () => {
  editingProject.value = null
  reset()
  isAddProjectModalOpen.value = true
}

const addTranslation = () => {
  form.translations.push({
    language_id: 0,
    title: '',
    description: ''
  })
}

const removeTranslation = (index: number) => {
  form.translations.splice(index, 1)
}

onMounted(() => {
  fetchProjects()
  fetchLanguages()
})
</script>
