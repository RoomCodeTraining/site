<template>
  <div
    class="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
  >
    <!-- En-tête -->
    <div class="mb-5">
      <div class="flex items-start justify-between mb-3">
        <h3
          class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight font-display group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300"
        >
          {{ props.experience.post }}
        </h3>
        <!-- Badge année -->
        <span
          class="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full flex-shrink-0 ml-3"
        >
          {{ props.experience.year }}
        </span>
      </div>

      <!-- Nom de l'entreprise -->
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
        <span
          class="font-semibold text-slate-700 dark:text-slate-300 text-sm"
        >
          {{ props.experience.company }}
        </span>
      </div>
    </div>

    <!-- Description -->
    <p
      class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow"
    >
      {{ props.experience.description }}
    </p>

    <!-- Footer -->
    <div class="pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
      <div class="flex items-center justify-between">
        <span class="text-xs text-slate-500 dark:text-slate-500"
          >Expérience validée</span
        >
        <div
          class="flex items-center gap-1 text-orange-500 dark:text-orange-400 text-xs font-semibold group-hover:gap-2 transition-all duration-200"
        >
          <span>Détails</span>
          <svg
            class="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Effet de brillance au hover -->
    <div
      class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/experience'

const props = defineProps({
  experience: {
    type: Object as () => Experience,
    required: true,
  },
})
</script>

<style scoped>
/* Styles propres et minimalistes */
</style>
