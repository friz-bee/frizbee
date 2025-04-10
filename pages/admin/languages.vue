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

      <template #isDefault-data="{ row }">
        <div class="flex justify-center">
          <UBadge
            v-if="row.getValue('isDefault')"
            color="primary"
            variant="subtle"
            class="font-medium"
          >
            {{ $t('admin.languages.default') }}
          </UBadge>
        </div>
      </template>

      <template #actions-data="{ row }">
        <div class="flex justify-center">
          <UDropdownMenu
            :content="{ align: 'end' }"
            :items="[
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
            ]"
            aria-label="Actions dropdown"
          >
            <UButton
              color="gray"
              variant="ghost"
              icon="i-lucide-more-vertical"
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Actions dropdown"
            />
          </UDropdownMenu>
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
        <UForm :state="form" class="gap-y-4">
          <UFormField label="Name" name="name">
            <UInput v-model="form.name" />
          </UFormField>

          <UFormField label="Code" name="code">
            <UInput v-model="form.code" />
          </UFormField>

          <UFormField>
            <UCheckbox v-model="form.isDefault" :label="$t('admin.languages.setDefault')" />
          </UFormField>
        </UForm>
      </template>

      <template #footer>
        <UButton color="neutral" variant="outline" @click="closeModal">
          {{ $t('admin.languages.cancel') }}
        </UButton>
        <UButton color="primary" @click="saveLanguage">
          {{ $t('admin.languages.save') }}
        </UButton>
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

const loading = ref(false)
const languages = ref<Language[]>([])

const columns: TableColumn<Language>[] = [
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
    accessorKey: 'isDefault',
    header: () => t('admin.languages.default'),
    cell: ({ row }) =>
      h('div', [
        row.getValue('isDefault')
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

const isAddLanguageModalOpen = ref(false)
const editingLanguage = ref<Language | null>(null)

const form = ref({
  name: '',
  code: '',
  isDefault: false
})

const fetchLanguages = async () => {
  try {
    loading.value = true
    const data = await fetch<Language[]>('/api/languages')
    languages.value = data
  } catch (err: any) {
    showError(t('admin.languages.error.fetch'), err.message || t('admin.languages.error.unknown'))
  } finally {
    loading.value = false
  }
}

const editLanguage = (language: Language) => {
  console.log('editLanguage called with:', language)
  editingLanguage.value = language
  form.value = {
    name: language.name,
    code: language.code,
    isDefault: language.isDefault
  }
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
    showError(t('admin.languages.error.delete'), err.message || t('admin.languages.error.unknown'))
  }
}

const saveLanguage = async () => {
  try {
    const url = editingLanguage.value
      ? `/api/languages/${editingLanguage.value.id}`
      : '/api/languages'

    const method = editingLanguage.value ? 'PUT' : 'POST'

    await fetch<Language>(url, {
      method,
      body: form.value
    }).catch((error) => {
      throw error.data
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
    if (err.message === 'uniqueCode') {
      showError(t('admin.languages.error.save'), t('admin.languages.error.uniqueCode'))
    } else {
      showError(t('admin.languages.error.save'), err.message || t('admin.languages.error.unknown'))
    }
  }
}

const closeModal = () => {
  isAddLanguageModalOpen.value = false
  editingLanguage.value = null
  form.value = {
    name: '',
    code: '',
    isDefault: false
  }
}

const openAddModal = () => {
  editingLanguage.value = null
  form.value = {
    name: '',
    code: '',
    isDefault: false
  }
  isAddLanguageModalOpen.value = true
}

onMounted(() => {
  fetchLanguages()
})
</script>
