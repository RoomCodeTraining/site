<template>
  <section
    class="relative min-h-[90vh] sm:min-h-[85vh] bg-white dark:bg-slate-950 overflow-hidden"
    aria-label="Section principale - Portfolio"
  >
    <!-- Animation Joyeux Anniversaire - légère -->
    <Transition name="birthday-fade">
      <div
        v-if="showBirthday"
        class="absolute top-4 right-4 z-50 pointer-events-none"
      >
        <div
          class="birthday-badge bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-2xl shadow-2xl shadow-orange-500/30 overflow-hidden"
        >
          <div class="px-5 py-4 flex items-center gap-4">
            <div class="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <span class="text-3xl font-black text-white">{{ age }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-white/80 text-xs font-medium uppercase tracking-widest">Joyeux</span>
              <span class="text-white text-lg font-bold -mt-0.5">Anniversaire</span>
            </div>
            <span class="text-2xl ml-1">🎂</span>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Arrière-plan amélioré avec animations -->
    <div class="absolute inset-0" aria-hidden="true">
      <!-- Gradient animé -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      ></div>

      <!-- Gradient animé orange subtil - réduit sur mobile -->
      <div
        class="absolute top-0 right-0 w-48 h-48 sm:w-64 md:w-96 sm:h-64 md:h-96 bg-orange-500/5 dark:bg-orange-400/5 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-48 h-48 sm:w-64 md:w-96 sm:h-64 md:h-96 bg-orange-500/5 dark:bg-orange-400/5 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 1s"
      ></div>

      <!-- Grille subtile animée - moins visible sur mobile -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 sm:opacity-50"
      ></div>

      <!-- Particules flottantes - cachées sur mobile -->
      <div class="absolute inset-0 overflow-hidden hidden sm:block">
        <div
          v-for="i in 6"
          :key="i"
          class="absolute w-2 h-2 bg-orange-500/20 dark:bg-orange-400/20 rounded-full animate-float"
          :style="`left: ${15 + i * 12}%; top: ${
            20 + i * 10
          }%; animation-delay: ${i * 0.5}s; animation-duration: ${
            3 + i * 0.5
          }s;`"
        ></div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div
      class="relative z-10 flex items-center min-h-[90vh] sm:min-h-[85vh] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div class="max-w-7xl mx-auto w-full">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center"
        >
          <!-- Contenu texte -->
          <div
            class="text-center sm:text-left space-y-5 sm:space-y-6 md:space-y-8"
          >
            <!-- Accroche -->
            <Transition name="fade-up" appear>
              <p
                v-if="isVisible"
                class="text-lg sm:text-xl md:text-lg text-slate-700 dark:text-slate-300 font-medium mb-3 sm:mb-2 animate-slide-in"
                style="animation-delay: 0.1s"
              >
                <span class="inline-block">Bonjour, je suis</span>
                <span class="inline-block ml-2 animate-wave">👋</span>
              </p>
            </Transition>

            <!-- Titre principal avec effet de typing -->
            <Transition name="fade-up" appear>
              <div
                v-if="isVisible"
                class="space-y-3 sm:space-y-4"
                style="animation-delay: 0.2s"
              >
                <h1
                  class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-tight"
                >
                  <span
                    class="text-orange-500 dark:text-orange-400 inline-block animate-slide-in relative"
                    style="animation-delay: 0.3s"
                  >
                    Da Sie
                    <span
                      class="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 dark:bg-orange-400 animate-underline"
                    ></span>
                  </span>
                  <span
                    class="inline-block animate-slide-in ml-2 sm:ml-3"
                    style="animation-delay: 0.4s"
                    >Roger</span
                  >
                </h1>

                <h2
                  class="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white font-display"
                >
                  <span
                    v-for="(role, index) in roles"
                    :key="index"
                    class="inline-block animate-slide-in"
                    :style="`animation-delay: ${0.5 + index * 0.1}s;`"
                  >
                    <span :class="role.class">{{ role.text }}</span>
                    <span
                      v-if="index < roles.length - 1"
                      class="text-orange-500 dark:text-orange-400 mx-1.5 sm:mx-2"
                      >•</span
                    >
                  </span>
                </h2>
              </div>
            </Transition>

            <!-- Description -->
            <Transition name="fade-up" appear>
              <p
                v-if="isVisible"
                class="text-base sm:text-lg md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto sm:mx-0 animate-slide-in font-medium"
                style="animation-delay: 0.8s"
              >
                Je construis des solutions numériques qui répondent aux défis
                d'aujourd'hui avec une vision pragmatique et tournée vers
                l'innovation locale.
              </p>
            </Transition>

            <!-- CTA amélioré -->
            <Transition name="fade-up" appear>
              <div
                v-if="isVisible"
                class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-4 justify-center sm:justify-start animate-slide-in"
                style="animation-delay: 1s"
              >
                <a
                  @click.prevent="scrollToRealisations"
                  href="#realisations"
                  class="group relative inline-flex items-center justify-center px-8 sm:px-8 py-4 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-base font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden cursor-pointer"
                  aria-label="Découvrir mes projets"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    <span>Découvrir mes projets</span>
                    <svg
                      class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </a>

                <a
                  @click.prevent="scrollToContact"
                  href="#contact"
                  class="group inline-flex items-center justify-center px-8 sm:px-8 py-4 sm:py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base sm:text-base font-bold rounded-xl transition-all duration-300 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400 shadow-sm hover:shadow-md cursor-pointer"
                  aria-label="Me contacter"
                >
                  <span>Me contacter</span>
                </a>
              </div>
            </Transition>

            <!-- Statistiques/Badges -->
            <Transition name="fade-up" appear>
              <div
                v-if="isVisible"
                class="flex flex-wrap gap-6 sm:gap-6 justify-center sm:justify-start pt-6 sm:pt-6 animate-slide-in"
                style="animation-delay: 1.2s"
              >
                <div
                  v-for="(stat, index) in stats"
                  :key="index"
                  class="flex flex-col items-center sm:items-start"
                >
                  <span
                    class="text-3xl sm:text-2xl md:text-3xl font-bold text-orange-500 dark:text-orange-400"
                    >{{ stat.value }}</span
                  >
                  <span
                    class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium"
                    >{{ stat.label }}</span
                  >
                </div>
              </div>
            </Transition>

            <!-- Informations de contact -->
            <Transition name="fade-up" appear>
              <div
                v-if="isVisible"
                class="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-6 text-sm sm:text-sm text-slate-600 dark:text-slate-400 animate-slide-in"
                style="animation-delay: 1.4s"
              >
                <span
                  class="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <span>📍</span>
                  <span>Abidjan, Côte d'Ivoire</span>
                </span>
                <span
                  class="hidden sm:inline text-orange-500 dark:text-orange-400"
                  >|</span
                >
                <span
                  class="flex items-center gap-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <span>Disponible pour échange constructif</span>
                  <span>💬</span>
                </span>
              </div>
            </Transition>
          </div>

          <!-- Avatar de profil style Grafikart amélioré -->
          <div
            class="relative hidden lg:flex justify-center lg:justify-end items-center"
          >
            <Transition name="fade-up" appear>
              <div
                v-if="isVisible"
                class="relative animate-slide-in"
                style="animation-delay: 0.6s"
              >
                <!-- Glow effect multicouche -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/15 to-orange-500/20 dark:from-orange-400/20 dark:via-orange-300/15 dark:to-orange-400/20 rounded-full blur-3xl scale-150 animate-pulse-slow"
                ></div>
                <div
                  class="absolute inset-0 bg-orange-500/10 dark:bg-orange-400/10 rounded-full blur-2xl scale-125 animate-pulse-slow"
                  style="animation-delay: 0.3s"
                ></div>

                <!-- Container avec bordure gradient -->
                <div
                  class="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full p-1 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-500 shadow-2xl transform transition-all duration-500 hover:scale-105"
                  style="
                    box-shadow: 0 0 40px rgba(249, 115, 22, 0.3),
                      0 0 80px rgba(249, 115, 22, 0.15);
                  "
                >
                  <!-- Avatar circulaire -->
                  <div
                    class="relative w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800"
                  >
                    <img
                      :src="avatarImage"
                      alt="Roger DA - Développeur Full Stack"
                      class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="eager"
                      fetchpriority="high"
                    />
                    <!-- Overlay gradient subtil pour profondeur -->
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/10 dark:to-slate-900/20"
                    ></div>
                    <!-- Reflet de lumière -->
                    <div
                      class="absolute top-0 left-1/4 w-1/3 h-1/3 bg-white/20 rounded-full blur-xl"
                    ></div>
                  </div>
                </div>

                <!-- Décoration circulaire animée améliorée -->
                <div
                  class="absolute -bottom-8 -right-8 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-2 border-orange-500/40 dark:border-orange-400/40 rounded-full animate-float-slow"
                  style="box-shadow: 0 0 20px rgba(249, 115, 22, 0.2)"
                ></div>
                <div
                  class="absolute -top-8 -left-8 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 border-2 border-slate-300/60 dark:border-slate-600/60 rounded-full animate-float-slow"
                  style="
                    animation-delay: 0.5s;
                    box-shadow: 0 0 15px rgba(148, 163, 184, 0.1);
                  "
                ></div>
                <div
                  class="absolute top-1/2 -right-12 w-20 h-20 sm:w-24 sm:h-24 border-2 border-orange-500/30 dark:border-orange-400/30 rounded-full animate-float-slow"
                  style="animation-delay: 1s; transform: translateY(-50%)"
                ></div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import avatarImage from '~/assets/images/moments/myavatar.jpeg'

const route = useRoute()

// État de visibilité pour les animations
const isVisible = ref(false)

// Animation anniversaire - seulement le 17 janvier
const today = new Date()
const birthDate = new Date(1999, 0, 17) // 17 janvier 1999
const isBirthday = today.getDate() === 17 && today.getMonth() === 0 // 0 = janvier
const showBirthday = ref(true) // TODO: remettre isBirthday après test

// Calcul de l'âge
const age = computed(() => {
  let years = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    years--
  }
  return years
})

// Fermer l'animation après quelques secondes
if (isBirthday) {
  setTimeout(() => {
    showBirthday.value = false
  }, 5000)
}

// Rôles avec classes
const roles = [
  { text: 'Tech Leader', class: 'text-slate-900 dark:text-white' },
  { text: 'Innovateur', class: 'text-slate-900 dark:text-white' },
  { text: 'Entrepreneur', class: 'text-slate-900 dark:text-white' },
]

// Statistiques
const stats = [
  { value: '10+', label: 'Années' },
  { value: '50+', label: 'Projets' },
  { value: '100%', label: 'Engagé' },
]

// Fonction pour naviguer vers la section réalisations
const scrollToRealisations = () => {
  if (route.path === '/') {
    // Si on est déjà sur la page d'accueil, scroll vers la section
    const element = document.querySelector('#realisations')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    // Sinon, rediriger vers la page d'accueil avec l'ancre
    navigateTo('/#realisations')
  }
}

// Fonction pour naviguer vers la section contact
const scrollToContact = () => {
  if (route.path === '/') {
    // Si on est déjà sur la page d'accueil, scroll vers la section
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    // Sinon, rediriger vers la page d'accueil avec l'ancre
    navigateTo('/#contact')
  }
}

// Animation d'apparition
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // Si on arrive sur la page avec une ancre dans l'URL, scroll vers la section
  if (route.hash) {
    setTimeout(() => {
      const element = document.querySelector(route.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }
})
</script>

<style scoped>
/* Transitions Vue améliorées */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Animation slide-in */
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

/* Animation float pour particules */
@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  33% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.6;
  }
  66% {
    transform: translateY(-10px) translateX(-10px);
    opacity: 0.4;
  }
}

.animate-float {
  animation: float ease-in-out infinite;
}

/* Animation float lente pour décorations */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

.animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}

/* Animation pulse lente */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Animation wave pour emoji */
@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-20deg);
  }
}

.animate-wave {
  animation: wave 1s ease-in-out infinite;
  display: inline-block;
  transform-origin: 70% 70%;
}

/* Animation underline */
@keyframes underline {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.animate-underline {
  animation: underline 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.5s;
}

/* Animation scroll indicator */
@keyframes scroll {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.5;
  }
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}

/* Animation anniversaire légère */
.birthday-fade-enter-active,
.birthday-fade-leave-active {
  transition: all 0.5s ease;
}
.birthday-fade-enter-from,
.birthday-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.birthday-badge {
  animation: birthday-float 2s ease-in-out infinite;
}

@keyframes birthday-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Support reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .animate-slide-in {
    opacity: 1;
  }
}
</style>
