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

      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Informations de contact -->
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
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 dark:text-white mb-1">
                    Téléphone
                  </p>
                  <a
                    :href="`tel:${phoneE164}`"
                    class="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-200"
                  >
                    {{ phoneDisplay }}
                  </a>
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
                Actions rapides
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  :href="linkedinUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="h-12 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 font-semibold"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  :href="whatsappUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="h-12 px-4 bg-orange-500 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-all duration-200 font-semibold"
                >
                  <span aria-hidden="true">WhatsApp</span>
                  <span class="sr-only">Contacter via WhatsApp</span>
                </a>
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

const linkedinUrl = 'https://www.linkedin.com/in/dasieroger/'
const whatsappUrl = 'https://wa.me/225767476595'

const phoneE164 = '+22567476595'
const phoneDisplay = '+225 07 67 47 65 95'
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
