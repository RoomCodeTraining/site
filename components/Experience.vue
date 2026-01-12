<template>
  <section class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-950" id="experiences">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Expériences"
        subtitle="Mes expériences professionnelles"
      />

      <!-- Contrôles de filtrage -->
      <div class="mt-8 sm:mt-12 mb-6 sm:mb-10">
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
          <!-- Filtres par année -->
          <div class="flex flex-wrap gap-2 sm:gap-3">
            <button
              @click="selectedYear = 'all'"
              :class="[
                'px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200',
                selectedYear === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              ]"
            >
              Toutes
            </button>
            <button
              v-for="year in uniqueYears"
              :key="year"
              @click="selectedYear = year"
              :class="[
                'px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200',
                selectedYear === year
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              ]"
            >
              {{ year }}
            </button>
          </div>

          <!-- Toggle vue -->
          <div class="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <button
              @click="viewMode = 'grid'"
              :class="[
                'p-2 rounded-md transition-all duration-200',
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              ]"
              aria-label="Vue grille"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              @click="viewMode = 'list'"
              :class="[
                'p-2 rounded-md transition-all duration-200',
                viewMode === 'list'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              ]"
              aria-label="Vue liste"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Contenu -->
      <div class="mt-8">
        <!-- Message si aucun résultat -->
        <div
          v-if="filteredExperiences.length === 0"
          class="text-center py-16"
        >
          <div class="text-slate-400 mb-4">
            <svg
              class="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2">
            Aucune expérience trouvée
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-500">
            Essayez de sélectionner une autre année
          </p>
        </div>

        <!-- Vue grille -->
        <div
          v-else-if="viewMode === 'grid'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <TransitionGroup name="list" tag="div" class="contents">
            <div
              v-for="(experience, index) in filteredExperiences"
              :key="experience.id"
              :style="{ animationDelay: `${index * 0.1}s` }"
              class="animate-fade-in-up"
            >
              <ExperienceCard :experience="experience" />
            </div>
          </TransitionGroup>
        </div>

        <!-- Vue liste -->
        <div v-else class="space-y-6">
          <TransitionGroup name="list" tag="div" class="space-y-6">
            <div
              v-for="(experience, index) in filteredExperiences"
              :key="experience.id"
              :style="{ animationDelay: `${index * 0.1}s` }"
              class="animate-fade-in-up"
            >
              <ExperienceCard :experience="experience" />
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = useExperience()

// État réactif
const selectedYear = ref('all')
const viewMode = ref<'grid' | 'list'>('grid')

// Propriétés calculées
const uniqueYears = computed(() => {
  const years = [...new Set(experiences.value.map((exp) => exp.year))]
  return years.sort((a, b) => parseInt(b) - parseInt(a))
})

const filteredExperiences = computed(() => {
  let filtered = experiences.value

  // Filtrer par année
  if (selectedYear.value !== 'all') {
    filtered = filtered.filter((exp) => exp.year === selectedYear.value)
  }

  return filtered
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.list-move {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}
</style>
