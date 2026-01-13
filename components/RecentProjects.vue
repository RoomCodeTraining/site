<template>
  <section class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <!-- Header -->
        <SectionHeader
          title="Projets Récents"
          subtitle="Quelques exemples de solutions pratiques et utiles que j'ai développées"
        />

        <!-- Grille des projets récents -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <div
            v-for="(project, index) in recentProjects"
            :key="project.id"
            class="group"
            :style="{ '--index': index }"
          >
            <NuxtLink
              :to="`/realisations/${project.slug}`"
              class="block h-full relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl"
            >
              <!-- Image avec effet moderne -->
              <div
                class="relative h-48 sm:h-64 md:h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
              >
                <img
                  :src="project.main_image"
                  :alt="project.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <!-- Overlay gradient moderne -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"
                ></div>

                <!-- Badge type en haut à gauche -->
                <div
                  v-if="project.type"
                  class="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                >
                  {{ project.type }}
                </div>
              </div>

              <!-- Contenu avec design moderne -->
              <div class="p-6 sm:p-8">
                <!-- Titre -->
                <h3
                  class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 font-display group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>

                <!-- Description -->
                <p
                  class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3"
                >
                  {{ project.description }}
                </p>

                <!-- Technologies -->
                <div
                  v-if="project.technologies && project.technologies.length > 0"
                  class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6"
                >
                  <span
                    v-for="tech in project.technologies.slice(0, 3)"
                    :key="tech"
                    class="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- CTA moderne -->
                <div
                  class="inline-flex items-center gap-2 text-orange-500 dark:text-orange-400 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300"
                >
                  <span>Voir le projet</span>
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
                </div>
              </div>

              <!-- Effet de brillance au hover -->
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              ></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { recentProjects } from '~/data/realisations'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped>
.grid > div {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--index) * 0.15s);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
