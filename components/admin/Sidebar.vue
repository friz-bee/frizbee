<template>
  <aside class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg">
    <div class="h-full flex flex-col">
      <!-- Logo -->
      <div class="flex items-center justify-center h-16 px-4 border-b dark:border-gray-700">
        <NuxtLink to="/admin" class="text-xl font-bold text-gray-900 dark:text-gray-100">
          Frizbee Admin
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <div class="flex-1 px-3 py-4 overflow-y-auto">
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="/admin"
              class="flex items-center p-2 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              active-class="bg-gray-100 dark:bg-gray-700"
            >
              <UIcon name="i-lucide-layout-dashboard" class="w-5 h-5" />
              <span class="ml-3">{{ $t('admin.sidebar.dashboard') }}</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/admin/languages"
              class="flex items-center p-2 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              active-class="bg-gray-100 dark:bg-gray-700"
            >
              <UIcon name="i-lucide-globe" class="w-5 h-5" />
              <span class="ml-3">{{ $t('admin.sidebar.languages') }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- User Info -->
      <div class="p-4 border-t dark:border-gray-700">
        <div class="flex items-center space-x-3 mb-4">
          <UAvatar
            :text="user?.username?.charAt(0).toUpperCase()"
            size="lg"
            class="bg-primary-500 text-white"
          />
          <div>
            <p class="font-medium text-gray-900 dark:text-gray-100">{{ user?.username }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ user?.email }}</p>
          </div>
        </div>

        <!-- User Menu -->
        <UButton
          color="gray"
          variant="ghost"
          class="w-full flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="handleLogout"
        >
          <UIcon name="i-lucide-log-out" class="w-5 h-5" />
          <span class="flex-1 text-left">{{ $t('admin.sidebar.logout') }}</span>
        </UButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
interface User {
  username: string
  email: string
}

const session = useCookie<User>('auth-session')
const localePath = useLocalePath()

const user = computed(() => {
  try {
    return session.value
  } catch {
    return null
  }
})

const handleLogout = async () => {
  try {
    const token = useCookie('auth-token')
    const session = useCookie('auth-session')

    token.value = null
    session.value = null

    navigateTo(localePath('/admin/login'))
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>
