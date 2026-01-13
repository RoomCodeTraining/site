<template>
  <section class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-950" id="experiences">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Expériences"
        subtitle="Mes expériences professionnelles"
      />

      <!-- Timeline de progression -->
      <div class="mt-12 sm:mt-16 lg:mt-20">
        <div class="relative">
          <!-- Ligne verticale principale de la timeline -->
          <div class="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-orange-500 via-orange-400/80 to-slate-300 dark:from-orange-600 dark:via-orange-500/80 dark:to-slate-700 rounded-full timeline-line"></div>

          <!-- Groupes d'expériences par entreprise -->
          <div class="space-y-12 sm:space-y-16 lg:space-y-20">
            <div
              v-for="(group, groupIndex) in groupedExperiences"
              :key="group.company"
              class="relative experience-group"
              :style="{ animationDelay: `${groupIndex * 0.2}s` }"
            >
              <!-- Point principal de l'entreprise - positionné sur la ligne -->
              <div class="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-0 z-20 transform -translate-x-1/2">
                <!-- Cercle principal - plus petit et discret -->
                <div class="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-3 border-white dark:border-slate-950 company-marker">
                  <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <!-- En-tête de l'entreprise - bien espacé du cercle -->
              <div class="ml-12 sm:ml-16 md:ml-20 lg:ml-24 mb-6 sm:mb-8">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-display company-title">
                    {{ group.company }}
                  </h3>
                  <span
                    v-if="group.experiences.length > 1"
                    class="px-2.5 sm:px-3 py-1 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full whitespace-nowrap"
                  >
                    {{ group.experiences.length }} postes
                  </span>
                </div>
                <p class="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium">
                  {{ group.totalPeriod }}
                </p>
              </div>

              <!-- Expériences dans cette entreprise -->
              <div class="ml-12 sm:ml-16 md:ml-20 lg:ml-24 space-y-4 sm:space-y-6 md:space-y-8">
                <div
                  v-for="(experience, expIndex) in group.experiences"
                  :key="experience.id"
                  class="relative pl-6 sm:pl-8 md:pl-10 experience-item"
                  :style="{ animationDelay: `${(groupIndex * 0.15) + (expIndex * 0.1)}s` }"
                >
                  <!-- Ligne de connexion entre les postes -->
                  <div
                    v-if="expIndex < group.experiences.length - 1"
                    class="absolute left-0 top-8 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-orange-200 to-transparent dark:from-orange-700 dark:via-orange-800/50 connection-line connection-line-position"
                  ></div>

                  <!-- Point de progression -->
                  <div class="absolute left-0 top-2 z-10 connection-line-position">
                    <div
                      class="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-orange-400 dark:bg-orange-500 rounded-full border-2 sm:border-3 border-white dark:border-slate-950 shadow-lg ring-2 ring-orange-200 dark:ring-orange-800/50 position-marker"
                      :class="{
                        'ring-orange-400 dark:ring-orange-500 animate-pulse-slow': expIndex === 0 && group.experiences.length > 1
                      }"
                    ></div>
                  </div>

                  <!-- Carte d'expérience -->
                  <div
                    class="group relative bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:border-orange-500/60 dark:hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-1 experience-card"
                  >
                    <!-- Badge actuel -->
                    <div
                      v-if="expIndex === 0 && group.experiences.length > 1"
                      class="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg z-10 current-badge"
                    >
                      Actuel
                    </div>

                    <!-- En-tête de la carte -->
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div class="flex-1 min-w-0">
                        <h4 class="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display mb-2 sm:mb-3 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 position-title break-words">
                          {{ experience.post }}
                        </h4>
                        <div class="flex items-center gap-2 sm:gap-2.5">
                          <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-500 rounded-full animate-pulse flex-shrink-0"></div>
                          <span class="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-semibold">
                            {{ experience.year }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Description -->
                    <p class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed description-text">
                      {{ experience.description }}
                    </p>

                    <!-- Effet de brillance au survol -->
                    <div class="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/experience'

interface GroupedExperience {
  company: string
  experiences: Experience[]
  totalPeriod: string
}

const experiences = useExperience()

// Fonction pour extraire l'année de début d'une période
const getStartYear = (year: string): number => {
  const match = year.match(/^(\d{4})/)
  return match ? parseInt(match[1]) : 0
}

// Grouper les expériences par entreprise et les trier
const groupedExperiences = computed<GroupedExperience[]>(() => {
  // Trier toutes les expériences par année de début (plus récentes en premier)
  const sorted = [...experiences.value].sort((a, b) => {
    return getStartYear(b.year) - getStartYear(a.year)
  })

  // Grouper par entreprise
  const groups = new Map<string, Experience[]>()
  
  sorted.forEach(exp => {
    const company = exp.company
    if (!groups.has(company)) {
      groups.set(company, [])
    }
    groups.get(company)!.push(exp)
  })

  // Convertir en tableau et trier les expériences dans chaque groupe
  const result = Array.from(groups.entries()).map(([company, exps]) => {
    // Trier les expériences dans le groupe (plus récentes en premier)
    const sortedExps = exps.sort((a, b) => {
      return getStartYear(b.year) - getStartYear(a.year)
    })

    // Calculer la période totale
    const years = sortedExps.map(exp => {
      const startMatch = exp.year.match(/^(\d{4})/)
      const endMatch = exp.year.match(/(\d{4})/)
      return {
        start: startMatch ? parseInt(startMatch[1]) : 0,
        end: endMatch && endMatch[1] !== startMatch?.[1] ? parseInt(endMatch[1]) : null
      }
    })

    const earliestYear = Math.min(...years.map(y => y.start))
    const latestYear = sortedExps[0].year.includes('maintenant') || sortedExps[0].year.includes('actuel')
      ? 'maintenant'
      : Math.max(...years.map(y => y.end || y.start))

    const totalPeriod = latestYear === 'maintenant' 
      ? `${earliestYear} - maintenant`
      : `${earliestYear} - ${latestYear}`

    return {
      company,
      experiences: sortedExps,
      totalPeriod
    }
  })

  // Trier les groupes par année de début (plus récentes en premier)
  return result.sort((a, b) => {
    const aYear = getStartYear(a.experiences[0].year)
    const bYear = getStartYear(b.experiences[0].year)
    return bYear - aYear
  })
})
</script>

<style scoped>
/* Styles pour les bordures */
.border-3 {
  border-width: 3px;
}

/* Animation de shimmer pour la ligne de timeline */
@keyframes shimmer {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(400%);
    opacity: 0;
  }
}

