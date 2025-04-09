<template>
  <div class="flex min-h-screen items-center justify-center">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-2xl font-bold text-center text-secondary-500">
          {{ $t('admin.login.title') }}
        </h2>
      </template>

      <UForm :schema="schema" :state="state" @submit="handleLogin">
        <div class="space-y-4 flex flex-col gap-4">
          <UFormField :label="$t('admin.login.email')" name="email">
            <UInput
              v-model="state.email"
              type="email"
              :placeholder="$t('admin.login.emailPlaceholder')"
              icon="i-lucide-mail"
              class="w-full"
              size="lg"
            />
          </UFormField>

          <UFormField :label="$t('admin.login.password')" name="password">
            <UInput
              v-model="state.password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="$t('admin.login.passwordPlaceholder')"
              icon="i-lucide-lock"
              class="w-full"
              size="lg"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  size="lg"
                  :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                  :aria-label="
                    showPassword ? $t('admin.login.hidePassword') : $t('admin.login.showPassword')
                  "
                  :aria-pressed="showPassword"
                  @click="showPassword = !showPassword"
                />
              </template>
            </UInput>
          </UFormField>

          <UButton
            type="submit"
            block
            :loading="pending"
            :disabled="!state.email || !state.password"
            class="w-fit self-center"
            size="lg"
          >
            {{ $t('admin.login.submit') }}
          </UButton>
        </div>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { object, string } from 'yup'

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/admin'
  }
})

const { signIn, status } = useAuth()
const route = useRoute()
const { t } = useI18n()

const state = reactive({
  email: '',
  password: ''
})

const pending = ref(false)
const showPassword = ref(false)
const error = ref('')

const schema = object({
  email: string()
    .email(t('admin.login.errors.invalidEmail'))
    .required(t('admin.login.errors.emailRequired')),
  password: string()
    .min(8, t('admin.login.errors.passwordMinLength'))
    .required(t('admin.login.errors.passwordRequired'))
})

const handleLogin = async () => {
  try {
    pending.value = true
    error.value = ''

    const { token, user } = await $fetch('/api/admin/login', {
      method: 'POST',
      body: {
        email: state.email,
        password: state.password
      }
    })

    const authToken = useCookie('auth-token')
    const authSession = useCookie('auth-session')

    authToken.value = token
    authSession.value = JSON.stringify(user)

    navigateTo((route.query.redirect as string) || '/admin')
  } catch (err) {
    console.error('Login error:', err)
    error.value = err instanceof Error ? err.message : 'An error occurred during login'
  } finally {
    pending.value = false
  }
}
</script>
