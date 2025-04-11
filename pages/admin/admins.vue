<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">{{ $t('admin.users.title') }}</h1>
      <UButton icon="i-lucide-plus" color="primary" @click="openAddModal">
        {{ $t('admin.users.add') }}
      </UButton>
    </div>

    <UTable
      :data="users"
      :columns="columns"
      :loading="loading"
      class="bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <template #empty-state>
        <div class="flex flex-col items-center justify-center py-6">
          <UIcon name="i-lucide-users" class="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" />
          <p class="text-gray-500 dark:text-gray-400">{{ $t('admin.users.empty') }}</p>
        </div>
      </template>
    </UTable>

    <UModal
      v-model:open="isAddUserModalOpen"
      :title="editingUser ? $t('admin.users.edit') : $t('admin.users.add')"
      :description="$t('admin.users.modalDescription')"
      @close="closeModal"
    >
      <template #body>
        <UForm :schema="schema" :state="form" class="gap-y-4" @submit="saveUser">
          <FormInput
            v-model="form.name"
            :label="$t('admin.users.name')"
            name="name"
            :placeholder="$t('admin.users.namePlaceholder')"
            required
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-user" class="size-6" />
            </template>
          </FormInput>

          <FormInput
            v-model="form.email"
            :label="$t('admin.users.email')"
            name="email"
            :placeholder="$t('admin.users.emailPlaceholder')"
            type="email"
            required
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-mail" class="size-6" />
            </template>
          </FormInput>

          <FormPassword
            v-model="form.password"
            :label="$t('admin.users.password')"
            name="password"
            :placeholder="$t('admin.users.passwordPlaceholder')"
            :required="!editingUser"
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-lock" class="size-6" />
            </template>
          </FormPassword>

          <FormPassword
            v-model="form.confirmPassword"
            :label="$t('admin.users.confirmPassword')"
            name="confirmPassword"
            :placeholder="$t('admin.users.confirmPasswordPlaceholder')"
            :required="!editingUser"
            admin
          >
            <template #leading>
              <UIcon name="i-lucide-lock" class="size-6" />
            </template>
          </FormPassword>

          <div class="flex justify-end gap-4 mt-4">
            <UButton color="neutral" variant="outline" @click="closeModal">
              {{ $t('admin.users.cancel') }}
            </UButton>
            <UButton type="submit" color="primary" :loading="isSubmitting">
              {{ $t('admin.users.save') }}
            </UButton>
          </div>
        </UForm>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui/dist/module'
import { UDropdownMenu, UButton } from '#components'

const { t } = useI18n()

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})
const adminMeta = useAdminMeta(t('admin.users.title'))
useHead(adminMeta)

const { state: form, setState, schema, reset } = useAdminForm()
const { error: showError, success: showSuccess } = useNotifications()
const { fetch } = useApi()

const loading = ref(false)
const isSubmitting = ref(false)
const users = ref<Admin[]>([])
const isAddUserModalOpen = ref(false)
const editingUser = ref<Admin | null>(null)

const columns: TableColumn<Admin>[] = [
  {
    accessorKey: 'id',
    header: () => t('admin.users.id'),
    cell: ({ row }) => `#${row.getValue('id')}`,
    size: 100
  },
  {
    accessorKey: 'username',
    header: () => t('admin.users.name'),
    cell: ({ row }) => row.getValue('username'),
    size: 200
  },
  {
    accessorKey: 'email',
    header: () => t('admin.users.email'),
    cell: ({ row }) => row.getValue('email'),
    size: 200
  },
  {
    accessorKey: 'actions',
    header: () => h('div', { class: 'text-center' }, t('admin.users.actions')),
    cell: ({ row }) =>
      h('div', { class: 'flex justify-center items-center' }, [
        h(
          UDropdownMenu,
          {
            content: { align: 'end' },
            items: [
              {
                label: t('admin.users.edit'),
                icon: 'i-lucide-edit',
                onSelect: () => editUser(row.original)
              },
              ...(row.original.id !== 1
                ? [
                  {
                    label: t('admin.users.delete'),
                    icon: 'i-lucide-trash',
                    color: 'error',
                    onSelect: () => deleteUser(row.original)
                  }
                ]
                : [])
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

const fetchUsers = async () => {
  try {
    loading.value = true
    const data = await fetch<Admin[]>('/api/admin/users')
    const currentUser = await fetch<Admin>('/api/admin/me')

    // Filter out super admin (id 1) unless current user is super admin
    users.value = data.filter((user) => user.id !== 1 || (user.id === 1 && currentUser.id === 1))
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.users.errors.fetch'), t('admin.users.errors.unknown'))
    } else {
      showError(t('admin.users.errors.fetch'), t(`admin.users.errors.${err.data.message}`))
    }
  } finally {
    loading.value = false
  }
}

const editUser = (user: Admin) => {
  editingUser.value = user
  setState({
    name: user.username,
    email: user.email,
    password: ''
  })
  isAddUserModalOpen.value = true
}

const deleteUser = async (user: Admin) => {
  if (user.id === 1) {
    showError(t('admin.users.errors.delete'), t('admin.users.errors.cannotDeleteSuperAdmin'))
    return
  }

  try {
    await fetch(`/api/admin/users/${user.id}`, {
      method: 'DELETE'
    })
    await fetchUsers()
    showSuccess(t('admin.users.success.delete'), t('admin.users.success.deleteMessage'))
  } catch (err: any) {
    if (!err.data) {
      showError(t('admin.users.errors.delete'), t('admin.users.errors.unknown'))
    } else {
      showError(t('admin.users.errors.delete'), t(`admin.users.errors.${err.data.message}`))
    }
  }
}

const saveUser = async () => {
  try {
    isSubmitting.value = true
    const url = editingUser.value ? `/api/admin/users/${editingUser.value.id}` : '/api/admin/users'

    const method = editingUser.value ? 'PUT' : 'POST'

    const userData = {
      username: form.name,
      email: form.email,
      password: form.password
    }

    await fetch<Admin>(url, {
      method,
      body: userData
    })

    await fetchUsers()
    closeModal()
    showSuccess(
      t('admin.users.success.save'),
      editingUser.value
        ? t('admin.users.success.updateMessage')
        : t('admin.users.success.createMessage')
    )
  } catch (err: any) {
    showError(t('admin.users.errors.save'), t(`admin.users.errors.${err.data.message}`))
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  isAddUserModalOpen.value = false
  editingUser.value = null
  reset()
}

const openAddModal = () => {
  editingUser.value = null
  reset()
  isAddUserModalOpen.value = true
}

onMounted(() => {
  fetchUsers()
})
</script>
