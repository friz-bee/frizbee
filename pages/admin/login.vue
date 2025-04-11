<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <UCard
      class="w-full max-w-md"
      :ui="{
        base: 'bg-slate-800',
        header: 'bg-slate-800',
        body: 'bg-slate-800'
      }"
    >
      <template #header>
        <h2 class="text-2xl font-bold text-center text-white">
          {{ $t('admin.login.title') }}
        </h2>
      </template>

      <UForm :schema="schema" :state="state" @submit="handleLogin">
        <div class="gap-y-4 flex flex-col gap-4">
          <FormInput
            v-model="state.email"
            :label="$t('admin.login.email')"
            name="email"
            type="email"
            :placeholder="$t('admin.login.emailPlaceholder')"
            required
          >
            <template #leading>
              <UIcon name="i-lucide-mail" class="size-6" />
            </template>
          </FormInput>

          <FormPassword
            v-model="state.password"
            :label="$t('admin.login.password')"
            name="password"
            :placeholder="$t('admin.login.passwordPlaceholder')"
            required
          >
            <template #leading>
              <UIcon name="i-lucide-lock" class="size-6" />
            </template>
          </FormPassword>

          <UButton
            type="submit"
            block
            :loading="pending"
            :disabled="!state.email || !state.password"
            class="w-fit self-center"
            size="lg"
            color="primary"
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
