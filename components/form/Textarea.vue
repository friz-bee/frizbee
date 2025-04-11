<template>
  <UFormField
    :label="label"
    :name="name"
    :ui="{ label: admin ? 'text-black' : 'text-white' }"
    :required="required"
  >
    <UTextarea
      :model-value="modelValue"
      color="primary"
      variant="outline"
      :ui="
        admin
          ? {
            base: 'text-base',
            input: 'text-base',
            icon: 'text-base'
          }
          : {
            base: 'bg-slate-800 text-white text-base',
            input: 'text-white placeholder-gray-400',
            icon: 'text-gray-400'
          }
      "
      class="w-full"
      :rows="rows"
      :placeholder="placeholder || $t(`contact.form.${name}Placeholder`)"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <template #error="{ error }">
      <span class="text-red-400 text-sm">{{ error }}</span>
    </template>
  </UFormField>
</template>

<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  modelValue: string
  label: string
  name: string
  required?: boolean
  rows?: number
  placeholder?: string
  admin?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