.animate-shimmer {
  animation: shimmer 3s ease-in-out infinite;
}

/* Animation de ping lente pour les marqueurs */
@keyframes ping-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.2;
  }
}

.animate-ping-slow {
  animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Animation de pulse lente */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Animations d'entrée pour les groupes */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.experience-group {
  animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.experience-item {
  animation: fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

/* Effet sur la ligne de timeline */
.timeline-line {
  filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.3));
}

/* Amélioration des marqueurs */
.company-marker {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.company-marker:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(249, 115, 22, 0.4);
}

.position-marker {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-card:hover .position-marker {
  transform: scale(1.15);
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
}

/* Amélioration des titres */
.company-title {
  background: linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .company-title {
  background: linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(226, 232, 240) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.position-title {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Amélioration de la description */
.description-text {
  transition: color 0.4s ease;
}

.experience-card:hover .description-text {
  color: rgb(71, 85, 105);
}

.dark .experience-card:hover .description-text {
  color: rgb(203, 213, 225);
}

/* Badge actuel amélioré */
.current-badge {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-card:hover .current-badge {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
}

/* Ligne de connexion avec animation */
.connection-line {
  transition: all 0.5s ease;
}

.experience-item:hover .connection-line {
  background: linear-gradient(to bottom, 
    rgb(251, 146, 60) 0%, 
    rgb(249, 115, 22) 50%, 
    rgb(234, 88, 12) 100%);
  box-shadow: 0 0 10px rgba(249, 115, 22, 0.4);
}

/* Position responsive pour les lignes de connexion */
.connection-line-position {
  left: -1.5rem;
}

@media (min-width: 640px) {
  .connection-line-position {
    left: -2rem;
  }
}

@media (min-width: 768px) {
  .connection-line-position {
    left: -2.5rem;
  }
}

/* Responsive improvements */
@media (max-width: 640px) {
  .experience-group {
    margin-left: 0;
  }
  
  .experience-item {
    padding-left: 1.5rem;
  }
  
  .experience-card {
    overflow-x: hidden;
  }
}

/* Amélioration de l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  .animate-shimmer,
  .animate-ping-slow,
  .animate-pulse-slow,
  .experience-group,
  .experience-item {
    animation: none;
  }
}
</style>
