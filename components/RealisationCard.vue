<template>
  <div class="h-full flex flex-col">
    <!-- Image avec effet moderne -->
    <div
      class="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
    >
      <img
        :src="props.realisation.main_image"
        :alt="props.realisation.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
        @error="handleImageError"
        @load="handleImageLoad"
      />
      <!-- Overlay gradient moderne -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"
      ></div>

      <!-- Badge type en haut à gauche -->
      <div
        v-if="props.realisation.type"
        class="absolute top-4 left-4 px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
      >
        {{ props.realisation.type }}
      </div>

      <!-- Fallback si l'image ne se charge pas -->
      <div
        v-if="imageError"
        class="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center"
      >
        <div class="text-center">
          <svg
            class="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Image non disponible
          </p>
        </div>
      </div>
    </div>

    <!-- Contenu avec design moderne -->
    <div class="p-8 flex-grow flex flex-col">
      <!-- Titre -->
      <h3
        class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300"
      >
        {{ props.realisation.title }}
      </h3>

      <!-- Description -->
      <p
        class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 flex-grow"
        v-html="props.realisation.description"
      ></p>

      <!-- Technologies -->
      <div
        v-if="props.realisation.technologies && props.realisation.technologies.length > 0"
        class="flex flex-wrap gap-2 mb-6"
      >
        <span
          v-for="tech in props.realisation.technologies.slice(0, 3)"
          :key="tech"
          class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
        >
          {{ tech }}
        </span>
      </div>

      <!-- CTA moderne -->
      <div
        class="inline-flex items-center gap-2 text-orange-500 dark:text-orange-400 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300 mt-auto"
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
  </div>
</template>

<script setup lang="ts">
import type { Realisation } from '~/types/realisation'

const props = defineProps({
  realisation: {
    type: Object as () => Realisation,
    required: true,
  },
})

const imageError = ref(false)
const imageLoad = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const handleImageLoad = () => {
  imageLoad.value = true
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
