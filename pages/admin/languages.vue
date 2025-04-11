<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">{{ $t('admin.languages.title') }}</h1>
      <UButton icon="i-lucide-plus" color="primary" @click="openAddModal">
        {{ $t('admin.languages.add') }}
      </UButton>
    </div>

    <UTable
      :data="languages"
      :columns="columns"
      :loading="loading"
      class="bg-white dark:bg-gray-800 rounded-lg shadow"
      :ui="{
        thead: 'bg-gray-50 dark:bg-gray-700',
        th: 'px-4 py-3.5 text-sm font-semibold text-gray-900 dark:text-gray-100',
        td: 'px-4 py-3.5 text-sm text-gray-500 dark:text-gray-400'
      }"
    >
      <template #empty-state>
        <div class="flex flex-col items-center justify-center py-6">
          <UIcon
            name="i-lucide-languages"
            class="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4"
          />
          <p class="text-gray-500 dark:text-gray-400">{{ $t('admin.languages.empty') }}</p>
        </div>
      </template>
    </UTable>

    <!-- Add/Edit Language Modal -->
    <UModal
      v-model:open="isAddLanguageModalOpen"
      :title="editingLanguage ? $t('admin.languages.edit') : $t('admin.languages.add')"
      :description="$t('admin.languages.modalDescription')"
      :ui="{ footer: { base: 'flex justify-end' } }"
      @close="closeModal"
    >
      <template #body>
        <UForm :schema="schema" :state="form" class="gap-y-4" @submit="saveLanguage">
          <FormInput
            v-model="form.name"
            :label="$t('admin.languages.name')"
            name="name"
            :placeholder="$t('admin.languages.namePlaceholder')"
            required
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-globe" class="size-6" />
            </template>
          </FormInput>

          <FormInput
            v-model="form.code"
            :label="$t('admin.languages.code')"
            name="code"
            :placeholder="$t('admin.languages.codePlaceholder')"
            required
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-code" class="size-6" />
            </template>
          </FormInput>

          <UFormField>
            <UCheckbox v-model="form.is_default" :label="$t('admin.languages.setDefault')" />
          </UFormField>

          <div class="flex justify-end gap-4 mt-4">
            <UButton color="neutral" variant="outline" @click="closeModal">
              {{ $t('admin.languages.cancel') }}
            </UButton>
            <UButton type="submit" color="primary" :loading="isSubmitting">
              {{ $t('admin.languages.save') }}
            </UButton>
          </div>
        </UForm>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui/dist/module'
import { UBadge, UDropdownMenu, UButton } from '#components'

const { t } = useI18n()

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})
const { error: showError, success: showSuccess } = useNotifications()

const { fetch } = useApi()
const { state: form, setState, schema, reset } = useLanguageForm()

const loading = ref(false)
const languages = ref<Language[]>([])
const isAddLanguageModalOpen = ref(false)
const editingLanguage = ref<Language | null>(null)
const isSubmitting = ref(false)

const columns: TableColumn<Language>[] = [
  {
    accessorKey: 'id',
    header: () => t('admin.languages.id'),
    cell: ({ row }) => `#${row.getValue('id')}`,
    size: 100
  },
  {
    accessorKey: 'name',
    header: () => t('admin.languages.name'),
    cell: ({ row }) => row.getValue('name'),
    size: 200
  },
  {
    accessorKey: 'code',
    header: () => t('admin.languages.code'),
    cell: ({ row }) => row.getValue('code'),
    size: 100
  },
  {
    accessorKey: 'is_default',
    header: () => t('admin.languages.default'),
    cell: ({ row }) =>
      h('div', [
        row.getValue('is_default')
          ? h(
            UBadge,
            {
              color: 'primary',
              variant: 'subtle',
              class: 'font-medium'
            },
            () => t('admin.languages.default')
          )
          : null
      ]),
    size: 100
  },
  {
    accessorKey: 'actions',
    header: () => h('div', { class: 'text-center' }, t('admin.languages.actions')),
    cell: ({ row }) =>
      h('div', { class: 'flex justify-center items-center' }, [
        h(
          UDropdownMenu,
          {
            content: { align: 'end' },
            items: [
              {
                label: t('admin.languages.edit'),
                icon: 'i-lucide-edit',
                onSelect: () => editLanguage(row.original)
              },
              {
                label: t('admin.languages.delete'),
                icon: 'i-lucide-trash',
                color: 'error',
                onSelect: () => deleteLanguage(row.original)
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

const fetchLanguages = async () => {
  try {
    loading.value = true
    const data = await fetch<Language[]>('/api/languages')
    languages.value = data
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

const editLanguage = (language: Language) => {
  editingLanguage.value = language
  setState({
    name: language.name,
    code: language.code,
    is_default: language.is_default
  })
  isAddLanguageModalOpen.value = true
}

const deleteLanguage = async (language: Language) => {
  try {
    await fetch(`/api/languages/${language.id}`, {
      method: 'DELETE'
    })
    await fetchLanguages()
    showSuccess(t('admin.languages.success.delete'), t('admin.languages.success.deleteMessage'))
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.languages.errors.delete'), t('admin.languages.errors.unknown'))
    } else {
      showError(t('admin.languages.errors.delete'), t(`admin.languages.errors.${err.data.message}`))
    }
  }
}

const saveLanguage = async () => {
  try {
    isSubmitting.value = true
    const url = editingLanguage.value
      ? `/api/languages/${editingLanguage.value.id}`
      : '/api/languages'

    const method = editingLanguage.value ? 'PUT' : 'POST'

    await fetch<Language>(url, {
      method,
      body: form
    })

    await fetchLanguages()
    closeModal()
    showSuccess(
      t('admin.languages.success.save'),
      editingLanguage.value
        ? t('admin.languages.success.updateMessage')
        : t('admin.languages.success.createMessage')
    )
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.languages.errors.save'), t('admin.languages.errors.unknown'))
    } else {
      showError(t('admin.languages.errors.save'), t(`admin.languages.errors.${err.data.message}`))
    }
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  isAddLanguageModalOpen.value = false
  editingLanguage.value = null
  reset()
}

const openAddModal = () => {
  editingLanguage.value = null
  reset()
  isAddLanguageModalOpen.value = true
}

onMounted(() => {
  fetchLanguages()
})
</script>
