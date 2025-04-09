<template>
  <div class="min-h-screen py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-8">Contactez-nous</h1>
        <p class="text-xl text-gray-400 mb-12">
          Vous avez un projet ? Parlons-en ! Remplissez le formulaire ci-dessous et nous vous
          répondrons dans les plus brefs délais.
        </p>

        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-300 mb-2"
              >Nom complet</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-gray-300 mb-2"
            >Type de projet</label
            >
            <select
              id="subject"
              v-model="form.subject"
              required
              class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
            >
              <option value="">Sélectionnez une option</option>
              <option value="site-vitrine">Site Vitrine</option>
              <option value="e-commerce">Site E-commerce</option>
              <option value="application">Application Bureautique</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-300 mb-2"
            >Votre message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-green-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-300 transition"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </div>
        </form>

        <div class="mt-16 grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-400 rounded-lg mb-4 mx-auto flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Email</h3>
            <p class="text-gray-400">contact@frizbee.fr</p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-400 rounded-lg mb-4 mx-auto flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Téléphone</h3>
            <p class="text-gray-400">01 23 45 67 89</p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-400 rounded-lg mb-4 mx-auto flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h3 class="text-lg font-semibold mb-2">Adresse</h3>
            <p class="text-gray-400">123 rue de la Web Agency<br />75000 Paris</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simuler l'envoi du formulaire
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Réinitialiser le formulaire
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  isSubmitting.value = false

  // Afficher un message de succès
  alert('Votre message a été envoyé avec succès !')
}
</script>
