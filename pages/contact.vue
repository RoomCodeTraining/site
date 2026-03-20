<template>
  <Header />
  <div class="min-h-screen bg-white dark:bg-slate-950 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-display px-4"
        >
          Parlons de votre
          <span class="text-orange-500 dark:text-orange-400">projet</span>
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4"
        >
          Que ce soit pour un projet de développement, une formation ou
          simplement échanger, je suis là pour vous accompagner.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <!-- Formulaire de contact -->
        <div
          class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-800"
        >
          <h2
            class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 font-display"
          >
            Envoyez-moi un message
          </h2>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Prénom *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-800 dark:text-white transition-all duration-200"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Nom *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-800 dark:text-white transition-all duration-200"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-800 dark:text-white transition-all duration-200"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Sujet *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-800 dark:text-white transition-all duration-200"
              >
                <option value="">Choisissez un sujet</option>
                <option value="formation">Formation & Coaching</option>
                <option value="projet">Projet de développement</option>
                <option value="consultation">Consultation technique</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-800 dark:text-white transition-all duration-200 resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg
                v-if="isSubmitting"
                class="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else>Envoyer le message</span>
            </button>
          </form>
        </div>

        <!-- Informations de contact -->
        <div class="space-y-8">
          <!-- Présentation -->
          <div
            class="bg-slate-900 dark:bg-slate-800 rounded-3xl p-6 sm:p-8 text-white"
          >
            <h3 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-display">
              Pourquoi me contacter ?
            </h3>
            <div class="space-y-4 sm:space-y-6">
              <div class="flex items-start gap-3 sm:gap-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-xl sm:text-2xl">🎯</span>
                </div>
                <div>
                  <h4 class="font-semibold text-base sm:text-lg mb-1">
                    Formation personnalisée
                  </h4>
                  <p class="text-slate-300 text-xs sm:text-sm">
                    Accompagnement sur 6 mois pour devenir développeur Full
                    Stack
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3 sm:gap-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-xl sm:text-2xl">💼</span>
                </div>
                <div>
                  <h4 class="font-semibold text-base sm:text-lg mb-1">
                    Développement de projet
                  </h4>
                  <p class="text-slate-300 text-xs sm:text-sm">
                    Création d'applications web modernes et performantes
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3 sm:gap-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-xl sm:text-2xl">🔧</span>
                </div>
                <div>
                  <h4 class="font-semibold text-base sm:text-lg mb-1">
                    Consultation technique
                  </h4>
                  <p class="text-slate-300 text-xs sm:text-sm">
                    Audit, optimisation et conseils sur vos projets
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Coordonnées -->
          <div
            class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800"
          >
            <h3
              class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-display"
            >
              Mes coordonnées
            </h3>
            <div class="space-y-4 sm:space-y-6">
              <div class="flex items-center gap-3 sm:gap-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 dark:text-white mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:roomcodetraining@gmail.com"
                    class="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-200"
                  >
                    roomcodetraining@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-3 sm:gap-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-1"
                  >
                    Localisation
                  </p>
                  <p
                    class="text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                  >
                    Côte d'Ivoire
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3 sm:gap-4">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 dark:text-white mb-1">
                    Réponse
                  </p>
                  <p class="text-slate-600 dark:text-slate-400">
                    Sous 24h en semaine
                  </p>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div
              class="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-700"
            >
              <h4
                class="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-3 sm:mb-4"
              >
                Suivez-moi
              </h4>
              <div class="flex gap-2 sm:gap-3">
                <a
                  href="https://www.linkedin.com/in/dasieroger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/roomdada"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Simulation d'envoi (remplacer par votre logique d'envoi)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset du formulaire
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    }

    // Message de succès (vous pouvez utiliser une notification)
    alert(
      'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
    )
  } catch (error) {
    alert("Erreur lors de l'envoi du message. Veuillez réessayer.")
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Animations d'entrée */
.grid > div {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.grid > div:nth-child(1) {
  animation-delay: 0.1s;
}
.grid > div:nth-child(2) {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
