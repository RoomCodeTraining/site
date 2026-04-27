<template>
  <Card class="h-full flex flex-col">
    <template #header>
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
            {{ title }}
          </h3>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {{ summary }}
          </p>
        </div>
        <Badge tone="brand" size="md">{{ domain }}</Badge>
      </div>
    </template>

    <div class="space-y-4">
      <div>
        <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
          Problème
        </p>
        <p class="text-sm text-slate-700 dark:text-slate-200">
          {{ problem }}
        </p>
      </div>

      <div>
        <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
          Solution
        </p>
        <p class="text-sm text-slate-700 dark:text-slate-200">
          {{ solution }}
        </p>
      </div>

      <div>
        <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          Stack / Ops
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(item, idx) in stack"
            :key="idx"
            class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
        <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
          Résultats
        </p>
        <p class="text-sm font-semibold text-slate-900 dark:text-white">
          {{ results }}
        </p>
      </div>
    </div>

    <div v-if="ctaLabel && ctaHref" class="mt-6">
      <Button variant="ghost" :href="ctaHref" target="_blank" rel="noreferrer">
        {{ ctaLabel }}
        <template #right>
          <span aria-hidden="true">→</span>
        </template>
      </Button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue'
import Badge from '~/components/ui/Badge.vue'
import Button from '~/components/ui/Button.vue'

defineProps<{
  title: string
  domain: string
  summary: string
  problem: string
  solution: string
  stack: string[]
  results: string
  ctaLabel?: string
  ctaHref?: string
}>()
</script>

