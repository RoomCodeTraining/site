<template>
  <Card class="h-full flex flex-col">
    <template #header>
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-3">
            <h3
              class="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display"
            >
              {{ name }}
            </h3>
            <Badge :tone="criticalityTone">
              {{ criticality }}
            </Badge>
          </div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {{ description }}
          </p>
        </div>
        <div
          class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200"
        >
          <slot name="icon">
            <span class="text-lg">⛭</span>
          </slot>
        </div>
      </div>
    </template>

    <div class="mt-auto grid grid-cols-2 gap-4 pt-5 border-t border-slate-200 dark:border-slate-800">
      <div>
        <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Uptime
        </p>
        <p class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
          {{ uptime }}
        </p>
      </div>
      <div>
        <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Volume
        </p>
        <p class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
          {{ volume }}
        </p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue'
import Badge from '~/components/ui/Badge.vue'

const props = defineProps<{
  name: string
  description: string
  criticality: 'Critical' | 'High' | 'Medium' | 'Low'
  uptime: string
  volume: string
}>()

const criticalityTone = computed(() => {
  if (props.criticality === 'Critical') return 'danger'
  if (props.criticality === 'High') return 'warning'
  if (props.criticality === 'Medium') return 'brand'
  return 'neutral'
})
</script>

