<template>
  <article class="h-full flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 group-hover:border-orange-500/45 group-hover:shadow-lg group-hover:shadow-orange-500/5 group-hover:-translate-y-0.5">
    <div class="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img
        :src="realisation.main_image"
        :alt="realisation.title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"
        aria-hidden="true"
      />
      <span
        v-if="realisation.type"
        class="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide rounded-md bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 shadow-sm"
      >
        {{ realisation.type }}
      </span>
    </div>

    <div class="flex flex-col flex-grow p-5 sm:p-6">
      <h3
        class="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
      >
        {{ realisation.title }}
      </h3>

      <p
        v-if="excerpt"
        class="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed"
      >
        {{ excerpt }}
      </p>

      <div
        v-if="realisation.technologies?.length"
        class="mt-4 flex flex-wrap gap-1.5"
      >
        <span
          v-for="tech in realisation.technologies.slice(0, 3)"
          :key="tech"
          class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mt-auto pt-5 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
        <span class="text-xs text-slate-500 dark:text-slate-400">
          Case study
        </span>
        <span
          class="text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-0.5 transition-transform"
        >
          Ouvrir →
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Realisation } from '~/types/realisation'

const props = defineProps<{
  realisation: Realisation
}>()

const excerpt = computed(() => {
  const raw = props.realisation.description?.replace(/<[^>]+>/g, '') ?? ''
  return raw.trim().slice(0, 120) + (raw.length > 120 ? '…' : '')
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
