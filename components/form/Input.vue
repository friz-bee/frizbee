<template>
  <UFormField
    :label="label"
    :name="name"
    :ui="{ label: admin ? 'text-black' : 'text-white' }"
    :required="required"
  >
    <UInput
      :value="modelValue"
      :type="type"
      :placeholder="placeholder || $t(`contact.form.${name}Placeholder`)"
      color="primary"
      variant="outline"
      :ui="
        admin
          ? undefined
          : {
            base: 'bg-slate-800 text-white text-base',
            input: 'text-white placeholder-gray-400',
            icon: 'text-gray-400'
          }
      "
      class="w-full"
      size="xl"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <template v-if="$slots.leading" #leading>
        <slot name="leading" />
      </template>
      <template v-if="$slots.trailing" #trailing>
        <slot name="trailing" />
      </template>
    </UInput>

    <template #error="{ error }">
      <span class="text-red-400 text-sm">{{ error }}</span>
    </template>
  </UFormField>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  label: string
  name: string
  placeholder?: string
  required?: boolean
  type?: string
  admin?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
