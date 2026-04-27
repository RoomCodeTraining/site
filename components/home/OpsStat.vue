<template>
  <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
    <div class="flex items-center justify-between gap-3">
      <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {{ label }}
      </p>
      <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        <slot name="icon" />
      </div>
    </div>

    <div class="mt-4 flex items-end justify-between gap-4">
      <p class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
        {{ value }}
      </p>
      <Badge v-if="trend" :tone="trendTone" size="md">
        {{ trend }}
      </Badge>
    </div>

    <p v-if="hint" class="mt-2 text-xs text-slate-500 dark:text-slate-400">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'

const props = defineProps<{
  label: string
  value: string
  trend?: string
  hint?: string
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'brand'
}>()

const trendTone = computed(() => props.tone ?? 'neutral')
</script>

