<template>
  <section class="py-12 sm:py-16 lg:py-24 relative bg-white dark:bg-slate-950" id="cursus">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Parcours Académique"
        subtitle="Mon évolution professionnelle et mes objectifs"
      />

      <div class="mt-8 sm:mt-12 md:mt-16 lg:mt-24">
        <!-- Timeline verticale moderne -->
        <div class="relative">
          <!-- Ligne verticale de la timeline -->
          <div
            class="absolute left-3 sm:left-4 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform lg:-translate-x-1/2"
          ></div>

          <!-- Items de la timeline -->
          <div class="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
            <div
              v-for="(item, index) in cursusItems"
              :key="item.id"
              class="relative"
              :class="index % 2 === 0 ? 'lg:pr-1/2 lg:pr-8' : 'lg:pl-1/2 lg:pl-8 lg:flex lg:justify-end'"
            >
              <!-- Point sur la timeline -->
              <div
                class="absolute left-3 sm:left-4 md:left-8 lg:left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-slate-900 dark:bg-white rounded-full border-2 sm:border-3 md:border-4 border-white dark:border-slate-950 transform -translate-x-1/2 z-10 shadow-lg group-hover:scale-125 transition-transform duration-200"
              ></div>

              <!-- Carte -->
              <div
                class="ml-8 sm:ml-12 md:ml-16 lg:ml-0 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] lg:w-[calc(50%-3rem)] group cursor-pointer"
                @mouseenter="hoveredIndex = index"
                @mouseleave="hoveredIndex = null"
              >
                <div
                  class="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-sm hover:shadow-xl hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <!-- En-tête avec période et icône -->
                  <div class="flex items-start justify-between mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-3">
                    <div class="flex-1 min-w-0 pr-2">
                      <div
                        class="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 bg-orange-500 text-white text-xs font-bold rounded-full mb-1.5 sm:mb-2 md:mb-3"
                      >
                        {{ item.period }}
                      </div>
                      <h3
                        class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 font-display break-words"
                      >
                        {{ item.title }}
                      </h3>
                      <p
                        class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium break-words"
                      >
                        {{ item.school }}
                      </p>
                    </div>
                    <div
                      class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-14 bg-slate-100 dark:bg-slate-800 rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-lg md:text-2xl flex-shrink-0"
                    >
                      {{ item.icon }}
                    </div>
                  </div>

                  <!-- Description -->
                  <p
                    class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-5 break-words"
                  >
                    {{ item.description }}
                  </p>

                  <!-- Compétences -->
                  <div
                    v-if="item.skills && item.skills.length > 0"
                    class="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4"
                  >
                    <span
                      v-for="skill in item.skills"
                      :key="skill"
                      class="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md sm:rounded-lg break-words"
                    >
                      {{ skill }}
                    </span>
                  </div>

                  <!-- Statut -->
                  <div class="flex items-center gap-2">
                    <div
                      class="w-2 h-2 rounded-full"
                      :class="
                        item.status === 'En cours'
                          ? 'bg-orange-500 animate-pulse'
                          : item.status === 'En pause'
                          ? 'bg-slate-400'
                          : 'bg-green-500'
                      "
                    ></div>
                    <span
                      class="text-xs font-medium"
                      :class="
                        item.status === 'En cours'
                          ? 'text-orange-600 dark:text-orange-400'
                          : item.status === 'En pause'
                          ? 'text-slate-600 dark:text-slate-400'
                          : 'text-green-600 dark:text-green-400'
                      "
                    >
                      {{ item.status }}
                    </span>
                  </div>

                  <!-- Effet de brillance au hover -->
                  <div
                    class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  ></div>
                </div>

                <!-- Ligne de connexion vers la timeline -->
                <div
                  class="absolute left-3 sm:left-4 md:left-8 lg:left-1/2 top-3 sm:top-4 md:top-6 w-4 sm:w-6 md:w-8 lg:w-16 h-0.5 bg-slate-200 dark:bg-slate-800 transform lg:-translate-x-1/2"
                  :class="index % 2 === 0 ? 'lg:translate-x-0' : 'lg:translate-x-full'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'

const hoveredIndex = ref<number | null>(null)

const cursusItems = [
  {
    id: 1,
    period: '2023 - 2026',
    title: 'Master en Management Digital',
    school: 'ESATIC - École Supérieure Africaine des TIC',
    description:
      'Formation avancée en transformation digitale et management des systèmes d\'information pour devenir un leader technologique. Reprise prévue en septembre 2026.',
    icon: '🎯',
    skills: [
      'Management',
      'Transformation Digitale',
      'Systèmes d\'Information',
      'Leadership',
    ],
    status: 'En pause',
  },
  {
    id: 2,
    period: '2020 - 2023',
    title: 'Licence MIAGE',
    school: 'Université Polytechnique de Bingerville',
    description:
      'Formation en Méthodes Informatiques Appliquées à la Gestion des Entreprises avec réalisation du projet Papillon Routier.',
    icon: '💻',
    skills: [
      'Informatique',
      'Gestion',
      'Projet Papillon Routier',
      'Développement',
    ],
    status: 'Obtenu',
  },
  {
    id: 3,
    period: '2020',
    title: 'Baccalauréat Série D',
    school: 'Lycée Classique d\'Abidjan',
    description:
      'Baccalauréat Scientifique obtenu avec mention Assez Bien, fondation solide pour mes études supérieures.',
    icon: '🏆',
    skills: ['Sciences', 'Mention Assez Bien', 'Fondations'],
    status: 'Obtenu',
  },
]
</script>

<style scoped>
/* Animation d'apparition */
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

.space-y-6 > div,
.space-y-8 > div,
.space-y-12 > div,
.space-y-16 > div {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.space-y-6 > div:nth-child(1),
.space-y-8 > div:nth-child(1),
.space-y-12 > div:nth-child(1),
.space-y-16 > div:nth-child(1) {
  animation-delay: 0.1s;
}

.space-y-6 > div:nth-child(2),
.space-y-8 > div:nth-child(2),
.space-y-12 > div:nth-child(2),
.space-y-16 > div:nth-child(2) {
  animation-delay: 0.2s;
}

.space-y-6 > div:nth-child(3),
.space-y-8 > div:nth-child(3),
.space-y-12 > div:nth-child(3),
.space-y-16 > div:nth-child(3) {
  animation-delay: 0.3s;
}

/* Responsive - Assurer que les cartes prennent toute la largeur sur mobile */
@media (max-width: 1024px) {
  .lg\:pr-1\/2,
  .lg\:pl-1\/2 {
    padding-right: 0;
    padding-left: 0;
  }

  .lg\:w-\[calc\(50\%-3rem\)\] {
    width: 100% !important;
  }

  .lg\:ml-0 {
    margin-left: 0 !important;
  }

  .lg\:flex {
    display: block;
  }
}

/* Mobile très petit */
@media (max-width: 640px) {
  .w-\[calc\(100\%-2rem\)\] {
    width: calc(100% - 2rem);
  }
}
</style>
