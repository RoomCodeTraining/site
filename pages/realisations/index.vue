<template>
  <Header />
  <main class="pt-20">
    <Section
      title="Projects"
      subtitle="Une vue d’ensemble de mes projets, présentés comme des case studies orientées produit & production."
      eyebrow="Recap"
      container="wide"
    >
      <div class="flex flex-col lg:flex-row gap-4 lg:items-end lg:justify-between">
        <div class="max-w-2xl text-slate-600 dark:text-slate-400 text-sm">
          <p>
            Objectif: montrer le contexte, les décisions, et les résultats. Chaque projet a sa page détaillée (problème → solution → bénéfices/KPIs).
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <div class="relative">
            <input
              v-model="query"
              type="text"
              placeholder="Rechercher un projet…"
              class="h-11 w-full sm:w-[280px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 pr-10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              ⌕
            </span>
          </div>

          <select
            v-model="category"
            class="h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          >
            <option value="all">Toutes catégories</option>
            <option v-for="c in categories" :key="c" :value="c">
              {{ c }}
            </option>
          </select>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <Badge
          v-for="t in topTags"
          :key="t"
          :tone="selectedTag === t ? 'brand' : 'neutral'"
          size="md"
        >
          <button
            class="leading-none"
            type="button"
            @click="selectedTag = selectedTag === t ? null : t"
          >
            {{ t }}
          </button>
        </Badge>
        <button
          v-if="selectedTag || query || category !== 'all'"
          type="button"
          class="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          @click="resetFilters"
        >
          Réinitialiser
        </button>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <NuxtLink
          v-for="p in filtered"
          :key="p.slug"
          :to="`/realisations/${p.slug}`"
          class="group block h-full relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
        >
          <RealisationCard :realisation="p" />

          <div
            class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>
        </NuxtLink>
      </div>

      <div v-if="filtered.length === 0" class="mt-12">
        <Card variant="subtle">
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Aucun projet ne correspond à tes filtres. Essaie de réinitialiser.
          </p>
        </Card>
      </div>
    </Section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import Section from '~/components/ui/Section.vue'
import Card from '~/components/ui/Card.vue'
import Badge from '~/components/ui/Badge.vue'
import RealisationCard from '~/components/RealisationCard.vue'

import { realisationsByCategory, allRealisations } from '~/data/realisations'
import type { Realisation } from '~/types/realisation'

type Project = Realisation & { category: string }

const categories = Object.keys(realisationsByCategory)

const projects: Project[] = categories.flatMap(cat =>
  (realisationsByCategory as Record<string, Realisation[]>)[cat].map(p => ({
    ...p,
    category: cat,
  }))
)

const query = ref('')
const category = ref<'all' | string>('all')
const selectedTag = ref<string | null>(null)

const plainText = (html: string) => html?.replace(/<[^>]+>/g, '') ?? ''

const topTags = computed(() => {
  const freq = new Map<string, number>()
  for (const p of allRealisations) {
    for (const t of p.technologies || []) {
      freq.set(t, (freq.get(t) ?? 0) + 1)
    }
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([t]) => t)
})

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return projects.filter(p => {
    if (category.value !== 'all' && p.category !== category.value) return false
    if (selectedTag.value && !(p.technologies || []).includes(selectedTag.value))
      return false
    if (!q) return true
    const hay = `${p.title} ${plainText(p.description)} ${(p.technologies || []).join(' ')} ${p.type}`.toLowerCase()
    return hay.includes(q)
  })
})

const resetFilters = () => {
  query.value = ''
  category.value = 'all'
  selectedTag.value = null
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

