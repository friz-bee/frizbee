<template>
  <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <HeroSection :title="$t('contact.title')" :subtitle="$t('contact.subtitle')" />

    <!-- Contact Form Section -->
    <section id="contact-form" class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <UCard
            class="mb-16"
            :ui="{
              base: 'bg-slate-800',
              header: 'bg-slate-800',
              body: 'bg-slate-800'
            }"
          >
            <template #header>
              <h2 class="text-2xl font-bold text-center text-white">
                {{ $t('contact.form.title') }}
              </h2>
            </template>

            <UForm :schema="schema" :state="state" class="gap-y-6" @submit="handleSubmit">
              <div class="grid md:grid-cols-2 gap-6">
                <FormInput
                  v-model="state.name"
                  :label="$t('contact.form.name')"
                  :placeholder="$t('contact.form.namePlaceholder')"
                  name="name"
                  required
                >
                  <template #leading>
                    <UIcon name="i-lucide:pencil" class="size-6" />
                  </template>
                </FormInput>

                <FormInput
                  v-model="state.email"
                  :label="$t('contact.form.email')"
                  :placeholder="$t('contact.form.emailPlaceholder')"
                  name="email"
                  type="email"
                  required
                >
                  <template #leading>
                    <UIcon name="i-lucide:at-sign" class="size-6" />
                  </template>
                </FormInput>
              </div>

              <FormSelect
                v-model="state.subject"
                :label="$t('contact.form.subject')"
                name="subject"
                :items="subjectOptions"
                :placeholder="$t('contact.form.subjectPlaceholder')"
                required
              />

              <FormTextarea
                v-model="state.message"
                :label="$t('contact.form.message')"
                name="message"
                :placeholder="$t('contact.form.messagePlaceholder')"
                required
                :rows="5"
              />

              <div class="flex justify-end">
                <UButton
                  type="submit"
                  color="primary"
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                  size="lg"
                >
                  {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
                </UButton>
              </div>
            </UForm>
          </UCard>

          <div class="mt-16 grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg mb-4 mx-auto flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ $t('contact.contactInfo.email') }}</h3>
              <p class="text-gray-400">contact@frizbee.fr</p>
            </div>
            <div class="text-center">
              <div
                class="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg mb-4 mx-auto flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ $t('contact.contactInfo.phone') }}</h3>
              <p class="text-gray-400">01 23 45 67 89</p>
            </div>
            <div class="text-center">
              <div
                class="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg mb-4 mx-auto flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ $t('contact.contactInfo.address') }}</h3>
              <p class="text-gray-400">
                {{ $t('contact.contactInfo.addressLine1') }}<br />{{
                  $t('contact.contactInfo.addressLine2')
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section id="map" class="py-20 relative border-t border-slate-700">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1635167261304!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
              class="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { state, schema, reset } = useContactForm()
const isSubmitting = ref(false)
const { success, error } = useNotifications()

const subjectOptions = [
  { label: t('contact.form.subjectOptions.site-vitrine'), value: 'site-vitrine' },
  { label: t('contact.form.subjectOptions.e-commerce'), value: 'e-commerce' },
  { label: t('contact.form.subjectOptions.application'), value: 'application' },
  { label: t('contact.form.subjectOptions.autre'), value: 'autre' }
]

const handleSubmit = async () => {
  try {
    isSubmitting.value = true

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Réinitialiser le formulaire
    reset()

    // Afficher un message de succès
    success(t('contact.success.title'), t('contact.success.description'))
  } catch (errors) {
    console.error(errors)
    error(t('contact.form.errors.validation'), t('contact.form.errors.general'))
  } finally {
    isSubmitting.value = false
  }
}
</script>
