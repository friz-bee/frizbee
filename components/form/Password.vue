<template>
  <FormInput
    v-bind="$props"
    :type="showPassword ? 'text' : 'password'"
    class="w-full"
    size="lg"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #leading>
      <UIcon name="i-lucide-lock" class="size-6" />
    </template>

    <template #trailing>
      <UButton
        color="neutral"
        variant="link"
        size="lg"
        :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
        :aria-label="showPassword ? $t('admin.login.hidePassword') : $t('admin.login.showPassword')"
        :aria-pressed="showPassword"
        @click="showPassword = !showPassword"
      />
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import FormInput from './Input.vue'

const showPassword = ref(false)

defineProps<{
  modelValue: string
  label: string
  name: string
  placeholder?: string
  required?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
