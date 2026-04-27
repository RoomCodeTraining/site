<template>
  <div class="h-full flex flex-col">
    <div
      class="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
    >
      <div class="aspect-[16/10]">
        <img
          :src="props.realisation.main_image"
          :alt="props.realisation.title"
          class="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          loading="lazy"
          @error="handleImageError"
          @load="handleImageLoad"
        />
      </div>

      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent"></div>

      <div class="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
        <div
          v-if="props.realisation.type"
          class="px-3 py-1.5 bg-orange-500 text-white text-[11px] font-bold rounded-full shadow-sm"
        >
          {{ props.realisation.type }}
        </div>

        <div
          v-if="props.realisation.kpis?.length"
          class="px-3 py-1.5 bg-white/10 text-white text-[11px] font-semibold rounded-full border border-white/15 backdrop-blur"
        >
          {{ props.realisation.kpis.length }} KPI
        </div>
      </div>

      <div
        v-if="imageError"
        class="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center"
      >
        <div class="text-center">
          <svg
            class="w-14 h-14 text-slate-400 dark:text-slate-500 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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

    <div class="p-6 sm:p-7 flex-grow flex flex-col">
      <h3
        class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
      >
        {{ props.realisation.title }}
      </h3>

      <p
        class="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3"
        v-html="props.realisation.description"
      ></p>

      <div
        v-if="props.realisation.technologies && props.realisation.technologies.length > 0"
        class="mt-5 flex flex-wrap gap-2"
      >
        <span
          v-for="tech in props.realisation.technologies.slice(0, 4)"
          :key="tech"
          class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mt-auto pt-5">
        <div class="h-px bg-slate-200 dark:bg-slate-800"></div>
        <div class="pt-4 flex items-center justify-between">
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Case study
          </p>
          <p class="text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-0.5 transition-transform duration-300">
            Ouvrir →
          </p>
        </div>
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
